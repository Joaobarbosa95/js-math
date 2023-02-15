window.onload = main

function main() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight

    const n = 100;
    const particles = []

    for(let i = 0; i < n; i++) {
        const p = particle.create(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2)

        particles.push(p)
    }

    move()
    
    function move() {
        ctx.clearRect(0, 0, width, height)

        particles.forEach((p) => {
            p.update()
            ctx.beginPath()
            ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2)
            ctx.fill()
    
        })

        requestAnimationFrame(move)
    }
}
