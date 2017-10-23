new Vue({
    el: '.nada',
    data: {
        upvotes: 0
    },
    methods: {
        upvote: function () {
            this.upvotes++;
        }
    }
})