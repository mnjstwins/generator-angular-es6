'use strict';

// Import example:
//
// import <%= name.pascal %>Directive from './components/<%= name.camel %>/directive';
// app.directive('<%= name.camel %>Directive', <%= name.pascal %>Directive.factory);

import ExampleController from './controller.js';
import template from './view.html!text';

class <%= name.pascal %>Directive {

    static factory(ExampleService) {
        <%= name.pascal %>Directive.instance = new <%= name.pascal %>Directive(ExampleService);
        return <%= name.pascal %>Directive.instance;
    }

    constructor(ExampleService) {
        this.ExampleService = ExampleService;

        // Documentation : https://docs.angularjs.org/guide/directive
        this.restrict = '';
        this.template = template;
        this.templateUrl = '';
        this.transclude = false;
        this.controllerAs = '';
        this.require = '';
        this.controller = ExampleController;
        this.scope = {
            example: '@'
        };
    }

    link(scope, element) {
    }

}

<%= name.pascal %>Directive.factory.$inject = ['exampleService'];

export default <%= name.pascal %>Directive;
