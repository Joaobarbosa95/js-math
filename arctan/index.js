window.onload = main

function main() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight
    let angle = Math.PI 
    
    function render() {
        ctx.clearRect(0, 0, width, height)
        ctx.save()
        ctx.translate(width / 2, height / 2)
        ctx.rotate(angle)
        drawArrow(ctx)
        ctx.restore()

        requestAnimationFrame(render)
    }
    
    render()

    /*
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX - (width / 2) 
        const y = e.clientY - (height / 2) 
        angle = Math.atan(y / x)
    })
    */


    document.addEventListener("mousemove", (e) => {
        const x = e.clientX - (width / 2) 
        const y = e.clientY - (height / 2) 
        angle = Math.atan2(y, x)
    })





}

function drawArrow(ctx) {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(100, 0)
    ctx.lineTo(80, -20)
    ctx.moveTo(100, 0)
    ctx.lineTo(80, 20)
    ctx.stroke()
}

