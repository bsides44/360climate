AFRAME.registerComponent('end-click', {
    init: function () {

        const nowText = document.querySelector('#nowText')
        const nowButton = document.querySelector('#nowButton')


        nowButton.addEventListener('mouseenter', () => {
            if (nowText.getAttribute('visible')){
                nowText.setAttribute('text', 'color', '#AFE3F8');
            }
        })

        nowButton.addEventListener('mouseleave', () => {
            if (nowText.getAttribute('visible')){
                nowText.setAttribute('text', 'color', '#fff');
            }
        })

        nowButton.addEventListener('click', () => {
            if (nowText.getAttribute('visible')){
                window.location.href = "https://www.greenpeace.org/aotearoa/press-release/climate-shift-over-30-environmental-groups-launch-10-point-climate-action-plan/#:~:text=The%2010-point%20plan%2C%20guided,a%20better%2C%20more%20sustainable%20society";
            }
        })

    },
})