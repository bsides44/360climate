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
        const meter = document.querySelector("#meter")

        cityLights.forEach(el => {
            el.setAttribute('material', 'color', '#4f4d45');
        });

        setTimeout(() => {
            meter.emit('increaseMeter', null, false)
        }, 100);
        
        sceneEl.emit('turn-off')

        document.querySelector("#nzText").setAttribute('visible', 'true')
        document.querySelector("#nzTextClimate").setAttribute('visible', 'true')

        // change text
        const wowText = document.querySelector("#wowText")
        const actionText = document.querySelector("#actionText")
        const plasticText = document.querySelector("#plasticText")
        const organicText = document.querySelector("#organicText")
        const wetlandText = document.querySelector("#wetlandText")
        const oilText = document.querySelector("#oilText")
        const homeText = document.querySelector("#homeText")
        const nowText = document.querySelector("#nowText")


        setTimeout(() => {     
            wowText.setAttribute('visible', 'true')
        }, 100);
        setTimeout(() => {
            wowText.setAttribute('visible', 'false')
            actionText.setAttribute('visible', 'true')
        }, 3000);

        setTimeout(() => {
            nowText.setAttribute('visible', 'true')
            actionText.setAttribute('visible', 'false')
            plasticText.setAttribute('visible', 'true')
        }, 6000);
        setTimeout(() => {
            plasticText.setAttribute('visible', 'false')
            organicText.setAttribute('visible', 'true')
        }, 6500);
        setTimeout(() => {
            organicText.setAttribute('visible', 'false')
            wetlandText.setAttribute('visible', 'true')
        }, 7000);
        setTimeout(() => {
            wetlandText.setAttribute('visible', 'false')
            oilText.setAttribute('visible', 'true')
        }, 7500);
        setTimeout(() => {
            oilText.setAttribute('visible', 'false')
            homeText.setAttribute('visible', 'true')
        }, 8000);
        setTimeout(() => {
            homeText.setAttribute('visible', 'false')
            nowText.setAttribute('visible', 'false')
        }, 9000);

        
        el.removeEventListener('click', this.onClick)

        el.parentNode.removeChild(el)

    }
})