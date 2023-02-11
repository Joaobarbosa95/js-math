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
    const vX       = 0.1
    const vY       = 0.131

    ctx.fillStyle = "orange"
    
    let angleX = 0
    let angleY = 0

    move()

    function move() {
        ctx.clearRect(0, 0, width, height)
        
        const x = radiusX * Math.cos(angleX) + offsetX
        const y = radiusY * Math.sin(angleY) + offsetY

        ctx.fillRect(x, y, 30, 30)
        
        angleX += vX
        angleY += vY

        requestAnimationFrame(move)
    }
}
