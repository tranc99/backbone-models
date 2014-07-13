var Todo = Backbone.Model.extend({
	initialize: function() {
		console.log('This model has been initialized.');
		this.on('change', function() {
			console.log('- Values for this model have changed.');
		});
	},

	defaults: {
		title: '',
		completed: false,
		modelType: 'Ich bin ein stupid'
	}
});

//create our conrete instance of a Todo Model
var todo1 = new Todo();
console.log(JSON.stringify(todo1));

//with arbitrary data
var todo2 = new Todo({
	title: 'Check the attributes of both model instances in the console.',
	completed: true
});

console.log(JSON.stringify(todo2));

var todo3 = new Todo({
	title: 'This todo is done, so take no action on this one.',
	completed: true,
	modelType: 'Ich definitely nicht stupid'
});
console.log(JSON.stringify(todo3));

var myTodo = new Todo({
	title: "Set through instantiation."
});
console.log('Todo title: ' + myTodo.get('title'));
console.log('completed: ' + myTodo.get('completed'));

//set attributes through Model.set();
myTodo.set("title", "Title attribute set through Model.set().");
console.log("Todo title: " + myTodo.get('title'));
console.log('completed: ' + myTodo.get('completed'));

//set map of attributes through Model.set()
myTodo.set({
	title: "Both attributes set through Model.set().",
	completed: true
});

var Person = new Backbone.Model();
Person.on("change:name", function() { console.log("Name changed"); });
Person.set({name: 'Andrew'});
//log entry: Name changed

Person.set({name: 'Jeremy'}, {silent: true});

console.log(Person.hasChanged("name"));
console.log(Person.hasChanged(null));

var myTodo = new Todo();

myTodo.set('title', 'The listener is triggered whenever an attribute value changes.');
console.log('Title has changed: ' + myTodo.get('title'));

myTodo.set('completed', true);
console.log('Completed has changed: ' + myTodo.get('completed') );

//validation

var Person = new Backbone.Model({name: 'Jeremy'});

//validate the model name
Person.validate = function(attrs) {
	if (!attrs.name) {
		return 'I need your name';
	}
};

//Change the name
Person.set({name: 'Samuel'});
console.log(Person.get('name'));

//remove the name attribute, force validation
Person.unset('name', {validate: true});

var Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  validate: function(attributes){
    if(attributes.title === undefined){
        return "Remember to set a title for your todo.";
    }
  },

  initialize: function(){
    console.log('This model has been initialized.');
    this.on("invalid", function(model, error){
        console.log(error);
    });
  }
});

var myTodo = new Todo();
myTodo.set('completed', true, {validate: true}); // logs: Remember to set a title for your todo.
console.log('completed: ' + myTodo.get('completed')); // completed: false


