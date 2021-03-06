import React from 'react';

import { ProgressBar, ProgressText } from '../molecules/';

const ProgressSection = ({ isFirstFill, isSecondFill, isThirdFill }) => {
  return (
    <section className="ProgressSection">
      <ProgressBar
        isFirstFill={isFirstFill}
        isSecondFill={isSecondFill}
        isThirdFill={isThirdFill}
      />
      <ProgressText />
    </section>
  );
};

export default ProgressSection;
