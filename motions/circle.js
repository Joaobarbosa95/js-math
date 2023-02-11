window.onload = main

function main() {
    const canvas = document.getElementById("canvas"),
          ctx = canvas.getContext("2d"),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight


    const centerX = width / 2
    const centerY = height / 2
    const radius  = 100
    const v       = 0.1
    
    let angle = 0

    move()

    function move() {
        ctx.clearRect(0, 0, width, height)
        
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)
        
        angle += v

        requestAnimationFrame()
    }
}
