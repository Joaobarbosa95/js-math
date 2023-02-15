const particle = {
    position:  null,
    velocity: null,

    create: function(x, y, speed, direction) {
        const p = Object.create(particle)
        p.position = vector.create(x, y)
        p.velocity = vector.create(0, 0)
        p.velocity.setLength(speed)
        p.velocity.setAngle(direction)
        return p
    },

    update: function() {
        this.position.addTo(this.velocity)
    }
}
