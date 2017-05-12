$(function(){
    var items = {
        items: ['Will', 'Steve'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.$el = $('#items-module');
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
            if(this.$input.val() !== "") {
                this.items.push(this.$input.val());
                this.render();
                this.$input.val('');
            }
        },
        deleteItem: function() {
            var $checkboxes = this.$el.find('input[type="checkbox"]');
            var $checked = $checkboxes[0].checked;

                if($checked == true) {
                    var $liItem = $checkboxes.closest('li');
                    var $position = $('li').index($liItem);
                    position.splice(i, 1);
                    this.render();
            } 
        },

    };

    items.init();
});