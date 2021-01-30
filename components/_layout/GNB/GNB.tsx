import React from 'react';
import * as $ from './GNBView';
import GNBLink from './GNBLink';

const GNB: React.FC = () => {
  return (
    <$.GNB>
      <$.GNBInner>
        <GNBLink href="/" />
        <GNBLink href="/course" />
        <GNBLink href="/setting" />
      </$.GNBInner>
    </$.GNB>
  );
};

export default GNB;
