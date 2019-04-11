'use strict';

{
  // object

  const o = {
    a: 1,
    b: 2,
  };
  console.log(Object.keys(0));
  console.log(Object.values(0));
  console.log(Object.entries(0));

  Object.keys(0).forEach(key => {
    console.log(`${key}: ${o[key]}`);

  });
}