function id(elemento) {
	return document.getElementById(elemento);
}

function tagName(elemento) {
	return document.getElementsByTagName(elemento);
}

function className(elemento) {
	return document.getElementsByClassName(elemento);
}

stylePage()

if(tagName('table')[2] != undefined){
main();
}else{menuExtra()}


    var opcionalCores = "";
    var avisoOpcional = "";
    var avisoOpcionalMeusDefeitos = "";




function menuExtra() {

     //####################################################

    var legenda = document.getElementById("container");
      //-----------------------------------------
    var legendaDiv2 = document.createElement('div');
    legenda.appendChild(legendaDiv2);
    legendaDiv2.setAttribute('id', "legendaDiv2");
    legendaDiv2.setAttribute('style', 'display:inline-block;position:absolute;')
    //-----------------------------------------
    var legenda1Text = document.createElement('LABEL');
    legendaDiv2.appendChild(legenda1Text);
    legenda1Text.innerHTML = "LEGENDA DAS CORES";
    legenda1Text.style = "Color: #FFFAFA; margin-left: 30px;font-family: sans-serif;";
    //-----------------------------------------
    var quebraLinha = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha);
    var quebraLinha1 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha1);
    //-----------------------------------------

    var legendaText1 = document.createElement('input');
    legendaDiv2.appendChild(legendaText1);
    //legendaText.type = "checkbox";
    legendaText1.setAttribute('style', "background-color: red; color:white; cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px;");
    legendaText1.setAttribute('title', "Peço atenção a toda a equipe, temos que ter uma análise bem crítica para não levar nenhum reject nos QCs dos projetos citados a seguir, pois estamos no vermelho com esses projetos e já está escalado a criticidade.");
    legendaText1.setAttribute('readonly', "true");
    legendaText1.setAttribute('value', "PRIORIDADE ZERO");

    //-----------------------------------------

    var quebraLinha2 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha2);
    var quebraLinha3 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha3);

    //-----------------------------------------

    var legendaText = document.createElement('input');
    legendaDiv2.appendChild(legendaText);
    //legendaText.type = "checkbox";
    legendaText.setAttribute('style', "background-color: purple; color:white; cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px;");
    legendaText.setAttribute('title', " O Robson terá um perfil de N1 no QC, ele irá analisar e tramitar os defeitos sempre que preciso exclusivamente para o Projeto Pandora. Peço para que sempre que ele não estiver e existir uma solicitação de direcionamento nos defeitos do Pandora podem direcionar conforme o solicitado do defeito.");
    legendaText.setAttribute('readonly', "true");
    legendaText.setAttribute('value', "PANDORA");

    //-----------------------------------------

    var quebraLinha4 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha4);
    var quebraLinha5 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha5);

    //-----------------------------------------

    var legendaText2 = document.createElement('input');
    legendaDiv2.appendChild(legendaText2);
    legendaText2.setAttribute('style', "background-color: purple; color:white; cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px;");
    legendaText2.setAttribute('title', "O Projeto Luiza será analisado por Rodrigo Lunardi.");
    legendaText2.setAttribute('readonly', "true");
    legendaText2.setAttribute('value', "LUIZA");

    //-----------------------------------------

    var quebraLinha6 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha6);
    var quebraLinha7 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha7);

    var linhaSepara = document.createElement('hr');
    legendaDiv2.appendChild(linhaSepara);
    linhaSepara.setAttribute('style', "background-color: white; color:white;  width: 450px; margin-left: 30px;text-align: center; ");

    //-----------------------------------------
     var botaoDiv = document.createElement('button');
    legendaDiv2.appendChild(botaoDiv);
    botaoDiv.setAttribute('style', "cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px; margin-top:10px; color: #212529;   background-color: #f8f9fa; border-color: #f8f9fa;padding: .375rem .75rem; border-radius: .25rem;");
    botaoDiv.setAttribute('id', "botaoTexto");
    var inputTexto5 = document.createElement('LABEL');
    botaoDiv.appendChild(inputTexto5);
    inputTexto5.setAttribute('style', "cursor:pointer;")
    inputTexto5.innerHTML = "QCS analisados";
    var aparece = "nao";
    function danone(){
        if(aparece == "nao"){
           document.getElementById('legendaDiv1').style.display = 'flex';
           var teste102 = meuStorage.getItem('qcsComigo');
           id('divparateste').innerHTML = "";
           id('divparateste').innerHTML = teste102;
           var objDiv = id("divparateste");
           objDiv.scrollTop = objDiv.scrollHeight;
           aparece = "sim"
        } else {
        document.getElementById('legendaDiv1').style.display = 'none';
        aparece = "nao"
        }
    }
    document.getElementById("botaoTexto").onclick = danone



    //-----------------------------------------

    /*
    var quebraLinha11 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha11);
    var quebraLinha12 = document.createElement('br');
    legendaDiv2.appendChild(quebraLinha12);
     */



    var legendaDiv = document.createElement('div');
    legendaDiv2.appendChild(legendaDiv);
    legendaDiv.setAttribute('style', "width: 100px; height: 100px;");



    var legendaDiv3 = document.createElement('div');
    legenda.appendChild(legendaDiv3);
    legendaDiv3.setAttribute('id', "legendaDiv3");
    legendaDiv3.setAttribute('style', ' margin-left:250px;display:inline-block;position:absolute;')

    var legenda3Text = document.createElement('LABEL');
    legendaDiv3.appendChild(legenda3Text);
    legenda3Text.innerHTML = "PROJETOS PRIORITARIOS";
    legenda3Text.style = "Color: #FFFAFA; margin-left: 30px; font-family: sans-serif;";
    //-----------------------------------------
    var quebraLinha15 = document.createElement('br');
    legendaDiv3.appendChild(quebraLinha15);
    var quebraLinha16 = document.createElement('br');
    legendaDiv3.appendChild(quebraLinha16);


    var legendaText3 = document.createElement('input');
    legendaDiv3.appendChild(legendaText3);
    legendaText3.setAttribute('style', "background-color: rgb(22, 96, 255); color:white; cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px;");
    legendaText3.setAttribute('title', "Por gentileza seguir com os encaminhamentos conforme e-mail, para os QCs do projeto FUSION com solicitação de encaminhamento.");
    legendaText3.setAttribute('readonly', "true");
    legendaText3.setAttribute('value', "FUSION");

    //-----------------------------------------

    var quebraLinha8 = document.createElement('br');
    legendaDiv3.appendChild(quebraLinha8);
    var quebraLinha9 = document.createElement('br');
    legendaDiv3.appendChild(quebraLinha9);

    //-----------------------------------------

    var legendaText4 = document.createElement('input');
    legendaDiv3.appendChild(legendaText4);
    legendaText4.setAttribute('style', "background-color: rgb(22, 96, 255); color:white; cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px;");
    legendaText4.setAttribute('title', "Atentar-se na descrição detalhada e comentários se existe pedido de encaminhamento ou verificação com arquiteta");
    legendaText4.setAttribute('readonly', "true");
    legendaText4.setAttribute('value', "(FTTH)");

        //-----------------------------------------
/*
    var quebraLinha18 = document.createElement('br');
    legendaDiv3.appendChild(quebraLinha18);
    var quebraLinha19 = document.createElement('br');
    legendaDiv3.appendChild(quebraLinha19);

    //-----------------------------------------

    var legendaText5 = document.createElement('input');
    legendaDiv3.appendChild(legendaText5);
    legendaText5.setAttribute('style', "background-color: rgb(22, 96, 255); color:white; cursor:pointer; border: 1px solid #fff; width: 150px; margin-left: 30px;text-align: center; padding: 1px;");
    legendaText5.setAttribute('title', "Enviar se existir a tag de solicitação de direcionamento");
    legendaText5.setAttribute('readonly', "true");
    legendaText5.setAttribute('value', "Beatrix");
*/

    //-----------------------------------------

    var legendaDiv1 = document.createElement('div');
    legenda.appendChild(legendaDiv1);
    legendaDiv1.setAttribute('id', "legendaDiv1");
    legendaDiv1.setAttribute('style', 'display:none; margin-left:650px;')
    var caixaTexto = document.createElement('div');
    legendaDiv1.appendChild(caixaTexto);
    caixaTexto.setAttribute('id', "divparateste");
    caixaTexto.setAttribute('style', "width: 650px;height:210px;overflow: auto;border: 1px solid blue;padding: 2px;text-align: justify;background: white;white-space: pre-wrap;");



    //####################################################

    //Seleciona a tabela onde o botão priorizar está
    var botoes = document.getElementById("fDefectsList:pgBtnPriorizar");
    botoes = botoes.childNodes[1];
    botoes = botoes.childNodes[1];
    //Cria 1 novo td
    var botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);
    botoesRef = document.createElement('td');
    botoes.appendChild(botoesRef);

    //Seleciona o novo td
    var colunas = botoes.childNodes[5],
        colunas0 = botoes.childNodes[6],
        colunas7 = botoes.childNodes[7],
        colunas4 = botoes.childNodes[8],
        colunas1 = botoes.childNodes[9],
        colunas5 = botoes.childNodes[10],
        colunas2 = botoes.childNodes[11],
        colunas6 = botoes.childNodes[12],
        colunas3 = botoes.childNodes[13],
        colunas9 = botoes.childNodes[16],
        colunas10 = botoes.childNodes[17],
        colunas11 = botoes.childNodes[14],
		colunas12 = botoes.childNodes[15],
		colunas13 = botoes.childNodes[16],
		colunas15 = botoes.childNodes[18],
		colunas14 = botoes.childNodes[19];

    //Cria um campo input
    var inputText = document.createElement('input');
    colunas.appendChild(inputText);
    inputText.setAttribute('style', "border: 1px solid grey;   border-radius: 4px; padding: 4px;");

    var input0Text = document.createElement('input');
    colunas0.appendChild(input0Text);
    input0Text.setAttribute('style', "border: 1px solid grey;   border-radius: 4px; padding: 4px;");

    var input4Text = document.createElement('LABEL');
    colunas4.appendChild(input4Text);
    input4Text.innerHTML = "Cores:";
    input4Text.style = "Color: #FFFAFA ";

    var input5Text = document.createElement('LABEL');
    colunas5.appendChild(input5Text);
    input5Text.innerHTML = "|Aviso:";
    input5Text.style = "Color: #FFFAFA ";

    var input6Text = document.createElement('LABEL');
    colunas6.appendChild(input6Text);
    input6Text.innerHTML = "|Aviso meus QC's:";
    input6Text.style = "Color: #FFFAFA ";

    var input9Text = document.createElement('LABEL');
    colunas9.appendChild(input9Text);
    input9Text.innerHTML = "|Ambientes:";
    input9Text.style = "Color: #FFFAFA ";


    var input7Text = document.createElement('input');
    colunas7.appendChild(input7Text);


    var input11Text = document.createElement('LABEL');
    colunas11.appendChild(input11Text);
    input11Text.innerHTML = "|Triagem:";
    input11Text.style = "Color: #FFFAFA ";

	var input29Text = document.createElement('LABEL');
    colunas15.appendChild(input29Text);
    input29Text.innerHTML = "|Ticket Manager:";
    input29Text.style = "Color: #FFFAFA; border ";

    //===========================================================================================================

    //check ambientes
    var input109Text = document.createElement('input'); // checkbox
    colunas10.appendChild(input109Text); // checkbox
    //Seleciona o campo criado
    input109Text = colunas10.childNodes[0]; // checkbox
    input109Text.type = "checkbox";
    input109Text.setAttribute('style', "cursor: pointer; height: 20px;width: 20px;");
    var meuStorage = localStorage;
    var ok109 = meuStorage.getItem('ok109');
    if (ok109 === null || ok109 === "" || ok109 === "false") {
        ok109 = "false";
        input109Text.checked = false;
    } else {
        ok109 = "true";
        input109Text.checked = true;
    }
    input109Text.onclick = function() {
        var okBo109 = "";
        if (ok109 === "false") {

            okBo109 = "true";
        } else {
            ok109 = "true";

            okBo109 = "false";
        }
        meuStorage.setItem('ok109', okBo109);
        window.location.reload(1);
    };
    if (ok109 === "true") {
        var optionAmbientes = "sim"; //Yes para os avisos na área de trabalho
    } else {
        optionAmbientes = "nao";
    }

    //===========================================================================================================

    //check ticket
	var input120Text = document.createElement('input'); // checkbox
    colunas14.appendChild(input120Text); // checkbox
    input120Text = colunas14.childNodes[0]; // checkbox
    input120Text.type = "checkbox";
    input120Text.setAttribute('style', "cursor: pointer; height: 20px;width: 20px;");
    input120Text.setAttribute('id', "ambientesBug");
    var ok129 = meuStorage.getItem('ok129');
    if (ok129 === null || ok129 === "" || ok129 === "false") {
        ok129 = "false";
        input120Text.checked = false;
    } else {
        ok129 = "true";
        input120Text.checked = true;
    }
    input120Text.onclick = function() {
        var okBo129 = "";
        if (ok129 === "false") {

            okBo129 = "true";
        } else {
            ok129 = "true";

            okBo129 = "false";
        }
        meuStorage.setItem('ok129', okBo129);
        window.location.reload(1);
    };
    if (ok129 === "true") {
        var optionAmbientesBug = "sim"; //Yes para os avisos na área de trabalho
    } else {
        optionAmbientesBug = "nao";
    }


    //===========================================================================================================

    //check triagem
    var input12Text = document.createElement('input'); // checkbox
    colunas12.appendChild(input12Text); // checkbox
    //Seleciona o campo criado
    input12Text = colunas12.childNodes[0]; // checkbox
    input12Text.type = "checkbox";
    input12Text.setAttribute('style', "cursor: pointer; height: 20px;width: 20px;");
	input12Text.setAttribute('id', "triagem");
    meuStorage = localStorage;
    var ok12 = meuStorage.getItem('ok12');
    if (ok12 === null || ok12 === "" || ok12 === "false") {
        ok12 = "false";
        input12Text.checked = false;
    } else {
        ok12 = "true";
        input12Text.checked = true;
    }
    input12Text.onclick = function() {
        var okBo12 = "";
        if (ok12 === "false") {

            okBo12 = "true";
        } else {
            ok12 = "true";

            okBo12 = "false";
        }
        meuStorage.setItem('ok12', okBo12);
        window.location.reload(1);
    };
    if (ok109 === "true") {
        var optionTriagem = "sim"; //Yes para os avisos na área de trabalho
    } else {
        optionTriagem = "nao";
    }

    //console.log(optionAmbientes);
    //===========================================================================================================
    //check cores
    var input1Text = document.createElement('input');
    colunas1.appendChild(input1Text);
    input1Text = colunas1.childNodes[0];
    input1Text.type = "checkbox";
    input1Text.setAttribute('style', "cursor: pointer; height: 20px;width: 20px;");
    var ok = meuStorage.getItem('ok');
    if (ok === null || ok === "" || ok === "false") {
        ok = "false";
        input1Text.checked = false;
    } else {
        ok = "true";
        input1Text.checked = true;
    }
    input1Text.onclick = function() {
        var okBo = "";
        if (ok === "false") {

            okBo = "true";
        } else {
            ok = "true";

            okBo = "false";
        }
        meuStorage.setItem('ok', okBo);
        window.location.reload(1);
    };
    if (ok === "true") {
        opcionalCores = "yes";
    }

    //check avisos
    var input2Text = document.createElement('input'); // checkbox
    colunas2.appendChild(input2Text); // checkbox
    input2Text = colunas2.childNodes[0]; // checkbox
    input2Text.type = "checkbox";
    input2Text.setAttribute('style', "cursor: pointer; height: 20px;width: 20px;");
    var ok2 = meuStorage.getItem('ok2');
    if (ok2 === null || ok2 === "" || ok2 === "false") {
        ok2 = "false";
        input2Text.checked = false;
    } else {
        ok2 = "true";
        input2Text.checked = true;
    }

    input2Text.onclick = function() {
        var okBo2 = "";
        if (ok2 === "false") {

            okBo2 = "true";
        } else {
            ok2 = "true";

            okBo2 = "false";
        }
        meuStorage.setItem('ok2', okBo2);
        window.location.reload(1);
    };
    if (ok2 === "true") {
        avisoOpcional = "yes"; //Yes para os avisos na área de trabalho
    }

    //check meus avisos
    var input3Text = document.createElement('input'); // checkbox
    colunas3.appendChild(input3Text); // checkbox
    input3Text = colunas3.childNodes[0]; // checkbox
    input3Text.type = "checkbox";
    input3Text.setAttribute('style', "cursor: pointer; height: 20px;width: 20px;");
    var ok3 = meuStorage.getItem('ok3');
    if (ok3 === null || ok3 === "" || ok3 === "false") {
        ok3 = "false";
        input3Text.checked = false;
    } else {
        ok3 = "true";
        input3Text.checked = true;
    }
    input3Text.onclick = function() {
        var okBo3 = "";
        if (ok3 === "false") {

            okBo3 = "true";
        } else {
            ok3 = "true";

            okBo3 = "false";
        }
        meuStorage.setItem('ok3', okBo3);
        window.location.reload(1);
    };
    if (ok3 === "true") {
        avisoOpcionalMeusDefeitos = "yes";
    }

    //text nome
    inputText = colunas.childNodes[0];
    var placeHolder = meuStorage.getItem('nome');
    if (placeHolder === null || placeHolder === "") {
        placeHolder = "Digite seu nome & enter";
    }
    inputText.placeholder = placeHolder;
    inputText.onkeypress = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            meuStorage.setItem('nome', inputText.value);
            window.location.reload(1);
            return false;
        }
        return true;
    };
    /*console.log(botoes);
    console.log(inputText);*/

    //text tempo
    input0Text = colunas0.childNodes[0];
    placeHolder = meuStorage.getItem('tempo0');
    if (placeHolder === null || placeHolder === "") {

        placeHolder = "Digite segundos refresh & enter";
    }

    input0Text.placeholder = placeHolder + " segundos refresh";
    input0Text.onkeypress = function(event) {
        if (event.which == 13 || event.keyCode == 13) {

            meuStorage.setItem('tempo0', input0Text.value);
            window.location.reload(1);
            return false;
        }
        return true;
    };
    var tempo = meuStorage.getItem('tempo0');
    if (tempo === null || tempo === "" || isNaN(tempo) === true) {
        tempo = "30";
        input0Text.placeholder = "30 segundos refresh";
    }
    var temporefresh1 = parseInt(tempo);
    var conver = 0;
    conver = temporefresh1 * 1000;
    if (conver < 30000) {
        conver = 30000;
        input0Text.placeholder = "30 segundos refresh";
    }
    /*console.log(tempo+" valor");
    console.log(botoes);
    console.log(temporefresh1+" segundos");
    console.log(conver+" milissegundos");*/ //validações
    var temporefresh = conver;
    // Tempo para atualização da página
    setTimeout(function() {
        window.location.reload(1);
    }, temporefresh);

    //text sistemas
    input7Text = colunas7.childNodes[0];
    placeHolder = meuStorage.getItem('seussis');
    if (placeHolder === null || placeHolder === "") {
        placeHolder = "Digite sistemas & enter Ex: NGIN, PORTAL FEDERADO, SIGAN, ...";
        meuStorage.setItem('seussis', "");
        input7Text.placeholder = placeHolder;
    }
    if (placeHolder !== "Digite sistemas & enter Ex: NGIN, PORTAL FEDERADO, SIGAN, ...") {
        input7Text.value = placeHolder;
    }
    //input7Text.style = "";
    input7Text.onkeypress = function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            meuStorage.setItem('seussis', input7Text.value);
            window.location.reload(1);
            return false;
        }
        return true;
    };
    var sistemas3 = meuStorage.getItem('seussis');
    var sistemasarray = sistemas3.split(", ");
    input7Text.setAttribute('style', "border: 1px solid grey; border-radius: 4px; width:400px; padding: 4px;");
    //console.log(sistemasarray);
    return sistemasarray;
}


function link(projectRef, project, id) {
    //Montagem do elemento link, do ALM, dentro do elemento project em cada linha
    var link = document.createElement('a');
    projectRef.removeChild(project);
    projectRef.appendChild(link);
    link = projectRef.childNodes[0];
    link.text = project.data;
    link.href = "td://" + project.data + ".QA_QA.alm.vivo.com.br/qcbin/DefectsModule-000000004243046514?EntityType=IBug&&EntityID=" + id.data;
}


function main() {
    var tabela = document.getElementsByTagName('table'); //Retorna todas as tabelas como HTML Collection
    var tabela2 = tabela[2]; // Selectiona a tabela que precisamos no caso a 3ª
    tabela = tabela2.childNodes[2]; //Selectiona o 3º childNode da tabela onde está as linhas
    var defeitos = [];
    var pandoras =[];
    var sistemas = [];
    var qcs = [];
    var contMe = 0,
        contOpen = 0,
        contOpenComp = 0,
        contDiminuiTotal = 0,
        contSistema = 0,
        contQcs = 0,
        contTicket = 0,
        contPandora = 0;
    var backgroundDefAberto = "background-color:#D3DDEB";
    var fonteDefAberto = "color:black";
    var tempoVidaNotif = 5000;
    var monitorarQc = [""]; //teste colocar o id do defeito que deseja monitorar
    var qcsComigo = [""];


    try {
        var sistemasx = menuExtra();
        var meuStorage = localStorage;
        var ok109 = meuStorage.getItem('ok109');
        var ok12 = meuStorage.getItem('ok12');
		var ok129 = meuStorage.getItem('ok129');
        var optionTriagem = "nao";
        var optionAmbientes = "nao";
        if (ok109 === "true") {
            optionAmbientes = "sim";
        }
        var ambientes = optionAmbientes;
        if (ok12 === "true") {
            optionTriagem = "sim";
        }
        var triagem = optionTriagem;
		var optionAmbientesBug = "nao";
                 if (ok129 === "true") {
                    optionAmbientesBug = "sim";
                 }
        var ambientesBug = optionAmbientesBug;
        //For principal, onde vai percorer cada linha por vez
        for (var i = 0; i < tabela.childNodes.length; i++) {
            //Seleciona os elementos em questão dentro da linha
            var linha = tabela.childNodes[i];
            var nome = linha.childNodes[0];
            nome = nome.childNodes[0];
            var id = linha.childNodes[1];
            var idRef = id.childNodes[0];
            id = idRef.childNodes[0];
            var sistemaRef = linha.childNodes[4];
            if (ambientes == "sim") {
                var slaRef = linha.childNodes[8];
                var sla = slaRef.childNodes[0];
                var status = linha.childNodes[9];
                status = status.childNodes[0];
				var type = linha.childNodes[11];
                type = type.childNodes[0];
                document.getElementById("triagem").checked = false
                document.getElementById("triagem").disabled = true
                meuStorage.setItem('ok12', "false");
            } else {
                slaRef = linha.childNodes[9];
                sla = slaRef.childNodes[0];
                status = linha.childNodes[10];
                status = status.childNodes[0];
				document.getElementById("ambientesBug").checked = false
				document.getElementById("ambientesBug").disabled = true
            }
            var slaArray = sla.data.split(" ");
            var slaData = parseInt(slaArray[0]);
            var severityRef = linha.childNodes[7];
            var projectRef = linha.childNodes[2];
           // var domainRef = linha.childNodes[2];
            var releaseRef = linha.childNodes[3];

	    //If's dos elementos para verificar se está vazio, evitando que o plugin pare de funcionar
            if (sistemaRef.childNodes.length !== 0) {
                var sistema = sistemaRef.childNodes[0];
            } else {
                sistema = sistemaRef;
                sistema.data = "Sem sistema";
            }
            /*if (domainRef.childNodes.length !== 0) {
                var domain = domainRef.childNodes[0];
            } else {
                domain = domainRef;
                domain.data = "Sem dominio";
            }*/
            if (projectRef.childNodes.length !== 0) {
                var project = projectRef.childNodes[0];
            } else {
                project = projectRef;
                project.data = "Sem projeto";
            }
            if (severityRef.childNodes.length !== 0) {
                var severity = severityRef.childNodes[0];
            } else {
                severity = severityRef;
                severity.data = "Sem prioridade";
            }

		
            if (releaseRef.childNodes.length !== 0) {
                var release = releaseRef.childNodes[0];
                var releaseArray = release.data.split(" ");
                var releaseData = parseInt(releaseArray[0]);

                if (releaseArray.includes('[PANDORA') && (nome.data === "Compasso N1" || nome.data === "QA N1") ) {
                    releaseRef.style = "color: purple; font-weight: bold";
                    contPandora++;
                    pandoras.push(" \n" + id.data + " - " + sistema.data + " - " + sla.data);
                }
                if ( releaseArray.includes('[PANDORA') || releaseArray.includes('Pandora') || releaseArray.includes('4980-[LUIZA') || releaseArray.includes('[Luiza') || releaseArray.includes('[LUIZA') || releaseArray.includes('4591-[LUIZA')) {
                    releaseRef.style = "color: purple; font-weight: bold";
                }
                if (releaseArray.includes("SVAs") || releaseArray.includes("Chorinho") || releaseArray.includes("2075-Unified") || releaseArray.includes("(Chorinho)")) {
                    releaseRef.style = "color: red; font-weight: bold";
                }
                if (releaseArray.includes("Fusion") || releaseArray.includes("3635-Fusion") ||releaseArray.includes("(FTTH)")) {
                    releaseRef.style = "color: rgb(22, 96, 255); font-weight: bold";
                }


            }
            
            link(projectRef, project, id);

            meuStorage = localStorage;
            var placeHolder = meuStorage.getItem('nome');


           // Pinta os elementos importantes para ficar fácil a localização na tabela
            //aaaaaaaaaaaaaaaaaaaaaa
       if (nome.data === meuStorage.getItem('nome')) //Seu nome
            {
                contMe++;
                defeitos.push(" \n" + id.data + " - " + sistema.data + " - " + sla.data);
                console.log(id.data + " está comigo");
                if (opcionalCores === "yes") {
                    linha.style = "background-color:#F0E68C";
                }


                 // NOVA IMPLEMENTAÇÃOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ******************##########################
                var nomePessoa = meuStorage.getItem('nome')
                var primeiroNome = nomePessoa.split(" ")
                primeiroNome =  "  ######### Olá "+ primeiroNome[0] + " ######### ";
                if (localStorage.getItem('qcsComigo') == null){
                    localStorage.setItem('qcsComigo', primeiroNome );
                }

                qcsComigo.push("<a href='"+ idRef + " ' target='_blank' title='Abrir histórico do defeito'>"+ id.data+"</a>" + " - " + sistema.data + " - " + project.data);

                var teste101 = meuStorage.getItem('qcsComigo');

                // data aqui
                var d = new Date();
                var str = 'oi '+ d
                var arrayData = str.split(" ");
                var recebeData ="\n ######### " + arrayData[3]+'/'+arrayData[2]+'/'+arrayData[4] + " ######### "


                if (teste101.includes(recebeData)){
                 // pass
                }else {
                 localStorage.setItem('qcsComigo', teste101 + " \n "+ recebeData );
                }
                var teste107 = meuStorage.getItem('qcsComigo');
                //fim data


                var teste104 = teste107.split('#########');
                var qcsHoje = teste104[teste104.length -1]
                for (var aa = 0; aa < qcsComigo.length; aa++){
                  if (qcsHoje.includes(qcsComigo[aa])){
                      //pass
                  }else {
                      localStorage.setItem('qcsComigo', teste107 + " \n"+ qcsComigo[aa] );
                  }
                }
                // FIM NOVA IMPLEMENTAÇÃOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ******************##########################
            }



            if (nome.data === "QA N1" || nome.data === "QA Gestao Ambientes" || nome.data === "Compasso N1") {
                //console.log("contOpen++");
                contOpen++; //Conta quantos defeitos estão como QA N1
                if (opcionalCores === "yes") {
                    linha.style = backgroundDefAberto + ";" + fonteDefAberto;
                    idRef.style = fonteDefAberto;
                    link.style = backgroundDefAberto + ";" + fonteDefAberto;
                    //slaRef.style = "color:black";
                }
            }
            if (nome.data === "Compasso N1") {
                contOpenComp++;
            }
            /*if (nome.data === "Matheus Canali Fossatti" && opcionalCores === "yes" || nome.data === "Laerte Loser" && opcionalCores === "yes") {
                linha.style = backgroundDefAberto + ";" + fonteDefAberto;
                idRef.style = fonteDefAberto;
                link.style = backgroundDefAberto + ";" + fonteDefAberto;
            }*/
            for (var cont = 0; cont < sistemasx.length; cont++) {
                if (triagem === 'sim') {
                    if (nome.data === "QA N1" && (status.data === "Reopened" || status.data === "Pending Reject") && sistema.data === sistemasx[cont] || nome.data === "QA Gestao Ambientes" && sistema.data === sistemasx[cont] || nome.data === "Compasso N1" && sistema.data === sistemasx[cont]) {
                        sistemas.push(" " + sistema.data);
                        contSistema++;
                    }
                } else {
                    if (nome.data === "QA N1" && sistema.data === sistemasx[cont] || nome.data === "QA Gestao Ambientes" && sistema.data === sistemasx[cont] || nome.data === "Compasso N1" && sistema.data === sistemasx[cont]) {
                        sistemas.push(" " + sistema.data);
                        contSistema++;
                    }
                }
            }

            //####################################### CORES SLA
            if(opcionalCores === "yes"){
            //SLA ATENDIMENTO
            if (slaData >= 20 && (nome.data === "QA N1" || nome.data === "QA Gestao Ambientes" || nome.data === "Compasso N1") && slaArray[1] === "Minute(s)") {
                slaRef.style = "background-color:goldenrod; color: black";
            }
            if (slaData >= 30 && (nome.data === "QA N1" || nome.data === "QA Gestao Ambientes" || nome.data === "Compasso N1") && slaArray[1] === "Minute(s)") {
                slaRef.style = "background-color:tomato; color: black";
            }

            //SLA ENCAMINHAMENTO
            if ( ambientes == "nao"){
            if (slaData >= 35 && nome.data != "QA N1" && nome.data != "Compasso N1" && nome.data != "QA Gestao Ambientes" && slaArray[1] === "Minute(s)") {
                 slaRef.style = "background-color:goldenrod; color: black";
            }
            if (slaData >= 1 && slaArray[1] === "Hour(s)" || slaData >= 1 && slaArray[1] === "Day(s)" || slaData >= 45 && slaArray[1] === "Minute(s)") {
                slaRef.style = "background-color:tomato; color: black";
            }
            }
            if ( ambientes == "sim"){
            if (slaData >= 80 && nome.data != "QA N1" && nome.data != "Compasso N1" && nome.data != "QA Gestao Ambientes" && slaArray[1] === "Minute(s)") {
                 slaRef.style = "background-color:goldenrod; color: black";
            }
            if (slaData >= 2 && slaArray[1] === "Hour(s)" || slaData >= 1 && slaArray[1] === "Day(s)" || slaData >= 90 && slaArray[1] === "Minute(s)") {
                slaRef.style = "background-color:tomato; color: black";
            }
            }




            }

            //####################################### FIM CORES SLA

            for (cont = 0; cont < sistemasx.length; cont++) {
                if (triagem === 'sim') {
                    if (opcionalCores === "yes" && sistema.data === sistemasx[cont] && (nome.data === "Compasso N1")) {
                        sistemaRef.style = "color:green;font-weight: bold";
                        idRef.style = "color:green;font-weight: bold";
                    }
                } else {
                    if (opcionalCores === "yes" && sistema.data === sistemasx[cont] && (nome.data === "QA Gestao Ambientes" || nome.data === "Compasso N1" || nome.data === "QA N1")) {
                        sistemaRef.style = "color:green;font-weight: bold";
                        idRef.style = "color:green;font-weight: bold";
                    }
                }
            }
            /*for (cont = 0; cont < monitorarQc.length; cont++) {
                if (opcionalCores === "yes" && id.data === monitorarQc[cont]) {
                    sistemaRef.style = "color:green;font-weight: bold";
                    idRef.style = "color:green;font-weight: bold";
                    qcs.push(" \n" + id.data + " - " + sistema.data + " - " + sla.data);
                    contQcs++;
                }
            }*/
           for (cont = 0; cont < sistemasx.length; cont++) {
                if (opcionalCores === "yes" && id.data === sistemasx[cont]) {
                    sistemaRef.style = "color:red;font-weight: bold";
                    idRef.style = "color:red;font-weight: bold";
                    qcs.push(" \n" + id.data + " - " + sistema.data + " - " + sla.data);
                    contQcs++;
                }
            }
            if (severity.data === "4-Show Stopper" && opcionalCores === "yes") {
                severityRef.style = "font-weight: bold; color:red";
            }
            if (nome.data === "Compasso N1") {
                if (opcionalCores === "yes") {
                    linha.style = backgroundDefAberto + ";" + fonteDefAberto;
                    idRef.style = fonteDefAberto;
                    link.style = backgroundDefAberto + ";" + fonteDefAberto;
                    linha.childNodes[0].style = "background-color:#8defd1; color: black";
                }
            }
           if (triagem !== 'sim')  {
                if (nome.data === "QA N1") {
                    if (opcionalCores === "yes") {
                        linha.childNodes[0].style = "background-color:#8defd1; color: black";
                    }
                }
            }

			 if (ambientes == "sim" && ambientesBug == "sim") {
                 if (nome.data === "QA Gestao Ambientes" && type.data === "Bug" && status.data != "Ready to Application") {
                    linha.style = "background-color:tomato; color: black";
                    idRef.style = "color:black";
                    link.style = backgroundDefAberto + ";" + fonteDefAberto;
                    linha.childNodes[0].style = "background-color:#8defd1; color: black";
                    contTicket++;
                }
             }

        }
        var contOpenVermelho = document.createElement('span');
        contOpenVermelho.setAttribute('style', "color: red");
        contOpenVermelho.innerHTML = contOpen
        className('ui-datatable-header')[0].childNodes[6].textContent = ' SEM ATENDIMENTO: '
        className('ui-datatable-header')[0].appendChild(contOpenVermelho);
        var finalCont = document.createElement('span');
        finalCont.innerHTML = ')'
        className('ui-datatable-header')[0].appendChild(finalCont);

        // ---------------------------------------------------""""AQUI AVISOS""""----------------------------------------------------------------
        var tit = 'limpo';
        if (ambientes === 'sim') {
            tit = 'VIVO AMBIENTES';

        } else {
            tit = 'VIVO N1';
        }

        if (contMe !== 0 && contSistema !== 0 && avisoOpcional === "yes") {
            GM_notification({
                text: "Atualmente " + contOpen + " defeito(s) aberto(s)!" + " " + contOpenComp + " Compasso N1" +
                    "\nVocê está com " + contMe + " defeito(s)!" + "\n" + contSistema + " sistema(s) escolhido(s) em aberto: " + sistemas,
                timeout: tempoVidaNotif,
                title: tit
            });
        } else if (contMe !== 0 && avisoOpcional === "yes") {
            GM_notification({
                text: "Atualmente " + contOpen + " defeito(s) aberto(s)!" + " " + contOpenComp + " Compasso N1" +
                    "\nVocê está com " + contMe + " defeito(s)!",
                timeout: tempoVidaNotif,
                title: tit
            });
        } else if (contSistema !== 0 && avisoOpcional === "yes") {
            GM_notification({
                text: "Atualmente " + contOpen + " defeito(s) aberto(s)!" + " " + contOpenComp + " Compasso N1" +
                    "\nVocê não possui defeitos" + "\n" + contSistema + " sistema(s) escolhido(s) em aberto: " + sistemas,
                timeout: tempoVidaNotif,
                title: tit
            });
        } else if (avisoOpcional === "yes") {
            GM_notification({
                text: "Atualmente " + contOpen + " defeito(s) aberto(s)!" + " " + contOpenComp + " Compasso N1" +
                    "\nVocê não possui defeitos",
                timeout: tempoVidaNotif,
                title: tit
            });
        }
        if (contMe !== 0 && avisoOpcionalMeusDefeitos === "yes") {
            GM_notification({
                text: "Detalhado(s): " + defeitos,
                timeout: tempoVidaNotif,
                title: "MEUS QC'S"
            });
        }
        if ((meuStorage.getItem('nome') === "Hemili Roberta Acker Constantino" || meuStorage.getItem('nome') === "Ghiancarlo Weimann") && contPandora !== 0) {
           GM_notification({
                text: contPandora + " defeito(s) do PANDORA em aberto: " + pandoras,
                timeout: tempoVidaNotif,
                title: "PANDORAAAAAAAAAAAA"
            });
        }

        if (contTicket !== 0){
                GM_notification({
                text: "Bugs sem atendimento na fila",
                timeout: tempoVidaNotif,
                title: "TICKET MANAGER"
            });
        }
        /*if (contQcs !== 0) {
            GM_notification({
                text: "VOLTOOOU " + qcs,
                timeout: tempoVidaNotif,
                title: "VOLTOOOOOU"
            });
        }*/
        console.log("Total: " + tabela.childNodes.length + " defeitos");
    } catch (err) {
        var page_title = document.getElementsByClassName("page_title");
        if (avisoOpcional === "yes" && page_title !== null) {
            GM_notification({
                text: "Atualmente não existe defeito(s) aberto(s)!",
                timeout: tempoVidaNotif,
                title: tit
            });
        } else {
            GM_notification({
                text: "Página não foi carregada!",
                timeout: tempoVidaNotif,
                title: tit
            });
        }
        console.log(err);
    }
}


function stylePage(){

className('ui-button')[0].style.display = "none";

}
