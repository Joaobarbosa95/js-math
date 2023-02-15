window.onload = main

function main() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight

    const firework1 = firework(ctx, 100, "green", 200, 100)
    const firework2 = firework(ctx, 100, "gold", 400, 100)
    const firework3 = firework(ctx, 100, "red", 600, 100)

    move()
    
    function move() {
        ctx.clearRect(0, 0, width, height)

        firework1()
        firework2()
        firework3()

        requestAnimationFrame(move)
    }
}

function firework(ctx, number, color, x, y) {
   const particles = [] 

    for(let i = 0; i < number; i++) {
        const p = particle.create(x, y, Math.random() * 4 + 1, Math.random() * Math.PI * 2, 0.1)

        particles.push(p)
    }

    return function() {
        ctx.fillColor = color;
        particles.forEach((p) => {
            p.update()
            ctx.fillStyle = color;
            ctx.beginPath()
            ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2)
            ctx.fill()
        })
    }

}
