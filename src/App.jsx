
import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    company: 'CP Pencil',
    symbol: 'CP',
    category: 'ORIGINAL PRODUCT INVENTION',
    title: 'Copy here. Paste anywhere.',
    description:
      'A universal copy-paste stylus concept with two physical buttons, designed to transfer text and code across devices.',
    status: 'Independent product concept',
    featured: true,
    accent: 'apple',
    link: '/cp-pencil',
  },
  {
    company: 'Google Maps',
    symbol: 'G',
    category: 'NAVIGATION',
    title: 'College Mode',
    description:
      'Helping students find the right building entrance, not just the building.',
    status: 'Product case study',
    featured: true,
    accent: 'google',
    link: '/college-mode',
  },
  {
    company: 'ESPN',
    symbol: 'E',
    category: 'SPORTS',
    title: 'The Fan Experience',
    description:
      'Exploring how digital sports experiences could become more personal.',
    status: 'Upcoming exploration',
    accent: 'espn',
  },
  {
    company: 'Robinhood',
    symbol: 'R',
    category: 'FINTECH',
    title: 'Money, Made Clearer',
    description:
      'Exploring ways to make financial decisions easier to understand.',
    status: 'Upcoming exploration',
    accent: 'robinhood',
  },
  {
    company: 'Epic Systems',
    symbol: 'Ep',
    category: 'HEALTHCARE',
    title: 'A Better Patient Journey',
    description:
      'Exploring opportunities to simplify digital healthcare experiences.',
    status: 'Upcoming exploration',
    accent: 'epic',
  },
  {
    company: 'Tesla',
    symbol: 'T',
    category: 'AUTOMOTIVE',
    title: 'Beyond the Drive',
    description:
      'Exploring improvements to the digital vehicle ownership experience.',
    status: 'Upcoming exploration',
    accent: 'tesla',
  },
]

const questions = [
  {
    question: 'Users love a feature, but very few discover it. What do you investigate first?',
    options: [
      'Build three more features',
      'Look at the discovery and onboarding journey',
      'Remove the feature immediately',
    ],
    answer: 1,
    explanation:
      'A PM investigates where users drop off before deciding what to build.',
  },
  {
    question: 'Your team has two weeks before launch. What is the strongest MVP decision?',
    options: [
      'Ship every planned feature',
      'Delay without evaluating the scope',
      'Prioritize the smallest useful experience',
    ],
    answer: 2,
    explanation:
      'An MVP focuses on delivering and learning from the core value proposition.',
  },
]

function ProjectCard({ project, index }) {
  const isReady = Boolean(project.link)
  function openproject() {
    if (project.link) {
      window.location.href = project.link
    }
  }

  return (
    <article
      className={`project-card ${project.featured ? 'featured' : ''} ${project.accent}`}
      style={{ '--card-index': index % 2 }}
    > 
    {isReady && (
  <a
    href={project.link}
    className="card-full-link"
    aria-label={`View ${project.company}: ${project.title} case study`}
  />
)}
      <div className="bubble-cover" aria-hidden="true">
        <div className="soap-bubble" />
        <span className="pop-spark spark-one" />
        <span className="pop-spark spark-two" />
        <span className="pop-spark spark-three" />
        <span className="pop-spark spark-four" />
      </div>

      <div className="card-top">
        <div className="company-identity">
          <span className="company-mark" aria-hidden="true">
            {project.company === 'CP Pencil' ? (
              <svg
                className="cp-card-icon"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g transform="rotate(-38 24 24)">
                  <rect
                    x="20"
                    y="5"
                    width="8"
                    height="34"
                    rx="3"
                    fill="#E9F3FF"
                    stroke="#7A9BC3"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="19"
                    y="12"
                    width="10"
                    height="12"
                    rx="2"
                    fill="#243B5A"
                  />
                  <path
                    d="M19 18H29"
                    stroke="#91BFFF"
                    strokeWidth="1"
                  />
                  <text
                    x="24"
                    y="16.5"
                    fontSize="5"
                    textAnchor="middle"
                    fill="white"
                  >
                    C
                  </text>
                  <text
                    x="24"
                    y="22.5"
                    fontSize="5"
                    textAnchor="middle"
                    fill="white"
                  >
                    P
                  </text>
                  <path
                    d="M21 39L24 45L27 39"
                    fill="#A7BDD5"
                  />
                </g>
              </svg>
            ) : project.company === 'Google Maps' ? (
              <svg
                className="campus-card-icon"
                viewBox="0 0 48 48"
                fill="none"
                >
                <path
                  d="M10 36L17 28L24 31L35 17"
                  stroke="#4285F4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="3 4"
                />
                <path
                  d="M35 6C28 6 24 11 24 17C24 25 35 38 35 38S46 25 46 17C46 11 42 6 35 6Z"
                  fill="#4285F4"
                />
                <circle cx="35" cy="17" r="5" fill="white" />
                <circle cx="10" cy="36" r="4" fill="#34A853" />
              </svg>
            ) : (
              project.symbol || '●'
            )}
          </span>
          <span className="company-name">{project.company}</span>
        </div>
        <span className="card-number">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="card-content">
        <span className="category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="card-bottom">
        <span className="project-status">{project.status}</span>
        {isReady ? (
          <a href={project.link} className="card-link">
            Explore <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="coming-soon">Coming soon</span>
        )}
      </div>
    </article>
  )
}

function MiniGame() {
  const [open, setOpen] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState(null)

  const current = questions[questionIndex]

  function nextQuestion() {
    setQuestionIndex((previous) => (previous + 1) % questions.length)
    setSelected(null)
  }

  return (
    <div className="game-widget">
      {open && (
        <section className="game-panel" aria-label="Product thinking mini game">
          <div className="game-heading">
            <strong>Think like a PM</strong>
            <button
              className="game-close"
              onClick={() => setOpen(false)}
              aria-label="Close game"
            >
              ×
            </button>
          </div>

          <p className="game-question">{current.question}</p>

          <div className="game-options">
            {current.options.map((option, index) => (
              <button
                key={option}
                className={`game-option ${selected === index ? 'chosen' : ''
                  }`}
                disabled={selected !== null}
                onClick={() => setSelected(index)}
              >
                {option}
              </button>
            ))}
          </div>

          {selected !== null && (
            <div className="game-feedback" aria-live="polite">
              <strong>
                {selected === current.answer
                  ? 'Great product thinking!'
                  : 'Consider another approach.'}
              </strong>
              <p>{current.explanation}</p>
              <button onClick={nextQuestion}>Next question →</button>
            </div>
          )}
        </section>
      )}

      <button
        className="game-launcher"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        aria-label={open ? 'Close PM mini game' : 'Open PM mini game'}
      >
        <span className="launcher-bubble" aria-hidden="true">✦</span>
        <span>Think like a PM</span>
      </button>
    </div>
  )
}

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bubble-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#home">
            keerthana<span className="brand-star">✳</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a
              href="https://www.linkedin.com/in/keerthana-garbani-581420237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="#contact" className="contact-nav">
              Let's talk ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">
              ASPIRING PRODUCT MANAGER <span>✦</span> CURIOUS BY DESIGN
            </p>

            <h1>
              I don't just see
              <br />
              products.
              <br />
              <em>I see possibilities.</em>
            </h1>

            <p className="hero-description">
              Hi, I'm Keerthana. I explore everyday problems
              through user experience, technology, and business thinking.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work <span>↗</span>
              </a>
              <a href="#about" className="text-button">
                A little about me ↓
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>CREATIVE THINKING MEETS PRODUCT STRATEGY</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 / THE WORK</p>
              <h2>Ideas worth exploring<span>.</span></h2>
            </div>
            <p className="section-description">
              Different industries. Different challenges.
              One approach: understand the problem before imagining the solution.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.company}
                project={project}
                index={index}
              />
            ))}
          </div>

          <p className="independence-note">
            Independent product concepts and case studies.
            Not affiliated with or endorsed by the companies featured.
          </p>
        </section>

        <section className="about-section" id="about">
          <p className="section-kicker">02 / THE PERSON</p>
          <div className="about-layout">
            <h2>
              Curious enough to ask why.
              <br />
              Determined enough to find out.
            </h2>

            <div className="about-copy">
              <p>
                I'm a Computer Science master's student at Wright State University,
                graduating in December 2026, with a growing passion for product
                management.
              </p>
              <p>
                My background combines technology, research, and real-world
                problem-solving. From supporting operations in a professional office
                to exploring machine learning, I've learned that understanding
                people is just as important as understanding technology.
              </p>
              <p>
                I love noticing everyday frustrations and asking a simple question:
                what if we could make this better? That's what led me to imagine
                CP Pencil and explore ideas like College Mode for Google Maps.
              </p>
              <p>
                I'm currently building my product thinking through independent
                case studies, user-centered problem solving, and hands-on learning.
                I'm especially interested in Associate Product Manager opportunities
                where I can learn, contribute, and help build products people love.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">03 / SAY HELLO</p>
          <h2>Have a problem worth solving?</h2>
          <p>I'm looking for Associate Product Manager opportunities where I can
             bring curiosity, technical understanding, and a user-first mindset.
             Whether you're a recruiter, product leader, or fellow builder,
             I'd love to connect.
          </p>

          <div className="contact-links">
            <a href="tel:+19372195866">
              <span>PHONE</span>
              (937) 219-5866 ↗
            </a>
              <a
              href="https://www.linkedin.com/in/keerthana-garbani-581420237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LINKEDIN</span>
              Connect with me ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Keerthana Garbani</span>
        <span>Built with curiosity ✳</span>
      </footer>

      <MiniGame />
    </div>
  )
}

export default App
