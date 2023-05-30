AFRAME.registerComponent('change-meter', {
    init: function () {
        const sceneEl = document.querySelector("a-scene")
        const meter = document.querySelector("#meter")
        const meterText = document.querySelector("#meterText")

        // change value of emissions reductometer
        sceneEl.addEventListener('changeMeter', (value) => {
            let currentValue = meter.getAttribute("theta-length")
            let newValue = Number(currentValue) - Number(value.detail)
            meter.setAttribute("theta-length", (newValue));
            meterText.setAttribute("color", "#27610d")
            setTimeout(() => {
                meterText.setAttribute("color", "white")
            }, 200);
        })
    },
})