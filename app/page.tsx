import { Hobbies } from "./Hobbies";

const projects = [
  {
    number: "01",
    eyebrow: "MSc research · Bioinformatics",
    title: "Systems Biology of Depression Genetics",
    description:
      "A research platform tracing how major-depression GWAS signals converge across genes, pathways, tissues and protein-interaction networks.",
    proof: "8.38M variants · 51 loci · 100 significant genes",
    stack: ["Python", "FUMA", "MAGMA", "STRING", "Cytoscape"],
    source: "https://github.com/UCTuba/systems-biology-depression-genetics",
    tone: "crimson",
  },
  {
    number: "02",
    eyebrow: "Cinema tech · UK discovery",
    title: "ReelNear",
    description:
      "A privacy-conscious UK cinema discovery experience for finding nearby films and published showtimes, then booking with the cinema directly.",
    proof: "Postcode search · geolocation · licensed listings",
    stack: ["TypeScript", "Next.js", "MovieGlu", "Postcodes.io"],
    live: "https://reel-near.vercel.app",
    source: "https://github.com/UCTuba/ReelNear",
    tone: "ember",
  },
  {
    number: "03",
    eyebrow: "Generative AI · EdTech",
    title: "ClassPilot",
    description:
      "An AI course-authoring tool that creates structured lessons, suggests metadata and lets educators refine content in a rich text editor.",
    proof: "Lesson generation · module organisation · rich editing",
    stack: ["Next.js", "React", "LLaMA-2", "Replicate", "TipTap"],
    source: "https://github.com/UCTuba/ClassPilot",
    tone: "wine",
  },
  {
    number: "04",
    eyebrow: "Automation · Movie alerts",
    title: "BMS Notification",
    description:
      "A Python monitor for BookMyShow listings that compares runs and sends mobile alerts when new theatres or showtimes appear.",
    proof: "Dynamic scraping · push alerts · explicit failure states",
    stack: ["Python", "Selenium", "Requests", "Pushover"],
    source: "https://github.com/UCTuba/BMS-Notification",
    tone: "noir",
  },
  {
    number: "05",
    eyebrow: "Full stack · Productivity",
    title: "GoalGuru",
    description:
      "A task-management system with CRUD workflows, dynamic search, history, filtering and department-level organisation for clearer administration.",
    proof: "REST endpoints · live search · task history",
    stack: ["Flask", "SQLAlchemy", "AJAX", "JSON", "REST"],
    source: "https://github.com/UCTuba/GoalGuru",
    tone: "wine",
  },
  {
    number: "06",
    eyebrow: "Computer vision · Healthcare",
    title: "COVID-19 CT Diagnosis",
    description:
      "A transfer-learning study comparing four CNN architectures on around 750 CT images, with automated findings and severity-oriented reporting.",
    proof: "VGG16 · ResNet · Xception · EfficientNet",
    stack: ["TensorFlow", "Keras", "NumPy", "pandas"],
    tone: "crimson",
  },
  {
    number: "07",
    eyebrow: "Learning archive · Recommenders",
    title: "GitHub User Recommender",
    description:
      "A small-scale profile recommender exploring second-degree connections and rank-based suggestions using GitHub user data.",
    proof: "GitHub Users API · notebooks · ranked recommendations",
    stack: ["Python", "Jupyter", "APIs", "Recommenders"],
    source: "https://github.com/UCTuba/GitHubUserRecommenderSystem",
    tone: "noir",
  },
  {
    number: "08",
    eyebrow: "Learning archive · Front end",
    title: "E-commerce Simulation",
    description:
      "An early client-side commerce exploration covering product browsing, shopping-cart behaviour, checkout and payment-option flows.",
    proof: "Cart flow · checkout forms · browser-based interaction",
    stack: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/UCTuba/E-Commerce-website-using-html-css-Js",
    tone: "ember",
  },
];

const experience = [
  {
    period: "Dec 2024 - Jul 2025",
    company: "JALAM Environment Private Limited",
    role: "Data Scientist Intern · Hyderabad, India",
    detail:
      "Processed and analysed environmental data, cleaned raw datasets, prepared reusable outputs and documented repeatable analysis workflows.",
  },
  {
    period: "Sep 2024 - Dec 2024",
    company: "Polmon Instruments Pvt Ltd.",
    role: "Intern · Hyderabad, India",
    detail:
      "Built database-backed web functionality supporting communication between customer systems and Oracle ERP, reducing manual data handoffs.",
  },
  {
    period: "May 2025",
    company: "ClassPilot - CourseGPT",
    role: "Freelance Software Developer",
    detail:
      "Developed an AI-powered course authoring workflow with structured generation, metadata suggestions, rich editing and deployment integration.",
  },
  {
    period: "Nov 2024",
    company: "GoalGuru - Task Manager",
    role: "Freelance Software Developer",
    detail:
      "Delivered full-stack task workflows, filtering, history, dynamic search and REST-style endpoints for administrative visibility.",
  },
];

const skillGroups = [
  {
    label: "Languages",
    values: "Python · Java · R · C · SQL · JavaScript · HTML · CSS · PHP · JSON",
  },
  {
    label: "Web & backend",
    values: "React · Next.js · Flask · SQLAlchemy · REST APIs · AJAX · Tailwind CSS · TipTap",
  },
  {
    label: "ML & data",
    values: "TensorFlow · Keras · scikit-learn · pandas · NumPy · NLTK · Hugging Face · OpenCV",
  },
  {
    label: "Automation & tools",
    values: "Selenium · Requests · BeautifulSoup · Streamlit · Tableau · Git · Linux · Microsoft SQL Server",
  },
  {
    label: "Cloud",
    values: "AWS · Google Cloud Platform · Vercel",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#selected-work">
        Skip to selected work
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Surya Sri Venkat - home">
          SSV<span>.</span>
        </a>
        <nav>
          <a href="#selected-work">Work</a>
          <a href="#about">About</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-status" href="mailto:suryasrivenkat@gmail.com">
          <span aria-hidden="true" /> Open to opportunities
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <p className="hero-kicker">Indian technologist · United Kingdom · 2026</p>
        <h1 id="hero-title">
          <span>Surya Sri Venkat</span>
          <span className="outline-name">Annabathuni</span>
        </h1>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="intro">
              I build intelligent, human-centred systems at the intersection of
              <strong> machine learning, data and the web.</strong>
            </p>
            <p className="subcopy">
              MSc Computer Vision, Robotics and Machine Learning student at the
              University of Surrey. Indian by roots, building in the UK - with a
              cinema ticket in one hand and a Python notebook in the other.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#selected-work">
                Enter the work <Arrow />
              </a>
              <a className="button button-quiet" href="mailto:suryasrivenkat@gmail.com">
                Start a conversation <Arrow />
              </a>
            </div>
          </div>

          <div className="signal-stage" aria-label="Code, cinema and curiosity - ideas move after midnight">
            <div className="signal-orbit orbit-one" aria-hidden="true" />
            <div className="signal-orbit orbit-two" aria-hidden="true" />
            <div className="signal-disc">
              <strong>Code.<br />Cinema.<br />Curiosity.</strong>
              <span>Ideas move after midnight</span>
            </div>
            <div className="city-line" aria-hidden="true">
              {Array.from({ length: 17 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
            <p className="stage-caption">Indian warmth / UK nights</p>
          </div>
        </div>

        <div className="hero-footer">
          <span>ML engineer in the making</span>
          <span>The Weeknd on repeat · cinema always</span>
          <span>Guildford, UK</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Machine learning</span><i>✦</i><span>Full-stack systems</span><i>✦</i>
          <span>Bioinformatics</span><i>✦</i><span>Cinema technology</span><i>✦</i>
          <span>Machine learning</span><i>✦</i><span>Full-stack systems</span><i>✦</i>
          <span>Bioinformatics</span><i>✦</i><span>Cinema technology</span><i>✦</i>
        </div>
      </div>

      <section className="work section-shell" id="selected-work" aria-labelledby="work-title">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">Selected transmissions / 2021-26</p>
            <h2 id="work-title">Work that moves<br />between worlds.</h2>
          </div>
          <p>
            Research, product engineering and automation - each project starts
            with a real problem and ends with something people can use.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone} reveal`} key={project.title}>
              <div className="card-topline">
                <span>{project.eyebrow}</span>
                <span>{project.number}</span>
              </div>
              <div className="card-signal" aria-hidden="true">
                <i /><i /><i />
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-proof">{project.proof}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live experience <Arrow />
                  </a>
                )}
                {project.source && (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    View source <Arrow />
                  </a>
                )}
                {!project.live && !project.source && (
                  <a href="mailto:suryasrivenkat@gmail.com?subject=COVID-19%20CT%20Diagnosis%20project">
                    Ask about the study <Arrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="about-statement reveal">
          <p className="eyebrow">Profile / the person behind the work</p>
          <h2 id="about-title">
            A systems thinker with a<br />storyteller&apos;s eye.
          </h2>
          <p className="about-lead">
            I&apos;m an MSc student and software builder drawn to complex systems:
            genetic risk pathways, environmental data, cinema discovery, AI
            authoring and the small automations that make everyday life smoother.
          </p>
        </div>

        <div className="identity-grid reveal">
          <div className="identity-card large">
            <span className="identity-number">01</span>
            <p>Currently</p>
            <strong>MSc Computer Vision, Robotics &amp; Machine Learning</strong>
            <span>University of Surrey · Sep 2025 - Sep 2026</span>
          </div>
          <div className="identity-card">
            <span className="identity-number">02</span>
            <p>Rooted in</p>
            <strong>Hyderabad, India</strong>
            <span>Now studying and building in the United Kingdom</span>
          </div>
          <div className="identity-card accent">
            <span className="identity-number">03</span>
            <p>After dark</p>
            <strong>Films. Sound. Stories.</strong>
            <span>From Telugu cinema to midnight screenings and synth-pop soundtracks</span>
          </div>
        </div>

        <div className="skills-wrap reveal">
          <div>
            <p className="eyebrow">Technical repertoire</p>
            <h3>Tools I reach for.</h3>
          </div>
          <dl className="skill-list">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.values}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Hobbies />

      <section className="journey section-shell" id="journey" aria-labelledby="journey-title">
        <div className="section-heading compact reveal">
          <div>
            <p className="eyebrow">Experience / timeline</p>
            <h2 id="journey-title">Built through doing.</h2>
          </div>
          <p>Data work, integration engineering and independent product builds across India and the UK.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item reveal" key={`${item.company}-${item.period}`}>
              <span className="timeline-index">0{index + 1}</span>
              <time>{item.period}</time>
              <div>
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="education reveal">
          <div>
            <p className="eyebrow">Education</p>
            <h3>University of Surrey</h3>
            <p>MSc Computer Vision, Robotics and Machine Learning · 2025-26</p>
          </div>
          <div>
            <p className="eyebrow">Foundation</p>
            <h3>Vellore Institute of Technology, Chennai</h3>
            <p>BTech Computer Science · 2019-24</p>
          </div>
          <div>
            <p className="eyebrow">More than code</p>
            <h3>English · Telugu · Hindi · Tamil · French</h3>
            <p>BrainWave Robotics runner-up · Telugu Literary Club event management</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit" aria-hidden="true" />
        <p className="eyebrow">Final scene / let&apos;s make something useful</p>
        <h2 id="contact-title">Have a problem worth<br /><em>staying up for?</em></h2>
        <p className="contact-copy">
          I&apos;m interested in graduate software, data and machine-learning opportunities - and conversations with people building thoughtful technology.
        </p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:suryasrivenkat@gmail.com">
            suryasrivenkat@gmail.com <Arrow />
          </a>
          <a className="button button-outline-light" href="/Surya-Sri-Venkat-Resume.pdf" target="_blank">
            Read my résumé <Arrow />
          </a>
        </div>
        <div className="contact-links">
          <a href="https://github.com/UCTuba" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="https://uk.linkedin.com/in/surya-sri-venkat-a-06300b191" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="tel:+447352681917">+44 (0)7352 681917</a>
        </div>
      </section>

      <footer>
        <a className="monogram" href="#top" aria-label="Back to top">SSV<span>.</span></a>
        <p>Designed around code, cinema and curiosity.</p>
        <p>© 2026 Surya Sri Venkat Annabathuni</p>
      </footer>
    </main>
  );
}
