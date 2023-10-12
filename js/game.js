const Game = {
  ctx: undefined,
  canvasW: undefined,
  canvasH: undefined,
  fps: 60,
  keys: {
    LEFT: "KeyO",
    RIGHT: "KeyP",
  },
  init: function () {
    const canvas = document.querySelector("canvas");
    this.ctx = canvas.getContext("2d");

    this.canvasW = canvas.width;
    this.canvasH = canvas.height;

    this.reset();
  },

  reset: function () {
    console.log("RESET");

    this.background = new Background(this.ctx, this.canvasW, this.canvasH);
    this.player = new Player(this.ctx, this.canvasW, this.canvasH);

    this.background.draw();
    this.player.draw();

    this.start();
  },

  start: function () {
    this.intervalId = setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);

      this.background.draw();
      this.background.move();

      this.player.draw(frameCounter);
      this.player.move();
    }, 1000 / this.fps);
  },
};
