### Versionamento de código

- Primeiramente inicia-se um repositório em alguma pasta com o comando:
  ``git init``
- Cria uma branch relacionada as tarefas a serem feitas e já mudar para ela com o comado:
``git checkout -b <nome_da _branch>``
- Após as mudanças no repositório, temos que enviar as informações para staging com o comando:
``git add .`` ou ``git add <nome_do_arquivo>``
- Agora é hora de fazer o commit com o comando:
  ``git commit -m "texto_do_commit" ``
- Por último, caso tenha que passar as atualizações para branch principal(main) seria executado o merge:
``git merge <nome_da_branch>``

