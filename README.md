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
// @match        http://svuxqsoa113:9010/*
// @grant        GM_notification
// @grant        window.focus
// @require      https://gist.githubusercontent.com/correamth/a55d9138bfbe04d479057db4408f51ec/raw/426f9835bcf18a852d3f663d6cf0771b779c5ebf/nomeesistema
// @require      https://raw.githubusercontent.com/correamth/dashn1/master/dashn1
// @icon         https://forum.vivo.com.br/attachment.php?attachmentid=737&d=1418039499
// ==/UserScript==
```
- Salvar.
- Abrir ele novamente e clicar em Externos.
- Editar o primeiro Requires com seu nome, 3 sistemas de sua preferência para ser avisado e o tempo de refresh da página (onde 30000 milissegundos são 30 segundos).
- Após isso, só dar um F5 na dashboard. 


