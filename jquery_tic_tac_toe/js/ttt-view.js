class View {
  constructor(game, $el) {
    this.el = $el;
    this.game = game;
    this.setupBoard();

    this.bindEvents();

  }

  bindEvents() {
      $('li').on("click", (event) =>{
        const currentTarget = event.currentTarget;
        $(currentTarget).addClass("clicked");
        // this.game.playMove(pos);
        // this.makeMove($(currentTarget));
        this.makeMove($(currentTarget));
    });
  }

  makeMove($square) {
    const x = $square.data('row');
    const y = $square.data('column');
    const pos = [x, y];
    const mark = this.game.currentPlayer;
    if (this.game.board.isEmptyPos(pos)) {
      this.game.playMove(pos);
    } else {
      alert("bad");
    }
    $square.text(mark);

    let winner = this.game.winner();
    if (winner) {
      this.game.swapTurn();
      const xyz = $(`<h1>winner is ${this.game.winner()}</h1>`);
      this.el.append(xyz);
      $('li').off("click");
    }
  }

  setupBoard() {
    const grid = $('<ul class="grid"></ul>');
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        const singleCell = $('<li></li>');
        singleCell.data('row',i);
        singleCell.data('column',j);
        grid.append(singleCell);
      }
    }
    this.el.append(grid);
  }
}

module.exports = View;
