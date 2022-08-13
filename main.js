
var tentativas = 6;
var tamanho = 5;
var row = 0;
var col = 0; 
var gameOver = false;
var listaPalavra = ["sagaz","amago","negro","exito","mexer","termo","nobre","senso","algoz","afeto","plena","etica","mutua","tenue","sutil",
"vigor","aquem","fazer","porem","audaz","assim","sanar","secao","inato","cerne","fosse","ideia","poder","moral","desde","torpe","muito",
"justo","honra","futil","sobre","anexo","quica","razao","etnia","icone","sonho","tange","egide","lapso","amigo","mutuo","expor","haver",
"habil","tempo","seara","dengo","entao","pesar","avido","posse","genro","bocal","coser","ardil","causa","corja","dizer","paria","prole",
"detem","tenaz","dever","graca","saber","obice","crivo","digno","apice","animo","ansia","ceder","brado","comum","sendo","temor","gleba",
"culto","assaz","atroz","mundo","pauta","censo","fugaz","ainda","cozer","valha","denso","nenem","vicio","estar","forte","vulgo","reves",
"pudor","regra","dogma","louco","criar","banal","round","impor","saude","jeito","atras","ordem","tenro","pifio","desse","apraz","pedir",
"merce","reaca","clava","usura","prosa","feliz","juizo","servo","viril","sabio","coisa","manso","ontem","presa","falar","cunho","forma",
"devir","mesmo","meiga","afago","fluir","ebrio","plato","vendo","limbo","serio","guisa","magoa","posso","visar","heroi","temer","acaso", 
"pleno","puder","valor","cisma","bruma","lugar","impio","exodo","afins","obvio","certo","gerar","obter","crise","matiz","praxe","senil",
"havia","todos","venia","fluxo","enfim","abrir","tedio","ritmo","alibi","falso","uniao","tomar","garbo","visao","parvo","facil","valia",
"reter","pulha","vital","favor","bravo","grato","prumo","vivaz","legal","parco","genio","laico","burro","olhar","possa","levar","ameno",
"reles","tecer","casta","obito","prime","selar","morte","ranco","anelo","fator","sabia","rogar","noite","facam","citar","farsa","cabal",
"achar","falta","adiar","nicho","coeso","epico","cisao","ouvir","fardo","brega","viver","ativo","forca","sinto","gente","exato","imune",
"passo","sonso","amplo","dubio","linda","tendo","cesta","unico","sulco","lavra","leigo","sesta","calma","revel","deter","labor","vemos",
"rever","gesto","humor","arduo","atuar","pobre","feixe","ciume","carma","ajuda","tende","outro","otica","igual","velho","ponto","claro",
"toada","hiato","ideal","sonsa","debil","vacuo","terno","ambos","remir","fusao","probo","senão","fonte","marco","jovem","leito","advem",
"capaz","inata","terra","doido","horda","xeque","relva","tenra","ficar","algum","velar","cacar","serie","farao","lider","apoio","cocar",
"vazio","anuir","tanto","vimos","rigor","verso","entre","dorso","botar","frase","pouco","signo","sente","massa","coesa","cruel","raiva",
"mocao","prece","ambas","virus","feito","fauna","morar","peste","minha","papel","casto","covil","credo","preso","torco","ciclo","impar",
"faina","lazer","furor","brisa","docil","flora","chata","maior","vetor","trama","arido","blase","houve","pegar","nossa","aceso","beata",
"adeus","banzo","manha","setor","vulto","liame","breve","senda","seita","vasto","salvo","ardor","livro","peixe","morro","visse","chuva",
"pecha","sorte","atomo","comer","antro","prado","reger","plano","saiba","ocaso","segue","rezar","avaro","carro","nunca","alias","saida",
"otimo","aureo","junto","mudar","ancia","acima","chulo","serao","opcao","fitar","parar","jazia","fruir","treta","fugir","nacao","andar",
"grupo","bando","prazo","leite","gerir","lenda","motim","norma","tosco","alude","rapaz","brava","parte","epoca","campo","sinha","tenso",
"exame","idolo","aviao","arcar","psico","tirar","reino","malta","venal","agora","vilao","praga","soldo","praia","quota","risco","aonde",
"indio","corpo","antes","logro","sumir","preto","virao","traga","voraz","fixar","pompa","cheio","quase","texto","exijo","filho","certa",
"turba","copia","nodoa","oasis","apego","prova","alado","solto","caixa","turva","acesa","estao","messe","conta","grave","ligar","atrio",
"verbo","nivel","doido","verve","parva","apelo","tocar","aurea","lindo","trupe","pardo","festa","livre","fenda","fraco","dessa","sabia",
"opaco","afora","alcar","oxala","viria","navio","parca","jirau","retem","ficha","astro","manha","fatos","faixa","etico","elite","lidar",
"mente","fatal","glosa","supra","tinha","autor","firme","magia","grata","verba","cioso","bater","reses","pique","calda","cousa","junco",
"salve","deixa","prive","irmao","pagao","douto","macio","atual","molho","abriu","posto","light","supor","torso","sexta","vezes","turvo",
"sarca","longe","asilo","extra","igneo","judeu","curso","orfao","caber","drops","locus","porta","canon","besta","rouca","radio","desta",
"ruina","video","zelar","combo","vosso","nosso","vinha","culpa","bioma","menos","ereto","finda","paira","bonus","agudo","feudo","facto",
"advir","urgia","cutis","traco","meigo","surja","tetra","sitio","super","julia","facho","suave","autos","amena","rumor","tento","pilar",
"turma","cocho","clean","museu","chama","louca","lasso","geral","mosto","lápis","local","hobby","optar","podio","boato","medir","rubro",
"pacto","crime","refem","folga","brabo","penta","pareo","letal","ponha","drama","poema","aluno","mesma","movel","cacho","feroz","vigia",
"aroma","metie","hoste","chato","avida","cover","golpe","vetar","pasmo","monte","rival","teste","fazia","acude","piada","finjo","troca",
"coral","ecoar","axila","forum","licao","daqui","forem","riste","verde","poeta","carta","monge","plebe","clima","artur","passa","lesse",
"sucia","cetro","ebano","tacha","escol","ateia","calmo","briga","falha","venha","roupa","macro","busca","conto","sarau","idoso","plumo",
"cargo","viram","aviso","tribo","plaga","perco","fruto","tarde","legua","atimo","farta","chefe","berro","vento","grama","virar","civil",
"catre","arado","corso","surto","seixo","ornar","saldo","assar","traje","unica","bruta","pedra","manga","beijo","nuvem","amiga","fosso",
"recem","troca","manga","deste","casar","benca","giria","uteis","trato","magna","porte","vedar","sosia","depor","arfar","deram","canso",
"tiver","itens","amado","tutor","ambar","silvo","irado","grota","bazar","cifra","vazao","gabar","renda","pinho","perto","bruto","rural",
"jejum","laudo","pasma","midia","pavor","regio","inter","feita","tchau","segar","nesse","fossa","orgao","minar","odiar","troco","vagar",
"vadio","molde","clero","pomar","sotao","lesto","stand","aviar","amada","negar","mamae","cenho","canto","rocha","lesao","cinto","largo",
"paiol","visto","bolsa","horto","close","proto","ruido","ileso","morfo","densa","xucro","pugna","inves","marca","jogar","podar","vista",
"urdir","chula","ufano","penso","vasta","mocho","frota","civel","cheia","bulir","umido","piche","linha","esgar","peita","resto","apear",
"tenha","santo","misto","fundo","volta","manto","cerca","narco","logos","nessa","natal","monta","velha","jazer","fazes","findo","campa",
"ferpa","chaga","ardis","pólis","mover","letra","cosmo","etapa","retro","nesta","seiva","banto","matar","folia","coroa","venho","trago",
"punha","ceita","final","sabor","barro","redor","louro","rente","calça","sigla","salva","firma","arroz","dança","queda","farol","torna",
"coevo","folha","enjoo","lutar","solta","lousa","tumba","mimar","burra","baixa","neste","salmo","fugiu","ousar","todas","veloz","corar",
"zumbi","calor","longo","reler","forro","justa","vazia","penca","cacto","calvo","gueto","bedel","farto","chave","logia","mania","lucro",
"quite","repor","sugar","sexto","custo","subir","staff","ultra","urgir","passe","sadio","refil","viger","valer","versa","lento","louca",
"usual","cardo","nariz","corte","mouro","ceifa","modal","ferir","garra","anzol","abade","nesga","pluma","sofia","outra","dados","grife",
"diabo","raiar","pavio","trair","skate","pagar","roubo","pazes","dique","xampu","tacho","podre","disso","surra","filme","abono","caibo",
"cisco","farei","dobro","domar","digna","couve","quais","posta","notar","bruxa","barra","regem","volto","toque","buril"]
//peguei esta lista de palavras com cinco letras nesse site: https://www.dicio.com.br/palavras-com-cinco-letras/
var listaTentativa = []

listaTentativa = listaTentativa.concat(listaPalavra);

var palavra = listaPalavra[Math.floor(Math.random()*listaPalavra.length)].toUpperCase();
console.log("A resposta é " + palavra); // coloquei esse console.log para ajudar na correção da prova :)
window.onload = function(){
    start();
}


function start() {
    for (let r = 0; r < tentativas; r++) {
        for (let c = 0; c < tamanho; c++) {
            let celula = document.createElement("span");
            celula.id = r.toString() + "-" + c.toString();
            celula.classList.add("celula");
            celula.innerText = "";
            document.getElementById("board").appendChild(celula);
        }
    }

    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", ""],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "←" ]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyCelula = document.createElement("div");
            let key = currRow[j];
            keyCelula.innerText = key;
            if (key == "Enter") {
                keyCelula.id = "Enter";
            }
            else if (key == "←") {
                keyCelula.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyCelula.id = "Key" + key;
            } 

            keyCelula.addEventListener("click", keyEvt);

            if (key == "Enter") {
                keyCelula.classList.add("enter-key-celula");
            } else {
                keyCelula.classList.add("key-celula");
            }
            keyboardRow.appendChild(keyCelula);
        }
        document.body.appendChild(keyboardRow);
    }
    

    document.addEventListener("keyup", (e) => {
        input(e);
    })
}

function keyEvt() {
    e = { "code" : this.id };
    input(e); 
}

function input(e) {
    if (gameOver) return; 

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < tamanho) {
            let celulaAtual = document.getElementById(row.toString() + '-' + col.toString());
            if (celulaAtual.innerText == "") {
                celulaAtual.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= tamanho) {
            col -=1;
        }
        let celulaAtual = document.getElementById(row.toString() + '-' + col.toString());
        celulaAtual.innerText = "";
    }

    else if (e.code == "Enter") {
        atualizar();
    }
    
    if (!gameOver && row == tentativas) {
        gameOver = true;
        document.getElementById("mensagem").innerText ="Você perdeu! \n A palavra correta é: " + palavra;
    }
}

function atualizar() {
    let tentativa = "";
    document.getElementById("mensagem").innerText = "";

    for (let c = 0; c < tamanho; c++) {
        let celulaAtual = document.getElementById(row.toString() + '-' + c.toString());
        let letra = celulaAtual.innerText;
        tentativa += letra;
    }

    tentativa = tentativa.toLowerCase();
    console.log(tentativa);
    if(tentativa.length < tamanho) {
        document.getElementById("mensagem").innerText = "Por favor insira uma palavra com cinco letras! \n Esta palavra contém " + tentativa.length + " letra(s).";
        return;
    }
    else if (!listaTentativa.includes(tentativa)) {
        document.getElementById("mensagem").innerText = "Tente novamente";
        
    }
    
    let certo = 0;

    let contadorLetra = {};
    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];

        if (contadorLetra[letra]) {
           contadorLetra[letra] += 1;
        } 
        else {
           contadorLetra[letra] = 1;
        }
    }

    console.log(contadorLetra);

    for (let c = 0; c < tamanho; c++) {
        let celulaAtual = document.getElementById(row.toString() + '-' + c.toString());
        let letra = celulaAtual.innerText;

        if (palavra[c] == letra) {
            celulaAtual.classList.add("certo");

            let keyCelula = document.getElementById("Key" + letra);
            keyCelula.classList.remove("existe");
            keyCelula.classList.add("certo");

            certo += 1;
            contadorLetra[letra] -= 1;
        }

        if (certo == tamanho) {
            gameOver = true;
            document.getElementById("mensagem").innerText = "Parabéns você ganhou";

        }
    }

    console.log(contadorLetra);
    for (let c = 0; c < tamanho; c++) {
        let celulaAtual = document.getElementById(row.toString() + '-' + c.toString());
        let letra = celulaAtual.innerText;

        if (!celulaAtual.classList.contains("certo")) {
            if (palavra.includes(letra) && contadorLetra[letra] > 0) {
                celulaAtual.classList.add("existe");
                
                let keyCelula = document.getElementById("Key" + letra);
                if (!keyCelula.classList.contains("certo")) {
                    keyCelula.classList.add("existe");
                }
                contadorLetra[letra] -= 1;
            }
            else {
                celulaAtual.classList.add("ausente");
                let keyCelula = document.getElementById("Key" + letra);
                keyCelula.classList.add("ausente")
            }
        }
    }

    row += 1;
    col = 0; 
}