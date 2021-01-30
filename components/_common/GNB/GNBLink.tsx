import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as $ from './GNBView';
import SpotSvg from '~/components/_assets/gnb/spot.svg';
import CourseSvg from '~/components/_assets/gnb/course.svg';
import SettingSvg from '~/components/_assets/gnb/setting.svg';

type Props = {
  href: string;
};

const map = {
  '/': {
    Icon: SpotSvg,
    label: 'Spot',
  },
  '/course': {
    Icon: CourseSvg,
    label: 'Course',
  },
  '/setting': {
    Icon: SettingSvg,
    label: 'Setting',
  },
};

const GNBLink: React.FC<Props> = ({ href }) => {
  const { pathname } = useRouter();
  const { Icon, label } = map[href];
  const isSelected: boolean = href === pathname;
  const IconImage = $.IconImg({ Icon, isSelected });

  return (
    <Link href={href}>
      <$.GNBLink>
        <IconImage />
        <$.IconText isSelected={isSelected}>{label}</$.IconText>
      </$.GNBLink>
    </Link>
  );
};

export default GNBLink;
