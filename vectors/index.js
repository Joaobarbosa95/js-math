window.onload = main

function main() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    const width = canvas.width = window.innerWidth
    const height = canvas.height = window.innerHeight

    const v = vector.create(100, 100)
    const v1 = vector.create(1, 1)

    move()
    
    function move() {
        ctx.clearRect(0, 0, width, height)
        ctx.beginPath()
        ctx.arc(v.getX(), v.getY(), 10, 0, Math.PI * 2)
        ctx.fill()
    
        v.addTo(v1)

        requestAnimationFrame(move)
    }
}
