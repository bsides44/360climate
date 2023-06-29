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

        document.querySelector("#nzText").object3D.visible = true;
        document.querySelector("#nzTextClimate").object3D.visible = true;

        let actionArr = Array.from(document.querySelectorAll(".action"))

        // change text
        const wowText = document.querySelector("#wowText")
        const actionText = document.querySelector("#actionText")  
        // const nowText = document.querySelector("#nowText")

        setTimeout(() => {     
            wowText.object3D.visible = true;
        }, 100);
        setTimeout(() => {
            wowText.object3D.visible = false;
            actionText.object3D.visible = true;
        }, 2000);
        setTimeout(() => {
            actionText.object3D.visible = false;
            turnOnEachAction(actionArr).then(_ => {
                // this code will run after all actions have been shown.
                // setTimeout(() => {
                //     nowText.object3D.visible = false;
                // }, 2000);
            });
        }, 4000);

        setTimeout(() => {
            // position and end-click aren't getting added
            // intro-click modile UI needs updating
            var nowText = document.createElement('a-text');
            nowText.setAttribute("id", "nowText");
            nowText.setAttribute("value", "NOW");
            nowText.object3D.position.set(0, -0.1, -1)
            nowText.object3D.visible = true;
            nowText.setAttribute("visible", "true");
            nowText.setAttribute("align", "center");
            nowText.setAttribute("font", "monoid");
            nowText.setAttribute("width", "8");

            var nowButton = document.createElement('a-plane');
            nowButton.setAttribute("id", "nowButton");
            nowButton.setAttribute('position', {x: 0, y: -0.1, z: -1});
            nowButton.object3D.visible = false;
            nowButton.setAttribute("width", "0.6");
            nowButton.setAttribute("height", "0.5");
            nowButton.setAttribute("class", "clickable");
            nowButton.setAttribute("end-click");

            sceneEl.appendChild(nowButton);
            sceneEl.appendChild(nowText);
        }, 10000);
        
        function actionAfterTwoSeconds(action) {
            return new Promise(res => {
                setTimeout(_ => {
                    action.object3D.visible = true;
                    res();
                }, 500);
                setTimeout(_ => {
                    action.object3D.visible = false;
                    res();
                }, 1000);
            });
        }
        
        function turnOnEachAction(arr) {
            let action = arr.shift();
            return action ? actionAfterTwoSeconds(action).then(turnOnEachAction.bind(null, arr)) : Promise.resolve();
        }
        
        el.removeEventListener('click', this.onClick)

        el.parentNode.removeChild(el)

    }
})