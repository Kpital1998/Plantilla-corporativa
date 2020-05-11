new Vue({
    el: ".container",
    data:{
        imagen:["dab-1692452_640.png","website.png","computer.png"],
        slide:0,
        clase:"",
        index:0
    },
    methods:{
        AumentoImg: function () {
            this.index++

            if (this.index >2) {
                this.index=0
            }
        },

        DisminuirImg: function () {
            this.index--

            if (this.index < 0) {
                this.index=2
            }
        }
    }
});