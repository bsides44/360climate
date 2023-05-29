AFRAME.registerComponent('light-click', {
    schema: {
        lightClicks: { type: 'number', default: 0 }
    },
    init: function () {
        var dark = "#4f4d45"
        var light = this.el
        var sceneEl = document.querySelector("a-scene")
        var tint = document.querySelector("#cameraTint")

        sceneEl.addEventListener('lightClick', () => {
            this.data.lightClicks = this.data.lightClicks + 1
        })

        // change color of light on click 
        light.addEventListener('click', () => {
            sceneEl.emit('changeMeter', 1)
            light.setAttribute('material', 'color', dark);
            light.setAttribute('on-hover', 'originalColor', dark);
            light.setAttribute('on-hover', 'changeColor', dark);
            tint.setAttribute('visible', 'true')
            let opacity = Number(tint.getAttribute('opacity')) + 0.15
            tint.setAttribute('opacity', opacity)

            sceneEl.emit('lightClick')

            if (this.data.lightClicks == 5) {
                var button = document.querySelector("#scaleButton")
                button.setAttribute("visible", "true")
            }
        })
    },
})