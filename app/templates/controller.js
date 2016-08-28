'use strict';

// Import example:
//
// import <%= name.pascal %>Controller from './components/<%= name.camel %>/controller';
// app.controller('<%= name.camel %>Controller', <%= name.pascal %>Controller);

class <%= name.pascal %>Controller {
    constructor($scope) {

    }
}

<%= name.pascal %>Controller.$inject = ['$scope'];

export default <%= name.pascal %>Controller;