import React from 'react';
import Head from 'next/head';
import GNB from '~/components/_layout/GNB';
import Wrap from '~/components/_layout/Wrap';
import Main from '~/components/_layout/Main';
import CourseTab from '~/components/Course/Tab';
import CourseWrap from '~/components/Course/Wrap';
import { addApolloState, initializeApollo } from '~/lib/apollo/client';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const CoursePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>데동여지도 Deji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrap>
        <GNB />
        <Main>
          <CourseTab />
          <CourseWrap />
        </Main>
      </Wrap>
    </>
  );
};

export default CoursePage;
