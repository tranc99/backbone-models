var TodoView = Backbone.View.extend({

	tagName: 'li',

	//cache the template function for a single item.
	todoTpl: _.template("An example template"),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	initialize: function(options) {
		this.options = options || {};
	},

	//re-render the title of the todo item.
	render: function( ) {
		this.$el.html( this.todoTpl( this.model.toJSON() ));
		this.input = this.$('.edit');
		return this;
	},

	edit: function( ) {

	},

	close: function() {
	},

	updateOnEnter: function() {
	},

});

var todoView = new TodoView();

//log reference to a DOM element that corresponds to the view instance
console.log(todoView.el);

var TodosView = Backbone.View.extend({
    tageName: 'ul', //required
    className: 'container', //optional
    id: 'todos' //optional
});

var todosView = new TodosView();
console.log(todosView.el);


