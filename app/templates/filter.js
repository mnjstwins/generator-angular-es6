'use strict';

// Import example:
//
// import <%= name.pascal %>Filter from './components/<%= name.camel %>/filter';
// app.filter('<%= name.camel %>Filter', <%= name.pascal %>Filter.factory);

class <%= name.pascal %>Filter {

    static factory(){
        return <%= name.pascal %>Filter.filter();
    }

    constructor() {
    }

    static filter() {
        return function(input, param) {
            return input;
        };
    }
}

export default <%= name.pascal %>Filter;

