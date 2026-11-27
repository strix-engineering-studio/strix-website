import React from "react";
import { ArrowUpRight, ArrowDownRight, Code2, Layers, Mail, MoveUpRight, ArrowRight } from "lucide-react";

const work = [
  { n:"01", name:"Hugged", type:"CLIENT PRODUCT", status:"Live · Mobile + Web", text:"A connected parenting platform engineered across Flutter, Firebase, payments, notifications and web operations.", img:"/assets/projects/hugged/made%20for%20every%20caregiver.webp", href:"/case-studies/hugged-parenting-platform/", stack:["Flutter","Firebase","Next.js"] },
  { n:"02", name:"MagicalStones", type:"COMMERCE", status:"Live storefront", text:"An e-commerce experience for astrology and spiritual products, from catalogue discovery to order operations.", img:"/assets/production-systems/5.png", href:"/products/magicalstones-store/", stack:["Next.js","Firebase","Payments"] },
  { n:"03", name:"Classes360", type:"EDTECH / OPERATIONS", status:"In development", text:"A coaching institute operations platform connecting enquiries, admissions, student records and fee workflows.", img:"/assets/production-systems/6.png", href:"/products/classes360/", stack:["NestJS","Next.js","MongoDB"] },
  { n:"04", name:"Imrabo", type:"AI PRODUCT", status:"Prototype", text:"An AI assistant direction explored across website, workspace and Flutter mobile experiences.", img:"/assets/production-systems/7.png", href:"/products/imrabo/", stack:["Flutter","AI workflows","Node.js"] },
  { n:"05", name:"H2Go", type:"OPERATIONS", status:"Active development", text:"A delivery operations concept for recurring water-can orders, route planning and customer workflows.", img:"/assets/production-systems/4.png", href:"/products/h2go/", stack:["Next.js","TypeScript","Firebase"] }
];

const extraWork = [
  { name:"The Vivaah Tales", type:"WEBSITE", url:"https://the-vivaah-tales.netlify.app/", label:"Open website" },
  { name:"MK Basketball", type:"SPORTS PLATFORM", url:"https://mkballer.strix.website/", label:"Open website" },
  { name:"Imrabo Workspace", type:"AI WORKSPACE", url:"https://app.imrabo.com/log-in", label:"Open workspace" },
];

const steps = [
  ["01","Research & understand","Clarify the user, business context, current workflow and the real problem worth solving."],
  ["02","Define & architect","Map scope, system boundaries, data models and the smallest sensible delivery path."],
  ["03","Engineer & validate","Build in clear increments, test important paths and review the product against real requirements."],
  ["04","Release & evolve","Deploy, observe usage, improve reliability and keep the product maintainable after launch."]
];

const capabilities = [
  ["Product discovery","Technical feasibility, workflow mapping, requirements and product direction."],
  ["Web & platform engineering","Responsive web products, admin consoles, portals and backend APIs."],
  ["Mobile applications","Flutter apps, integrations, notifications and release engineering."],
  ["Cloud & data systems","Firebase, MongoDB, PostgreSQL, GCP and AWS foundations."],
  ["AI-enabled workflows","Context-aware assistants, tool orchestration and practical automation."],
  ["Ongoing engineering","Maintenance, modernization, testing and continuous product improvement."]
];

const tools = [
  ["Backend","NestJS","https://nestjs.com/","https://docs.nestjs.com/"],
  ["Frontend","Next.js","https://nextjs.org/","https://nextjs.org/docs"],
  ["Web","Astro","https://astro.build/","https://docs.astro.build/"],
  ["Mobile","Flutter","https://flutter.dev/","https://docs.flutter.dev/"],
  ["Backend & data","Firebase","https://firebase.google.com/","https://firebase.google.com/docs"],
  ["Database","MongoDB","https://www.mongodb.com/","https://www.mongodb.com/docs/"],
  ["Database","PostgreSQL","https://www.postgresql.org/","https://www.postgresql.org/docs/"],
  ["Cloud","Google Cloud","https://cloud.google.com/","https://cloud.google.com/docs"],
  ["Cloud","AWS","https://aws.amazon.com/","https://docs.aws.amazon.com/"],
  ["Engineering","GitHub","https://github.com/","https://docs.github.com/"],
  ["Language","TypeScript","https://www.typescriptlang.org/","https://www.typescriptlang.org/docs/"],
  ["Infrastructure","Docker","https://www.docker.com/","https://docs.docker.com/"],
  ["Infrastructure","Cloudflare","https://www.cloudflare.com/","https://developers.cloudflare.com/"],
  ["Product design","Figma","https://www.figma.com/","https://help.figma.com/"],
  ["API tooling","Postman","https://www.postman.com/","https://learning.postman.com/docs/"]
];

function SectionHeading({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {
  return <header className="portfolio-section-heading"><p className="portfolio-kicker">{eyebrow}</p><h2>{title}</h2>{description && <p className="portfolio-section-description">{description}</p>}</header>;
}

function ProjectCard({project,index}:{project:typeof work[number];index:number}) {
 return <article className={`portfolio-project portfolio-project-${index+1}`}>
  <a href={project.href} className="portfolio-project-image" aria-label={`View ${project.name}`}>
    <img src={project.img} alt={project.name+" product interface preview"} loading="lazy"/>
    <span className="portfolio-image-index">{project.n} / 05</span>
    <span className="portfolio-image-arrow"><ArrowUpRight size={21}/></span>
  </a>
  <div className="portfolio-project-copy">
    <div className="portfolio-project-meta"><span>{project.type}</span><span>{project.status}</span></div>
    <h3><a href={project.href}>{project.name}</a></h3>
    <p>{project.text}</p>
    <div className="portfolio-project-stack">{project.stack.map(s=><span key={s}>{s}</span>)}</div>
    <a href={project.href} className="portfolio-text-link">Explore project <ArrowUpRight size={16}/></a>
  </div>
 </article>;
}

export default function HomeSections() {
 return <main className="portfolio-home">
  <section className="portfolio-hero">
    <div className="portfolio-hero-top"><span>STRIX ENGINEERING STUDIO <i>·</i> PUNE, INDIA</span><span>PRODUCT ENGINEERING / 2026</span></div>
    <div className="portfolio-hero-body">
      <div className="portfolio-hero-copy">
        <p className="portfolio-kicker"><span className="portfolio-status-dot"/> Independent software engineering studio</p>
        <h1>We build <em>digital products</em> that move businesses forward.</h1>
        <p className="portfolio-lead">From the first product question to production-ready software, Strix brings product thinking, thoughtful architecture and hands-on engineering together.</p>
        <div className="portfolio-hero-actions">
          <a className="portfolio-button-primary" href="/contact/">Start a project <ArrowUpRight size={17}/></a>
          <a className="portfolio-button-text" href="#work">Explore our work <ArrowDownRight size={17}/></a>
        </div>
        <div className="portfolio-availability"><span className="portfolio-status-dot"/> Available for selected product engineering engagements</div>
      </div>
      <div className="portfolio-hero-visual" aria-label="Strix system architecture sketch">
        <div className="portfolio-visual-label"><span>STRIX / SYSTEM MAP</span><span>FIG. 001</span></div>
        <div className="portfolio-orbit portfolio-orbit-one"/><div className="portfolio-orbit portfolio-orbit-two"/>
        <div className="portfolio-visual-core"><img src="/strix.svg" alt="Strix mark"/><span>ENGINEERED<br/>FOR REALITY</span></div>
        <span className="portfolio-visual-node node-a">PRODUCT<br/>STRATEGY</span><span className="portfolio-visual-node node-b">SOFTWARE<br/>ARCHITECTURE</span><span className="portfolio-visual-node node-c">USER<br/>EXPERIENCE</span><span className="portfolio-visual-node node-d">CLOUD<br/>OPERATIONS</span>
        <div className="portfolio-visual-foot"><span>DISCOVER → DESIGN → ENGINEER → EVOLVE</span><span>STRIX / 26</span></div>
      </div>
    </div>
    <div className="portfolio-hero-bottom"><span>BUILD THE RIGHT SYSTEM BEFORE BUILDING THE SOFTWARE.</span><span>SCROLL TO EXPLORE ↓</span></div>
  </section>

  <section className="portfolio-intro-strip">
    <p>What we do</p><div>PRODUCT STRATEGY <b>×</b> SOFTWARE ENGINEERING <b>×</b> SYSTEMS THINKING</div><span>01 — 06</span>
  </section>

  <section className="portfolio-section portfolio-work-section" id="work">
    <SectionHeading eyebrow="Selected work / 01" title={<>A selection of things<br/><em>we've helped bring to life.</em></>} description="Client products, studio initiatives and engineering systems. Each project has a different context; the common thread is thoughtful execution."/>
    <div className="portfolio-project-grid">{work.map((project,index)=><ProjectCard key={project.n} project={project} index={index}/>)}</div>
    <div className="portfolio-more-work">
      <div><p className="portfolio-kicker">More digital experiences</p><h3>Built for different teams,<br/>markets and ideas.</h3></div>
      <div className="portfolio-more-work-list">{extraWork.map((p,i)=><a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"><span>0{i+6}</span><div><small>{p.type}</small><strong>{p.name}</strong></div><span className="portfolio-more-arrow"><ArrowUpRight size={18}/></span></a>)}</div>
    </div>
    <div className="portfolio-section-end"><a href="/case-studies/" className="portfolio-button-outline">View all case studies <ArrowUpRight size={16}/></a></div>
  </section>

  <section className="portfolio-process-section" id="process">
    <div className="portfolio-section portfolio-process-inner">
      <SectionHeading eyebrow="How we work / 02" title={<>Good software starts<br/><em>with better questions.</em></>} description="We take products from first thought to release with an iterative process that keeps the business goal, user need and engineering decisions connected."/>
      <div className="portfolio-process-grid">{steps.map(([n,title,desc])=><article key={n}><span className="portfolio-process-number">{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={18}/></article>)}</div>
      <div className="portfolio-process-note"><span>OUR PRINCIPLE</span><p>Build the right system before building the software.</p></div>
    </div>
  </section>

  <section className="portfolio-section portfolio-capabilities" id="capabilities">
    <SectionHeading eyebrow="What we do / 03" title={<>Small enough to think deeply.<br/><em>Experienced enough to build end-to-end.</em></>} description="A connected engineering capability across the product lifecycle — with architecture, implementation and delivery considered together."/>
    <div className="portfolio-capability-grid">{capabilities.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
  </section>

  <section className="portfolio-stack-section" id="stack">
    <div className="portfolio-section portfolio-stack-inner">
      <SectionHeading eyebrow="Technology / 04" title={<>The right tool for<br/><em>the system we're building.</em></>} description="We work across established frameworks, data platforms and cloud infrastructure. Technology choices follow product needs, operational constraints and maintainability."/>
      <div className="portfolio-stack-grid">{tools.map(([category,name,url,docs])=><article key={name}><small>{category}</small><strong>{name}</strong><div><a href={url} target="_blank" rel="noopener noreferrer">Website ↗</a><a href={docs} target="_blank" rel="noopener noreferrer">Docs ↗</a></div></article>)}</div>
    </div>
  </section>

  <section className="portfolio-journal-section" id="journal">
    <div className="portfolio-section portfolio-journal-inner">
      <SectionHeading eyebrow="Engineering journal / 05" title={<>Notes on building<br/><em>useful, durable software.</em></>} description="Practical perspectives from the work: backend architecture, cloud systems, mobile engineering and product decisions."/>
      <div className="portfolio-journal-grid">{[
        ["01","NestJS architecture for operational products","Backend engineering","nestjs-architecture-for-operational-products"],
        ["02","Choosing Next.js or Astro for a product website","Frontend architecture","nextjs-vs-astro-product-sites"],
        ["03","Firebase architecture for mobile-first products","Cloud & mobile","firebase-architecture-mobile-products"],
        ["04","MongoDB or PostgreSQL? Model the data first","Data engineering","mongodb-vs-postgresql-data-modeling"],
        ["05","GCP and AWS deployment foundations","Cloud infrastructure","gcp-aws-deployment-foundations"],
        ["06","Flutter architecture beyond the MVP","Mobile engineering","flutter-architecture-after-mvp"]
      ].map(([n,title,tag,slug])=><a key={slug} href={`/insights/${slug}/`}><span>{n}</span><div><small>{tag}</small><strong>{title}</strong></div><ArrowUpRight size={18}/></a>)}</div>
      <a href="/insights/" className="portfolio-text-link portfolio-journal-link">Visit the journal <ArrowUpRight size={16}/></a>
    </div>
  </section>

  <section className="portfolio-contact-section" id="contact">
    <div className="portfolio-section portfolio-contact-inner">
      <div><p className="portfolio-kicker">Have a product in mind?</p><h2>Let's make<br/><em>something that matters.</em></h2><p>Tell us what you're working on, where you're stuck, or what you'd like to build next.</p></div>
      <div className="portfolio-contact-card"><span>START A CONVERSATION</span><a href="mailto:team@strix.website">team@strix.website <ArrowUpRight size={18}/></a><a href="/contact/" className="portfolio-button-primary">Tell us about your project <ArrowUpRight size={17}/></a><small>Pune, India · Working with teams everywhere</small></div>
    </div>
  </section>
 </main>;
}
function content(value) {
    const iterate =
      typeof value === "string" ? undefined : value?.[iteratorKey];
    if (typeof iterate !== "function") {
      return emitBlock(value);
    }

    // Reuse the method from a potentially stateful getter, with its original
    // receiver. The for-of loop closes the iterator if the host rejects a block.
    const blocks = { [iteratorKey]: () => apply(iterate, value, []) };
    for (const block of blocks) {
      emitBlock(block);
    }
  }