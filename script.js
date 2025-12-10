// --- VARIÁVEIS GLOBAIS ---
var problemasResolvidos = 0;

// --- 1. Contador Simples ---
function incrementarContador() {
    problemasResolvidos++;
    document.getElementById('contador-tatico').innerHTML = problemasResolvidos;
    if (problemasResolvidos % 5 === 0) {
        alert("Parabéns! Você resolveu " + problemasResolvidos + " problemas. Ótimo treino!");
    }
}

// --- 2. Estrutura de Seleção Múltipla (Regra do Dia) ---
function mostrarRegraDoDia() {
    var hoje = new Date();
    var dia = hoje.getDay(); 
    var regraDoDia = "Foco total!";

    switch(dia) {
        case 0: // Domingo
            regraDoDia = "Domingo de Estudo: Reveja o final de partida Rei e Torre vs Rei.";
            break;
        case 1: // Segunda
            regraDoDia = "Foco no Desenvolvimento Rápido: Tire as peças menores do lugar!";
            break;
        case 3: // Quarta
            regraDoDia = "Dia de Roque: Garanta a segurança do seu Rei o mais rápido possível.";
            break;
        case 5: // Sexta
            regraDoDia = "Sexta Tática: Dedique 30 minutos a táticas de Mate em 2!";
            break;
        default:
            regraDoDia = "Lembre-se: Controle o centro do tabuleiro (d4, e4, d5, e5)!";
    }
    
    document.getElementById('regra-dinamica').innerHTML = "Regra do Dia: <strong>" + regraDoDia + "</strong>";

    alert("Atenção, Mestre do Xadrez! " + regraDoDia);
}

// --- 3. Destaque de Peças (Nova funcionalidade) ---
function destacarPeca(idDestaque) {
    const container = document.querySelector('.pecas-container');
    const todasPecas = container.querySelectorAll('.peca');

    todasPecas.forEach(peca => {
        // Remove classes antigas
        peca.classList.remove('selecionada');
        peca.classList.remove('esmaecida');

        if (peca.id === idDestaque) {
            // Se for a peça clicada, destaca
            peca.classList.add('selecionada');
        } else {
            // Se NÃO for a peça clicada, esmaece
            peca.classList.add('esmaecida');
        }
    });
}


// --- 4. Manipulação de Conteúdo (Movimento das Peças - Completa) ---
function mostrarMovimento(peca) {
    let resumo = "";
    
    switch(peca) {
        case 'rei':
            resumo = "O **Rei** é a peça mais importante. Ele se move apenas uma casa em qualquer direção (horizontal, vertical ou diagonal). Lembre-se, o Rei não pode ser capturado!";
            break;
        case 'rainha':
            resumo = "A **Rainha** é a peça mais poderosa. Ela pode se mover quantas casas quiser na horizontal, vertical ou diagonal.";
            break;
        case 'torre':
            resumo = "A **Torre** se move quantas casas quiser, apenas na vertical ou horizontal (linha reta). É vital para o Roque!";
            break;
        case 'bispo':
            resumo = "O **Bispo** se move quantas casas quiser, mas somente na diagonal. Cada Bispo fica em uma cor de casa (clara ou escura) durante todo o jogo.";
            break;
        case 'cavalo':
            resumo = "O **Cavalo** se move em 'L' (duas casas em uma direção e uma perpendicular). É a única peça que pode pular outras peças!";
            break;
        case 'peao':
            resumo = "O **Peão** se move apenas uma casa para frente (duas na primeira jogada) e captura na diagonal. É a única peça que não volta. Ele é promovido se chegar ao final do tabuleiro.";
            break;
        default:
            resumo = "Peça não reconhecida. Clique em uma das figuras acima.";
    }

    document.getElementById('detalhe-movimento').innerHTML = 
        `<h3>Movimento do ${peca.toUpperCase()}</h3><p>${resumo}</p>`;
}

// --- 5. Evento onload (Boas-vindas - Atualizado) ---
window.onload = function() {
    // Verifica se o elemento com o ID 'body-principal' existe na página
    if (document.getElementById('body-principal')) {
        alert("Bem-vindo ao Xadrez do Zero! Seu projeto está carregado com Float, Flexbox e JavaScript.");
    }
};

// --- 6. Botão Voltar ao Topo (Nova funcionalidade) ---

// Obtém o elemento do botão
const btnTopo = document.getElementById("btn-topo");

// Função para mostrar ou esconder o botão
function toggleBtnTopo() {
    // Se a rolagem vertical for maior que 300 pixels, o botão é visível
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.opacity = "1";
        btnTopo.style.visibility = "visible";
    } else {
        btnTopo.style.opacity = "0";
        btnTopo.style.visibility = "hidden";
    }
}

// Adiciona o event listener para monitorar a rolagem da janela
window.onscroll = function() {
    toggleBtnTopo();
};

// Adiciona a funcionalidade de rolagem suave (opcional, mas recomendado)
btnTopo.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link (#)

    // Rolagem suave para o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// A função window.onload existente precisa ser mantida:
window.onload = function() {
    // Verifica se o elemento com o ID 'body-principal' existe na página
    if (document.getElementById('body-principal')) {
        alert("Bem-vindo ao Xadrez do Zero! Seu projeto está carregado com Float, Flexbox e JavaScript.");
    }
};