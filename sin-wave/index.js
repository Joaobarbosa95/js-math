window.onload = main;

function main() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const graph = {
        x: 200, // x range
        y: 200, // y range
    };

    //ctx.translate(0, height / 2)
    //ctx.scale(1, -1)

    let angle = 0;

    function multiColor() {
        if(angle < Math.PI / 2) ctx.fillStyle = "green"
        else if(angle < Math.PI) ctx.fillStyle = "blue"
        else if(angle < (3 * Math.PI) / 2) ctx.fillStyle = "red"
        else ctx.fillStyle = "orange"
        
    }

    function move() {

        multiColor()

        const x = angle * graph.x;
        const y = Math.sin(angle) * graph.y + (height / 2)

        ctx.fillRect(x, y, 30, 30);

        if(angle < (Math.PI * 2)) {
            angle += 0.01
        } else {
            angle = 0
            ctx.fillStyle = "white"
            ctx.clearRect(0, 0, width, height);
        }

        requestAnimationFrame(move);
    }

    move()
}
