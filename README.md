# Editor de Imagem com OCR
Neste projeto foi utilizado Node.js com bibliotecas como Jquery, Express, Tesseract, Sweetalert2 e Croppie. 
Este projeto foi adaptado para ser publicado na Vercel, por esta razão existem arquivos estáticos dentro do '/public', em caso de dar seguimento utilizando Node.js recomendo que ignore os arquivo das '/public/assets'.

## Instalação com Node.js
Para instalar e executar o projeto com Node.js basta seguir os passos comuns de todas as aplicações node. Vamos lá:
> npm install
> npm run start

O projeto será executado na porta '8080', caso o usuário deseje pode estar configurando uma variavel de ambiente para customizar essa porta.

## Execução sem Node.js
Caso queira executar sem node.js, basta abrir o arquivo /public/index.html no browser de sua escolha.

## Roadmap 
[x] Interface para upload e correções da imagem
[x] Cortar Imagem
[x] OCR da Imagem
[x] Exibir textos obtidos do OCR
[ ] Aplicar filtros para correção/melhoria da imagem
[ ] Upload em CDN ou storage

## Atenção
Ao executar em ambiente localhost, tome cuidado com problemas que possam surgir com CORS.
