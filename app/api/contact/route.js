const required=["name","company","phone","email","service","brief"];
const clean=(value,max=2000)=>String(value??"").trim().slice(0,max);

export async function POST(request){
  try{
    const body=await request.json();
    if(body.website) return Response.json({ok:true});
    const data={name:clean(body.name,100),company:clean(body.company,120),phone:clean(body.phone,30),email:clean(body.email,150),service:clean(body.service,120),brief:clean(body.brief)};
    if(required.some(key=>!data[key])) return Response.json({error:"कृपया सभी required fields भरें."},{status:400});
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return Response.json({error:"Valid email address डालें."},{status:400});
    const webhook=process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if(!webhook) return Response.json({error:"Google Sheet integration अभी configure नहीं हुई है."},{status:503});
    const response=await fetch(webhook,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({...data,secret:process.env.GOOGLE_SHEETS_WEBHOOK_SECRET||"",source:"force009-website"}),redirect:"follow"});
    const result=await response.json().catch(()=>({ok:false}));
    if(!response.ok||!result.ok) throw new Error("Sheet webhook rejected submission");
    return Response.json({ok:true});
  }catch(error){
    console.error("Contact submission failed",error);
    return Response.json({error:"Details save नहीं हो सकीं. कृपया phone या email से संपर्क करें."},{status:500});
  }
}
