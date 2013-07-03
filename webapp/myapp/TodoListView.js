define([
    'underscore', 'backbone', 'react', 'platform/jsxutil',
    'text!myapp/TodoList.html',
    'myapp/TodoItemView',
    'react-backbone'
], function (_, Backbone, React, jsxutil, todoListJsx, TodoItemView) {
    'use strict';

    var TodoListView = React.createBackboneClass({

        render: function () {
            var items = this.props.model.map(function (todo) {
                var scope = {
                    TodoItemView: TodoItemView,
                    todo: todo
                };
                return jsxutil.exec('<TodoItemView model={todo} />', scope);
            });

            var self = this;
            var scope = {
                items: items,
                onSubmit: function (e, sel) {
                    e.nativeEvent.preventDefault();
                    var newTodoTitle = self.refs.newTodoTitle.getDOMNode().value.trim();
                    self.props.model.add({ title: newTodoTitle });
                    self.refs.newTodoTitle.getDOMNode().value = '';
                }
            };

            return jsxutil.exec(todoListJsx, scope);
        }

    });

    return TodoListView;
});
