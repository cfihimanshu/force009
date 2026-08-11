"use client";
import { useState } from "react";
import { Building2, Check, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero, Shell } from "../components";

export default function Contact(){
  const [status,setStatus]=useState("idle");
  const [error,setError]=useState("");
  async function submit(e){
    e.preventDefault(); setStatus("sending"); setError("");
    const form=e.currentTarget;
    try{
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))});
      const result=await response.json();
      if(!response.ok) throw new Error(result.error||"Unable to submit your request.");
      form.reset(); setStatus("sent");
    }catch(err){setError(err.message);setStatus("error")}
  }
  if(status==="sent") return <Shell><PageHero kicker="CONTACT" title={<>Let’s secure<br/><em>what matters.</em></>} copy="Tell us about your site, team or current concern. We’ll help define the right next move."/><section className="contact-page section"><div className="contact-info"><ContactInfo/></div><form><div className="form-success"><Check/><h2>Request received.</h2><p>Your details have been saved successfully. Our team will contact you shortly.</p><button onClick={()=>setStatus("idle")} type="button">Send another</button></div></form></section></Shell>;
  return <Shell><PageHero kicker="CONTACT" title={<>Let’s secure<br/><em>what matters.</em></>} copy="Tell us about your site, team or current concern. We’ll help define the right next move."/><section className="contact-page section"><div className="contact-info"><ContactInfo/></div><form onSubmit={submit}><input className="hp-field" name="website" tabIndex="-1" autoComplete="off"/><div className="fields"><label>YOUR NAME<input name="name" required maxLength="100" placeholder="Full name"/></label><label>COMPANY<input name="company" required maxLength="120" placeholder="Organisation"/></label></div><div className="fields"><label>PHONE<input name="phone" required type="tel" maxLength="30" placeholder="+91"/></label><label>WORK EMAIL<input name="email" required type="email" maxLength="150" placeholder="name@company.com"/></label></div><label>SERVICE<select name="service" required defaultValue=""><option value="" disabled>Select requirement</option><option>SARFAESI Possession Support</option><option>DM / CMM Process Coordination</option><option>Police & Administration Liaison</option><option>Post-Possession Asset Guarding</option><option>Corporate Security</option><option>Legal Documentation Support</option></select></label><label>BRIEF<textarea name="brief" required maxLength="2000" rows="5" placeholder="Site, city, team size or concern..."/></label>{error&&<p className="form-error">{error}</p>}<button className="button gold" disabled={status==="sending"}>{status==="sending"?"Saving…":"Request consultation"}</button><small className="secure"><ShieldCheck/> Your details remain confidential.</small></form></section></Shell>
}

function ContactInfo(){return <><h2>Start a confidential conversation.</h2><p>For urgent assistance, call our 24/7 line directly.</p><a href="tel:+917410809444"><Phone/><span><small>CALL</small>+91 74108 09444</span></a><a href="mailto:security.rajasthan@gmail.com"><Mail/><span><small>EMAIL</small>security.rajasthan@gmail.com</span></a><div><MapPin/><span><small>JAIPUR</small>S-45, Subhash Nagar Shopping Centre, Bani Park, Jaipur 302016</span></div><div><Building2/><span><small>REGISTERED OFFICE</small>715, Mastermind V, Royal Palm Estate, Goregaon East, Mumbai 400065</span></div></>}
