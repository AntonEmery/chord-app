import React, { useState, Fragment } from 'react';

 function ToggleContent ({ toggle, content }) {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <Fragment>
      {toggle(show)}
      {isShown && content(hide)}
    </Fragment>
  );
};

export default ToggleContent;