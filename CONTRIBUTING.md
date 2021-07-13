# Contribuir
Gostaria de nos ajudar a melhorar o projeto? Veja este guia contribuição para ajudar o DevChallenge a crescer.

## Tabela de conteúdos
- [Para começar](#para-começar)
  - [Clonando o repositório](#clonando-o-repositório)
  - [Criando a nova branch](#criando-a-nova-branch)
  - [Nomeando a mensagem de commit](#nomeando-a-mensagem-de-commit)
- [Submetendo suas alterações](#submetendo-suas-alterações)
- [Outras formas de contribuir](#outras-formas-de-contribuir)

## Para começar
### Clonando o repositório
Faça um fork do repositório no GitHub e o clone em sua máquina.
```bash
$ git clone https://github.com/{Seu nome}/DevChallenge.git

$ cd DevChallenge
```

### Criando a nova branch
Crie uma nova branch para a alteração que você deseja submeter. Por exemplo:
```bash
$ git checkout -b fix-responsive
```
Ao executar o comando acima, uma nova branch chamada `fix-responsive` será criada.

**Nota:** O nome da branch deve ser significativo e deve indicar **apenas** a mudança a ser feita. Requisições que não seguirem esse padrão não serão aceitas.

### Nomeando a mensagem de commit
Para elaborar uma boa mensagem de commit, você pode imaginar a seguinte frase: "Se aplicado, este commit irá {sua mensagem de commit}". Por exemplo:

*Se aplicado, este commit irá **Corrigir responsividade mal formada**

Ou se preferir, você também pode submeter seus commits em inglês:

*If applied, this commit will **Fix malformed responsiveness***

Lembre-se de começar sua mensagem com uma palavra como: Adicionar, refatorar, deletar, etc..

**Nota:** Tente manter suas mensagens com menos de 50 caractéres e detalhar as alterações na descrição do commit. Apesar de não ser obrigatório, esta é uma prática muito conhecida e utilizada na comunidade do Git.

## Submetendo suas alterações
Após ter realizado as mudanças, suba suas mudanças para o repositório remoto:
```bash
$ git push origin fix-responsive
```

Após isso, vá ao seu repositório recém clonado no GitHub, selecione a branch criada e clique em Pull Request.

**IMPORTANTE:** Faça o Pull Request da sua branch especificamente para a branch `develop`. Pull Requests enviados a branch `master` serão automaticamente recusados.

Faça um comentário geral sobre as mudanças realizadas e, se necessário dê uma descrição sobre as alterações realizadas e sua justificativa (opcional). Por exemplo:

"**Corrigir #418**

Este PR corrige a issue submetida em relação a um erro de responsividade."

Após isso, seu Pull Request entrará em fase de revisão e, quem sabe, suas alterações sejam integradas ao DevChallenge!

## Outras formas de contribuir
Você também pode ajudar o projeto crescer:

- Criando novos desafios
- Sugerindo mudanças e melhorias
- Fazendo parte de nossa [comunidade](https://discord.gg/yvYXhGj) no Discord
