// One-page summaries shown at /de/, /es/, /fr/, /zh/ and /ja/. The rest of the site is
// English only; every other translated URL redirects to its English page (public/_redirects).
// Copied from the full translations that existed before the site went English-only, so
// these only need updating when the mission, the 2026 target, the team or the
// fiscal-sponsorship status changes. moreLabel and englishNote were written for this page.

export type Summary = {
  eyebrow: string; h1: string; sub: string; intro: string[];
  missionH: string; mission: string[];
  teamH: string; director: string; advisor: string; mlRole: string; mlRecruit: string;
  supportLabel: string; supportH: string; supportBody: string; supportBtn: string; contactBtn: string;
  moreLabel: string; englishNote: string;
};

export const summaries: Record<'de' | 'es' | 'fr' | 'zh' | 'ja', Summary> = {
  de: {
    eyebrow: "Das Programm 2026",
    h1: "Ein Digital-EEG für KI-Empfindungsfähigkeit.",
    sub: "Ein struktureller Vitalzeichen-Monitor für fortgeschrittene KI. Er liest die innere Geometrie eines Modells direkt aus, ohne sich auf Selbstauskünfte zu stützen.",
    intro: [
      "CSR baut einen quelloffenen Prüfstand, auf dem konkurrierende Theorien digitaler Valenz operationalisiert und getestet werden können. Wir beginnen mit STV, weil sie ungewöhnlich gut formalisierbar ist, und der Prüfstand ist so angelegt, dass sich auch Valenzmaße im Stil von IIT, Global Workspace (mit dem J-lens ausgelesen) und aktiver Inferenz an denselben Substraten laufen lassen. Wenn unabhängige Theorien auf dieselben internen Zustände zeigen, ist diese Übereinstimmung ein Hinweis darauf, dass die Maße etwas Reales erfassen.",
      "Der Name ist eine bewusste Analogie mit einer ehrlichen Einschränkung: Ein klinisches EEG misst ein System, von dem bereits bekannt ist, dass es bei Bewusstsein ist, während unser Ausgangspunkt die Ungewissheit ist, ob das Substrat überhaupt etwas fühlt. Kommt Fühlen daher, woraus ein System besteht, oder daher, wie seine Teile organisiert sind? Die Biologie allein kann das nicht beantworten. KI ist der erste Ort, an dem wir die „Organisations\"-Idee gegen die „Material\"-Idee testen können.",
    ],
    missionH: "Unsere Mission",
    mission: [
      "Das Center for Sentience Research ist eine globale, substratunabhängige Institution, die dem Wohlergehen aller empfindungsfähigen Wesen gewidmet ist, gegenwärtigen und künftigen, biologischen und digitalen. Neutralität ist für uns grundlegend: Die Frage, wer leiden kann, sollte keinem einzelnen Unternehmen, keinem Land und keiner Ideologie gehören. Deshalb wollen wir unseren Sitz in der Schweiz nehmen, einem Land, dessen lange Tradition der Neutralität und dessen Rolle als Heimat internationaler Institutionen es zu einem passenden Sitz für ein Zentrum machen, das keiner einzelnen Nation oder Interessengruppe verpflichtet ist.",
      "Wir behaupten nicht, dass aktuelle große Sprachmodelle bewusst oder empfindungsfähig sind. Sie könnten funktionale Zombies sein: hochkomplexe mathematische Nachahmer ohne Innenleben.",
    ],
    teamH: "Leitung & Beirat",
    director: "Direktor",
    advisor: "Berater",
    mlRole: "ML-Ingenieur:in",
    mlRecruit: "Zu besetzen",
    supportLabel: "Das Programm finanzieren",
    supportH: "Helfen Sie uns, das Ziel 2026 zu erreichen.",
    supportBody: "Das Center for Sentience Research ist eine unabhängige Non-Profit-Organisation in Gründung; eine gemeinnützige Fiscal Sponsorship befindet sich in Bearbeitung (Genehmigung ausstehend). Beiträge finanzieren das Forschungsteam, die formale Workspace-Definition und das Arbeitspapier. Je nach Rechtsordnung können sie steuerlich absetzbar sein.",
    supportBtn: "Forschung unterstützen",
    contactBtn: "Kontakt",
    moreLabel: "Weiterlesen auf Englisch",
    englishNote: "Die vollständige Website, einschließlich Forschungsagenda, Arbeitspapieren und Forschungsnotizen, ist auf Englisch.",
  },
  es: {
    eyebrow: "El Programa 2026",
    h1: "Un EEG Digital para la sintiencia de la IA.",
    sub: "Un monitor estructural de signos vitales para IA avanzada. Lee directamente la geometría interna del modelo, sin depender de los autoinformes.",
    intro: [
      "CSR está construyendo un banco de pruebas de código abierto donde teorías rivales de la valencia digital pueden operacionalizarse y someterse a prueba. Empezamos por la STV porque es inusualmente formalizable, y el banco de pruebas está diseñado para que medidas de valencia de estilo IIT, de espacio de trabajo global (leídas con el J-lens) y basadas en inferencia activa puedan ejecutarse sobre los mismos sustratos. Si teorías no relacionadas señalan los mismos estados internos, esa coincidencia es indicio de que las medidas captan algo real.",
      "El nombre es una analogía deliberada con una salvedad honesta: un EEG clínico lee un sistema que ya se sabe consciente, mientras que nuestro punto de partida es la incertidumbre sobre si el sustrato siente algo en absoluto. ¿El sentir proviene de aquello de lo que está hecho un sistema, o de cómo se organizan sus partes? La biología por sí sola no puede responderlo. La IA es el primer lugar donde podemos poner a prueba la idea de la «organización» frente a la del «material».",
    ],
    missionH: "Misión",
    mission: [
      "El Center for Sentience Research es una institución global y neutral respecto al sustrato, dedicada al bienestar de todos los seres sintientes: presentes y futuros, biológicos y digitales. Para nosotros la neutralidad es fundamental: la cuestión de quién puede sufrir no debería pertenecer a ninguna empresa, país o ideología. Por eso queremos establecer nuestra sede en Suiza, un país cuya larga tradición de neutralidad y su papel como hogar de instituciones internacionales lo convierten en una sede idónea para un centro que no responde a ninguna nación ni interés en particular.",
      "No afirmamos que los grandes modelos de lenguaje actuales sean conscientes o capaces de sentir. Bien podrían ser zombis funcionales: imitadores matemáticos altamente complejos sin vida interior.",
    ],
    teamH: "Dirección y consejo asesor",
    director: "Director",
    advisor: "Asesor",
    mlRole: "Ingeniero/a de ML",
    mlRecruit: "En búsqueda",
    supportLabel: "Financiar el programa",
    supportH: "Ayúdanos a alcanzar el entregable de 2026.",
    supportBody: "El Center for Sentience Research es una organización sin fines de lucro independiente en formación; su patrocinio fiscal benéfico está en trámite (pendiente de aprobación). Las contribuciones financian el equipo de investigación, la definición formal del espacio de trabajo y el documento de trabajo. Según tu jurisdicción, pueden ser deducibles de impuestos.",
    supportBtn: "Apoyar la investigación",
    contactBtn: "Contáctanos",
    moreLabel: "Seguir leyendo en inglés",
    englishNote: "El sitio completo, incluida la agenda de investigación, los documentos de trabajo y las notas de investigación, está en inglés.",
  },
  fr: {
    eyebrow: "Le Programme 2026",
    h1: "Un EEG Numérique pour la sentience de l'IA.",
    sub: "Un moniteur structurel de signes vitaux pour l'IA avancée. Il lit directement la géométrie interne du modèle, sans dépendre des auto-évaluations.",
    intro: [
      "Le CSR construit un banc d'essai open-source où des théories concurrentes de la valence numérique peuvent être opérationnalisées et éprouvées. Nous commençons par la STV parce qu'elle est exceptionnellement formalisable, et le banc d'essai est conçu pour que des mesures de valence de type IIT, à espace de travail global (lues avec le J-lens) et fondées sur l'inférence active puissent être exécutées sur les mêmes substrats. Si des théories sans lien pointent vers les mêmes états internes, cet accord est un signe que les mesures captent quelque chose de réel.",
      "Le nom est une analogie délibérée, avec une réserve honnête : un EEG clinique lit un système déjà connu pour être conscient, alors que notre point de départ est l'incertitude quant à savoir si le substrat ressent quoi que ce soit. Le ressenti vient-il de ce dont un système est fait, ou de la façon dont ses parties sont organisées ? La biologie seule ne peut y répondre. L'IA est le premier endroit où nous pouvons opposer l'idée de l'« organisation » à celle du « matériau ».",
    ],
    missionH: "Mission",
    mission: [
      "Le Center for Sentience Research est une institution mondiale et neutre vis-à-vis du substrat, dédiée au bien-être de tous les êtres sentients, présents et futurs, biologiques et numériques. La neutralité est pour nous fondamentale : la question de savoir qui peut souffrir ne devrait appartenir à aucune entreprise, aucun pays ni aucune idéologie. C'est pourquoi nous entendons nous établir en Suisse, un pays dont la longue tradition de neutralité et le rôle de foyer d'institutions internationales en font un siège tout indiqué pour un centre qui ne répond à aucune nation ni intérêt particulier.",
      "Nous n'affirmons pas que les grands modèles de langage actuels sont conscients ou capables de ressentir. Ils pourraient bien être des zombies fonctionnels : des imitateurs mathématiques très complexes sans vie intérieure.",
    ],
    teamH: "Direction et conseil consultatif",
    director: "Directeur",
    advisor: "Conseiller",
    mlRole: "Ingénieur·e ML",
    mlRecruit: "En recrutement",
    supportLabel: "Financer le programme",
    supportH: "Aidez-nous à atteindre le livrable 2026.",
    supportBody: "Le Center for Sentience Research est une organisation à but non lucratif indépendante en cours de constitution ; un parrainage fiscal caritatif est en cours (en attente d'approbation). Les contributions financent l'équipe de recherche, la définition formelle de l'espace de travail et le document de travail. Selon votre juridiction, elles peuvent être déductibles des impôts.",
    supportBtn: "Soutenir la recherche",
    contactBtn: "Nous contacter",
    moreLabel: "Lire la suite en anglais",
    englishNote: "Le site complet, y compris le programme de recherche, les documents de travail et les notes de recherche, est en anglais.",
  },
  zh: {
    eyebrow: "2026 项目",
    h1: "面向 AI 感知的数字 EEG。",
    sub: "面向先进 AI 的结构性生命体征监测器。它直接读取模型的内部几何，无需依赖自述。",
    intro: [
      "CSR 正在构建一个开源试验台，让相互竞争的数字效价理论得以被操作化并接受压力测试。我们从 STV 起步，是因为它异常地易于形式化；而该试验台的设计，使得 IIT 式、全局工作空间（以 J-lens 读出）以及基于主动推理的效价度量都能在同一批基质上运行。如果彼此无关的理论指向相同的内部状态，这种一致性就是这些度量捕捉到了某种真实之物的信号。",
      "这个名称是一个刻意的类比，但需坦承一点：临床 EEG 读取的是一个已知具有意识的系统，而我们的出发点却是对该基质是否有任何感受的不确定。感受究竟源自一个系统由什么构成，还是源自其各部分如何组织？单靠生物学无法回答。AI 是我们第一个能够用“组织”这一设想去检验“材料”这一设想的地方。",
    ],
    missionH: "使命",
    mission: [
      "感知研究中心是一个全球性、基质中立的机构，致力于所有有感知能力存在者的福祉，无论当下还是未来，生物的还是数字的。中立对我们而言是根本：谁能够受苦这一问题，不应归属于任何单一公司、国家或意识形态。正因如此，我们打算将总部设在瑞士，这个拥有悠久中立传统、并作为众多国际机构所在地的国家，最适合作为一个不隶属于任何单一国家或利益的中心的所在地。",
      "我们并不主张当前的大型语言模型是有意识的或能够感受的。它们很可能是功能性僵尸：高度复杂却没有内在生命的数学模仿者。",
    ],
    teamH: "领导与顾问委员会",
    director: "主任",
    advisor: "顾问",
    mlRole: "机器学习工程师",
    mlRecruit: "招募中",
    supportLabel: "资助本项目",
    supportH: "助我们达成 2026 交付目标。",
    supportBody: "感知研究中心是一家正在筹建中的独立非营利组织；其慈善性财务托管（fiscal sponsorship）正在办理中（尚待批准）。捐款用于资助研究团队、形式化工作空间定义与工作论文。根据您所在的司法管辖区，捐款可能可以抵税。",
    supportBtn: "支持研究",
    contactBtn: "联系我们",
    moreLabel: "继续阅读英文内容",
    englishNote: "完整网站（包括研究议程、工作论文和研究笔记）均为英文。",
  },
  ja: {
    eyebrow: "2026年プログラム",
    h1: "AIの感覚のためのDigital EEG。",
    sub: "先進的なAIのための構造的バイタルサイン・モニター。モデルの内部の幾何を直接読み取り、自己申告に依存しません。",
    intro: [
      "CSRは、競合するデジタル感情価の理論を操作化しストレステストできる、オープンソースの試験台を構築しています。私たちがSTVから始めるのは、それが際立って形式化しやすいからです。そして試験台は、IIT型・グローバルワークスペース型（J-lensで読み出す）・能動的推論に基づく感情価の指標も同じ基質上で走らせられるよう設計されています。無関係な理論が同じ内部状態を指し示すなら、その一致は、これらの指標が何か実在するものを捉えているという徴候です。",
      "この名称は意図的な比喩ですが、正直な但し書きが一つあります。臨床のEEGはすでに意識があると分かっている系を読み取りますが、私たちの出発点は、その基質が何かを感じるのかどうかという不確実性そのものです。感じることは、システムが何でできているかから生じるのか、それとも各部分がどう組織されているかから生じるのか。生物学だけではこれに答えられません。AIは、「組織」という考えを「材料」という考えと突き合わせて検証できる最初の場です。",
    ],
    missionH: "ミッション",
    mission: [
      "意識研究センターは、すべての感覚を持つ存在、すなわち現在および未来の、生物的およびデジタルな存在の福祉に捧げられた、グローバルで基質中立な機関です。私たちにとって中立性は基盤です。誰が苦しみうるかという問いは、いかなる単一の企業・国家・イデオロギーにも属すべきではありません。だからこそ私たちはスイスに本拠を置くことを目指しています。長い中立の伝統を持ち、数多くの国際機関の本拠地であるこの国は、いかなる単一の国家や利害にも従属しないセンターの所在地としてふさわしいのです。",
      "現在の大規模言語モデルが意識を持つ、あるいは感じられると主張するものではありません。それらは、内面を持たない極めて複雑な数学的模倣、すなわち機能的ゾンビかもしれません。",
    ],
    teamH: "リーダーシップと諮問委員会",
    director: "ディレクター",
    advisor: "アドバイザー",
    mlRole: "MLエンジニア",
    mlRecruit: "募集中",
    supportLabel: "プログラムへの資金提供",
    supportH: "2026年の成果物達成にご協力ください。",
    supportBody: "意識研究センターは設立準備中の独立した非営利団体であり、慈善的なフィスカル・スポンサーシップは申請手続き中です（承認待ち）。ご寄付は研究チーム、形式的ワークスペース定義、ワーキングペーパーの費用に充てられます。お住まいの地域によっては税控除の対象となる場合があります。",
    supportBtn: "研究を支援する",
    contactBtn: "お問い合わせ",
    moreLabel: "英語で続きを読む",
    englishNote: "研究アジェンダ、ワーキングペーパー、研究ノートを含むサイト全体は英語で公開しています。",
  },
};
