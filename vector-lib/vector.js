const vector = {
    x: 0,
    y: 0,

    create(x, y) {
        const v = Object.create(vector)
        v.setX(x)
        v.setY(y)
        return v
    },

    setX(x) {
        this.x = x
    }, 

    getX() {
        return this.x
    },

    setY(y) {
        this.y = y
    },

    getY() {
        return this.y
    },
    
    add: function(v2) {
        this.x += v2.x
        this.y += v2.y
    },

    subtract: function(v2) {
        this.x -= v2.x
        this.y -= v2.y
    }
}
