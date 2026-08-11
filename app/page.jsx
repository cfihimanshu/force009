"use client";

import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Clock3, Landmark, MapPin, ScanLine, ShieldCheck, Users } from "lucide-react";
import { Shell, Reveal, Magnetic } from "./components";

const services = [
  ["01", "Secured Asset Possession", "Authorised on-ground execution support for banks and financial institutions under applicable SARFAESI process.", ShieldCheck],
  ["02", "Liaison & Coordination", "Structured coordination with authorised officers, DM/CMM administration, local police and field stakeholders.", ScanLine],
  ["03", "Post-Possession Protection", "Round-the-clock guarding, access control and incident reporting for assets placed in a secured creditor’s possession.", Building2],
];

export default function Home() {
  return <Shell>
    <section className="hero">
      <div className="hero-image" />
      <Reveal className="hero-copy">
        <p className="eyebrow"><i /> SECURED ASSET OPERATIONS</p>
        <h1>Securing today.<br/><em>Protecting</em><br/>tomorrow.</h1>
        <p className="lede">Lawful physical possession support and reliable asset protection for banks, NBFCs and institutional clients. Your mandate. Our field control.</p>
        <div className="actions"><Magnetic><Link className="button gold" href="/services">Our services <ArrowRight/></Link></Magnetic><Link className="button ghost" href="/contact">Get in touch <ArrowRight/></Link></div>
        <div className="proof"><span><ShieldCheck/><b>09+</b><small>Years experience</small></span><span><Clock3/><b>24/7</b><small>Asset protection</small></span><span><MapPin/><b>02</b><small>Operational cities</small></span></div>
      </Reveal>
      <aside className="hero-values"><span>AUTHORITY</span><i/><span>INTEGRITY</span><i/><span>VIGILANCE</span><i/><span>CUSTODY</span></aside>
      <div className="scroll-cue"><span>SCROLL DOWN</span><i/></div>
    </section>

    <section className="marquee"><div>VIGILANCE <i/> INTEGRITY <i/> READINESS <i/> COMMAND <i/> PROTECTION <i/> VIGILANCE <i/> INTEGRITY <i/> READINESS</div></section>

    <section className="statement section">
      <Reveal><p className="eyebrow dark"><i/> THE FORCE009 MANDATE</p><h2>From legal order to<br/><em>secured custody.</em></h2></Reveal>
      <Reveal className="statement-side"><p>FORCE009 supports authorised secured creditors through field planning, statutory-document coordination, peaceful possession execution, inventory and site handover, followed by accountable round-the-clock protection.</p><Link className="text-link" href="/about">Understand our approach <ArrowRight/></Link></Reveal>
    </section>

    <section className="home-editorial"><img src="/brand/home/bank-coordination.png" alt="Bank authorised officer and FORCE009 operations team reviewing a secured property assignment"/><Reveal className="editorial-card"><p className="eyebrow"><i/> INSTITUTIONAL COORDINATION</p><h2>Aligned before<br/><em>action begins.</em></h2><p>Every assignment starts with a shared understanding of authority, property details, stakeholders and field conditions.</p><Link className="text-link" href="/about">Why institutions work with us <ArrowRight/></Link></Reveal></section>

    <section className="capabilities section">
      <div className="section-title"><Reveal><p className="eyebrow"><i/> CORE CAPABILITIES</p><h2>One mandate.<br/><em>Every stage.</em></h2></Reveal><p>Purpose-built for sensitive enforcement assignments where legality, documentation, coordination and control are equally critical.</p></div>
      <div className="card-grid">{services.map(([n,title,text,Icon])=><Reveal key={title} className="cap-card"><span>{n}</span><Icon/><h3>{title}</h3><p>{text}</p><Link href="/services">View capability <ArrowRight/></Link></Reveal>)}</div>
    </section>

    <section className="command section">
      <div className="command-media"><img src="/brand/home/asset-protection.png" alt="FORCE009 security supervisor monitoring a protected commercial property"/><div className="media-status"><i/><span><b>24 / 7 ASSET WATCH</b><small>Controlled access · Active reporting</small></span></div></div>
      <Reveal className="command-copy"><p className="eyebrow"><i/> FIELD CONTROL</p><h2>Documented.<br/><em>Defensible. Secure.</em></h2><p>Every assignment is approached through authority verification, reconnaissance, stakeholder coordination and a recorded handover trail.</p><ul><li><CheckCircle2/> Order and authorisation verification</li><li><CheckCircle2/> Police and administration coordination</li><li><CheckCircle2/> Inventory, sealing and possession reporting</li><li><CheckCircle2/> Guard deployment and escalation matrix</li></ul><Link className="button gold" href="/services">See the complete workflow <ArrowRight/></Link></Reveal>
    </section>

    <section className="home-clients section"><Reveal><p className="eyebrow dark"><i/> WHO WE SUPPORT</p><h2>Built for institutions<br/><em>that manage risk.</em></h2></Reveal><div className="client-row"><Link href="/industries"><Landmark/><span><b>Banks</b><small>Secured creditors</small></span></Link><Link href="/industries"><ShieldCheck/><span><b>NBFCs & ARCs</b><small>Asset portfolios</small></span></Link><Link href="/industries"><Building2/><span><b>Corporates</b><small>Premises security</small></span></Link></div></section>

    <section className="cta-band"><Reveal><Users/><p>AUTHORITY · EXECUTION · CUSTODY</p><h2>Have a secured-asset assignment?</h2><Link className="button light" href="/contact">Speak with operations <ArrowRight/></Link></Reveal></section>
  </Shell>;
}
