// ==========================================
// TILA: A Plantinha Falante da Fase Clara
// Base de Conhecimento e Motor de NLP por Palavras-Chave
// ==========================================

const KNOWLEDGE_BASE = [
  {
    id: "o_que_e",
    keywords: [
      "o que e a fase clara", "o que e fase clara", "o que e fotossintese",
      "o que e esse processo", "resumo da fase clara", "conceito de fotossintese",
      "definicao", "etapa fotoquimica", "fase fotoquimica", "fase clara"
    ],
    title: "1. O que é a Fase Clara?",
    tag: "CONCEITO FUNDAMENTAL",
    shortSpeech: "A Fase Clara é a primeira etapa da fotossíntese! Aqui nós transformamos a energia da luz solar em energia química na forma de ATP e NADPH!",
    fullDescription: "A Fase Clara (ou etapa fotoquímica) é a reação inicial da fotossíntese que depende diretamente da luz solar. As moléculas de clorofila absorvem fótons luminosos, energizam elétrons e quebram a água, convertendo energia solar em energia bioquímica (ATP e NADPH) e liberando oxigênio para a atmosfera.",
    latex: "2\\text{H}_2\\text{O} + 2\\text{NADP}^+ + 3\\text{ADP} + 3\\text{P}_i \\xrightarrow{\\text{Luz}} \\text{O}_2 + 2\\text{NADPH} + 2\\text{H}^+ + 3\\text{ATP}",
    interpretation: "MOLÉCULAS INICIAIS (Água + Luz + ADP + NADP⁺) → REAÇÃO FOTOQUÍMICA → PRODUTOS (O₂ liberado + ATP e NADPH com alta energia química prontos para alimentar a síntese de açúcares)."
  },
  {
    id: "onde_acontece",
    keywords: [
      "onde acontece", "onde ocorre", "local", "lugar", "tilacoide", "tilacoides",
      "cloroplasto", "cloroplastos", "grana", "lumen", "estroma", "membrana tilacoidal",
      "membrana do tilacoide"
    ],
    title: "2. Onde o Processo Acontece?",
    tag: "LOCALIZAÇÃO CELULAR",
    shortSpeech: "Eu moro na membrana dos tilacoides, dentro dos cloroplastos! É aí que ficam meus fotossistemas e a ATP sintase!",
    fullDescription: "A Fase Clara ocorre estritamente na <strong>membrana dos tilacoides</strong>, que são estruturas em forma de sacos achatados organizados em pilhas (chamadas <em>grana</em>) no interior dos <strong>cloroplastos</strong> de plantas e algas. A água é quebrada no <em>lúmen</em> do tilacoide, e o ATP/NADPH são liberados no <em>estroma</em>.",
    latex: "\\text{Localização: Cloroplasto} \\rightarrow \\text{Membrana do Tilacoide} \\ (\\text{Lúmen} \\leftrightarrow \\text{Estroma})",
    interpretation: "A membrana fosfolipídica do tilacoide é indispensável porque ela separa o interior (lúmen) do estroma, permitindo criar um gradiente de prótons (H⁺) que gira a enzima ATP sintase."
  },
  {
    id: "etapas",
    keywords: [
      "etapas", "passo a passo", "esquema z", "fluxograma", "sequencia", "etapa",
      "fotossistemas", "fotossistema 2", "fotossistema ii", "fotossistema 1", "fotossistema i",
      "p680", "p700", "cadeia transportadora"
    ],
    title: "3. Principais Etapas e o Esquema Z",
    tag: "ETAPAS BIOQUÍMICAS",
    shortSpeech: "A Fase Clara acontece em 4 passos: Fotossistema II, Fotólise da Água, Transporte de Elétrons com Fotossistema I e a síntese de ATP!",
    fullDescription: "O fluxo de elétrons na Fase Clara segue o clássico <strong>Esquema Z</strong> através da membrana do tilacoide:<br><br>" +
      "<div class='steps-diagram'>" +
      "  <div class='step-card'><strong>1. Excitação no Fotossistema II (P680):</strong> A luz atinge o complexo antena e excita a clorofila P680, liberando elétrons energizados.</div>" +
      "  <div class='step-card'><strong>2. Fotólise da Água:</strong> O centro de manganês quebra a molécula de H₂O para repor os elétrons do FS II, liberando O₂ e prótons H⁺ no lúmen.</div>" +
      "  <div class='step-card'><strong>3. Cadeia Transportadora & Fotossistema I (P700):</strong> Os elétrons passam por plastoquinona, citocromo b₆f e plastocianina, reexcitam-se no FS I (P700) e reduzem o NADP⁺ a NADPH via ferredoxina-NADP⁺ redutase.</div>" +
      "  <div class='step-card'><strong>4. Fotofosforilação (ATP Sintase):</strong> O acúmulo de prótons H⁺ no lúmen gera força próton-motriz que gira o rotor da ATP sintase, gerando ATP no estroma.</div>" +
      "</div>",
    latex: "\\text{H}_2\\text{O} \\xrightarrow{\\text{FS II (P680)}} \\text{Cadeia Transportadora} \\xrightarrow{\\text{FS I (P700)}} \\text{NADPH} \\quad (+\\text{ATP Sintase} \\rightarrow \\text{ATP})",
    interpretation: "O Esquema Z representa a elevação energética dos elétrons a partir da água impulsionada por dois fótons luminosos sucessivos."
  },
  {
    id: "moleculas",
    keywords: [
      "moleculas", "reagentes e produtos", "o que entra", "o que sai", "reagentes",
      "produtos", "participam", "ingredientes", "transformadas", "substancias"
    ],
    title: "4. Quais Moléculas Participam? (Entram x Saem)",
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
    keywords: [
      "equacao", "equacoes", "principais equacoes", "formula", "formulas",
      "quimica", "reacao", "reacoes", "hill", "semi reacao", "estequiometria"
    ],
    title: "5. As Principais Equações Químicas Interpretadas",
    tag: "EQUAÇÕES QUÍMICAS",
    shortSpeech: "Veja as três equações químicas da Fase Clara: a Fotólise da Água, a redução do NADP+ e a síntese de ATP pela ATP sintase!",
    fullDescription: "Para compreender profundamente a Fase Clara, veja as reações químicas e o que cada uma significa biologicamente:<br><br>" +
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
    keywords: [
      "fotolise", "quebra da agua", "agua", "oxigenio", "h2o", "o2",
      "reacao de hill", "manganes"
    ],
    title: "Fotólise da Água (Reação de Hill)",
    tag: "FOTOSSISTEMA II",
    shortSpeech: "A luz quebra a molécula de água em prótons, elétrons e oxigênio! É daqui que vem o ar que todo o planeta respira!",
    fullDescription: "No Fotossistema II (P680), o Complexo de Evolução de Oxigênio (centro com átomos de Manganês) catalisa a oxidação da água. A clorofila excitada perde seus elétrons e 'rouba' os elétrons da molécula de H₂O para se estabilizar.",
    latex: "2\\text{H}_2\\text{O} \\xrightarrow{\\text{Complexo de Manganês / Luz}} \\text{O}_2\\uparrow + 4\\text{H}^+ + 4e^-",
    interpretation: "A água funciona como a grande doadora primária de elétrons de toda a biosfera terrestre. Sem a água, a fotossíntese pararia imediatamente!"
  },
  {
    id: "energia",
    keywords: [
      "energia", "atp", "nadph", "adp", "fotofosforilacao", "quimiosmose",
      "gradiente", "protons", "bateria", "o que e atp", "o que e nadph"
    ],
    title: "6. O Papel da Energia Celular (ATP e NADPH)",
    tag: "BIOENERGÉTICA CELULAR",
    shortSpeech: "A Fase Clara funciona como uma usina solar que carrega duas baterias celulares: o ATP que é a energia imediata, e o NADPH que é o poder redutor!",
    fullDescription: "A energia dos fótons é inicialmente convertida em energia eletroquímica: a passagem de elétrons pela cadeia transportadora bombeia prótons H⁺ para dentro do lúmen do tilacoide. A alta concentração de H⁺ gera uma <strong>força próton-motriz</strong>. Ao passarem pela enzima <strong>ATP Sintase</strong>, essa pressão mecânica sintetiza ATP a partir de ADP + Pi (hipótese quimiosmótica de Peter Mitchell).",
    latex: "\\Delta\\mu_{\\text{H}^+} \\xrightarrow{\\text{ATP Sintase}} \\text{ADP} + \\text{P}_i \\longrightarrow \\text{ATP}",
    interpretation: "O ATP fornece a energia livre termodinâmica e o NADPH fornece os elétrons ricos em energia necessários para que a Fase Escura consiga fixar carbono em glicose."
  },
  {
    id: "funcao_importancia",
    keywords: [
      "funcao", "importancia", "por que a celula realiza", "para que serve",
      "objetivo", "celula vegetal", "vida", "importancia celular"
    ],
    title: "7. Qual a Função e Importância desse Processo?",
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
    keywords: [
      "interrompido", "parar", "e se faltar luz", "sem luz", "escuro", "morrer",
      "aconteceria", "interromper", "bloqueio", "se fosse interrompido", "faltar sol"
    ],
    title: "8. O que Acontece se a Fase Clara for Interrompida?",
    tag: "IMPACTO METABÓLICO",
    shortSpeech: "Se faltar luz ou a via for bloqueada, não produzo ATP nem NADPH! O Ciclo de Calvin trava, a célula fica sem glicose e morre por acúmulo de radicais livres!",
    fullDescription: "Se a Fase Clara for interrompida (por exemplo, por escuridão contínua ou herbicidas como o DCMU/Diuron que bloqueiam o transporte de elétrons):<br><br>" +
      "1. <strong>Cessa a produção de ATP e NADPH:</strong> O Ciclo de Calvin no estroma para por falta de substrato energético e poder redutor.<br>" +
      "2. <strong>Colapso Metabólico da Fixação de Carbono:</strong> A planta perde a capacidade de sintetizar glicose e amido, esgotando suas reservas energéticas.<br>" +
      "3. <strong>Estresse Oxidativo e Morte Celular:</strong> A clorofila excitada sem rota de escoamento para os elétrons reage com o oxigênio gerando <em>Espécies Reativas de Oxigênio (EROs)</em>, que causam peroxidação lipídica das membranas tilacoidais e morte celular.",
    latex: "\\text{Bloqueio de Elétrons} \\longrightarrow \\text{Acúmulo de EROs} \\ (\\text{O}_2^{\\bullet-}, \\ \\text{H}_2\\text{O}_2) \\longrightarrow \\text{Lise e Morte Celular}",
    interpretation: "A interrupção afeta não apenas a síntese de açúcares, mas destrói fisicamente o cloroplasto por sobrecarga fototóxica."
  },
  {
    id: "curiosidades",
    keywords: [
      "curiosidade", "curiosidades", "aplicacao", "cotidiano", "herbicida",
      "diuron", "paraquat", "dia a dia", "biotecnologia"
    ],
    title: "9. Curiosidades e Aplicações no Cotidiano",
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
    keywords: [
      "fontes", "referencias", "bibliografia", "livro", "lehninger",
      "artigos", "taiz", "pesquisa", "literatura"
    ],
    title: "10. Fontes Científicas e Bibliografia",
    tag: "REFERÊNCIAS ACADÊMICAS",
    shortSpeech: "Minhas respostas foram baseadas nas maiores autoridades mundiais da Bioquímica e Fisiologia Vegetal!",
    fullDescription: "O conteúdo científico deste agente virtual foi validado nas seguintes referências acadêmicas:<br><br>" +
      "1. <strong>NELSON, David L.; COX, Michael M.</strong> <em>Princípios de Bioquímica de Lehninger</em>. 7ª ed. Porto Alegre: Artmed, 2018 (Capítulo 19: Fotofosforilação).<br>" +
      "2. <strong>TAIZ, Lincoln; ZEIGER, Eduardo et al.</strong> <em>Fisiologia e Desenvolvimento Vegetal</em>. 6ª ed. Porto Alegre: Artmed, 2017 (Capítulo 7: Fotossíntese: As Reações Luminosas).<br>" +
      "3. <strong>CAMPBELL, Neil A. et al.</strong> <em>Biologia de Campbell</em>. 10ª ed. Porto Alegre: Artmed, 2015.",
    latex: null,
    interpretation: null
  }
];

// Fallback quando não encontra palavra-chave
const DEFAULT_FALLBACK = {
  title: "Tópicos da Fase Clara",
  tag: "EXPLORE COM A TILA",
  shortSpeech: "Hummm, não entendi exatamente! Mas você pode me perguntar sobre: as etapas e Esquema Z, equações químicas, fotólise da água, onde acontece, ou o papel do ATP!",
  fullDescription: "Tente perguntar por termos como:<br>" +
    "• <em>'onde acontece'</em><br>" +
    "• <em>'quais são as etapas?'</em><br>" +
    "• <em>'principais equações químicas'</em><br>" +
    "• <em>'fotólise da água'</em><br>" +
    "• <em>'o que é ATP e NADPH?'</em><br>" +
    "• <em>'o que acontece se faltar luz?'</em>",
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
  cardEquationBox: document.getElementById('card-equation-box'),
  cardEquation: document.getElementById('card-equation'),
  cardInterpretation: document.getElementById('card-eq-interpretation'),

  // Chat
  chatInput: document.getElementById('chat-input'),
  btnSend: document.getElementById('btn-send'),
  btnVoice: document.getElementById('btn-voice-input'),
  voiceStatus: document.getElementById('voice-status'),
  chips: document.querySelectorAll('.chip'),

  // Header
  btnSound: document.getElementById('btn-sound-toggle')
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
    .replace(/\s+/g, " ")
    .trim();
}

function findBestTopic(rawQuery) {
  const cleanQuery = normalizeText(rawQuery);
  const wordsInQuery = cleanQuery.split(" ");
  let bestMatch = null;
  let maxScore = 0;

  for (const topic of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of topic.keywords) {
      const cleanKw = normalizeText(kw);
      
      // Match exato de frase
      if (cleanQuery.includes(cleanKw)) {
        const wordCount = cleanKw.split(" ").length;
        score += wordCount * 5;
      } else {
        // Match de palavras individuais se for termo bioquímico forte
        const kwWords = cleanKw.split(" ");
        for (const w of kwWords) {
          if (w.length > 3 && wordsInQuery.includes(w)) {
            score += 2;
          }
        }
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
// SÍNTESE DE VOZ COM NORMALIZADOR FONÉTICO
// ==========================================
let synth = window.speechSynthesis;
let mouthTimeout = null;

function phoneticFilter(text) {
  return text
    .replace(/<[^>]*>?/gm, '')
    .replace(/H₂O|H2O/gi, 'água H dois Ó')
    .replace(/O₂|O2/gi, 'gás oxigênio O dois')
    .replace(/NADP\+/gi, 'N A D P mais')
    .replace(/NADPH/gi, 'N A D P H')
    .replace(/ATP/gi, 'A T P')
    .replace(/ADP/gi, 'A D P')
    .replace(/FS II|FS 2/gi, 'Fotossistema dois')
    .replace(/FS I|FS 1/gi, 'Fotossistema um')
    .replace(/P680/gi, 'P 680')
    .replace(/P700/gi, 'P 700')
    .replace(/[\\${}_^]/g, '');
}

function speak(text) {
  if (!state.soundEnabled || !synth) return;

  synth.cancel();

  const cleanSpeech = phoneticFilter(text);
  const utterance = new SpeechSynthesisUtterance(cleanSpeech);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.05;
  utterance.pitch = 1.4;

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

  // Timeout de segurança para a boca não travar falando se o navegador mobile falhar no evento onend
  if (mouthTimeout) clearTimeout(mouthTimeout);
  const estimatedDuration = (cleanSpeech.length / 10) * 1000 + 1500;
  mouthTimeout = setTimeout(() => {
    if (state.isTalking) {
      state.isTalking = false;
      stopMouthAnimation();
    }
  }, Math.min(estimatedDuration, 14000));
}

let mouthInterval = null;
function startMouthAnimation() {
  dom.plantBox.classList.add('is-talking');
  if (mouthInterval) clearInterval(mouthInterval);
  mouthInterval = setInterval(() => {
    if (!state.isTalking) return;
    const isOpen = dom.mouthOpen.style.display !== 'none';
    dom.mouthOpen.style.display = isOpen ? 'none' : 'block';
    dom.mouthSmile.style.display = isOpen ? 'block' : 'none';
  }, 160);
}

function stopMouthAnimation() {
  dom.plantBox.classList.remove('is-talking');
  if (mouthInterval) clearInterval(mouthInterval);
  dom.mouthOpen.style.display = 'none';
  dom.mouthSmile.style.display = 'block';
}

// ==========================================
// ATUALIZAÇÃO DA INTERFACE & KATEX
// ==========================================
function renderMath(latexString) {
  if (!dom.cardEquation) return;

  if (!latexString) {
    dom.cardEquation.innerHTML = "";
    return;
  }

  if (window.katex) {
    try {
      katex.render(latexString, dom.cardEquation, {
        throwOnError: false,
        displayMode: true
      });
      return;
    } catch (e) {
      console.warn("KaTeX render error:", e);
    }
  }
  dom.cardEquation.innerText = latexString;
}

function displayTopic(topic, options = {}) {
  if (!topic) topic = DEFAULT_FALLBACK;
  const speech = options.customSpeech || topic.shortSpeech || "";

  // Atualiza balão da Tila
  dom.speechText.innerHTML = speech;

  // Atualiza card científico
  dom.cardTag.innerText = topic.tag || "FOTOSSÍNTESE";
  dom.cardTitle.innerText = topic.title || "Fase Clara";
  dom.cardDesc.innerHTML = topic.fullDescription || "";

  // Se o tópico tiver fórmula química, exibe a caixa de equação; se não tiver (ex: fontes), oculta a caixa
  if (topic.latex) {
    if (dom.cardEquationBox) dom.cardEquationBox.style.display = "block";
    renderMath(topic.latex);
    if (topic.interpretation) {
      dom.cardInterpretation.style.display = "block";
      dom.cardInterpretation.innerHTML = `<strong>Interpretação Bioquímica:</strong> ${topic.interpretation}`;
    } else {
      dom.cardInterpretation.style.display = "none";
      dom.cardInterpretation.innerHTML = "";
    }
  } else {
    if (dom.cardEquationBox) dom.cardEquationBox.style.display = "none";
  }

  // Executa voz
  speak(speech);

  // Animação da plantinha (se não for suprimida por ações especiais)
  if (!options.skipScaleAnimation) {
    dom.plantSvg.style.transform = 'scale(1.05)';
    setTimeout(() => {
      dom.plantSvg.style.transform = 'scale(1)';
    }, 250);
  }
}

// ==========================================
// SPAWN DE PARTÍCULAS INTERATIVAS
// ==========================================
function spawnParticle(emoji) {
  if (!dom.particles) return;
  const p = document.createElement('div');
  p.className = 'particle-fx';
  p.innerText = emoji;
  p.style.left = `${Math.random() * 60 + 20}%`;
  p.style.bottom = `${Math.random() * 40 + 20}%`;
  dom.particles.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 1600);
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
  displayTopic(topic, {
    customSpeech: "Oba, luz solar! Os fótons excitaram meus elétrons e geraram ATP e NADPH!"
  });

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
  displayTopic(topic, {
    customSpeech: "Glup, glup! Água fresquinha! Realizei a fotólise e liberei oxigênio puro para você respirar!"
  });
});

dom.btnDark.addEventListener('click', () => {
  dom.sunGlow.style.opacity = '0';
  document.querySelector('.stage-section').style.filter = 'brightness(0.65)';
  dom.plantSvg.style.transform = 'rotate(-6deg) translateY(10px)';

  const topic = KNOWLEDGE_BASE.find(t => t.id === 'desafio');
  displayTopic(topic, {
    customSpeech: "Socorro! Ficou tudo escuro! Sem luz a Fase Clara para, o ATP acaba e a célula entra em colapso!",
    skipScaleAnimation: true
  });

  setTimeout(() => {
    document.querySelector('.stage-section').style.filter = 'brightness(1)';
    dom.plantSvg.style.transform = 'none';
    dom.sunGlow.style.opacity = '0.4';
  }, 4500);
});

dom.btnTickle.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) setTimeout(() => spawnParticle('✨'), i * 100);
  dom.plantSvg.style.transform = 'scale(1.08) rotate(4deg)';
  setTimeout(() => dom.plantSvg.style.transform = 'scale(1.08) rotate(-4deg)', 150);
  setTimeout(() => dom.plantSvg.style.transform = 'none', 300);

  const frases = [
    "Hahaha! Isso faz cócegas nas minhas membranas tilacoidais!",
    "Hihihi! Cuidado para não derrubar meus fotossistemas!",
    "Cócegas! Sabia que eu amo clorofila A e B?"
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
// CONTROLE DE ÁUDIO
// ==========================================
dom.btnSound.addEventListener('click', () => {
  state.soundEnabled = !state.soundEnabled;
  dom.btnSound.innerText = state.soundEnabled ? '🔊' : '🔇';
  if (!state.soundEnabled && synth) {
    synth.cancel();
    stopMouthAnimation();
  }
});

// Renderização inicial da equação geral da fase clara
window.addEventListener('DOMContentLoaded', () => {
  const initialTopic = KNOWLEDGE_BASE[0];
  renderMath(initialTopic.latex);
});
