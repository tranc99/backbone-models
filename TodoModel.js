var Todo = Backbone.Model.extend({
    defaults: {
	title: '',
	completed: false
    }
    
});

var TodosCollection = Backbone.Collection.extend({
    model: Todo
});

var a = new Todo({ title: 'Go to Jamaica.'}),
    b = new Todo({ title: 'Go to China.'}),
    c = new Todo({title: 'Go to Disneyland.'});
    
var todos = new TodosCollection([a,b]);
console.log("Collection size: " + todos.length);

todos.add(c);
