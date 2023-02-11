window.onload = main

function main() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight

    const offsetX = width / 2
    const offsetY = height / 2
    const radiusX  = 100
    const radiusY  = height / 2 - 50 
    const v       = 0.05

    ctx.fillStyle = "orange"
    
    let angle = 0

    move()

    function move() {
        ctx.clearRect(0, 0, width, height)
        
        const x = radiusX * Math.cos(angle) + offsetX
        const y = radiusY * Math.sin(angle) + offsetY

        ctx.fillRect(x, y, 30, 30)
        
        angle += v

        requestAnimationFrame(move)
    }
}
