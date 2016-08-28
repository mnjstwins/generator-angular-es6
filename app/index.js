var generators = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    prompting: function () {
        return this.prompt([
            {
                type: 'list',
                name: 'objectType',
                message: 'What do you want to generate?',
                choices: [
                    {name: 'Directive', value: 'directive'},
                    {name: 'Controller', value: 'controller'},
                    {name: 'Service', value: 'service'},
                    {name: 'Filter', value: 'filter'}
                ]
            },
            {
                type: 'input',
                name: 'name',
                message: 'The name of the element that is going to be generated?'
            }
        ]).then(function (answers) {
            var name = answers.name;
            answers.name = {
                pascal: changeCase.pascalCase(name),
                camel: changeCase.camelCase(name),
                lower: changeCase.lowerCase(name),
                normal: name
            };

            var file;
            switch (answers.objectType) {
                case 'directive':
                    file = 'directive.js';
                    break;
                case 'controller':
                    file = 'controller.js';
                    break;
                case 'service':
                    file = 'service.js';
                    break;
                case 'filter':
                    file = 'filter.js';
                    break;
            }
            this.fs.copyTpl(this.templatePath(file), this.destinationPath('./' + file), answers);
        }.bind(this));
    }
});