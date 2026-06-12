const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const year = document.querySelector("#year");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const navLinks = document.querySelectorAll(".nav-links a");
const observedSections = document.querySelectorAll("#education, #experience, #projects, #skills");
const langButtons = document.querySelectorAll(".lang-button");
const i18nElements = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "hero.role": "Data Science · AI Systems · Big Data",
    "hero.eyebrow": "Introduction",
    "hero.text.one": "I come from Canton City, Kwongtung Province of China, and I am a Data Science student with a solid engineering foundation from SUSTech and a graduate student at Carnegie Mellon University. My passion lies in developing reliable, agentic AI systems that bridge the gap between complex data and actionable insights.",
    "hero.text.two": "Currently, I am focused on advancing my expertise in Business Intelligence and Data Analytics at CMU while seeking opportunities in AI Engineering (AIE), Machine Learning Engineering (MLE), and Data Science (DS).",
    "hero.text.three": "I am always open to discussing related topics such as LLM applications, job opportunities, and so on. What's more, I can speak Chinese in Mandarin, Cantonese, Hokkien and other topolects. Let’s connect!",
    "section.education": "Education",
    "education.title": "Academic Path",
    "school.sustech": "Southern University of Science and Technology",
    "school.ncsu": "North Carolina State University",
    "school.cmu": "Carnegie Mellon University",
    "education.sustech.degree": "B.Eng. in Data Science and Big Data Technology · GPA 3.76/4.0",
    "education.sustech.meta": "Scholarship Top 10% · Coursework: OOP Java, Data Structures, AI, Machine Learning, Hadoop",
    "education.ncsu.degree": "Summer Research Student, Center for Research in Scientific Computation",
    "education.ncsu.meta": "Research on reinforcement learning for inverted pendulum stabilization.",
    "education.cmu.degree": "Business Intelligence and Data Analytics",
    "education.cmu.meta": "Coursework: Applied Python, Introduction to Deep Learning",
    "section.experience": "Experience",
    "experience.title": "Research & Internship",
    "experience.rag.title": "Agent-Enhanced RAG Formula Retrieval",
    "experience.rag.text": "Built a Plan-Retrieve-Solve-Critic loop in a SUSTech × Deepexi Technology research project, using GPT semantic re-ranking to raise formula retrieval recall from 55% to 73% on a 300-question benchmark.",
    "experience.rl.title": "Inverted Pendulum Stabilization with RL",
    "experience.rl.text": "Developed validation modules, applied Approximate Policy Iteration, and transferred trained parameters into MATLAB simulation and a real device.",
    "experience.intern.title": "Data Analytic & Collection Intern",
    "experience.intern.text": "Collected, cleaned, categorized, and crawled web data to support data-driven business analysis at Beijing Shangqi Digital Technology Co., Ltd.",
    "section.projects": "Projects",
    "projects.title": "Selected GitHub Work",
    "filter.all": "All",
    "filter.data": "Data",
    "filter.software": "Software",
    "project.engineeringrag": "Agent-enhanced formula retrieval workflow with planning, semantic re-ranking, critic verification, and multilingual reasoning.",
    "project.pendulum": "Reinforcement learning project for stabilizing an inverted pendulum, with validation and MATLAB visualization.",
    "project.stock": "Distributed stock capital-flow analysis with Hadoop MapReduce and interactive web visualization.",
    "project.chess": "Java desktop animal chess game with rule validation, GUI rendering, state updates, and AI opponent logic.",
    "project.picture": "Image compression and expansion program using dynamic programming for intelligent pixel-block resizing.",
    "project.tosql": "Fine-tuning project for translating natural-language questions into SQL-oriented outputs.",
    "project.survival": "Statistical modeling project focused on survival analysis methods and applied data interpretation.",
    "section.skills": "Skills",
    "skills.title": "Technical Stack",
    "footer.text": "Personal website built for GitHub Pages"
  },
  zh: {
    "nav.education": "教育",
    "nav.experience": "经历",
    "nav.projects": "项目",
    "nav.skills": "技能",
    "hero.role": "数据科学 · AI 系统 · 大数据",
    "hero.eyebrow": "自我介绍",
    "hero.text.one": "我来自中国广东广州，是一名数据科学学生，本科阶段在南方科技大学打下了扎实的工程基础，目前也将于卡内基梅隆大学深造。我的兴趣在于开发可靠的智能体 AI 系统，把复杂数据转化为可行动的洞察。",
    "hero.text.two": "目前，我正在 CMU 继续提升商业智能与数据分析能力，并寻找 AI Engineering (AIE)、Machine Learning Engineering (MLE) 和 Data Science (DS) 方向的机会。",
    "hero.text.three": "我很欢迎交流 LLM 应用、求职等相关话题。另外，我会说普通话、粤语、闽南语以及其他汉语方言。欢迎联系！",
    "section.education": "教育经历",
    "education.title": "学术背景",
    "school.sustech": "南方科技大学",
    "school.ncsu": "北卡罗来纳州立大学",
    "school.cmu": "卡内基梅隆大学",
    "education.sustech.degree": "数据科学与大数据技术 工学学士 · GPA 3.76/4.0",
    "education.sustech.meta": "优秀学生二等奖学金 Top 10% · 课程：Java 面向对象、数据结构、AI、机器学习、Hadoop",
    "education.ncsu.degree": "暑期科研学生，科学计算研究中心",
    "education.ncsu.meta": "研究方向：基于强化学习的倒立摆稳定控制。",
    "education.cmu.degree": "商业智能与数据分析",
    "education.cmu.meta": "课程：应用 Python、深度学习导论",
    "section.experience": "经历",
    "experience.title": "科研与实习",
    "experience.rag.title": "Agent 增强的 RAG 公式检索",
    "experience.rag.text": "在南方科技大学与滴普科技合作项目中构建 Plan-Retrieve-Solve-Critic 流程，并结合 GPT 语义重排序，在 300 题工程基准上将召回率从 55% 提升到 73%。",
    "experience.rl.title": "基于强化学习的倒立摆稳定",
    "experience.rl.text": "开发验证模块，应用近似策略迭代，并将训练参数迁移到 MATLAB 仿真和真实设备。",
    "experience.intern.title": "数据分析与采集实习生",
    "experience.intern.text": "采集、清洗、分类并爬取网页数据，为上奇数字科技有限公司的数据化业务分析提供支持。",
    "section.projects": "项目",
    "projects.title": "GitHub 作品",
    "filter.all": "全部",
    "filter.data": "数据",
    "filter.software": "软件",
    "project.engineeringrag": "面向工程公式检索的智能体流程，包含规划、语义重排序、Critic 验证和多语言推理。",
    "project.pendulum": "倒立摆稳定控制强化学习项目，包含模型验证与 MATLAB 可视化。",
    "project.stock": "基于 Hadoop MapReduce 的股票资金流分析和交互式网页可视化。",
    "project.chess": "Java 桌面斗兽棋游戏，包含规则校验、GUI 渲染、状态更新和 AI 对手。",
    "project.picture": "基于动态规划的图像压缩与扩展程序，用于智能像素块调整。",
    "project.tosql": "自然语言到 SQL 输出的微调项目。",
    "project.survival": "围绕生存分析方法和应用数据解释的统计建模项目。",
    "section.skills": "技能",
    "skills.title": "技术栈",
    "footer.text": "为 GitHub Pages 构建的个人作品集"
  },
  es: {
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "hero.role": "Ciencia de Datos · Sistemas de IA · Big Data",
    "hero.eyebrow": "Introducción",
    "hero.text.one": "Vengo de Cantón, provincia de Guangdong, China. Soy estudiante de Ciencia de Datos con una sólida base de ingeniería de SUSTech y estudiante de posgrado en Carnegie Mellon University. Me interesa desarrollar sistemas de IA agéntica, fiables, que conecten datos complejos con ideas accionables.",
    "hero.text.two": "Actualmente profundizo mi experiencia en Business Intelligence and Data Analytics en CMU, mientras busco oportunidades en AI Engineering (AIE), Machine Learning Engineering (MLE) y Data Science (DS).",
    "hero.text.three": "Siempre estoy abierto a conversar sobre aplicaciones de LLM, oportunidades laborales y temas relacionados. Además, puedo hablar chino mandarín, cantonés, hokkien y otros topolectos. ¡Conectemos!",
    "section.education": "Educación",
    "education.title": "Formación Académica",
    "school.sustech": "Southern University of Science and Technology",
    "school.ncsu": "North Carolina State University",
    "school.cmu": "Carnegie Mellon University",
    "education.sustech.degree": "B.Eng. en Ciencia de Datos y Tecnología de Big Data · GPA 3.76/4.0",
    "education.sustech.meta": "Beca Top 10% · Cursos: Java OOP, Estructuras de Datos, IA, Machine Learning, Hadoop",
    "education.ncsu.degree": "Estudiante de investigación de verano, Center for Research in Scientific Computation",
    "education.ncsu.meta": "Investigación sobre estabilización de péndulo invertido con aprendizaje por refuerzo.",
    "education.cmu.degree": "Business Intelligence and Data Analytics",
    "education.cmu.meta": "Cursos: Python aplicado, Introducción al Deep Learning",
    "section.experience": "Experiencia",
    "experience.title": "Investigación y Prácticas",
    "experience.rag.title": "Recuperación de Fórmulas con RAG Agéntico",
    "experience.rag.text": "Construí un flujo Plan-Retrieve-Solve-Critic en un proyecto conjunto de SUSTech y Deepexi Technology, usando re-ranking semántico con GPT para elevar el recall de 55% a 73% en un benchmark de 300 preguntas.",
    "experience.rl.title": "Estabilización de Péndulo Invertido con RL",
    "experience.rl.text": "Desarrollé módulos de validación, apliqué Approximate Policy Iteration y transferí parámetros entrenados a simulación MATLAB y dispositivo real.",
    "experience.intern.title": "Practicante de Análisis y Recolección de Datos",
    "experience.intern.text": "Recolecté, limpié, clasifiqué y extraje datos web para apoyar análisis de negocio basados en datos en Beijing Shangqi Digital Technology Co., Ltd.",
    "section.projects": "Proyectos",
    "projects.title": "Trabajos en GitHub",
    "filter.all": "Todo",
    "filter.data": "Datos",
    "filter.software": "Software",
    "project.engineeringrag": "Flujo de recuperación de fórmulas con agentes: planificación, re-ranking semántico, verificación critic y razonamiento multilingüe.",
    "project.pendulum": "Proyecto de aprendizaje por refuerzo para estabilizar un péndulo invertido, con validación y visualización en MATLAB.",
    "project.stock": "Análisis distribuido de flujo de capital bursátil con Hadoop MapReduce y visualización web interactiva.",
    "project.chess": "Juego de escritorio en Java con validación de reglas, interfaz gráfica, actualización de estado y oponente de IA.",
    "project.picture": "Programa de compresión y expansión de imágenes con programación dinámica para redimensionamiento inteligente.",
    "project.tosql": "Proyecto de fine-tuning para traducir preguntas en lenguaje natural a salidas orientadas a SQL.",
    "project.survival": "Proyecto de modelado estadístico centrado en métodos de análisis de supervivencia e interpretación de datos.",
    "section.skills": "Habilidades",
    "skills.title": "Stack Técnico",
    "footer.text": "Sitio personal creado para GitHub Pages"
  }
};

year.textContent = new Date().getFullYear();

const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeButton.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "Sun" : "Moon";
  localStorage.setItem("theme", theme);
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.en;

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  localStorage.setItem("language", language);
};

setTheme(localStorage.getItem("theme") || "light");
setLanguage(localStorage.getItem("language") || "en");

themeButton.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(nextTheme);
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

observedSections.forEach((section) => sectionObserver.observe(section));
