'use strict';

// Import example:
//
// import <%= name.pascal %>Service from './components/<%= name.camel %>/service';
// app.service('<%= name.camel %>Service', <%= name.pascal %>Service.factory);

class <%= name.pascal %>Service {

    static factory(ExampleService) {
        <%= name.pascal %>Service.instance = new <%= name.pascal %>Service(ExampleService);
        return <%= name.pascal %>Service.instance;
    }

    constructor(ExampleService) {
        this.ExampleService = ExampleService;
    }

    exampleServiceFunction() {
        return true;
    }
}

<%= name.pascal %>Service.factory.$inject = ['ExampleService'];

export default <%= name.pascal %>Service;

