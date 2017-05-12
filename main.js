(function(){
    var items = {
        items: ['walk the dog', 'water flowers'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
            this.addItem();
        },
        cacheDom: function() {
            this.el = document.getElementById('items-module');
            this.input = document.getElementById('added-item');
            this.addBtn = document.getElementById('add');
            this.deleteBtn = document.getElementById('delete');
            this.toDoUl = document.getElementById('items-to-do');
            this.template = document.getElementById('items-template');
            this.check = document.getElementById('checkbox');
            //this.moveBtn = document.getElementById('move');
            this.doneUl = document.getElementById('items-completed');
        },
        bindEvents: function() {
            this.addBtn.addEventListener('click', this.addItem.bind(this));
           // this.deleteBtn.addEventListener('click', this.removeItem.bind(this));
           // this.moveBtn.addEventListener('click', this.moveItem.bind(this));
        },
        render: function() {
            var data = {
                item: this.item,
            };
            this.toDoUl.html(Mustache.render(this.template, data));
            //this.doneUl.html(Mustache.render(this.template, data));
        },
        addItem: function() {
            this.items.push(this.input.value());
            this.render;
            this.input.value('');
        },
    };

    items.init();

});
