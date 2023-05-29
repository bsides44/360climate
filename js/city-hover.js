AFRAME.registerComponent('city-hover', {
    schema: {
        turnOff: { type: 'boolean', default: 'false' }
    },
    init: function () {
        var el = this.el
        var sceneEl = document.querySelector("a-scene")
        var meter = document.querySelector("#meter")
        var policyButton = document.querySelector("#policyButton")

        // change colour of light on controller hover 
        el.addEventListener('raycaster-intersected', () => {
            el.setAttribute('material', 'color', '#4f4d45');
            if (!this.data.turnOff) {
                console.log('turn off is false')

                sceneEl.emit('changeMeter', 1)
            }

            //visible policy button in city
            value = meter.getAttribute("theta-length")
            if (value >= 21) policyButton.setAttribute("visible", "true")
        })

        sceneEl.addEventListener('turn-off', () => {
            this.data.turnOff = true
        })
    },
})