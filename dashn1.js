setTimeout(function(){
    window.location.reload(1);
}, temporefresh); // Tempo para atualização da página


var elem = document.getElementsByTagName('table');
var elem = elem[2];
var elem = elem.childNodes[2];
var defeitos = [];
var sistemas = [];
contMe = 0;
contOpen = 0;
contSistema = 0;
for (i = 0; i < elem.childNodes.length; i++) {
    row = elem.childNodes[i];
    nome = row.childNodes[0];
    nome = nome.childNodes[0];
    id = row.childNodes[1];
    id = id.childNodes[0];
    id = id.childNodes[0];
    sistema = row.childNodes[5];
    sistema = sistema.childNodes[0];
    sla = row.childNodes[9];
    sla = sla.childNodes[0];

    if(nome.data === seunome) //Seu nome
    {
        contMe++;
        defeitos.push(" \n"+id.data+" - "+sistema.data+" - "+sla.data);
        console.log(id.data+" está comigo");
    }
    if(nome.data === "QA N1"){
        console.log("contOpen++");
        contOpen++;
    }
    for (var cont = 0; cont < sistemasx.length; cont++){
      if(nome.data === "QA N1" && sistema.data === sistemasx[cont]) //Sistemas escolhidos para avisar
        {  console.log("Encontrado");
            sistemas.push(" "+sistema.data);
           contSistema++;
       }}
    //console.log(nome.data+" está com o defeito "+id.data+" do sistema "+sistema.data);
}
if(contMe !== 0 && contSistema !==0){
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê está com "+contMe+" defeito(s)!"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "VIVO N1"});
    GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  //Opcional, avisa os QC's no seu nome
}else if(contMe !== 0){
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê está com "+contMe+" defeito(s)!", timeout: 5000, title: "VIVO N1"});
    GM_notification({text: "Detalhado(s): "+defeitos, timeout: 5000, title: "MEUS QC'S" });  //Opcional, avisa os QC's no seu nome
}

else if(contSistema !==0){
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê não possui defeitos"+"\n"+contSistema+" sistema(s) escolhido(s) em aberto: "+sistemas, timeout: 5000, title: "VIVO N1"});
}
else{
    GM_notification({text: "Atualmente "+contOpen+" defeito(s) aberto(s)!"+
                "\nVocê não possui defeitos", timeout: 5000, title: "VIVO N1"});
}
console.log("Total: "+elem.childNodes.length+" defeitos");