const particle = {
    position:  null,
    velocity: null,
    gravity: 0,

    create: function(x, y, speed, direction, grav) {
        const p = Object.create(particle)
        p.position = vector.create(x, y)
        p.velocity = vector.create(0, 0)
        p.velocity.setLength(speed)
        p.velocity.setAngle(direction)
        p.gravity = vector.create(0, grav || 0)
        return p
    },

    accelerate: function(acceleration) {
        this.velocity.addTo(acceleration)
    },

    update: function() {
        this.velocity.addTo(this.gravity)
        this.position.addTo(this.velocity)
    }
}
