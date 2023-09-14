const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); // No es recomendable usar un nombre como "c" para una variable, pero en este caso se usará ya que se repite varias veces durante este código.

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.height = 150
  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;

    if (this.position.y + this.height >= canvas.height) {
      // Haz algo cuando el objeto alcance la parte inferior del canvas
    }
  }

}


const player = new Sprite({
  position: {
    x: 0,
    y: 0  
  },
  velocity : {
    x: 0,
    y: 10
  }
});


const enemy = new Sprite({
  position: {
    x: 400,
    y: 100  
  },
  velocity : {
    x: 0,
    y: 0
  }
});


console.log(player)

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()
}

animate();  