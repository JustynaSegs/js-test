$(function(){
    var items = {
        items: ['Will', 'Steve'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.$el = $('#itemsModule');
            this.$input = $('#added-item');
            this.$buttonAdd = $('#add');
            this.$buttonRemove = $('#remove');
            this.$buttonMove = $('#move');
            this.$ulToDo = $('#items-to-do');
            this.template = $('#items-template').html();
            this.$ulCompleted = $('#items-completed');
        },
        bindEvents: function() {
            this.$buttonAdd.on('click', this.addItem.bind(this));
            this.$buttonRemove.on('click', this.deleteItem.bind(this));
            //this.$buttonMove.on('click', this.moveItem.bind(this));
        },
        render: function() {
           var data = {
               items: this.items,
           };
           this.$ulToDo.html(Mustache.render(this.template, data));
        },
        addItem: function() {
            this.items.push(this.$input.val());
            this.render();
            this.$input.val('');
        },
        deleteItem: function() {
            var deleteTarget = this.$input.val();
            var itemsToDelete = [];
            var itemsLength = this.items.length;

            for (var i = 0; i < itemsLength; i++) {
                if (this.items[i] === deleteTarget) {
                    itemsToDelete.push(i);
                }
            }
            console.log(itemsToDelete);
            //this.items.splice(this.items, i);

            // this.items.pop(this.$input.val());
            // this.render();
            // this.$input.val('');
        },

    };

    items.init();
});