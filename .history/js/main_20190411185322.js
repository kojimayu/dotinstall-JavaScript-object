'use strict';

{
  // Date

  const d = new Date(2018, 11);

  d.setHours(10, 20, 30);
  d.setDate(32);
  d.setDate(d.getDate() + 3);


  console.log(d);

}