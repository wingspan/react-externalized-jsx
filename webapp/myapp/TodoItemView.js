define([
    'backbone', 'react', 'platform/jsxutil',
    'text!myapp/TodoItem.html',
    'react-backbone'
], function (Backbone, React, jsxutil, todoItemJsx) {
    'use strict';

    // JSON.stringify(window.page.view.componentMap.tmfTutorial2.model.toJSON())
    // window.page.view.componentMap.tmfTutorial2.model.at(0).set('title', "world")

    var TodoItemView = React.createBackboneClass({
        render: function () {
            var self = this;

            var scope = {
                completed: this.props.model.get('completed') === true ? 'checked' : '',
                title: this.props.model.get('title'),
                model: this.props.model,
                onRemove: function () {
                    self.props.model.destroy();
                },
                onToggleComplete: function () {
                    self.props.model.set('completed',
                        !self.props.model.get('completed'));
                },
                css: { opacity: 100, width: '10px' }
            };

            return jsxutil.exec(todoItemJsx, scope);
        }
    });

    return TodoItemView;
});