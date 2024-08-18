import React, { useEffect } from 'react';

function Counter() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.counter12.com/ad.js?id=7CAD7YW7b46Yaw3a';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div align="center">
      <a href="https://www.counter12.com">
        <img src="https://www.counter12.com/img-7CAD7YW7b46Yaw3a-3.gif" border="0" alt="contador free" />
      </a>
    </div>
  );
}

export default Counter;