module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/components/test.tsx.hbs'
      }
    ]
  }),
    plop.setGenerator('template', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your template name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/templates/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/templates/Component.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/templates/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/templates/test.tsx.hbs'
        }
      ]
    })
}
