'use strict';

{
  //クラス

  // const player = ['tacuchi', 32]

  // const player = {
  //   name: 'taguchi',
  //   score: 32,
  // };

  // const player = {
  //   name: 'taguchi',
  //   score: 32,
  // };

  class Player {
    constructor(name, score) { //メソッド
      this.name = name;
      this.score = score
    }
  }

  showInfo() {
    console.log('name: ${htis.name}' score: ${this.score});


  }

  const taguchi = new Player('taguchi', 32);
  const fkoji = new Player('fkoji, 44');

  console.log(taguchi, name);
  console.log(fkoji, name);
  

}