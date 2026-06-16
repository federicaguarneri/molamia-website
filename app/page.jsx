const services = [
  ['01','Automazione Processi','Semplifichiamo e automatizziamo attività ripetitive per liberare tempo e risorse preziose.'],
  ['02','Soluzioni su misura','Progettiamo soluzioni AI personalizzate in base ai tuoi obiettivi e al tuo contesto.'],
  ['03','Gestione Dati','Organizziamo e valorizziamo il patrimonio informativo della tua azienda.'],
  ['04','Analisi Predittiva','Trasformiamo i dati in insight per prendere decisioni più rapide e consapevoli.'],
  ['05','Assistenti AI','Costruiamo assistenti intelligenti integrati nei tuoi processi quotidiani.'],
  ['06','Formazione Team','Formiamo il tuo team per un’adozione efficace e consapevole dell’AI.'],
];

const steps = [
  ['01','Analisi dei processi','Individuiamo inefficienze e opportunità di miglioramento.'],
  ['02','Soluzione AI su misura','Progettiamo soluzioni AI personalizzate per le tue esigenze di business.'],
  ['03','Integrazione nei sistemi','Integriamo le soluzioni AI nei tuoi strumenti esistenti.'],
  ['04','Impatto misurabile','Misuriamo i risultati con KPI chiari e valore concreto.'],
  ['05','Formazione e affiancamento','Formiamo il tuo team e garantiamo un’adozione efficace.'],
  ['06','Supporto continuo','Siamo al tuo fianco con supporto tecnico e strategico.'],
];

const founders = [
  ['FEDERICA','Co-Founder','Sales & Business Development · Ex-Amazon','Solida esperienza in sales e marketing maturata in contesti internazionali di primo livello. In Amazon ha ricoperto ruoli di responsabilità per l’Europa e l’area Asia-Pacifico nell’ambito degli eventi digitali e della strategia commerciale.','Partnership · Growth · Go-To-Market'],
  ['EUGENE','Co-Founder','AI Strategy & Technical Lead · Ex-Amazon','Cuore tecnologico di MolamIA. Con un background costruito in Amazon come figura chiave nella strategia e nello sviluppo di soluzioni di intelligenza artificiale, porta competenze tecniche rare e concrete.','AI Strategy · Architecture · Delivery'],
  ['FRANCESCO','Co-Founder','Advisor Finanziario e PMI','CEO di una delle realtà bancarie più specializzate nel segmento delle PMI italiane. Porta una conoscenza profonda delle dinamiche finanziarie e decisionali delle PMI, cuore del mercato di MolamIA.','PMI · Credito · Finanza'],
];

const faqs = [
  ['MolamIA sviluppa software standard?','No. MolamIA parte dai processi reali della tua azienda e costruisce soluzioni AI su misura, integrate negli strumenti che già utilizzi.'],
  ['Da dove si parte?','Si parte da una prima analisi dei processi, degli obiettivi e delle opportunità di miglioramento. Da lì definiamo le aree in cui l’AI può generare valore concreto.'],
  ['Serve avere già dati strutturati?','Non necessariamente. Possiamo aiutarti a organizzare, pulire e valorizzare il patrimonio informativo esistente, anche quando i dati sono distribuiti tra sistemi diversi.'],
  ['Quanto tempo serve per vedere i primi risultati?','Dipende dal progetto, ma l’approccio MolamIA è pensato per identificare rapidamente casi d’uso concreti e generare valore misurabile in tempi brevi.'],
  ['L’AI sostituisce il team?','No. L’obiettivo è potenziare il lavoro delle persone, automatizzando attività ripetitive e liberando tempo per decisioni, relazione con i clienti e attività a maggior valore.'],
  ['Le soluzioni si integrano con i sistemi già presenti?','Sì. Progettiamo soluzioni pensate per dialogare con CRM, gestionali, database, strumenti interni e workflow già in uso.'],
  ['Offrite formazione?','Sì. Accompagniamo il team nell’adozione degli strumenti AI con formazione pratica, supporto e affiancamento.'],
];

function Nav(){
  return <header className="fixed top-0 z-50 w-full border-b border-blue-100/70 bg-white/80 backdrop-blur-xl">
    <div className="container flex h-20 items-center justify-between">
      <a href="#home" className="text-2xl font-black tracking-tight text-navy">Molam<span className="text-electric">IA</span></a>
      <nav className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
        <a href="#servizi" className="hover:text-electric">Servizi</a><a href="#metodo" className="hover:text-electric">Metodo</a><a href="#team" className="hover:text-electric">Team</a><a href="#testimonials" className="hover:text-electric">Dicono di noi</a><a href="#faq" className="hover:text-electric">FAQ</a><a href="#contatti" className="rounded-full bg-electric px-5 py-3 text-white shadow-lg shadow-blue-500/20">Contattaci</a>
      </nav>
      <a href="#contatti" className="rounded-full bg-electric px-4 py-2 text-sm font-bold text-white md:hidden">Contatti</a>
    </div>
  </header>
}

function Hero(){
  return <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-skysoft to-white pt-32 section">
    <div className="absolute inset-0 dots opacity-60" />
    <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
      <div>
        <p className="label mb-5">AI Solution Provider per PMI italiane</p>
        <h1 className="font-display text-6xl font-black leading-[.9] tracking-[-.06em] text-navy md:text-8xl">AI SU MISURA.<br/><span className="gradient-text">CONCRETA. SUBITO.</span></h1>
        <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">Soluzioni di intelligenza artificiale su misura per le PMI italiane. Analizziamo i tuoi processi, costruiamo strumenti concreti e li integriamo nei sistemi che già utilizzi.</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"><a href="#contatti" className="rounded-full bg-electric px-8 py-4 text-center font-bold text-white shadow-2xl shadow-blue-500/25 transition hover:-translate-y-1">Richiedi una prima analisi</a><span className="text-sm font-semibold text-muted">🛡 Nessun software standard. Partiamo dai processi reali.</span></div>
      </div>
      <div className="glass card rounded-[34px] p-5">
        <div className="rounded-[26px] bg-deep p-5 text-white shadow-2xl">
          <div className="mb-4 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-300"/><span className="h-3 w-3 rounded-full bg-yellow-300"/><span className="h-3 w-3 rounded-full bg-green-300"/></div>
          <div className="rounded-2xl bg-white p-5 text-ink">
            <p className="mb-4 text-sm font-black text-electric">MolamIA Process Path</p>
            {['Analisi dei processi','Soluzione AI su misura','Integrazione nei sistemi','Impatto misurabile'].map((x,i)=><div key={x} className="mb-3 flex items-center gap-3 rounded-2xl border border-blue-100 bg-skysoft p-4"><b className="grid h-8 w-8 place-items-center rounded-full bg-electric text-xs text-white">{i+1}</b><span className="font-bold text-navy">{x}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default function Page(){
  return <main><Nav/><Hero/>
    <section className="section bg-white"><div className="container"><p className="label">La sfida</p><h2 className="mt-4 max-w-5xl text-4xl font-black tracking-[-.04em] text-navy md:text-6xl">Restare competitivi alla velocità dell’intelligenza artificiale, senza snaturare identità e valori.</h2><p className="mt-8 max-w-3xl text-lg leading-8 text-muted">Le PMI hanno competenze, relazioni e processi costruiti nel tempo. La sfida non è sostituirli, ma potenziarli con strumenti AI concreti, semplici da adottare e capaci di generare risultati misurabili.</p></div></section>
    <section id="servizi" className="section bg-gradient-to-br from-deep via-navy to-[#001B54] text-white"><div className="container"><p className="label text-blue-200">Servizi</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em] md:text-7xl">Cosa facciamo</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">Aiutiamo le aziende a trasformare processi, dati e competenze in vantaggio competitivo con soluzioni di intelligenza artificiale su misura.</p><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><article key={s[0]} className="rounded-[28px] bg-white p-7 text-ink transition hover:-translate-y-2 hover:shadow-2xl"><span className="text-sm font-black text-electric">{s[0]}</span><h3 className="mt-5 text-2xl font-black text-navy">{s[1]}</h3><p className="mt-4 leading-7 text-muted">{s[2]}</p></article>)}</div></div></section>
    <section id="metodo" className="section bg-skysoft"><div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="label">Il nostro metodo</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em] text-navy md:text-6xl">AI che semplifica.<br/>Valore che <span className="font-serif italic text-electric">accelera.</span></h2><div className="mt-10 rounded-[36px] bg-deep p-5 text-white shadow-2xl"><p className="mb-4 text-sm font-bold text-blue-200">Chat MolamIA</p><div className="rounded-2xl bg-white/10 p-4 text-sm">“Ho bisogno di analizzare l’efficienza del processo di gestione ordini.”</div><div className="mt-4 rounded-2xl bg-electric p-4 text-sm">“Ho identificato 3 aree di miglioramento: riduzione tempi di evasione, automazione verifiche, integrazione con gestionale.”</div></div></div><div className="grid gap-4 md:grid-cols-2">{steps.map(s=><div key={s[0]} className="card rounded-[26px] bg-white p-6"><span className="font-black text-electric">{s[0]}</span><h3 className="mt-3 text-xl font-black text-navy">{s[1]}</h3><p className="mt-3 leading-7 text-muted">{s[2]}</p></div>)}</div></div></section>
    <section id="team" className="section bg-white"><div className="container"><p className="label">Il team</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em] text-navy md:text-7xl">Tre fondatori.<br/>Esperienza che fa la differenza.</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-muted">MolamIA è fondata e guidata da un team con background complementari e un comune denominatore: esperienza operativa diretta in contesti ad alta complessità.</p><div className="mt-12 grid gap-6 lg:grid-cols-3">{founders.map(f=><article key={f[0]} className="card rounded-[30px] bg-white p-8"><div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-skysoft text-2xl font-black text-electric">{f[0][0]}</div><h3 className="text-3xl font-black text-navy">{f[0]}</h3><p className="mt-2 font-bold text-electric">{f[1]}</p><p className="mt-1 text-sm font-semibold text-muted">{f[2]}</p><p className="mt-5 leading-7 text-muted">{f[3]}</p><p className="mt-6 rounded-full bg-skysoft px-4 py-3 text-sm font-bold text-navy">{f[4]}</p></article>)}</div></div></section>
    <section className="section bg-gradient-to-br from-deep to-navy text-white"><div className="container grid gap-10 lg:grid-cols-2"><div><h2 className="text-4xl font-black tracking-[-.04em] md:text-6xl">Un network globale al passo con l’innovazione.</h2><p className="mt-6 text-lg leading-8 text-blue-100">Lavoriamo con una rete internazionale di professionisti selezionati per portare nei progetti competenze sempre aggiornate e prospettive globali.</p><div className="mt-10 grid grid-cols-3 gap-4 text-center"><b className="text-4xl text-blue-200">30+</b><b className="text-4xl text-blue-200">25+</b><b className="text-4xl text-blue-200">100+</b><span>Professionisti</span><span>Paesi</span><span>Progetti</span></div></div><div className="grid gap-3 sm:grid-cols-2">{['Specialisti AI','Data Engineer','Automation Expert','UX Designer','Software Architect','LLM Specialist','Product Strategist'].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold">{x}</div>)}</div></div></section>
    <section id="testimonials" className="section bg-white"><div className="container"><p className="label">Dicono di noi</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em] text-navy md:text-6xl">La fiducia si costruisce.<br/>Ogni progetto è una storia di valore.</h2><div className="mt-10 rounded-[34px] bg-skysoft p-8 md:p-12"><p className="font-serif text-3xl italic leading-tight text-navy">“Risultati concreti, approccio pragmatico e grande velocità di esecuzione.”</p><p className="mt-6 font-bold text-electric">CEO Azienda</p></div><div className="mt-8 grid gap-4 md:grid-cols-4">{[1,2,3,4].map(i=><div key={i} className="rounded-2xl border border-blue-100 bg-white p-6 text-center font-bold text-muted">Logo Cliente</div>)}</div></div></section>
    <section id="faq" className="section bg-skysoft"><div className="container"><p className="label">FAQ</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em] text-navy">Domande frequenti</h2><p className="mt-4 text-lg text-muted">Tutto quello che serve sapere prima di iniziare un progetto AI con MolamIA.</p><div className="mt-10 space-y-4">{faqs.map(f=><details key={f[0]} className="card rounded-2xl bg-white p-6"><summary className="cursor-pointer text-lg font-black text-navy">{f[0]}</summary><p className="mt-4 leading-7 text-muted">{f[1]}</p></details>)}</div></div></section>
    <section id="contatti" className="section bg-gradient-to-br from-deep via-navy to-[#001B54] text-white"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="label text-blue-200">Contatti</p><h2 className="mt-4 text-5xl font-black tracking-[-.05em] md:text-6xl">Pronti a trasformare i vostri processi in risultati concreti?</h2><p className="mt-6 text-lg leading-8 text-blue-100">Raccontaci la tua esigenza: ti aiuteremo a capire dove l’AI può generare valore reale per la tua azienda.</p><div className="mt-8 rounded-[28px] bg-white/10 p-6"><h3 className="text-2xl font-black">Cosa succede dopo?</h3><ul className="mt-5 space-y-3 text-blue-100"><li>✓ Analizziamo la tua richiesta</li><li>✓ Identifichiamo le prime opportunità AI</li><li>✓ Organizziamo un confronto operativo</li><li>✓ Definiamo un percorso concreto e misurabile</li></ul><p className="mt-6">hello@molamia.com<br/>Milano, Italia — Network internazionale</p></div></div><form className="glass rounded-[34px] p-7 text-ink"><div className="grid gap-4 md:grid-cols-2"><input placeholder="Nome e cognome"/><input placeholder="Azienda"/><input placeholder="Email"/><input placeholder="Telefono"/><select><option>Area di interesse</option><option>Automazione Processi</option><option>Assistenti AI</option><option>Gestione Dati</option><option>Analisi Predittiva</option><option>Formazione Team</option><option>Altro</option></select><textarea className="md:col-span-2" rows="5" placeholder="Messaggio"/></div><button className="mt-5 w-full rounded-full bg-electric px-8 py-4 font-black text-white">Richiedi una prima analisi</button><p className="mt-4 text-center text-sm text-muted">Ti risponderemo con una proposta di primo confronto operativo.</p></form></div></section>
    <footer className="bg-deep py-10 text-white"><div className="container flex flex-col justify-between gap-6 md:flex-row"><div><b className="text-2xl">Molam<span className="text-electric">IA</span></b><p className="mt-3 max-w-md text-blue-100">AI su misura per trasformare processi, dati e competenze in vantaggio competitivo.</p></div><div className="flex flex-wrap gap-5 text-sm text-blue-100"><a href="#servizi">Servizi</a><a href="#metodo">Metodo</a><a href="#team">Team</a><a href="#faq">FAQ</a><a href="#contatti">Contatti</a><span>Privacy Policy</span><span>Cookie Policy</span></div><p className="text-sm text-blue-100">© 2026 MolamIA. Tutti i diritti riservati.</p></div></footer>
  </main>
}
