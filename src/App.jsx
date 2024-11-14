import React, { useState } from 'react';
import JamClass from './components/JamClass';

const App = () => {
  const warna = 'merah';

  return (
    <>
      <JamClass warna={warna} />
    </>
  );
};
export default App;