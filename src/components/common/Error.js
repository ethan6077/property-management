import React from 'react';
import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.error}>
      <div>
        <span>FACE</span>
        <span>Uh-oh... it looks like some things haven't loaded correctly.</span>
      </div>
      <span>REFRESH BUTTON</span>
    </div>
  );
}

export default Error;
