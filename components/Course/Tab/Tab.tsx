import React from 'react';
import Link from 'next/link';
import * as $ from './TabView';
import { useRouter } from 'next/router';
import { getPathSegment } from '~/util';

const Tab: React.FC = () => {
  const { pathname } = useRouter();
  const secondPath = getPathSegment(pathname, 1);

  return (
    <$.Tab>
      <$.TabList>
        <$.TabItem>
          <Link href="/course/history">
            <$.TabLink aria-selected={secondPath === 'history'}>
              코스 히스토리
            </$.TabLink>
          </Link>
        </$.TabItem>
        <$.TabItem>
          <Link href="/course/editor">
            <$.TabLink aria-selected={secondPath === 'editor'}>
              코스 만들기
            </$.TabLink>
          </Link>
        </$.TabItem>
      </$.TabList>
    </$.Tab>
  );
};

export default Tab;
