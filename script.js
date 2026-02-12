const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
let points = [];

// Network Background Logic
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    points = [];
    for(let i=0; i<60; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3
        });
    }
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f59e0b"; // Primary Gold
    ctx.strokeStyle = "rgba(245, 158, 11, 0.1)";

    points.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1, 0, Math.PI*2); ctx.fill();
        for(let j=i+1; j<points.length; j++) {
            let p2 = points[j];
            let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if(dist < 180) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
        }
    });
    requestAnimationFrame(animateBackground);
}
initCanvas(); animateBackground();

const app = document.getElementById('app-root');

function getReadTime(paragraphs) {
    if (!paragraphs) return "2 min read";
    const words = paragraphs.join(" ").split(" ").length;
    return `${Math.ceil(words / 200)} min read`;
}

function navigate(page, id = null) {
    app.style.opacity = '0';
    setTimeout(() => {
        if (page === 'home') renderHome();
        else if (page === 'blog-list') renderBlogList();
        else if (page === 'blog-detail') renderBlogDetail(id);
        app.style.opacity = '1';
        window.scrollTo(0, 0);
    }, 200);
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else { navigate('home'); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300); }
}

function renderHome() {
    app.innerHTML = `
        <div class="max-w-6xl mx-auto px-6 pt-40 pb-20">
            
            <section id="home" class="section-container flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-3/5 text-center md:text-left order-2 md:order-1">
                    <span class="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4 block">Full-Stack Digital Architect</span>
                    <h1 class="hero-title text-5xl md:text-7xl mb-8 leading-tight">${portfolioData.heading}</h1>
                    <p class="text-slate-300 text-xl mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">${portfolioData.subheading}</p>
                    <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                        <a href="${portfolioData.resumeLink}" target="_blank" class="btn-gold">Download Resume</a>
                        <div class="flex gap-6 text-2xl text-slate-400">
                            ${portfolioData.socials.map(s => `<a href="${s.link}" target="_blank" class="hover:text-amber-500 transition"><i class="fab ${s.icon}"></i></a>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
                    <div class="hero-image-container">
                        <img src="${portfolioData.photoUrl}" 
                             alt="Profile" 
                             class="rounded-[2.5rem] grayscale border border-white/10 shadow-2xl transition-all duration-500 hover:grayscale-0">
                    </div>
                </div>
            </section>

            <section id="solutions" class="section-container">
                <div class="mb-10 flex flex-wrap gap-2 justify-center">
                    ${portfolioData.techStack.map(t => `<span class="px-4 py-1 glass-card rounded-full text-xs font-bold text-slate-500">${t}</span>`).join('')}
                </div>
                <h2 class="text-3xl font-bold mb-12 text-center">My Expert <span class="gradient-text">Solutions</span></h2>
                <div class="grid md:grid-cols-3 gap-8">
                    ${portfolioData.solutions.map(s => `
                        <div class="glass-card">
                            <div class="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                                <i class="fas ${s.icon} text-amber-500 text-2xl"></i>
                            </div>
                            <h3 class="font-bold text-2xl mb-4">${s.title}</h3>
                            <p class="text-slate-400 text-lg">${s.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="works" class="section-container">
                <h2 class="text-3xl font-bold mb-10 tracking-tight">Recent <span class="gradient-text">Success Stories</span></h2>
                <div class="scroll-container custom-scroll h-[500px]">
                    <div class="grid gap-8 mr-2">
                        ${portfolioData.works.map(w => `
                            <div class="glass-card grid md:grid-cols-2 gap-10">
                                <div>
                                    <h3 class="text-3xl font-bold mb-4 text-white">${w.title}</h3>
                                    <p class="text-slate-400 text-lg mb-6 leading-relaxed">${w.brief}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${w.stacks.map(st => `<span class="bg-slate-800 px-3 py-1 rounded-md text-xs font-semibold text-amber-500 uppercase tracking-wider">${st}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="bg-slate-900/50 p-8 rounded-2xl space-y-6">
                                    <div>
                                        <h4 class="text-amber-500 font-bold text-sm uppercase mb-2">The Challenge</h4>
                                        <p class="text-slate-300 text-base font-light leading-relaxed">${w.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 class="text-amber-500 font-bold text-sm uppercase mb-2">The Solution</h4>
                                        <p class="text-slate-300 text-base font-light leading-relaxed">${w.solution}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="section-container">
                    <div class="flex justify-between items-center mb-8">
                        <h2 class="text-2xl font-bold">Latest <span class="gradient-text">Articles</span></h2>
                        <span onclick="navigate('blog-list')" class="text-amber-500 hover:underline cursor-pointer font-bold text-sm uppercase">View All</span>
                    </div>
                    <div class="scroll-container custom-scroll h-[350px]">
                        <div class="space-y-4">
                            ${portfolioData.blogs.map(b => `
                                <div onclick="navigate('blog-detail', ${b.id})" class="p-6 glass-card cursor-pointer group">
                                    <p class="text-xs text-amber-500 font-bold uppercase mb-2">${b.date} • ${getReadTime(b.paragraphs)}</p>
                                    <h4 class="text-xl font-bold group-hover:text-amber-500 transition">${b.title}</h4>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="section-container">
                    <h2 class="text-2xl font-bold mb-8 text-white">Client <span class="gradient-text">Testimonials</span></h2>
                    <div class="scroll-container custom-scroll h-[350px]">
                        <div class="space-y-4">
                            ${portfolioData.testimonials.map(t => `
                                <div class="p-6 glass-card border-l-4 border-l-amber-500">
                                    <p class="text-slate-300 text-lg italic mb-6 leading-relaxed">"${t.text}"</p>
                                    <div class="flex items-center gap-4">
                                        <div class="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black">${t.name.charAt(0)}</div>
                                        <span class="text-lg font-bold text-white">${t.name}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <section id="contact" class="section-container">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-4xl font-bold mb-4 uppercase tracking-tighter">Start a <span class="gradient-text">Conversation</span></h2>
                    <p class="text-slate-400 text-lg italic">"I offer free initial consultations to discuss how we can scale your digital infrastructure."</p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div class="glass-card p-8 text-center flex flex-col items-center group">
                        <div class="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all duration-500">
                            <i class="fab fa-whatsapp text-amber-500 group-hover:text-navy-deep text-3xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Instant Chat</h3>
                        <p class="text-slate-400 text-sm mb-6">Best for quick technical questions or free project advice.</p>
                        <a href="https://wa.me/+918078499987" target="_blank" class="btn-gold w-full text-center py-3 text-xs tracking-widest uppercase">Open WhatsApp</a>
                    </div>

                    <div class="glass-card p-8">
                        <h3 class="text-xl font-bold mb-4 text-center">Project Inquiry</h3>
                        <form action="https://formspree.io/f/mvzbkrbq" method="POST" class="space-y-4">
                            <input type="text" name="name" placeholder="YOUR NAME" required
                                class="w-full bg-white/5 border border-amber-500/20 p-3 rounded-lg text-sm outline-none focus:border-amber-500 text-white transition">
                            
                            <input type="email" name="email" placeholder="YOUR EMAIL" required
                                class="w-full bg-white/5 border border-amber-500/20 p-3 rounded-lg text-sm outline-none focus:border-amber-500 text-white transition">
                            
                            <textarea name="message" placeholder="HOW CAN I HELP YOU FOR FREE?" rows="3" required
                                class="w-full bg-white/5 border border-amber-500/20 p-3 rounded-lg text-sm outline-none focus:border-amber-500 text-white transition"></textarea>
                            
                            <button type="submit" class="btn-gold w-full py-3 font-bold uppercase text-[10px] tracking-widest">
                                Request Free Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderBlogDetail(id) {
    const post = portfolioData.blogs.find(b => b.id === id);
    app.innerHTML = `
        <div class="max-w-4xl mx-auto px-6 pt-40 pb-20">
            <div class="section-container">
                <span onclick="navigate('blog-list')" class="text-amber-500 cursor-pointer font-bold uppercase tracking-wider text-sm"><i class="fas fa-arrow-left mr-2"></i> All Articles</span>
                <p class="text-slate-500 text-sm mt-10 uppercase font-bold tracking-widest">${post.date} | ${getReadTime(post.paragraphs)}</p>
                <h1 class="text-4xl md:text-6xl font-bold mt-6 mb-10 leading-tight">${post.title}</h1>
                ${post.image ? `<img src="${post.image}" class="w-full h-auto rounded-3xl mb-12 shadow-2xl border border-white/10">` : ''}
                <div class="space-y-8 text-slate-300 text-xl leading-relaxed">
                    ${post.paragraphs ? post.paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
                </div>
            </div>
        </div>
    `;
}

function renderBlogList() {
    app.innerHTML = `<div class="max-w-4xl mx-auto px-6 pt-40 pb-20"><div class="section-container"><h1 class="text-5xl font-bold mb-12">Expert <span class="gradient-text">Insights</span></h1><div class="grid gap-6">${portfolioData.blogs.map(b => `<div onclick="navigate('blog-detail', ${b.id})" class="p-8 glass-card cursor-pointer group"><span class="text-amber-500 text-sm font-bold uppercase">${b.date} • ${getReadTime(b.paragraphs)}</span><h2 class="text-3xl font-bold mt-2 group-hover:text-amber-500 transition">${b.title}</h2></div>`).join('')}</div></div></div>`;
}

navigate('home');
