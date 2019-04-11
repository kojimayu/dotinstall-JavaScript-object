'use strict';

'use strict'

{

  const showTime = () => {
    console.log(new Date());
    setTimeout(showTime, 1000);

  };

  showTime();
}