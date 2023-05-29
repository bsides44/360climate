AFRAME.registerComponent('on-hover', {
    schema: {
        changeColor: { type: 'string', default: '#fff' },
        originalColor: { type: 'string', default: '#fff' }
    },
    init: function () {
        var el = this.el

        // change color of element on controller hover 
        el.addEventListener('raycaster-intersected', () => {
            el.setAttribute('material', 'color', this.data.changeColor);
        })
        el.addEventListener('raycaster-intersected-cleared', () => {
            el.setAttribute('material', 'color', this.data.originalColor);
        })
    },
})