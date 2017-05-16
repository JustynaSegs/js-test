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

            for (var i = $checkboxes.length - 1; i >= 0; i--) {
              var $checked = $checkboxes[i].checked;

                if($checked == true) {
                    var $innerlItem = $checkboxes.closest('span');
                    var $position = $('span').index($innerlItem);
                    items.items.splice(i, 1);
                    items.render();
                }
            }
        },
    };

    items.init();
});
