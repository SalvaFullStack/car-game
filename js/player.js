class Player {
  constructor(ctx, canvasW, canvasH) {
    this.ctx = ctx;
    this.canvasW = canvasW;
    this.canvasH = canvasH;

    this.img = new Image();
    this.img.src = "../assets/ambulance.png";

    // Control de animación del sprite
    this.img.frameIndex = 0;
    this.img.frames = 3;

    this.x = canvasW * 0.08;
    this.y = canvasH * 0.7;

    this.vx = 1;

    this.w = 200;
    this.h = 200;

    this.actions = {
      moveLeft: false,
      moveRight: false,
    };

    this.keys = {
      MOVE_LEFT: "ArrowLeft",
      MOVE_RIGHT: "ArrowRight",
    };

    this.setControls();
  }

  setControls() {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case this.keys.MOVE_LEFT:
          this.actions.moveLeft = true;
          break;

        case this.keys.MOVE_RIGHT:
          this.actions.moveRight = true;
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.code) {
        case this.keys.MOVE_LEFT:
          this.actions.moveLeft = false;
          break;

        case this.keys.MOVE_RIGHT:
          this.actions.moveRight = false;
          break;
      }
    });
  }

  updatePlayerPosition() {
    if (this.actions.moveLeft) {
      this.moveLeft();
    }

    if (this.actions.moveRight) {
      this.moveRight();
    }
  }

  draw(frameCounter) {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * (this.img.width / this.img.frames), // sx
      0, // sy
      this.img.width / this.img.frames, // sw
      this.img.height, // sh
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.animateSprite(frameCounter);
  }

  animateSprite(frameCounter) {
    if (frameCounter % 6 === 0) {
      this.img.frameIndex++;

      if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0;
      }
    }
  }

  moveRight() {
    this.x += this.vx;
  }

  moveLeft() {
    this.x -= this.vx;
  }
}
