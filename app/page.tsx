const data = {
  "id": 4,
  "kind": "SaaS",
  "theme": "nexa",
  "brand": "nexa",
  "kicker": "The customer intelligence operating system",
  "title": "Turn every customer signal into your next best move.",
  "intro": "Nexa unifies conversations, behavior, and revenue data so product teams know what customers need before the next planning meeting.",
  "primary": "Start free",
  "secondary": "See the platform",
  "metrics": [
    [
      "2.4×",
      "faster insight cycles"
    ],
    [
      "38%",
      "less churn"
    ],
    [
      "12h",
      "saved every week"
    ]
  ],
  "sectionTitle": "One truth. Every team.",
  "sectionCopy": "A living customer map that gets clearer with every call, ticket, and product interaction.",
  "cards": [
    [
      "AI",
      "Signal synthesis",
      "Cluster thousands of conversations into evidence-backed themes with links to every source."
    ],
    [
      "01",
      "Revenue context",
      "Connect product feedback to account health, expansion, and renewal risk automatically."
    ],
    [
      "∞",
      "Always-on briefs",
      "Give every team a tailored weekly brief without another dashboard or recurring meeting."
    ]
  ],
  "showcaseTitle": "Your week, already synthesized",
  "showcases": [
    [
      "Activation friction",
      "High confidence · 184 signals",
      "Teams are asking for a guided first-run workspace.",
      "+34%"
    ],
    [
      "Expansion motion",
      "Rising · 92 signals",
      "Power users want consolidated multi-team reporting.",
      "+21%"
    ],
    [
      "API reliability",
      "Resolved · 47 signals",
      "Latency concerns dropped after the July release.",
      "−68%"
    ]
  ],
  "quote": "Nexa replaced three dashboards and a Friday of manual analysis with a brief we actually trust.",
  "quoteBy": "Daniel Kim — VP Product, Linearbase",
  "cta": "Make customer truth impossible to miss.",
  "footerLine": "Customer intelligence, without the busywork."
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <main data-theme={data.theme}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <div className="navLinks">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <a className="navCta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">{data.kicker}</p>
          <h1>{data.title}</h1>
          <p className="lede">{data.intro}</p>
          <div className="actions">
            <a className="button primary" href="#work">{data.primary} <Arrow /></a>
            <a className="button secondary" href="#expertise">{data.secondary}</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Featured project preview">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="visualTop"><span>Live overview</span><span className="status">● Updated now</span></div>
          <div className="visualCenter">
            <span className="visualLabel">Current signal</span>
            <strong>{data.metrics[0][0]}</strong>
            <span>{data.metrics[0][1]}</span>
          </div>
          <div className="bars" aria-hidden="true">
            {[42, 66, 54, 82, 72, 96, 84].map((height, index) => <i key={index} style={{ height: height + "%" }} />)}
          </div>
          <div className="visualFoot"><span>{data.kind}</span><span>© 2026</span></div>
        </div>
      </section>

      <section className="metrics shell" aria-label="Key metrics">
        {data.metrics.map(([value, label]) => (
          <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section shell" id="expertise">
        <header className="sectionHead">
          <p className="sectionIndex">01 / Approach</p>
          <div><h2>{data.sectionTitle}</h2><p>{data.sectionCopy}</p></div>
        </header>
        <div className="featureGrid">
          {data.cards.map(([code, title, copy], index) => (
            <article className="feature" key={title}>
              <span className="featureCode">{code}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="featureArrow">0{index + 1} <Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell">
          <header className="workHead"><p className="sectionIndex">02 / Selected</p><h2>{data.showcaseTitle}</h2></header>
          <div className="showcaseGrid">
            {data.showcases.map(([title, meta, copy, badge], index) => (
              <article className="showcase" key={title}>
                <div className={'art art' + (index + 1)}>
                  <span className="artNumber">0{index + 1}</span>
                  <div className="artShape" />
                  <span className="artBadge">{badge}</span>
                </div>
                <p className="showMeta">{meta}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact" aria-label={'Learn more about ' + title}>View details <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote shell" id="about">
        <p className="sectionIndex">03 / Perspective</p>
        <blockquote>“{data.quote}”</blockquote>
        <p className="quoteBy">{data.quoteBy}</p>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="eyebrow">Start a conversation</p>
          <h2>{data.cta}</h2>
          <a className="roundLink" href="mailto:hello@example.com" aria-label="Send an email"><Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <p>{data.footerLine}</p>
        <div><a href="#top">Instagram</a><a href="#top">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
