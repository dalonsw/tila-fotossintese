// ==========================================
// TILA: A Plantinha Falante da Fase Clara
// Base de Conhecimento e Motor de NLP por Palavras-Chave
// ==========================================

const KNOWLEDGE_BASE = [
  {
    id: "o_que_e",
    keywords: ["que e", "fase clara", "fotoquimica", "resumo", "conceito", "definicao", "etapa clara", "fotossintese"],
    title: "1. O que é a Fase Clara?",
    tag: "CONCEITO FUNDAMENTAL",
    shortSpeech: "A Fase Clara é a primeira etapa da fotossíntese! Aqui nós transformamos a energia da luz solar em energia química na forma de ATP e NADPH!",
    fullDescription: "A Fase Clara (ou etapa fotoquímica) é a reação inicial da fotossíntese que depende diretamente da luz solar. As moléculas de clorofila absorvem fótons luminosos, energizam elétrons e quebram a água, convertendo energia solar em energia bioquímica (ATP e NADPH) e liberando oxigênio para a atmosfera.",
    latex: "2\\text{H}_2\\text{O} + 2\\text{NADP}^+ + 3\\text{ADP} + 3\\text{P}_i \\xrightarrow{\\text{Luz}} \\text{O}_2 + 2\\text{NADPH} + 2\\text{H}^+ + 3\\text{ATP}",
    interpretation: "MOLÉCULAS INICIAIS (Água + Luz + ADP + NADP⁺) → REAÇÃO FOTOQUÍMICA → PRODUTOS (O₂ liberado + ATP e NADPH com alta energia química prontos para alimentar a síntese de açúcares)."
  },
  {
    id: "onde_acontece",
    keywords: ["onde", "local", "lugar", "ocorre", "acontece", "tilacoide", "cloroplasto", "grana", "lumen", "estroma", "membrana"],
    title: "2. Onde o Processo Acontece?",
    tag: "LOCALIZAÇÃO CELULAR",
    shortSpeech: "Eu moro na membrana dos tilacoides, dentro dos cloroplastos! É aí que ficam meus fotossistemas e a ATP sintase!",
    fullDescription: "A Fase Clara ocorre estritamente na <strong>membrana dos tilacoides</strong>, que são estruturas em forma de sacos achatados organizados em pilhas (chamadas <em>grana</em>) no interior dos <strong>cloroplastos</strong> de plantas e algas. A água é quebrada no <em>lúmen</em> do tilacoide, e o ATP/NADPH são liberados no <em>estroma</em>.",
    latex: "\\text{Localização: Cloroplasto} \\rightarrow \\text{Membrana do Tilacoide} \\ (\\text{Lúmen} \\leftrightarrow \\text{Estroma})",
    interpretation: "A membrana fosfolipídica do tilacoide é indispensável porque ela separa o interior (lúmen) do estroma, permitindo criar um gradiente de prótons (H⁺) que gira a enzima ATP sintase."
  },
  {
    id: "moleculas",
    keywords: ["moleculas", "entra", "sai", "reagentes", "produtos", "participam", "ingredientes", "transformadas", "substancias"],
    title: "3. Quais Moléculas Participam? (Entram x Saem)",
    tag: "BALANÇO MOLECULAR",
    shortSpeech: "Entram água e luz, junto com ADP e NADP+. São transformados e saem gás oxigênio livre, além de ATP e NADPH cheios de energia!",
    fullDescription: "A dinâmica molecular da fase clara divide-se em:<br>" +
      "• <strong>Entram (Reagentes):</strong> Água (H₂O), Luz solar (fótons), ADP, Fosfato inorgânico (Pi) e NADP⁺.<br>" +
      "• <strong>São transformadas:</strong> A água sofre oxidação (perde elétrons e quebra); o NADP⁺ é reduzido ganhando elétrons; o ADP é fosforilado a ATP.<br>" +
      "• <strong>Saem (Produtos):</strong> Oxigênio gasoso (O₂ liberado para a atmosfera) e ATP + NADPH (que migram para o Ciclo de Calvin).",
    latex: "\\text{Reagentes: } 2\\text{H}_2\\text{O} + 2\\text{NADP}^+ + 3\\text{ADP} + 3\\text{P}_i \\longrightarrow \\text{Produtos: } \\text{O}_2\\uparrow + 2\\text{NADPH} + 3\\text{ATP}",
    interpretation: "Nada é perdido: os elétrons da água terminam no NADPH, o oxigênio vira ar que respiramos, e os prótons da água geram ATP!"
  },
  {
    id: "equacoes",
    keywords: ["equacao", "equacoes", "formula", "quimica", "reacao", "reacoes", "hill", "fotolise", "semi-reacao", "3 pontos"],
    title: "4. As Principais Equações Químicas (Peso 3,0)",
    tag: "EQUAÇÕES QUÍMICAS & INTERPRETAÇÃO",
    shortSpeech: "Preste muita atenção nas equações! Elas mostram a Fotólise da Água, a redução do NADP+ e a síntese de ATP pela ATP sintase!",
    fullDescription: "Para gabaritar o critério de maior pontuação do projeto (3,0 pontos), não basta decorar as equações: é preciso interpretá-las biologicamente:<br><br>" +
      "<strong>1) Fotólise da Água (Reação de Hill no Fotossistema II):</strong><br>" +
      "2H₂O → O₂ + 4H⁺ + 4e⁻<br><em>Interpretação:</em> A luz quebra 2 moléculas de água no lúmen do tilacoide. Os elétrons repõem a clorofila P680 oxidada, os prótons H⁺ aumentam a acidez do lúmen e o O₂ é liberado.<br><br>" +
      "<strong>2) Redução do NADP⁺ (no Fotossistema I):</strong><br>" +
      "2NADP⁺ + 4e⁻ + 2H⁺ → 2NADPH<br><em>Interpretação:</em> Os elétrons energizados pela luz são transferidos pela ferredoxina-NADP⁺ redutase ao aceptor final NADP⁺.<br><br>" +
      "<strong>3) Fotofosforilação (Síntese de ATP):</strong><br>" +
      "3ADP + 3Pi → 3ATP + 3H₂O<br><em>Interpretação:</em> O refluxo quimiosmótico dos prótons H⁺ move o rotor da ATP sintase, armazenando energia em ligações de fosfato.",
    latex: "2\\text{H}_2\\text{O} + 2\\text{NADP}^+ + 3\\text{ADP} + 3\\text{P}_i \\xrightarrow{h\\nu} \\text{O}_2 + 2\\text{NADPH} + 2\\text{H}^+ + 3\\text{ATP}",
    interpretation: "Equação Global da Fase Fotoquímica: Acoplamento perfeito entre transporte de elétrons, fotólise e fosforilação quimiosmótica."
  },
  {
    id: "fotolise",
    keywords: ["fotolise", "quebra da agua", "agua", "oxigenio", "h2o", "o2"],
    title: "Fotólise da Água (Reação de Hill)",
    tag: "ETAPA DO FOTOSSISTEMA II",
    shortSpeech: "A luz quebra a molécula de água em prótons, elétrons e oxigênio! É daqui que vem o ar que todo o planeta respira!",
    fullDescription: "No Fotossistema II (P680), o Complexo de Evolução de Oxigênio (centro de Manganês) catalisa a oxidação da água. A clorofila excitada perde seus elétrons e 'rouba' os elétrons da molécula de H₂O para se estabilizar.",
    latex: "2\\text{H}_2\\text{O} \\xrightarrow{\\text{Complexo de Manganês / Luz}} \\text{O}_2\\uparrow + 4\\text{H}^+ + 4e^-",
    interpretation: "A água funciona como a grande doadora primária de elétrons de toda a biosfera terrestre. Sem a água, a fotossíntese pararia imediatamente!"
  },
  {
    id: "energia",
    keywords: ["energia", "atp", "nadph", "adp", "fotofosforilacao", "quimiosmose", "gradiente", "protons", "bateria"],
    title: "5. O Papel da Energia Celular (ATP e NADPH)",
    tag: "BIOENERGÉTICA CELULAR",
    shortSpeech: "A Fase Clara funciona como uma usina solar que carrega duas baterias celulares: o ATP que é a energia imediata, e o NADPH que é o poder redutor!",
    fullDescription: "A energia dos fótons é inicialmente convertida em energia eletroquímica: a passagem de elétrons pela cadeia transportadora bombeia prótons H⁺ para dentro do lúmen do tilacoide. A alta concentração de H⁺ gera uma <strong>força próton-motriz</strong>. Ao passarem pela enzima <strong>ATP Sintase</strong>, essa pressão mecânica sintetiza ATP a partir de ADP + Pi (hipótese quimiosmótica de Peter Mitchell).",
    latex: "\\Delta\\mu_{\\text{H}^+} \\xrightarrow{\\text{ATP Sintase}} \\text{ADP} + \\text{P}_i \\longrightarrow \\text{ATP}",
    interpretation: "O ATP fornece a energia livre termodinâmica e o NADPH fornece os elétrons ricos em energia necessários para que a Fase Escura consiga fixar carbono em glicose."
  },
  {
    id: "funcao_importancia",
    keywords: ["funcao", "importancia", "por que", "para que serve", "objetivo", "celula vegetal", "vida"],
    title: "6. Qual a Função e Importância desse Processo?",
    tag: "FUNÇÃO BIOLÓGICA",
    shortSpeech: "A importância é gigantesca: sem a Fase Clara, a planta não produz alimento e todo o planeta fica sem oxigênio!",
    fullDescription: "1. <strong>Manutenção da Vida na Terra:</strong> Gera praticamente todo o oxigênio da atmosfera terrestre através da fotólise da água.<br>" +
      "2. <strong>Autotrofia:</strong> Permite que os vegetais produzam sua própria energia sem depender de outros organismos.<br>" +
      "3. <strong>Sustento das Cadeias Alimentares:</strong> Fornece o ATP e NADPH que fixam o CO₂ na fase escura, originando carboidratos consumidos por todos os seres heterótrofos.",
    latex: "\\text{Luz Solar} \\xrightarrow{\\text{Fase Clara}} \\text{ATP + NADPH} \\xrightarrow{\\text{Ciclo de Calvin}} \\text{Glicose (Alimento)}",
    interpretation: "A Fase Clara é a porta de entrada de praticamente toda a energia que move a biosfera do nosso planeta."
  },
  {
    id: "desafio",
    keywords: ["interrompido", "parar", "desafio", "sem luz", "escuro", "morrer", "aconteceria", "interromper", "bloqueio", "pergunta desafio"],
    title: "7. Pergunta-Desafio: E se a Fase Clara for Interrompida?",
    tag: "PERGUNTA-DESAFIO OFICIAL (UNEX)",
    shortSpeech: "Se eu parar a Fase Clara, não produzo ATP nem NADPH! O Ciclo de Calvin trava, a célula fica sem glicose e morre por acúmulo de radicais livres!",
    fullDescription: "<strong>Resposta oficial fundamentada para a banca:</strong><br><br>" +
      "Se a Fase Clara for interrompida (por exemplo, por escuridão contínua ou herbicidas como o DCMU/Diuron que bloqueiam o transporte de elétrons):<br>" +
      "1. <strong>Cessa a produção de ATP e NADPH:</strong> O Ciclo de Calvin no estroma para por falta de substrato energético e poder redutor.<br>" +
      "2. <strong>Colapso Metabólico da Fixação de Carbono:</strong> A planta perde a capacidade de sintetizar glicose e amido, esgotando suas reservas energéticas.<br>" +
      "3. <strong>Estresse Oxidativo e Morte Celular:</strong> A clorofila excitada sem rota de escoamento para os elétrons reage com o oxigênio gerando <em>Espécies Reativas de Oxigênio (EROs)</em>, que causam peroxidação lipídica das membranas tilacoidais e morte celular.",
    latex: "\\text{Bloqueio de Elétrons} \\longrightarrow \\text{Zelo de EROs} \\ (\\text{O}_2^{\\bullet-}, \\ \\text{H}_2\\text{O}_2) \\longrightarrow \\text{Lise e Morte Celular}",
    interpretation: "A interrupção afeta não apenas a síntese de açúcares, mas destrói fisicamente o cloroplasto por sobrecarga fototóxica."
  },
  {
    id: "curiosidades",
    keywords: ["curiosidade", "curiosidades", "aplicacao", "cotidiano", "herbicida", "diuron", "paraquat", "dia a dia", "biotecnologia"],
    title: "8. Curiosidades e Aplicações no Cotidiano",
    tag: "APLICAÇÃO NO COTIDIANO",
    shortSpeech: "Você sabia que o oxigênio que você respira veio da água e não do gás carbônico? E sabia que herbicidas agrícolas atacam justamente a Fase Clara?",
    fullDescription: "• <strong>De onde vem o Oxigênio?</strong> Antigamente pensava-se que o O₂ vinha da quebra do gás carbônico (CO₂). Experimentos com isótopos de Oxigênio-18 comprovaram que 100% do O₂ atmosférico provém da quebra da água (H₂O) na Fase Clara!<br>" +
      "• <strong>Herbicidas na Agricultura:</strong> Compostos comerciais como o <em>Diuron (DCMU)</em> competem pelo sítio de plastoquinona no Fotossistema II, impedindo a passagem de elétrons e matando ervas daninhas por inanição fotossintética.<br>" +
      "• <strong>Painéis Fotovoltaicos Artificiais:</strong> Pesquisadores utilizam os princípios dos fotossistemas para criar 'folhas artificiais' capazes de gerar hidrogênio verde a partir da quebra da água.",
    latex: "2\\text{H}_2^{18}\\text{O} + \\text{CO}_2 \\xrightarrow{h\\nu} ^{18}\\text{O}_2\\uparrow + (\\text{CH}_2\\text{O}) + \\text{H}_2\\text{O}",
    interpretation: "A comprovação isotópica de Ruben e Kamen (1941) marcou a história da bioquímica e comprovou a Reação de Hill."
  },
  {
    id: "fontes",
    keywords: ["fontes", "referencias", "bibliografia", "livro", "lehninger", "artigos", "taiz", "pesquisa"],
    title: "9. Fontes Científicas Confiáveis (Normas UNEX)",
    tag: "REFERÊNCIAS ACADÊMICAS",
    shortSpeech: "Minhas respostas foram baseadas nas maiores autoridades mundiais da Bioquímica e Fisiologia Vegetal!",
    fullDescription: "Conforme exigido pelo regulamento do projeto, o conteúdo foi validado nas seguintes fontes acadêmicas:<br>" +
      "1. <strong>NELSON, David L.; COX, Michael M.</strong> <em>Princípios de Bioquímica de Lehninger</em>. 7ª ed. Porto Alegre: Artmed, 2018 (Capítulo 19: Fotofosforilação).<br>" +
      "2. <strong>TAIZ, Lincoln; ZEIGER, Eduardo et al.</strong> <em>Fisiologia e Desenvolvimento Vegetal</em>. 6ª ed. Porto Alegre: Artmed, 2017 (Capítulo 7: Fotossíntese: As Reações Luminosas).<br>" +
      "3. <strong>CAMPBELL, Neil A. et al.</strong> <em>Biologia de Campbell</em>. 10ª ed. Porto Alegre: Artmed, 2015.",
    latex: "\\text{Bioquímica de Lehninger (Cap. 19)} \\ + \\ \\text{Fisiologia Vegetal de Taiz & Zeiger (Cap. 7)}",
    interpretation: "Todas as etapas, estequiometrias e dados bioenergéticos estão em estrita conformidade com a literatura universitária internacional."
  }
];

// Fallback quando não encontra palavra-chave
const DEFAULT_FALLBACK = {
  title: "Tópicos da Fase Clara",
  tag: "EXPLORE COM A TILA",
  shortSpeech: "Hummm, não entendi tudo! Mas você pode me perguntar sobre: as equações químicas, reagentes e produtos, fotólise da água, onde acontece, ou a Pergunta-Desafio!",
  fullDescription: "Tente perguntar por palavras-chave como:<br>" +
    "• <em>'onde acontece'</em><br>" +
    "• <em>'principais equações químicas'</em><br>" +
    "• <em>'fotólise da água'</em><br>" +
    "• <em>'reagentes e produtos'</em><br>" +
    "• <em>'qual a função do ATP e NADPH?'</em><br>" +
    "• <em>'pergunta desafio se for interrompido'</em>",
  latex: "\\text{Fase Clara: } \\text{H}_2\\text{O} + \\text{Luz} + \\text{ADP} + \\text{NADP}^+ \\longrightarrow \\text{O}_2 + \\text{ATP} + \\text{NADPH}",
  interpretation: "Clique em um dos botões coloridos de perguntas ou utilize o microfone para falar comigo!"
};

// ==========================================
// ESTADO DO APP E ELEMENTOS DOM
// ==========================================
const state = {
  atpCount: 0,
  nadphCount: 0,
  o2Count: 0,
  soundEnabled: true,
  isTalking: false,
  isListening: false
};

const dom = {
  plantBox: document.getElementById('plant-box'),
  plantSvg: document.getElementById('plant-svg'),
  speechBubble: document.getElementById('speech-bubble'),
  speechText: document.getElementById('tila-speech-text'),
  sunGlow: document.getElementById('sun-glow'),
  mouthSmile: document.getElementById('mouth-smile'),
  mouthOpen: document.getElementById('mouth-open'),
  particles: document.getElementById('particles-overlay'),
  
  // Stats
  valAtp: document.getElementById('val-atp'),
  valNadph: document.getElementById('val-nadph'),
  valO2: document.getElementById('val-o2'),

  // Actions
  btnSun: document.getElementById('btn-act-sun'),
  btnWater: document.getElementById('btn-act-water'),
  btnDark: document.getElementById('btn-act-dark'),
  btnTickle: document.getElementById('btn-act-tickle'),

  // Info Card
  cardTag: document.getElementById('card-tag'),
  cardTitle: document.getElementById('card-title'),
  cardDesc: document.getElementById('card-desc'),
  cardEquation: document.getElementById('card-equation'),
  cardInterpretation: document.getElementById('card-eq-interpretation'),

  // Chat
  chatInput: document.getElementById('chat-input'),
  btnSend: document.getElementById('btn-send'),
  btnVoice: document.getElementById('btn-voice-input'),
  voiceStatus: document.getElementById('voice-status'),
  chips: document.querySelectorAll('.chip'),

  // Header & Modal
  btnSound: document.getElementById('btn-sound-toggle'),
  btnQr: document.getElementById('btn-show-qrcode'),
  qrModal: document.getElementById('qr-modal'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  currentUrlDisplay: document.getElementById('current-url-display'),
  qrImage: document.getElementById('qr-image')
};

// ==========================================
// MOTOR DE BUSCA POR PALAVRAS-CHAVE
// ==========================================
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s]/g, " ")
    .trim();
}

function findBestTopic(rawQuery) {
  const cleanQuery = normalizeText(rawQuery);
  let bestMatch = null;
  let maxScore = 0;

  for (const topic of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of topic.keywords) {
      const cleanKw = normalizeText(kw);
      if (cleanQuery.includes(cleanKw)) {
        // Peso proporcional ao tamanho da palavra-chave
        score += cleanKw.split(" ").length * 3;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = topic;
    }
  }

  return maxScore > 0 ? bestMatch : DEFAULT_FALLBACK;
}

// ==========================================
// SÍNTESE DE VOZ (TEXT-TO-SPEECH) COM BOCA ANIMADA
// ==========================================
let synth = window.speechSynthesis;

function speak(text) {
  if (!state.soundEnabled || !synth) return;

  // Cancela falas anteriores
  synth.cancel();

  const cleanSpeech = text.replace(/<[^>]*>?/gm, '').replace(/[\\${}_]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanSpeech);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.05; // Levemente animado
  utterance.pitch = 1.45; // Tom agudo e fofo de plantinha infantil/cartoon

  // Encontrar voz em português se disponível
  const voices = synth.getVoices();
  const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('PT'));
  if (ptVoice) utterance.voice = ptVoice;

  utterance.onstart = () => {
    state.isTalking = true;
    startMouthAnimation();
  };

  utterance.onend = () => {
    state.isTalking = false;
    stopMouthAnimation();
  };

  utterance.onerror = () => {
    state.isTalking = false;
    stopMouthAnimation();
  };

  synth.speak(utterance);
}

let mouthInterval = null;
function startMouthAnimation() {
  document.getElementById('plant-box').classList.add('is-talking');
  if (mouthInterval) clearInterval(mouthInterval);
  mouthInterval = setInterval(() => {
    if (!state.isTalking) return;
    const isOpen = dom.mouthOpen.style.display !== 'none';
    dom.mouthOpen.style.display = isOpen ? 'none' : 'block';
    dom.mouthSmile.style.display = isOpen ? 'block' : 'none';
  }, 160);
}

function stopMouthAnimation() {
  document.getElementById('plant-box').classList.remove('is-talking');
  if (mouthInterval) clearInterval(mouthInterval);
  dom.mouthOpen.style.display = 'none';
  dom.mouthSmile.style.display = 'block';
}

// ==========================================
// ATUALIZAÇÃO DA INTERFACE & KATEX
// ==========================================
function renderMath(latexString) {
  if (window.katex && dom.cardEquation) {
    try {
      katex.render(latexString, dom.cardEquation, {
        throwOnError: false,
        displayMode: true
      });
    } catch (e) {
      dom.cardEquation.innerText = latexString;
    }
  } else {
    dom.cardEquation.innerText = latexString;
  }
}

function displayTopic(topic) {
  // Atualiza balão de fala da Tila
  dom.speechText.innerHTML = topic.shortSpeech;

  // Atualiza painel científico detalhado
  dom.cardTag.innerText = topic.tag;
  dom.cardTitle.innerText = topic.title;
  dom.cardDesc.innerHTML = topic.fullDescription;
  dom.cardInterpretation.innerHTML = `<strong>Interpretação Bioquímica:</strong> ${topic.interpretation}`;
  renderMath(topic.latex);

  // Faz a Tila falar
  speak(topic.shortSpeech);

  // Micro animação de reação
  dom.plantSvg.style.transform = 'scale(1.06)';
  setTimeout(() => {
    dom.plantSvg.style.transform = 'scale(1)';
  }, 250);
}

// ==========================================
// SPAWN DE PARTÍCULAS INTERATIVAS
// ==========================================
function spawnParticle(emoji) {
  const p = document.createElement('div');
  p.className = 'particle-fx';
  p.innerText = emoji;
  const rect = dom.plantBox.getBoundingClientRect();
  p.style.left = `${Math.random() * 200 + 60}px`;
  p.style.bottom = `${Math.random() * 80 + 100}px`;
  dom.plantBox.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 1800);
}

// ==========================================
// AÇÕES DO TALKING TOM (BOTÕES DE TOQUE)
// ==========================================
dom.btnSun.addEventListener('click', () => {
  state.atpCount += 3;
  state.nadphCount += 2;
  dom.valAtp.innerText = state.atpCount;
  dom.valNadph.innerText = state.nadphCount;

  dom.sunGlow.style.opacity = '1';
  dom.sunGlow.style.transform = 'scale(1.2)';
  for (let i = 0; i < 4; i++) setTimeout(() => spawnParticle('⚡'), i * 150);

  const topic = KNOWLEDGE_BASE.find(t => t.id === 'energia');
  dom.speechText.innerHTML = "Oba, luz solar! Os fótons excitaram meus elétrons e ativaram a síntese de <strong>ATP</strong> e <strong>NADPH</strong>!";
  speak("Oba, luz solar! Meus fotossistemas absorveram fótons e sintetizaram ATP e NADPH!");
  displayTopic(topic);

  setTimeout(() => {
    dom.sunGlow.style.opacity = '0.4';
    dom.sunGlow.style.transform = 'scale(1)';
  }, 1200);
});

dom.btnWater.addEventListener('click', () => {
  state.o2Count += 1;
  dom.valO2.innerText = state.o2Count;

  for (let i = 0; i < 4; i++) setTimeout(() => spawnParticle('🫧'), i * 120);

  const topic = KNOWLEDGE_BASE.find(t => t.id === 'fotolise');
  dom.speechText.innerHTML = "Glup, glup! Água fresquinha! Estou realizando a <strong>Fotólise da Água</strong> e liberando oxigênio O₂!";
  speak("Que delícia! Estou quebrando a água na fotólise e liberando oxigênio puro para você respirar!");
  displayTopic(topic);
});

dom.btnDark.addEventListener('click', () => {
  // Simula a Pergunta-Desafio (Interrupção)
  dom.sunGlow.style.opacity = '0';
  document.querySelector('.stage-section').style.filter = 'brightness(0.65)';
  dom.plantSvg.style.transform = 'rotate(-6deg) translateY(12px)';

  const topic = KNOWLEDGE_BASE.find(t => t.id === 'desafio');
  dom.speechText.innerHTML = "Socorro! Ficou tudo escuro! Sem luz meus tilacoides não funcionam, o ATP acaba e a célula entra em colapso!";
  speak("Socorro, apagaram a luz! Sem luz, a Fase Clara para, o Ciclo de Calvin trava e a célula vegetal morre!");
  displayTopic(topic);

  setTimeout(() => {
    document.querySelector('.stage-section').style.filter = 'brightness(1)';
    dom.plantSvg.style.transform = 'none';
    dom.sunGlow.style.opacity = '0.4';
  }, 4000);
});

dom.btnTickle.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) setTimeout(() => spawnParticle('✨'), i * 100);
  dom.plantSvg.style.transform = 'scale(1.1) rotate(5deg)';
  setTimeout(() => dom.plantSvg.style.transform = 'scale(1.1) rotate(-5deg)', 150);
  setTimeout(() => dom.plantSvg.style.transform = 'none', 300);

  const frases = [
    "Hahaha! Isso faz cócegas nas minhas membranas tilacoidais!",
    "Hihihi! Cuidado para não derrubar meus fotossistemas!",
    "Cócegas! Sabia que eu amo clorofila 'a' e 'b'?"
  ];
  const f = frases[Math.floor(Math.random() * frases.length)];
  dom.speechText.innerText = f;
  speak(f);
});

// Clique direto na plantinha para cócegas
dom.plantBox.addEventListener('click', (e) => {
  if (!e.target.closest('.action-pill') && !e.target.closest('.speech-bubble')) {
    dom.btnTickle.click();
  }
});

// ==========================================
// PROCESSAMENTO DO CHAT & CLIQUE NOS CHIPS
// ==========================================
function handleUserQuery(query) {
  if (!query || query.trim() === '') return;
  const topic = findBestTopic(query);
  displayTopic(topic);
}

dom.btnSend.addEventListener('click', () => {
  const val = dom.chatInput.value.trim();
  if (val) {
    handleUserQuery(val);
    dom.chatInput.value = '';
  }
});

dom.chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    dom.btnSend.click();
  }
});

dom.chips.forEach(chip => {
  chip.addEventListener('click', () => {
    const q = chip.getAttribute('data-query');
    handleUserQuery(q);
  });
});

// ==========================================
// RECONHECIMENTO DE VOZ (WEB SPEECH RECOGNITION)
// ==========================================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    state.isListening = true;
    dom.btnVoice.classList.add('listening');
    dom.voiceStatus.style.display = 'block';
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    dom.chatInput.value = transcript;
    handleUserQuery(transcript);
  };

  recognition.onerror = () => {
    state.isListening = false;
    dom.btnVoice.classList.remove('listening');
    dom.voiceStatus.style.display = 'none';
  };

  recognition.onend = () => {
    state.isListening = false;
    dom.btnVoice.classList.remove('listening');
    dom.voiceStatus.style.display = 'none';
  };

  dom.btnVoice.addEventListener('click', () => {
    if (state.isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (err) {
        console.error(err);
      }
    }
  });
} else {
  dom.btnVoice.title = "Reconhecimento de voz não suportado neste navegador. Use o campo de texto!";
  dom.btnVoice.style.opacity = '0.5';
}

// ==========================================
// CONTROLE DE ÁUDIO & QR CODE MODAL
// ==========================================
dom.btnSound.addEventListener('click', () => {
  state.soundEnabled = !state.soundEnabled;
  dom.btnSound.innerText = state.soundEnabled ? '🔊' : '🔇';
  if (!state.soundEnabled && synth) {
    synth.cancel();
    stopMouthAnimation();
  }
});

// Atualiza o QR Code com o endereço real de rede ou da página
const localHostIp = "192.168.18.11:8000";
const targetUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? `http://${localHostIp}`
  : window.location.href;

dom.currentUrlDisplay.innerText = targetUrl;
dom.qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(targetUrl)}`;


dom.btnQr.addEventListener('click', () => {
  dom.qrModal.style.display = 'flex';
});

dom.btnCloseModal.addEventListener('click', () => {
  dom.qrModal.style.display = 'none';
});

dom.qrModal.addEventListener('click', (e) => {
  if (e.target === dom.qrModal) dom.qrModal.style.display = 'none';
});

// Renderização inicial da equação geral da fase clara
window.addEventListener('DOMContentLoaded', () => {
  const initialTopic = KNOWLEDGE_BASE[0];
  renderMath(initialTopic.latex);
});
