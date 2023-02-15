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
        const x = this.x + v2.x
        const y = this.y + v2.y
        return vector.create(x, y)
    },

    subtract: function(v2) {
        const x = this.x - v2.x
        const y = this.y - v2.y
        return vector.create(x, y)
    },

    multiply: function(value) {
        const x = this.x * value 
        const y = this.y * value 
        return vector.create(x, y)
    },

    divide: function(value)  {
        const x = this.x / value 
        const y = this.y / value 
        return vector.create(x, y)
    },

    addTo: function(v2) {
        this.x += v2.x
        this.y += v2.y
    },

    subtractTo: function(v2) {
        this.x -= v2.x
        this.y -= v2.y
    },

    multiplyTo: function(v2) {
        this.x *= v2.x
        this.y *= v2.y
    },

    divideTo: function(v2) {
        this.x /= v2.x
        this.y /= v2.y
    },

    getAngle: function() {
        return Math.atan2(this.y, this.x)
    },

    setAngle: function(angle) {
        const length = this.getLength() 
        this.x = Math.cos(angle) * length
        this.y = Math.sin(angle) * length
    },

    getLength: function() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    },

    setLength: function(length) {
        const angle = this.getAngle()
        this.x = Math.cos(angle) * length
        this.y = Math.sin(angle) * length
    },
}
