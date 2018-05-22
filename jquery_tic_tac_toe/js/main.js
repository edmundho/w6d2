const View = require("./ttt-view.js");// require appropriate file
const Game = require("./game.js");// require appropriate file

window.View = View;
window.Game = Game;

$( () => {
  const $el = $('.ttt');
  const game = new Game();
  const view = new View(game, $el);
});
