setTimeout(function(){
    window.location.reload(1);
}, temporefresh); // Tempo para atualização da página

try{
	//Declaração das váriaveis
    var tabela = document.getElementsByTagName('table'); //Retorna todas as tabelas como HTML Collection
    var tabela = tabela[2]; // Selectiona a tabela que precisamos no caso a 3ª
    var tabela = tabela.childNodes[2]; //Selectiona o 3º childNode da tabela onde está as linhas
    var defeitos = [];
    var sistemas = [];
    contMe = 0;
    contOpen = 0;
    contSistema = 0;
	
	//For principal, onde vai percorer cada linha por vez
    for (i = 0; i < tabela.childNodes.length; i++) {
		
		//Seleciona os elementos em questão dentro da linha
        linha = tabela.childNodes[i];
        nome = linha.childNodes[0];
        nome = nome.childNodes[0];
        id = linha.childNodes[1];
        idRef = id.childNodes[0];
        id = idRef.childNodes[0];
        sistemaRef = linha.childNodes[5];
		slaRef = linha.childNodes[9];
        sla = slaRef.childNodes[0];
        var slaArray = sla.data.split(" ");
        var slaData = parseInt(slaArray[0]);
        severityRef = linha.childNodes[7];
		projectRef = linha.childNodes[3];
		domainRef = linha.childNodes[2];
		
		//If's dos elementos para verificar se está vazio, evitando que o plugin pare de funcionar
        if (sistemaRef.childNodes.length !== 0){ 
            sistema = sistemaRef.childNodes[0];
        }else{
            sistema = sistemaRef;
            sistema.data = "Sem sistema";
        }
        if (domainRef.childNodes.length !== 0){
            domain = domainRef.childNodes[0];
        }else{
            domain = domainRef;
            domain.data = "Sem dominio";
        }
        if (projectRef.childNodes.length !== 0){
            project = projectRef.childNodes[0];
        }else{
            project = projectRef;
            project.data = "Sem projeto";
        }
        if (severityRef.childNodes.length !== 0){
            severity = severityRef.childNodes[0];
        }else{
            severity = severityRef;
            severity.data = "Sem prioridade";
        }
		
		//Montagem do elemento link, do ALM, dentro do elemento project em cada linha
        link = document.createElement('a');
        projectRef.removeChild(project);
        projectRef.appendChild(link);
        link = projectRef.childNodes[0];
        link.text = project.data;
        link.href = "td://"+project.data+"."+domain.data+".alm.vivo.com.br/qcbin/DefectsModule-000000004243046514?EntityType=IBug&&EntityID="+id.data;
        
		// Pinta os elementos importantes para ficar fácil a localização na tabela
        slaRef.style="color:black";
        if(nome.data === seunome) //Seu nome
        {
            contMe++;
            defeitos.push(" \n"+id.data+" - "+sistema.data+" - "+sla.data); //Guarda os sistemas que estão no seu nome
            console.log(id.data+" está comigo");
            if (opcionalcores === "yes"){
                linha.style = "background-color:#F0E68C";}
        }
        if(nome.data === "QA N1"){
            console.log("contOpen++");
            contOpen++; //Conta quantos defeitos estão como QA N1
            if (opcionalcores === "yes"){
                linha.style = corbg+";"+fonte;
                idRef.style = fonte;
                slaRef.style = "color:black";
            }
        }
        for (var cont = 0; cont < sistemasx.length; cont++){
            if(nome.data === "QA N1" && sistema.data === sistemasx[cont]){ //Sistemas escolhidos para avisar
				console.log("Encontrado");
				sistemas.push(" "+sistema.data);
				contSistema++;
            }
		}
        if(slaData >= 20 && nome.data === "QA N1" && slaArray[1] === "Minute(s)" && opcionalcores === "yes"){
            slaRef.style = "background-color:goldenrod; color: black";

        }
         if(slaData >= 30 && nome.data === "QA N1" && slaArray[1] === "Minute(s)" && opcionalcores === "yes"){
            slaRef.style = "background-color:tomato; color: black";

        }
        for (var cont = 0; cont < sistemasx.length; cont++){
			if(opcionalcores === "yes" && sistema.data === sistemasx[cont] && nome.data=== "QA N1"){
				  sistemaRef.style = "color:green";
				  idRef.style = "color:green";
			}
		}
        if(slaData >= 1 && slaArray[1] === "Hour(s)" && opcionalcores === "yes"){
            slaRef.style = "background-color:tomato; color: black";
        }
        if(severity.data === "4-Show Stopper" && opcionalcores === "yes"){
            severityRef.style = "font-weight: bold; color:red";
        }
    }

    // ---------------------------------------------------""""AQUI AVISOS""""----------------------------------------------------------------
    if(contMe !== 0 && contSistema !==0 && avisoOpcional === "yes"){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê está com "+contMe+" defeito(s)!"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "VIVO N1"});
        GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  //Opcional, avisa os QC's no seu nome
    }else if(contMe !== 0 && avisoOpcional === "yes"){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê está com "+contMe+" defeito(s)!", timeout: 5000, title: "VIVO N1"});
        GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  //Opcional, avisa os QC's no seu nome
    }

    else if(contSistema !==0 && avisoOpcional === "yes"){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê não possui defeitos"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "VIVO N1"});
    }
    else if(avisoOpcional === "yes"){
        GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                         "\nVocê não possui defeitos", timeout: 5000, title: "VIVO N1"});
    }
    console.log("Total: "+tabela.childNodes.length+" defeitos");
}
catch(err) {
	if(avisoOpcional === "yes"){
    GM_notification({text: "Atualmente não existe defeito(s) aberto(s)!", timeout: 5000, title: "VIVO N1"});
	}
    console.log(err);
}
