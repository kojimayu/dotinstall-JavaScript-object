'use strict';

{
  // 配列
  const a = [1, 5, 10, 100];

  const b = [];

  a.forEach(item => {
    b.push(item * 2);
  });

  console.log(b);

}