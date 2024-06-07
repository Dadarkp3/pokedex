module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Generate a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{camelCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/__test__/{{camelCase name}}.spec.tsx',
        templateFile: 'templates/tests.tsx.hbs',
      },
    ],
  });
};
