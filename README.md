# Adm Backend

- Node v18.17
- NPM
- NextJs
- JWT
- Prisma
- MongoDB

### Padrão de issue

- TOV{id} - {Titulo}

**Obs:** Os titulos devem ser em inglẽs.

### Padrão de branch

- TOV{id}

### Padrão de commit

O projeto utiliza os padrões do **Conventional commmits** , portanto utilizaremos a seguinte estrutura dos commits

```
!type(?scope): !subject
```

Em tipos poderemos ter o seguintes abaixos:

- `feat` - Commits do tipo feat indicam que seu trecho de código está incluindo um novo recurso (se relaciona com o MINOR do versionamento semântico).
- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está solucionando um problema (bug fix), (se relaciona com o PATCH do versionamento semântico).
- `docs` - Commits do tipo docs indicam que houveram mudanças na documentação, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).
- `perf` - Commitsa do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a performance.
- `style` - Commits do tipo style indicam que houveram alterações referentes a formatações de código, semicolons, trailing spaces, lint... (Não inclui alterações em código).
- `refactor`- Commits do tipo refactor referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.
- `enhancement`- Commits do tipo enhancement indicam melhorias de uma feature, isto é, algo a ser acrescentado a um recurso já existente, como por exemplo uma melhoria no layout de um botão.

- `chore` - Alterar fora do ambiente de execução - Atualize algo sem impactar o código (ex: atualização leia-me, atualização CI/CD...).

O _scope_ se refere o id da issue, por exemlpo se há uma issue de DOCQ001 com commit corrigindo o bugfix deve ser escrito seguindo o padrão:

```
git commit -m "fix(DOCF001): add padding in button on login page"
```

_Subject_ se refere uma breve descrição do que foi feito naquele commit, no caso acima seria "add padding in button on login page"

**Obs:** Os commits deverão ser em inglês.
