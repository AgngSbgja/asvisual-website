document.documentElement.classList.add("js");
/* ===== CONFIG: ubah data di sini ===== */
const CONFIG={
 whatsapp:"6281224563313", /* format internasional tanpa + , contoh 6281234567890 */
 instagram:"https://www.instagram.com/agngsbgja_?cplk=MXMyZGg4OXJ4OWI1bA==", /* ganti dengan link Instagram Anda */
 email:"agungsubagja03mret@gmail.com" /* ganti dengan email Anda */
};
const ICONS={
 poster:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
 logo:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><circle cx="12" cy="12" r="3"/>',
 feed:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
 slides:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/>',
 pack:'<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
 brochure:'<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',
 banner:'<path d="M4 4v17"/><path d="M4 5h16l-3 4 3 4H4"/>',
 brand:'<path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.6-2.5H17a4 4 0 004-4c0-5-4-9.5-9-9.5z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="11" r="1"/>',
 other:'<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>'
};
const PRICING=[
{id:"poster",name:"Poster Design",icon:"poster",desc:"Poster promosi, event, dan informasi yang menarik perhatian.",from:"Rp50.000",items:[["Poster sederhana","Rp50.000"],["Poster promosi","Rp75.000"],["Poster event","Rp100.000"],["Poster kompleks","Rp150.000"]]},
{id:"logo",name:"Logo Design",icon:"logo",desc:"Logo yang memiliki karakter dan mudah dikenali.",from:"Rp150.000",items:[["Logo sederhana","Rp150.000"],["Logo custom","Rp250.000"],["Logo profesional","Rp350.000"],["Logo kompleks","Rp500.000"]]},
{id:"feed",name:"Instagram Feed Design",icon:"feed",desc:"Feed dan carousel yang konsisten untuk media sosial.",from:"Rp40.000",items:[["1 Feed","Rp40.000"],["Carousel 3 slide","Rp100.000"],["Carousel 5 slide","Rp175.000"],["Carousel 10 slide","Rp300.000"],["Paket 9 Feed","Rp300.000"]]},
{id:"ppt",name:"Presentation Design",icon:"slides",desc:"Presentasi PowerPoint yang rapi dan mudah dipahami.",from:"Rp100.000",items:[["1–5 slide","Rp100.000"],["6–10 slide","Rp175.000"],["11–15 slide","Rp250.000"],["16–20 slide","Rp325.000"],["Tambahan slide","Rp15.000/slide"]],note:"Harga berlaku untuk desain visual menggunakan materi dari klien."},
{id:"pack",name:"Packaging Design",icon:"pack",desc:"Label, stiker, dan kemasan yang membuat produk menonjol.",from:"Rp75.000",items:[["Label produk","Rp100.000"],["Stiker kemasan","Rp75.000"],["Kemasan sederhana","Rp175.000"],["Kemasan custom","Rp250.000"],["Kemasan kompleks","Rp350.000–450.000"]]},
{id:"bro",name:"Brochure & Pamphlet Design",icon:"brochure",desc:"Brosur dan pamflet dengan informasi tertata jelas.",from:"Rp50.000",items:[["Pamflet 1 sisi","Rp50.000"],["Pamflet 2 sisi","Rp85.000"],["Brosur 2 lipatan","Rp125.000"],["Brosur 3 lipatan","Rp150.000"],["Brosur katalog","Mulai Rp200.000"]]},
{id:"ban",name:"Banner Design",icon:"banner",desc:"Banner promosi dan event untuk cetak maupun digital.",from:"Rp50.000",items:[["Banner sederhana","Rp50.000"],["Banner promosi","Rp75.000"],["Banner event","Rp100.000"],["Banner kompleks","Rp150.000"]]},
{id:"brand",name:"Branding Design",icon:"brand",desc:"Identitas visual lengkap, dari logo sampai panduan brand.",from:"Rp350.000",items:[["Basic branding","Rp350.000"],["Logo & stationery","Rp500.000"],["Brand identity","Rp750.000"],["Complete branding","Rp1.000.000–1.500.000"]]},
{id:"other",name:"Other Graphic Design",icon:"other",desc:"Kartu nama, sertifikat, undangan, thumbnail, UI, dan lainnya.",from:"Rp30.000",items:[["Kartu nama","Rp50.000"],["Sertifikat","Rp40.000"],["Undangan digital","Rp75.000"],["Desain ID Card","Rp30.000"],["Desain CV","Rp40.000"],["Desain cover buku","Rp100.000"],["Desain menu makanan","Rp100.000"],["Desain katalog produk","Mulai Rp150.000"],["Desain thumbnail YouTube","Rp50.000"],["Desain UI sederhana","Mulai Rp250.000"]]}
];
const BUNDLES=[
{name:"Starter Branding",price:"Rp500.000",items:["1 Logo custom","1 Kartu nama","3 Feed Instagram"]},
{name:"Social Media Package",price:"Rp350.000",items:["9 Feed Instagram","2 Instagram Story","1 Template promosi"],f:1},
{name:"Product Branding",price:"Rp450.000",items:["1 Logo sederhana","1 Label produk","1 Desain kemasan"]}
];
const PORTFOLIO=[ /* ganti img dengan URL gambar karya asli; kosongkan = placeholder */
{cat:"Poster",title:"Contoh Poster",img:""},{cat:"Logo",title:"Contoh Logo",img:""},{cat:"Social Media",title:"Contoh Feed",img:""},
{cat:"Branding",title:"Contoh Branding",img:""},{cat:"Packaging",title:"Contoh Kemasan",img:""},{cat:"Other Design",title:"Contoh Kartu Nama",img:""},
{cat:"Poster",title:"Contoh Poster Event",img:""},{cat:"Social Media",title:"Contoh Carousel",img:""},{cat:"Logo",title:"Contoh Logo Mark",img:""}
];
const WORKFLOW=[["Consultation","Klien menghubungi dan menjelaskan kebutuhan."],["Briefing","Mengumpulkan informasi dan referensi desain."],["Payment","Pembayaran DP 50%."],["Design Process","Proses pengerjaan desain."],["Revision","Maksimal 2 kali revisi minor."],["Final Delivery","File final dikirim setelah pelunasan."]];
const TERMS=[["DP awal","50%."],["Revisi","Gratis 2 kali revisi minor."],["Revisi tambahan","Rp15.000–25.000/kali."],["Pengerjaan express","Tambahan 30%."],["File termasuk","JPG, PNG, dan PDF."],["File mentah","AI/CDR/PSD dikenakan tambahan 30%."],["Biaya cetak","Tidak termasuk."]];
const VALUES=[["Creativity","Ide segar yang relevan"],["Quality","Detail rapi dan konsisten"],["Innovation","Pendekatan visual baru"],["Visual Identity","Karakter yang mudah diingat"]];
const SOFTWARE=["Adobe Illustrator","Adobe Photoshop","CorelDRAW","Canva","Figma","Affinity Designer"];
/* ===== end CONFIG ===== */

const $=s=>document.querySelector(s),h=(el,t)=>el.innerHTML=t;
const wa=t=>"https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(t);
const open=t=>window.open(wa(t),"_blank","noopener");
const ic=k=>'<span class="ic"><svg viewBox="0 0 24 24">'+ICONS[k]+'</svg></span>';

h($("#sw"),SOFTWARE.map(s=>'<span class="chip">'+s+'</span>').join(""));
h($("#vals"),VALUES.map(v=>'<div><b>'+v[0]+'</b><span>'+v[1]+'</span></div>').join(""));
h($("#sv"),PRICING.map(p=>'<article class="card sv">'+ic(p.icon)+'<h3>'+p.name+'</h3><p>'+p.desc+'</p><div class="from">Mulai dari <b>'+p.from+'</b></div><div class="row"><button class="btn sm p" data-tab="'+p.id+'">View Pricing</button><button class="btn sm" data-order="'+p.name+'">Order Now</button></div></article>').join(""));
h($("#fl"),PRICING.map(p=>'<a href="#pricing" data-tab="'+p.id+'">'+p.name+'</a>').join(""));
h($("#fs"),'<option value="">Pilih layanan</option>'+PRICING.map(p=>'<option>'+p.name+'</option>').join("")+BUNDLES.map(b=>'<option>Paket '+b.name+'</option>').join(""));
h($("#bd"),BUNDLES.map(b=>'<article class="card bd'+(b.f?' f':'')+'"><h3>'+b.name+'</h3><div class="pc">'+b.price+'</div><ul>'+b.items.map(i=>'<li>'+i+'</li>').join("")+'</ul><button class="btn '+(b.f?'p':'')+'" data-order="Paket '+b.name+' ('+b.price+')">Order Package</button></article>').join(""));
h($("#wf"),WORKFLOW.map(w=>'<div class="card"><h3>'+w[0]+'</h3><p>'+w[1]+'</p></div>').join(""));
h($("#tc"),TERMS.map(t=>'<li><b>'+t[0]+':</b> '+t[1]+'</li>').join(""));

/* pricing tabs */
let cur=PRICING[0].id;
function tabs(){
 h($("#tabs"),PRICING.map(p=>'<button class="tab" role="tab" aria-selected="'+(p.id===cur)+'" data-tab="'+p.id+'">'+p.name.replace(" Design","")+'</button>').join(""));
 const p=PRICING.find(x=>x.id===cur);
 h($("#pp"),p.items.map(i=>'<div class="pr"><span>'+i[0]+'</span><span>'+i[1]+'</span></div>').join("")+(p.note?'<p class="pn">'+p.note+'</p>':'')+'<div class="pf"><span class="hint">Harga final menyesuaikan tingkat kesulitan.</span><button class="btn p" data-order="'+p.name+'">Order '+p.name+'</button></div>');
}
tabs();

/* portfolio */
const cats=["All"].concat([...new Set(PORTFOLIO.map(p=>p.cat))]);
const grads=["linear-gradient(135deg,#1d4ed8,#080B12)","linear-gradient(160deg,#38BDF8,#101827 70%)","linear-gradient(200deg,#2563EB,#101827)","linear-gradient(120deg,#101827,#2563EB 120%)"];
h($("#pg"),PORTFOLIO.map((p,i)=>'<figure class="pi" style="margin:0;--g:'+(p.img?'url('+p.img+') center/cover':grads[i%4])+'" data-c="'+p.cat+'"><div><span>'+p.title+'</span><small>'+(p.img?p.cat:'Placeholder')+'</small></div></figure>').join(""));
h($("#pf"),cats.map((c,i)=>'<button class="tab" aria-selected="'+(i==0)+'" data-f="'+c+'">'+c+'</button>').join(""));

/* contact links */
$("#ig").href=$("#fi").href=CONFIG.instagram;
$("#em").href=$("#fe").href="mailto:"+CONFIG.email;
$("#fw").href=wa("Halo ASVISUAL, saya ingin berkonsultasi tentang desain.");

/* events */
document.addEventListener("click",e=>{
 const t=e.target.closest("[data-tab],[data-order],[data-f],[data-wa]");
 if(!t)return;
 if(t.dataset.tab){cur=t.dataset.tab;tabs();if(!t.closest("#tabs"))$("#pricing").scrollIntoView();}
 else if(t.dataset.order){const n=t.dataset.order;open("Halo ASVISUAL, saya ingin memesan: "+n+".\nMohon info lebih lanjut.");}
 else if(t.dataset.wa){e.preventDefault();open("Halo ASVISUAL, saya ingin berdiskusi tentang proyek desain.");}
 else if(t.dataset.f){
  document.querySelectorAll("#pf .tab").forEach(b=>b.setAttribute("aria-selected",b===t));
  document.querySelectorAll(".pi").forEach(i=>i.hidden=t.dataset.f!=="All"&&i.dataset.c!==t.dataset.f);
 }
});
$("#fm").addEventListener("submit",e=>{
 e.preventDefault();const f=new FormData(e.target),g=k=>(f.get(k)||"-").toString().trim()||"-";
 open("Halo ASVISUAL, saya ingin memesan desain.\n\nNama: "+g("n")+"\nKontak: "+g("c")+"\nLayanan: "+g("s")+"\nBudget: "+g("b")+"\nKebutuhan: "+g("d"));
});
const tg=$("#tg");
function setT(t,save){document.documentElement.dataset.theme=t;tg.setAttribute("aria-label",t==="dark"?"Ubah ke mode siang":"Ubah ke mode malam");if(save){try{localStorage.setItem("asv-theme",t)}catch(e){}}}
setT(document.documentElement.dataset.theme,false);
tg.onclick=()=>setT(document.documentElement.dataset.theme==="dark"?"light":"dark",true);
const lk=$("#lk"),bg=$("#bg");
bg.onclick=()=>{const o=lk.classList.toggle("o");bg.setAttribute("aria-expanded",o)};
lk.addEventListener("click",e=>{if(e.target.closest("a"))lk.classList.remove("o")});
addEventListener("scroll",()=>$("#hd").classList.toggle("s",scrollY>10),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
