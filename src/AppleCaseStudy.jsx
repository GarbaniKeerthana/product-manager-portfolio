
import './AppleCaseStudy.css'

export default function AppleCaseStudy() {
  return (
    <main className="apple-page">
      <a href="/#work" className="apple-back">
        ← Back to projects
      </a>

      {/* INTRODUCTION */}
      <header className="apple-page-header">
        <span className="apple-eyebrow">
          ORIGINAL PRODUCT CONCEPT · HARDWARE + SOFTWARE
        </span>

        <h1>CP Pencil</h1>

        <p>
          <strong>Copy here. Paste anywhere.</strong>
        </p>

        <p>
          A universal copy-and-paste stylus concept with two
          dedicated physical buttons and built-in temporary memory,
          designed to transfer text and code between different
          electronic devices.
        </p>

        <p>
          Concept & Product Design — Keerthana Garbani
        </p>
      </header>

      {/* ANIMATED PRODUCT DEMONSTRATION */}
      <section
        className="cp-demo"
        aria-label="Animated CP Pencil product concept"
      >
        <div className="cp-scene">

          {/* SOURCE DEVICE */}
          <div className="cp-device cp-tablet">
            <span className="cp-device-label">
              01 / SOURCE TABLET
            </span>

            <div className="cp-tablet-frame">
              <div className="cp-screen">
                <span className="cp-code">
                  {'function greet() {'}
                </span>

                <span className="cp-code cp-highlight">
                  {'  console.log("Hello!");'}
                </span>

                <span className="cp-code">
                  {'}'}
                </span>

                <span className="cp-feedback">
                  Copied to CP Pencil ✓
                </span>
              </div>
            </div>
          </div>

          {/* CP PENCIL */}
          <div className="cp-pencil-area" aria-hidden="true">
            <div className="cp-pencil">
              <div className="cp-pencil-end" />

              <div className="cp-pencil-body">
                <div className="cp-button-panel">
                  <span className="cp-button cp-copy-button">
                    C
                  </span>

                  <span className="cp-button cp-paste-button">
                    P
                  </span>
                </div>
              </div>

              <div className="cp-pencil-tip" />
            </div>

            <span className="cp-transfer-label">
              Content stored in Pencil
            </span>
          </div>

          {/* DESTINATION DEVICE */}
          <div className="cp-device cp-laptop">
            <span className="cp-device-label">
              02 / DESTINATION LAPTOP
            </span>

            <div className="cp-laptop-screen">
              <div className="cp-screen">
                <span className="cp-code">
                  notes.js
                </span>

                <span className="cp-code cp-pasted">
                  {'console.log("Hello!");'}
                </span>

                <span className="cp-paste-feedback">
                  Pasted successfully ✓
                </span>
              </div>
            </div>

            <div className="cp-laptop-base" />
          </div>
        </div>

        <p className="cp-demo-note">
          Conceptual product demonstration. Hardware,
          connectivity, and compatibility require prototyping
          and technical validation.
        </p>
      </section>

      {/* PRODUCT CASE STUDY */}
      <div className="apple-content">

        <section>
          <span className="section-number">
            01 / THE PROBLEM
          </span>

          <h2>Why should copying text require so many steps?</h2>

          <p>
            People frequently work across laptops, tablets,
            smartphones, and desktop computers. Moving text or
            code between these devices can require messaging
            apps, email, cloud synchronization, or manually
            typing the same information again.
          </p>

          <p>
            This becomes especially inconvenient in computer
            labs, shared workstations, and environments where
            devices use different operating systems.
          </p>
        </section>

        <section>
          <span className="section-number">
            02 / THE PRODUCT IDEA
          </span>

          <h2>A clipboard you can carry in your hand.</h2>

          <p>
            CP Pencil is a proposed universal stylus featuring
            two physical buttons: Copy (C) and Paste (P).
            A small rectangular control on the Pencil body
            separates these two functions.
          </p>

          <p>
            The concept uses onboard temporary memory to
            hold copied text. Rather than sending information
            through a messaging app or cloud account, users
            would carry the Pencil to another compatible
            device and paste the content directly.
          </p>
        </section>

        <section>
          <span className="section-number">
            03 / HOW IT WORKS
          </span>

          <h2>Select. Copy. Move. Paste.</h2>

          <p>
            <strong>Step 1 — Select:</strong> Highlight text,
            multiple lines of code, or other supported textual
            content on the source device.
          </p>

          <p>
            <strong>Step 2 — Copy:</strong> Press the C button
            on the Pencil. The proposed internal memory
            stores the selected content.
          </p>

          <p>
            <strong>Step 3 — Move:</strong> Bring the Pencil
            to another compatible device, such as a tablet,
            laptop, smartphone, or desktop.
          </p>

          <p>
            <strong>Step 4 — Paste:</strong> Choose a destination
            text field or cursor position and press P.
            The Pencil transfers the stored content to the
            destination device.
          </p>
        </section>

        <section>
          <span className="section-number">
            04 / TARGET USERS
          </span>

          <h2>Designed for people who work across devices.</h2>

          <p>
            <strong>Students:</strong> Moving assignments,
            notes, and code between personal devices and
            university lab computers.
          </p>

          <p>
            <strong>Developers:</strong> Transferring commands,
            code, and technical instructions across workstations.
          </p>

          <p>
            <strong>Professionals:</strong> Working between
            personal and company devices or shared computers.
          </p>

          <p>
            <strong>Mixed-device users:</strong> People who
            use combinations of Apple, Android, Windows,
            or other operating systems.
          </p>
        </section>

        <section>
          <span className="section-number">
            05 / MVP STRATEGY
          </span>

          <h2>Prove the core interaction first.</h2>

          <p>
            The first prototype would focus on copying and
            pasting plain text between two supported devices.
            It would include physical C/P controls, temporary
            storage, a defined connection method, and clear
            confirmation of successful transfers.
          </p>

          <p>
            Before expanding to additional devices and
            operating systems, the product would need
            usability testing, compatibility testing, and
            evaluation of security and reliability.
          </p>
        </section>

        <section>
          <span className="section-number">
            06 / SUCCESS METRICS
          </span>

          <h2>Measure whether it genuinely saves effort.</h2>

          <p>
            Proposed metrics include cross-device transfer
            completion rate, time to complete a transfer,
            first-attempt success rate, content accuracy,
            and user preference compared with existing
            transfer methods.
          </p>

          <p>
            These are proposed measures for future testing,
            not results from a completed experiment.
          </p>
        </section>

        <section>
          <span className="section-number">
            07 / BUSINESS OPPORTUNITY
          </span>

          <h2>One tool. Multiple environments.</h2>

          <p>
            CP Pencil could be explored as a standalone
            consumer accessory or as technology integrated
            into existing stylus products.
          </p>

          <p>
            Potential markets include students, developers,
            professional workplaces, schools, libraries,
            and shared computer labs.
          </p>

          <p>
            Commercial viability would depend on production
            cost, supported devices, willingness to pay,
            and whether the experience offers enough value
            over existing alternatives.
          </p>
        </section>

        <section>
          <span className="section-number">
            08 / RISKS & TRADE-OFFS
          </span>

          <h2>Universal compatibility is the biggest challenge.</h2>

          <p>
            The concept would need a reliable way to communicate
            with different operating systems and applications.
            Potential approaches include Bluetooth or other
            supported communication methods, but the final
            architecture remains unvalidated.
          </p>

          <p>
            Important questions include how to support
            non-touchscreen computers, how to prevent
            unauthorized pasting, how to protect sensitive
            copied content, and how to handle devices
            with restricted permissions.
          </p>

          <p>
            Existing solutions such as system clipboards,
            cross-device synchronization, and file-sharing
            tools also provide alternatives that must be
            evaluated.
          </p>
        </section>

        <section>
          <span className="section-number">
            09 / PRODUCT VISION
          </span>

          <h2>Make digital content feel portable.</h2>

          <p>
            The long-term vision is to make transferring
            text between compatible devices as natural
            as picking up a pen and carrying it to
            another desk.
          </p>

          <p>
            The next milestone is not manufacturing at scale.
            It is validating that the proposed interaction
            is technically achievable, secure, and
            meaningfully better for its intended users.
          </p>
        </section>

      </div>

      <footer className="apple-footer">
        CP Pencil is an independent invention and product
        concept by Keerthana Garbani. The illustrated
        experience is conceptual; it does not represent
        a manufactured or commercially available product.
      </footer>
    </main>
  )
}
