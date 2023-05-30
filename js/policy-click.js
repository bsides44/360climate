AFRAME.registerComponent('policy-click', {
    init: function () {
        this.onClick = this.onClick.bind(this);
        var el = this.el

        // change colour of all lights on policy click 
        el.addEventListener('click', this.onClick)
    },
    onClick: function () {
        var el = this.el
        const sceneEl = document.querySelector("a-scene")
        var cityLights = document.querySelectorAll(".cityLight")

        cityLights.forEach(el => {
            el.setAttribute('material', 'color', '#4f4d45');
        });

        sceneEl.emit('changeMeter', 100)
        sceneEl.emit('turn-off')

        const wowText = document.querySelector("#wowText")
        wowText.setAttribute('visible', 'true')
        document.querySelector("#nzText").setAttribute('visible', 'true')
        
        el.removeEventListener('click', this.onClick)

        el.parentNode.removeChild(el)

    }
})