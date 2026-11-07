# Saiyan World Remake (projeto de fã, sem fins lucrativos)

Remake em navegador de um RPG por turnos de Dragon Ball. Projeto aberto: qualquer pessoa pode copiar, mudar e continuar.
Os sprites são de terceiros e estão listados na aba **Créditos** do jogo. Nada aqui é vendido.

## Como colocar no ar e gerar o APK (pelo celular mesmo)
1. Crie uma conta grátis em github.com e um repositório novo (público).
2. Envie todos os arquivos desta pasta para o repositório (botão **Add file > Upload files**, e crie a pasta `.github/workflows` com os dois arquivos `.yml`).
3. No repositório: **Settings > Pages > Source: GitHub Actions**. Em alguns minutos o jogo fica online em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.
4. Abra esse link no Chrome do celular e toque em **⋮ > Adicionar à tela inicial**. Vira um ícone que abre em tela cheia, deitado, e funciona sem internet.
5. Para um APK de verdade: aba **Actions > Gerar APK > Run workflow**. Ao terminar, baixe o arquivo `saiyan-world-remake-apk` (dentro tem o `app-debug.apk`) e instale no celular (permita instalar de fontes desconhecidas).

O APK e o jogo online usam o mesmo `index.html`: mudou o jogo, é só gerar de novo.

## Admin e personagens da comunidade
- No lobby, toque 5 vezes em "Jogador" e digite o código (`saiyan`, definido em `ADMIN_CODIGO` dentro do `index.html`) para liberar o painel Admin.
- O que alguém cria no Admin fica só no aparelho dele. Para valer para todos, a pessoa usa **Baixar backup** e manda o arquivo; quem mantém o projeto coloca o conteúdo no `personagens.json` deste repositório. O jogo carrega esse arquivo ao abrir.
