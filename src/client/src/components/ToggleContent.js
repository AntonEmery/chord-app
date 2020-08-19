import React, { useState, Fragment } from 'react';

function ToggleContent ({ toggle, content }) {
  const [isShown, setIsShown] = useState(false);
  const showFn = () => setIsShown(true);
  const hideFn = () => setIsShown(false);

  return (
    <Fragment>
      {toggle(showFn)}
      {isShown && content(hideFn)}
    </Fragment>
  );
};

export default ToggleContent;