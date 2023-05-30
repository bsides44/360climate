AFRAME.registerComponent('intro-click', {
    init: function () {
        this.removeText = this.removeText.bind(this);
        this.switchToMobileUI = this.switchToMobileUI.bind(this);
        // remove text
        window.addEventListener('click', this.removeText)

        // Check for mobile
		if (AFRAME.utils.device.isMobile()) this.switchToMobileUI()
    },
    removeText: function () {
        var introText = document.querySelector("#introText")
        introText.parentNode.removeChild(introText);
        window.removeEventListener('click', this.removeText)
    },
    switchToMobileUI: function (){
        // bulk change text

        var elements = document.querySelectorAll("a-text")

        elements.forEach(text => {
            var oldWidth = text.getAttribute('width')
            var newWidth = oldWidth <= 3 ? oldWidth / 1.2 : oldWidth / 2.5
            text.setAttribute('text', 'width', newWidth)
        })

        document.querySelector("#scaleText").setAttribute('text', 'width', 5)
        document.querySelector("#policyText").setAttribute('text', 'width', 5)
        document.querySelector("#meterText").setAttribute('text', 'width', 3)
        document.querySelector("#wowText").setAttribute('text', 'width', 7)
        document.querySelector("#nzText").setAttribute('text', 'width', 2.5)
        document.querySelector("#nzTextClimate").setAttribute('text', 'width', 2.5)
        document.querySelector("#nowText").setAttribute('position', '0 0.05 -1')

        // change reductometer
        var circles = document.querySelectorAll("a-circle")

        circles.forEach(circle => {
            circle.setAttribute('geometry', 'radius', '0.5')
        })

        document.querySelector("#meter-back").setAttribute('position', '0 1.6 -3')
        document.querySelector("#meter").setAttribute('position', '0 1.6 -3')
        document.querySelector("#meterText").setAttribute('position', '0 1.4 -3')
        document.querySelector("#wowText").setAttribute('position', '0 2.3 -3')
        document.querySelector("#nzText").setAttribute('position', '0.8 1.68 -3')
        document.querySelector("#nzTextClimate").setAttribute('position', '0.86 1.48 -3')
    }
})