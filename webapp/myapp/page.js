define([
    'underscore', 'jquery', 'backbone', 'react', 'platform/util', 'myapp/TodoListView'
], function (_, $, Backbone, React, util, TodoListView) {
    'use strict';


    var TodoItemModel = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        }
    });

    var TodoListCollection = Backbone.Collection.extend({
        model: TodoItemModel
    });



    function entrypoint() {

        var model = new TodoListCollection();

        var divs = ['todo1', 'todo2', 'todo3'];
        divs.map(function (id) {
            var sel = _.str.sprintf('[data-id="%s"]', id);
            React.renderComponent(TodoListView({
                model: model
            }), $(sel)[0]);
        });


        util.getJSON('/api/todos').done(_.bind(model.reset, model));


        // Save reference to model for console debugging, e.g.
        //   window.model.add({'title': 'asfdasdf'})
        //   JSON.stringify(window.model.toJSON())
        //
        window.model = model;
    };

    return {
        entrypoint: entrypoint
    };
});