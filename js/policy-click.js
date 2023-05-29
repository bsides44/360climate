AFRAME.registerComponent('policy-click', {
    init: function () {
        var el = this.el
        const sceneEl = document.querySelector("a-scene")

        // change colour of all lights on policy click 
        el.addEventListener('click', () => {
            var cityLights = document.querySelectorAll(".cityLight")

            cityLights.forEach(el => {
                el.setAttribute('material', 'color', '#4f4d45');
                sceneEl.emit('turn-off')
            });

            sceneEl.emit('changeMeter', 100)
        })
    },
})