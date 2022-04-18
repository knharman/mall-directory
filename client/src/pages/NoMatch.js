import React from 'react';
import { Redirect } from 'react-router-dom';

const NoMatch = () => {
  return (
      <>
    {/* <div>
      Oops, we couldn't find that page.
    </div> */}
    <Redirect to="/" />
    </>
  );
};

export default NoMatch;