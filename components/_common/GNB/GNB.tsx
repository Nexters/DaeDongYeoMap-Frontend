import React from 'react';
import * as $ from './GNBView';
import GNBLink from './GNBLink';

const GNB: React.FC = () => {
  return (
    <$.GNB>
      <GNBLink href="/" />
      <GNBLink href="/course" />
      <GNBLink href="/setting" />
    </$.GNB>
  );
};

export default GNB;
