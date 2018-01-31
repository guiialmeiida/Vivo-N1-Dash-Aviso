# Dashboard N1 Aviso

Script criado para rodar na extensão [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pt-BR).

Desenvolvido em JavaScript, ele apresenta um aviso no Windows, com as seguintes especificaçoes: 

+ Quantidade de defeitos na fila.
+ Quantidade de defeitos em seu nome.
+ Quantidade de defeitos na fila definidos por você, pelos sistemas que você escolher.
## Outro Aviso:
+ Detalhes dos defeitos que estão em seu nome. 


# Instalação

- Baixar a extensão [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pt-BR).
- Clicar em "Adicionar novo script...".
- Colar o script:
```go
// ==UserScript==
// @name         Aviso Dashboard N1
// @version      1.0 Beta
// @description  Aviso no Windows de quantos defeitos possuem na fila do N1
// @author       Thauã Corrêa Martins, Eduardo Czamanski Rota
// @source       https://github.com/correamth/dashn1
// @match        http://svuxqsoa113:9010/*
// @grant        GM_notification
// @grant        window.focus
// @require      https://raw.githubusercontent.com/correamth/dashn1/master/sistemaenome.js
// @require      https://raw.githubusercontent.com/correamth/dashn1/master/dashn1.js
// @icon         https://forum.vivo.com.br/attachment.php?attachmentid=737&d=1418039499
// ==/UserScript==
```
- Salvar.
- Abrir ele novamente e clicar em Externos, logo após, clicar F5 para exibir os botões.
- Clicar em Editar no primeiro Requires, adicionar seu nome, os sistemas de sua preferência para ser avisado e o tempo de refresh da página (onde 30000 milissegundos são 30 segundos). Salvar.
- Após isso, só dar um F5 na dashboard. 


