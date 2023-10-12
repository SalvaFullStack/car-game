class Obstacle {
	constructor(ctx, canvasW, playerY, playerH) {
		this.ctx = ctx
		this.canvasW = canvasW

        this.img = new Image();
     this.img.src = "../assets/car.png";


		this.w = 20
		this.h = 50

		this.x = 0
		this.y = Math.random() * ()

		this.dx = 10
	}

	draw() {
		this.ctx.fillStyle = 'black'
		this.ctx.fillRect(this.x, this.y, this.w, this.h)
	}

	move() {
		this.x -= this.dx
	}
}
