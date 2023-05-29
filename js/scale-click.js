AFRAME.registerComponent('scale-click', {
    init: function () {
        var button = this.el
        var bgImage = document.querySelector("a-sky")
        var bedLights = document.querySelectorAll(".bedLight")
        var sceneEl = document.querySelector("a-scene")

        // change color of light on click 
        button.addEventListener('click', () => {
            bgImage.setAttribute('src', '#city');

            bedLights.forEach(el => {
                el.parentNode.removeChild(el);
            });

            // generate city lights
            for (let index = 0; index < 400; index++) {
                var light = document.createElement('a-sphere');
                let height = Math.floor(Math.random() * 24) - 30
                let wide = Math.floor(Math.random() * 80) - 40;
                let deep = Math.floor(Math.random() * 40) - 20;

                light.setAttribute("radius", "0.25");
                light.setAttribute("color", "#fcca03");
                light.setAttribute("city-hover", '');
                light.setAttribute("class", "clickable cityLight");
                light.setAttribute("position", `${wide} ${height} ${deep}`);

                sceneEl.appendChild(light);
            }
        })
    },
})