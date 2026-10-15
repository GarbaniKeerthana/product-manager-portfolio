
import './GoogleCaseStudy.css'

export default function GoogleCaseStudy() {
  return (
    <main className="google-page">
      <a href="/#work" className="google-back">
        ← Back to projects
      </a>

      <header className="google-header">
        <span className="google-eyebrow">
          INDEPENDENT PRODUCT CASE STUDY · NAVIGATION
        </span>

        <h1>Google Maps: College Mode</h1>

        <p className="google-subtitle">
          Finding the building isn't always the same as
          finding the entrance.
        </p>

        <p className="google-intro">
          A proposed campus navigation experience that helps
          students find the correct building entrance and
          reach their classrooms with less confusion.
        </p>

        <span className="google-project-label">
          Product Strategy · User Experience · MVP Planning
        </span>
      </header>

      {/* ANIMATED CAMPUS NAVIGATION */}
      <section className="google-demo">
        <div className="google-demo-heading">
          <span>THE EXPERIENCE</span>
          <span>CONCEPT PREVIEW</span>
        </div>

        <div className="campus-map">
          <div className="campus-path campus-path-one" />
          <div className="campus-path campus-path-two" />

          <div className="campus-building building-library">
            <span>Library</span>
          </div>

          <div className="campus-building building-science">
            <span>Science Hall</span>
            <div className="building-entrance">
              <span>Entrance</span>
            </div>
          </div>

          <div className="campus-building building-student">
            <span>Student Center</span>
          </div>

          <svg
            className="campus-route"
            viewBox="0 0 700 350"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 90 280 L 180 280 L 260 220 L 365 220 L 460 165 L 520 165"
              fill="none"
              stroke="#4285f4"
              strokeWidth="5"
              strokeDasharray="10 9"
              strokeLinecap="round"
              className="animated-route"
            />
          </svg>

          <div className="student-marker">
            <span>●</span>
          </div>

          <div className="entrance-pin">
            <span>📍</span>
          </div>

          <div className="map-start-label">
            Your location
          </div>
        </div>

        <p className="google-demo-note">
          Conceptual campus map illustrating entrance-level
          navigation. Not an actual Google Maps integration.
        </p>
      </section>

      {/* CASE STUDY */}
      <div className="google-content">
        <section>
          <span className="google-section-number">
            01 / THE PROBLEM
          </span>
          <h2>Arriving at a building doesn't mean you've arrived.</h2>
          <p>
            Students navigating unfamiliar campuses may reach
            the correct building but still struggle to find
            the entrance they need. Large buildings can have
            multiple doors, restricted entrances, and
            confusing walking paths.
          </p>
          <p>
            For a student trying to reach class on time,
            that final part of the journey matters.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            02 / TARGET USERS
          </span>
          <h2>Start with students who need it most.</h2>
          <p>
            The primary target users are first-semester
            university students who are still learning
            campus layouts.
          </p>
          <p>
            Additional potential users include visiting
            students, campus guests, and people attending
            events in unfamiliar buildings.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            03 / PRODUCT OPPORTUNITY
          </span>
          <h2>Navigation that understands campuses.</h2>
          <p>
            College Mode is a proposed navigation experience
            that guides students toward verified building
            entrances rather than stopping at a general
            building location.
          </p>
          <p>
            The goal is to make the last few minutes of
            campus navigation more reliable and less stressful.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            04 / MVP
          </span>
          <h2>One campus. One problem. One clear solution.</h2>
          <p>
            The proposed MVP focuses on a single university
            campus and a limited set of academic buildings.
          </p>
          <p>
            Students would search for a building, select
            a verified entrance, and receive walking
            directions to that entrance.
          </p>
          <p>
            Features such as campus events, classroom-level
            indoor navigation, and personalized schedules
            would remain outside the initial MVP.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            05 / PRIORITIZATION
          </span>
          <h2>Choose accuracy before adding features.</h2>
          <p>
            I prioritized entrance-level navigation because
            it addresses the core problem directly.
          </p>
          <p>
            Adding events or advanced campus discovery
            features might increase engagement, but
            neither solves the immediate issue of
            reaching the correct entrance.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            06 / SUCCESS METRICS
          </span>
          <h2>Measure successful arrivals.</h2>
          <p>
            Proposed metrics include the percentage of
            users reaching the intended entrance,
            time spent searching for an entrance,
            route abandonment rate, and reported
            navigation confidence.
          </p>
          <p>
            These are proposed metrics, not measured
            results from a launched product.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            07 / RISKS & TRADE-OFFS
          </span>
          <h2>Good directions depend on good data.</h2>
          <p>
            Building entrances can change due to
            construction, accessibility restrictions,
            operating hours, and campus maintenance.
          </p>
          <p>
            The product would require reliable entrance
            data, a way to report incorrect directions,
            and a process for keeping campus information
            current.
          </p>
        </section>

        <section>
          <span className="google-section-number">
            08 / PRODUCT THINKING
          </span>
          <h2>The last 100 meters deserve attention.</h2>
          <p>
            College Mode explores a simple idea:
            navigation should help users reach the
            place they actually need, not merely
            the nearest map coordinate.
          </p>
        </section>
      </div>

      <footer className="google-footer">
        Independent product case study.
        Not affiliated with, endorsed by, or integrated
        into Google Maps.
      </footer>
    </main>
  )
}
