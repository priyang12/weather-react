import { useState } from 'react';

const useToogle = (initialState) => {
  const [toogle, settoogle] = useState(initialState);
  return [
    toogle,
    () => {
      settoogle((cu) => !cu);
    },
  ];
};

export default useToogle;
