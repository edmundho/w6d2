
class HanoiView {
  constructor(game, $rootEl) {
    this.game = game;
    this.el = $rootEl;
    this.setupTowers();
    this.fromTower = false;
    this.el.on("click", "ul", (event) => {

      this.clickTower.bind(this);
    });
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      const tower = $('<ul class="pile"></ul>');
      tower.attr("id", `pile${i}`);
      if (i === 0) {
        for (let j = 0; j < 3; j++) {
          const disc = $('<li class="disc"></li>');
          disc.attr("id", `disc${j}`);
          tower.append(disc);
        }
      }
      this.el.append(tower);
    }
  }

  render () {
    
  }

  clickTower(event) {
    if (!this.fromTower){
      this.fromTower = event.currentTarget.id;
    }else {
      this.game.move(this.fromTower,event.currentTarget.id);
    }
  }

}


module.exports = HanoiView;
