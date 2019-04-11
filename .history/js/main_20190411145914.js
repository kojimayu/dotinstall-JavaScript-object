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

  const taguchi = new Player('taguchi', 32);
  const fkoji = new Player('fkoji, 44');
  
}