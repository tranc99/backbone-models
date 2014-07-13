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
console.log("Collection size: " + todos.length);

todos.remove([a,b]);
console.log("Collection size: " + todos.length);

todos.remove(c);
console.log("Collection size: " + todos.length);

var items = new Backbone.Collection;
items.add([{ id: 1, name: "Dog", age: 3}, { id: 2, name: "cat", age: 2}]);
items.add([{ id: 1, name: "Bear"}], {merge: true });
items.add([{ id: 2, name: "lion"}]);

console.log(JSON.stringify(items.toJSON()));








