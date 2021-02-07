import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as $ from './GNBView';
import SpotIcon from '~/components/_assets/gnb/SpotIcon';
import CourseIcon from '~/components/_assets/gnb/CourseIcon';
import SettingIcon from '~/components/_assets/gnb/SettingIcon';
import { getPathSegment } from '~/util';

type Props = {
  href: string;
};

const map = {
  '/': {
    Icon: $.IconImg(SpotIcon),
    label: 'Spot',
  },
  '/course': {
    Icon: $.IconImg(CourseIcon),
    label: 'Course',
  },
  '/setting': {
    Icon: $.IconImg(SettingIcon),
    label: 'Setting',
  },
};

const GNBLink: React.FC<Props> = ({ href }) => {
  const { pathname } = useRouter();
  const { Icon, label } = map[href];

  const firstPath = pathname ? `/${getPathSegment(pathname, 0)}` : '/';
  const isSelected: boolean = href === firstPath;

  return (
    <Link href={href}>
      <$.GNBLink>
        <Icon isSelected={isSelected} />
        <$.IconText isSelected={isSelected}>{label}</$.IconText>
      </$.GNBLink>
    </Link>
  );
};

export default GNBLink;
