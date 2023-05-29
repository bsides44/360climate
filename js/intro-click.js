AFRAME.registerComponent('intro-click', {
    init: function () {
        this.removeText = this.removeText.bind(this);
        // remove text
        window.addEventListener('click', this.removeText)
    },
    removeText: function () {
        var introText = document.querySelector("#introText")
        introText.parentNode.removeChild(introText);
        window.removeEventListener('click', this.removeText)
    }
})