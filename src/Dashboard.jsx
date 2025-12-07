import React, { useState, useEffect } from "react";

// ================= STYLES INJECTION =================
const styles = `
:root{ --accent:#ff6b81; --bg:#fff8f9; --muted:#666; --card:#ffffff; }
*{box-sizing:border-box}
html,body,#root{height:100%}
body{font-family:Inter,ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial; margin:0; background:linear-gradient(180deg,var(--bg),#fff); color:#222}
.app{min-height:100vh; display:flex; flex-direction:column}
.header{display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 1.2rem; position:sticky; top:0; background:rgba(255,255,255,0.75); backdrop-filter:blur(6px); border-bottom:1px solid #eee; z-index:40}
.brand{display:flex; gap:0.8rem; align-items:center}
.logo{width:46px; height:46px; border-radius:10px; background:linear-gradient(135deg,var(--accent),#ffd1dc); display:flex; align-items:center; justify-content:center; color:white; font-weight:700}
.nav{display:flex; gap:0.6rem}
.nav button{background:none; border:0; padding:0.6rem 0.8rem; border-radius:8px; cursor:pointer; font-weight:600}
.nav button:hover{background:#fff2f5}
.nav button.active{background:linear-gradient(90deg,#ff9fb0,var(--accent)); color:white}
.container{width:100%; max-width:980px; margin:2rem auto; padding:0 1rem}
.card{background:var(--card); border-radius:12px; padding:1.2rem; box-shadow:0 6px 18px rgba(15,15,15,0.05); margin-bottom:1rem}
.hero{display:flex; gap:1.2rem; align-items:center; padding:1.6rem}
.hero .avatar{width:120px; height:120px; border-radius:12px; background:#ffeef2; display:flex; align-items:center; justify-content:center; font-size:36px}
.grid{display:grid; grid-template-columns:1fr 320px; gap:1rem}
@media(max-width:900px){.grid{grid-template-columns:1fr} .nav{display:none}}
.section-title{display:flex; align-items:center; gap:0.6rem; margin-bottom:0.6rem}
.section-title h2{margin:0}
.small{color:var(--muted); font-size:0.95rem}
.wishes-list{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:0.7rem}
.wish{padding:0.9rem; border-radius:10px; background:linear-gradient(180deg,#fff,#fff8f8);}
.thoughts{white-space:pre-wrap}
.timeline{display:flex; flex-direction:column; gap:0.6rem}
.timeline-item{padding:0.75rem; border-left:3px solid var(--accent); background:#fff}
.footer{padding:1.5rem; text-align:center; color:var(--muted)}
.controls{display:flex; gap:0.6rem}
.icon-btn{border:0; background:transparent; cursor:pointer}
`;

function injectStyles() {
  if (document.getElementById("gf-styles")) return;
  const s = document.createElement("style");
  s.id = "gf-styles";
  s.innerHTML = styles;
  document.head.appendChild(s);
}

// ================= COMPONENTS =================

function Navbar({ items, active, onChange }) {
  return (
    <div className="nav">
      {items.map((it) => (
        <button
          key={it.id}
          className={active === it.id ? "active" : ""}
          onClick={() => onChange(it.id)}
        >
          {it.title}
        </button>
      ))}
    </div>
  );
}

function Hero({ name, subtitle, avatarText }) {
  return (
    <div className="card hero">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div className="avatar">{avatarText}</div>
        <div>
          <h1 style={{ margin: 0 }}>{name}</h1>
          <p className="small" style={{ marginTop: 6 }}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function About({ text }) {
  return (
    <section className="card">
      <div className="section-title">
        <h2>About</h2>
      </div>
      <p className="small">{text}</p>
    </section>
  );
}

function Wishes({ list }) {
  return (
    <section className="card">
      <div className="section-title">
        <h2>Wishes</h2>
      </div>
      <div className="wishes-list">
        {list.map((w, i) => (
          <div className="wish" key={i}>
            <strong>{w.title}</strong>
            <p className="small">{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Thoughts({ text }) {
  return (
    <section className="card">
      <div className="section-title">
        <h2>My thinking about her</h2>
      </div>
      <div className="thoughts small">{text}</div>
    </section>
  );
}

function Goals({ steps }) {
  return (
    <section className="card">
      <div className="section-title">
        <h2>How to achieve / plan</h2>
      </div>
      <div className="timeline">
        {steps.map((s, i) => (
          <div className="timeline-item" key={i}>
            <strong>{s.title}</strong>
            <p className="small">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery({ images }) {
  return (
    <section className="card">
      <div className="section-title">
        <h2>Gallery</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 8 }}>
        {images.map((img, i) => (
          <figure key={i} style={{ margin: 0 }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 8 }}
            />
            <figcaption className="small" style={{ paddingTop: 6 }}>{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer small">
      Built with ❤️ — customized for someone special.
    </footer>
  );
}

// ================= DASHBOARD MAIN =================

export default function Dashboard() {
  useEffect(() => injectStyles(), []);

  const navItems = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "wishes", title: "Wishes" },
    { id: "thoughts", title: "Thinking" },
    { id: "goals", title: "How to achieve" },
    { id: "gallery", title: "Gallery" },
    { id: "contact", title: "More" },
  ];

  const [active, setActive] = useState("home");

  // ✨ PERSONAL CONTENT (EDIT HERE ANYTIME)
  const content = {
    name: "For Priya ❤️",
    subtitle: "A little place where I keep thoughts, wishes and plans for you.",
    avatarText: "P",
    about: "She is kind, smart, and inspires me every day. This page is a small way to show how much she means to me.",
    wishes: [
      { title: "Travel together", text: "Visit the mountains and watch the sunrise together." },
      { title: "Grow together", text: "Support each other's dreams and goals." },
      { title: "Celebrate small wins", text: "Make monthly date nights and celebrate." },
    ],
    thoughts: `I love how she smiles when she talks about her favorite things.\n\nThis space collects my thoughts and promises.`,
    goals: [
      { title: "Step 1: Listen", text: "Understand her needs and priorities." },
      { title: "Step 2: Small surprises", text: "Plan small acts of kindness regularly." },
      { title: "Step 3: Support growth", text: "Encourage and help with her projects and learning." },
    ],
    images: [
      { src: "https://picsum.photos/seed/1/600/400", alt: "memory 1", caption: "A happy memory" },
      { src: "https://picsum.photos/seed/2/600/400", alt: "memory 2", caption: "Sunset" },
      { src: "https://picsum.photos/seed/3/600/400", alt: "memory 3", caption: "Cafe time" },
    ],
  };

  const moreText = (
    <div>
      <h3>Notes & Plans</h3>
      <p className="small">
        Write letters, add playlists, messages, memories, anything special for her.
      </p>
    </div>
  );

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <div className="logo">❤</div>
          <div>
            <div style={{ fontWeight: 700 }}>For Her</div>
            <div className="small">A handcrafted page</div>
          </div>
        </div>

        <Navbar items={navItems} active={active} onChange={setActive} />

        <div className="controls">
          <button className="icon-btn" onClick={() => navigator.clipboard?.writeText(location.href)}>
            Share
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="container">
        {active === "home" && (
          <>
            <Hero name={content.name} subtitle={content.subtitle} avatarText={content.avatarText} />

            <div className="card">
              <div className="grid">
                <div>
                  <About text={content.about} />
                  <Wishes list={content.wishes} />
                  <Thoughts text={content.thoughts} />
                </div>

                <aside>
                  <Goals steps={content.goals} />
                </aside>
              </div>
            </div>

            <Gallery images={content.images} />
          </>
        )}

        {active === "about" && <About text={content.about} />}
        {active === "wishes" && <Wishes list={content.wishes} />}
        {active === "thoughts" && <Thoughts text={content.thoughts} />}
        {active === "goals" && <Goals steps={content.goals} />}
        {active === "gallery" && <Gallery images={content.images} />}
        {active === "contact" && (
          <section className="card">
            <h2>More</h2>
            {moreText}
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
}
