export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Do you want to include a test for this component?',
        default: false,
      },
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/Component.tsx.hbs',
        },
      ];

      if (data.withTest) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/test.tsx.hbs',
        });
      }

      return actions;
    },
  });

  plop.setGenerator('error', {
    description: 'Create a component with a broken test',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your broken component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/testBroken.tsx.hbs',
      },
      (data) => {
        console.log(`
          🎉 Componente criado com sucesso!
          Você pode tentar rodar o teste com o comando:
          pnpm test
          Ou para o fluxo completo, adicione os arquivos ao commit com:
          git add src/components/${pascalCase(data.name)}
          E então faça o commit:
          git commit -m "Adiciona componente ${pascalCase(data.name)} com teste inicial quebrado"
        `);
        return 'Componente e instruções finalizados com sucesso.';
      },
    ],
  });
};
