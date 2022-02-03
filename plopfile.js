module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Please choose on of the following component types:',
        choices: ['components', 'pages'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{type}}/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/ComponentIndex.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/ComponentName.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/{{type}}/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'plop-templates/ComponentTypes.ts.hbs',
      },
    ],
  });
};
