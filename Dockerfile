FROM node:14.15.4-alpine3.11

WORKDIR /usr/daedong
RUN npm install --global pm2
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
COPY ./ ./

RUN yarn build
EXPOSE 3000

# node:14.15.4-alpine3.11 에 등록된 기본 유저
USER node

CMD [ "pm2-runtime", "npm", "--", "start" ]
