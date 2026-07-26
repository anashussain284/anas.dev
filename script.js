const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
let points = [];

// Network Background Canvas Logic
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
    ctx.fillStyle = "#f59e0b";
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
let fetchedArticles = [];

// ARTICLES PAGE STATE MANAGEMENT
let blogPageState = {
    searchQuery: '',
    selectedTag: 'ALL',
    currentPage: 1,
    itemsPerPage: 9
};

async function fetchDevToArticles() {
    if (fetchedArticles.length > 0) return fetchedArticles;
    try {
        const response = await fetch(`https://dev.to/api/articles?username=${portfolioData.devToUsername}`);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        if (data && data.length > 0) {
            fetchedArticles = data.map(article => ({
                id: article.id,
                date: new Date(article.published_at).toLocaleDateString('en-US', { day: '2-digit', month: 'SHORT', year: 'numeric' }).toUpperCase(),
                title: article.title,
                description: article.description,
                url: article.canonical_url || article.url,
                reading_time_minutes: article.reading_time_minutes,
                cover_image: article.cover_image || article.social_image,
                tags: article.tag_list || ['php', 'laravel', 'backend'] // Defaults if none from API
            }));
            return fetchedArticles;
        }
    } catch (error) {
        console.warn("Dev.to API offline, using static data:", error);
    }
    
    // Fallback static data enriched with tags for testing
    fetchedArticles = portfolioData.blogs.map(b => ({
        ...b,
        tags: b.tags || ['laravel', 'php', 'oop']
    }));
    return fetchedArticles;
}

function navigate(page) {
    app.style.opacity = '0';
    setTimeout(async () => {
        if (page === 'home') await renderHome();
        else if (page === 'blog-list') {
            // Reset page state on navigation
            blogPageState = { searchQuery: '', selectedTag: 'ALL', currentPage: 1, itemsPerPage: 9 };
            await renderBlogList();
        }
        app.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    } else { 
        navigate('home'); 
        setTimeout(() => {
            const target = document.getElementById(id);
            if (target) {
                const yOffset = -100;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 300); 
    }
}

// DYNAMIC FOOTER COMPONENT
function renderFooter() {
    const currentYear = new Date().getFullYear();
    return `
        <footer class="mt-24 border-t border-white/10 bg-slate-950/90 backdrop-blur-md">
            <div class="max-w-6xl mx-auto px-6 py-12">
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div class="text-center md:text-left">
                        <h3 class="text-xl font-bold text-white tracking-wide">Anas Hussain</h3>
                        <p class="text-slate-400 text-sm mt-1 max-w-md leading-relaxed">Senior Software Engineer specializing in scalable Laravel architectures, cloud services, and efficient data processing systems.</p>
                    </div>

                    <div class="flex items-center gap-5">
                        ${portfolioData.socials.map(s => `
                            <a href="${s.link}" target="_blank" class="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/40 transition">
                                <i class="fab ${s.icon} text-base"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>

                <div class="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
                    <p>© Anas - ${currentYear}. All rights reserved.</p>
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="text-amber-500 hover:underline flex items-center gap-1 font-semibold">
                        Back to top <i class="fas fa-arrow-up text-[10px]"></i>
                    </button>
                </div>
            </div>
        </footer>
    `;
}

// HOME PAGE VIEW
async function renderHome() {
    const articles = await fetchDevToArticles();
    const homeArticles = articles.slice(0, 4);

    app.innerHTML = `
        <div class="max-w-6xl mx-auto px-6">
            
            <!-- HERO SECTION -->
            <section id="home" class="flex flex-col md:flex-row items-center justify-between gap-12 mb-28">
                <div class="md:w-3/5 text-center md:text-left order-2 md:order-1">
                    <span class="text-amber-500 font-bold tracking-widest text-xs uppercase mb-3 block">Senior Software Engineer</span>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">${portfolioData.heading}</h1>
                    <p class="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 font-normal">${portfolioData.subheading}</p>
                    
                    <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <a href="${portfolioData.resumeLink}" target="_blank" class="btn-gold">Download Resume</a>
                        <a href="mailto:${portfolioData.email}?subject=Senior%20Software%20Engineer%20Opportunity" class="btn-gold bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">Hire Me</a>
                        <div class="flex gap-4 text-xl text-slate-400 ml-2">
                            ${portfolioData.socials.map(s => `<a href="${s.link}" target="_blank" class="hover:text-amber-500 transition"><i class="fab ${s.icon}"></i></a>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
                    <div class="relative max-w-[320px] w-full">
                        <div class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-[2rem] blur opacity-20"></div>
                        <img src="${portfolioData.photoUrl}" 
                             alt="Anas Hussain" 
                             class="relative rounded-[2rem] grayscale border border-white/10 shadow-2xl transition-all duration-500 hover:grayscale-0 w-full object-cover aspect-[4/5]">
                    </div>
                </div>
            </section>

            <!-- TECHNICAL CAPABILITIES -->
            <section id="solutions" class="mb-28">
                <div class="mb-10 flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                    ${portfolioData.techStack.map(t => `<span class="px-3.5 py-1 bg-slate-900/80 border border-white/10 rounded-full text-xs font-semibold text-slate-300">${t}</span>`).join('')}
                </div>
                <h2 class="text-3xl font-bold mb-12 text-center">Core Technical <span class="gradient-text">Capabilities</span></h2>
                <div class="grid md:grid-cols-2 gap-6">
                    ${portfolioData.solutions.map(s => `
                        <div class="glass-card flex flex-col justify-between">
                            <div>
                                <div class="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
                                    <i class="fas ${s.icon} text-amber-500 text-xl"></i>
                                </div>
                                <h3 class="font-bold text-xl mb-3 text-white">${s.title}</h3>
                                <p class="text-slate-400 text-base leading-relaxed">${s.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- ENGINEERING PROJECTS -->
            <section id="works" class="mb-28">
                <h2 class="text-3xl font-bold mb-8 tracking-tight">Key Engineering <span class="gradient-text">Projects</span></h2>
                <div class="scroll-container custom-scroll h-[520px] pr-2 overflow-y-auto">
                    <div class="grid gap-6">
                        ${portfolioData.works.map(w => `
                            <div class="glass-card grid md:grid-cols-2 gap-8 items-start">
                                <div>
                                    <h3 class="text-2xl font-bold mb-3 text-white">${w.title}</h3>
                                    <p class="text-slate-300 text-base mb-5 leading-relaxed">${w.brief}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${w.stacks.map(st => `<span class="bg-slate-900 border border-white/5 px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-500 uppercase tracking-wider">${st}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="bg-slate-950/60 p-6 rounded-xl border border-white/5 space-y-4">
                                    <div>
                                        <h4 class="text-amber-500 font-bold text-xs uppercase tracking-wider mb-1">The Challenge</h4>
                                        <p class="text-slate-300 text-sm leading-relaxed">${w.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 class="text-amber-500 font-bold text-xs uppercase tracking-wider mb-1">The Solution</h4>
                                        <p class="text-slate-300 text-sm leading-relaxed">${w.solution}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- ARTICLES & ENDORSEMENTS -->
            <div class="grid lg:grid-cols-2 gap-8 mb-12">
                
                <!-- ARTICLES CARD -->
                <div class="glass-card flex flex-col justify-between h-[520px]">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">Latest <span class="gradient-text">Articles</span></h2>
                        <span onclick="navigate('blog-list')" class="text-amber-500 hover:underline cursor-pointer font-bold text-xs uppercase tracking-wider">View All</span>
                    </div>
                    <div class="scroll-container custom-scroll overflow-y-auto flex-1 pr-2">
                        <div class="space-y-4">
                            ${homeArticles.map(b => `
                                <a href="${b.url}" target="_blank" class="p-5 bg-slate-900/60 rounded-xl border border-white/5 block cursor-pointer group hover:border-amber-500/40 transition">
                                    <p class="text-[11px] text-amber-500 font-bold uppercase tracking-wider mb-1.5">${b.date} • ${b.reading_time_minutes || 3} min read</p>
                                    <h4 class="text-lg font-bold text-slate-100 group-hover:text-amber-500 transition leading-snug">${b.title}</h4>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- TESTIMONIALS CARD WITH LINKEDIN VERIFICATION LINK -->
                <div class="glass-card flex flex-col justify-between h-[520px]">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">Peer <span class="gradient-text">Endorsements</span></h2>
                        <span class="text-xs text-slate-400 flex items-center gap-1 font-medium">
                            <i class="fas fa-shield-alt text-amber-500"></i> LinkedIn Verified
                        </span>
                    </div>
                    
                    <div class="scroll-container custom-scroll overflow-y-auto flex-1 pr-2">
                        <div class="space-y-5">
                            ${portfolioData.testimonials.map(t => `
                                <div class="p-5 bg-slate-900/60 rounded-xl border-l-4 border-l-amber-500 border border-white/5 flex flex-col justify-between gap-4">
                                    <p class="text-slate-300 text-sm italic leading-relaxed">"${t.text}"</p>
                                    
                                    <div class="flex items-center justify-between pt-2 border-t border-white/5">
                                        <div class="flex items-center gap-3">
                                            ${t.photo ? 
                                                `<img src="${t.photo}" alt="${t.name}" class="h-9 w-9 rounded-full object-cover border border-amber-500/50">` : 
                                                `<div class="h-9 w-9 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black text-xs shrink-0">${t.name.charAt(0)}</div>`
                                            }
                                            <div>
                                                <h4 class="text-sm font-bold text-white flex items-center gap-1.5 leading-none mb-1">
                                                    ${t.name}
                                                </h4>
                                                <p class="text-[11px] text-slate-400">${t.title}</p>
                                            </div>
                                        </div>

                                        <a href="${t.linkedInUrl}" target="_blank" class="px-3 py-1.5 rounded-lg bg-sky-950/50 border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-white transition text-[11px] font-semibold flex items-center gap-1.5 shrink-0">
                                            <i class="fab fa-linkedin text-xs"></i> Verify
                                        </a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

            </div>

        </div>

        ${renderFooter()}
    `;
}

// ADVANCED ARTICLES PAGE WITH DYNAMIC SEARCH, TAG FILTERING & PAGINATION
async function renderBlogList() {
    const allArticles = await fetchDevToArticles();

    // 1. Extract Unique Tags
    const tagsSet = new Set(['ALL']);
    allArticles.forEach(art => {
        if (art.tags && Array.isArray(art.tags)) {
            art.tags.forEach(tag => tagsSet.add(tag.toLowerCase()));
        }
    });
    const uniqueTags = Array.from(tagsSet);

    // 2. Filter Articles by Search Query and Tag Selection
    const filteredArticles = allArticles.filter(art => {
        const matchesQuery = 
            art.title.toLowerCase().includes(blogPageState.searchQuery.toLowerCase()) || 
            (art.description && art.description.toLowerCase().includes(blogPageState.searchQuery.toLowerCase()));

        const matchesTag = 
            blogPageState.selectedTag === 'ALL' || 
            (art.tags && art.tags.map(t => t.toLowerCase()).includes(blogPageState.selectedTag.toLowerCase()));

        return matchesQuery && matchesTag;
    });

    // 3. Paginate Filtered Articles (9 per page)
    const totalPages = Math.ceil(filteredArticles.length / blogPageState.itemsPerPage) || 1;
    
    // Safety check for current page boundary
    if (blogPageState.currentPage > totalPages) blogPageState.currentPage = totalPages;

    const startIndex = (blogPageState.currentPage - 1) * blogPageState.itemsPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + blogPageState.itemsPerPage);

    // 4. Render Main HTML Layout
    app.innerHTML = `
        <div class="max-w-6xl mx-auto px-6 min-h-[75vh]">
            <!-- HEADER -->
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2">Technical <span class="gradient-text">Writing</span></h1>
                    <p class="text-slate-400 text-sm">Deep dives into Laravel, backend architecture, database optimizations, and system design.</p>
                </div>
                <span onclick="navigate('home')" class="text-amber-500 cursor-pointer font-bold uppercase tracking-wider text-xs hover:underline flex items-center gap-2 self-start md:self-auto">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </span>
            </div>

            <!-- SEARCH AND TAG FILTER CONTROLS -->
            <div class="space-y-5 mb-10">
                <!-- Search Input -->
                <div class="relative max-w-xl">
                    <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input 
                        type="text" 
                        id="articleSearchInput"
                        placeholder="Search 100+ articles by topic, keyword, or title..." 
                        value="${blogPageState.searchQuery}"
                        class="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 text-sm transition"
                    />
                    ${blogPageState.searchQuery ? `
                        <button onclick="updateBlogState({searchQuery: '', currentPage: 1})" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs">
                            <i class="fas fa-times"></i>
                        </button>
                    ` : ''}
                </div>

                <!-- Tag Cloud Buttons -->
                <div class="flex flex-wrap gap-2 items-center">
                    <span class="text-xs text-slate-400 font-bold uppercase tracking-wider mr-1">Filter Tag:</span>
                    ${uniqueTags.map(tag => `
                        <button 
                            onclick="updateBlogState({selectedTag: '${tag}', currentPage: 1})" 
                            class="px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                                blogPageState.selectedTag.toLowerCase() === tag.toLowerCase() 
                                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
                                    : 'bg-slate-900/80 text-slate-400 border border-white/10 hover:border-amber-500/40 hover:text-white'
                            }">
                            #${tag}
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- ARTICLES GRID (3 ROWS x 3 COLS = 9 ITEMS) -->
            ${paginatedArticles.length > 0 ? `
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    ${paginatedArticles.map(b => `
                        <a href="${b.url}" target="_blank" class="glass-card flex flex-col justify-between cursor-pointer group hover:border-amber-500/50 transition">
                            <div>
                                ${b.cover_image ? `<img src="${b.cover_image}" alt="Cover Image" class="w-full h-36 object-cover rounded-lg mb-4 border border-white/5">` : ''}
                                
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-amber-500 text-[11px] font-bold uppercase tracking-wider">${b.date} • ${b.reading_time_minutes || 3} min</span>
                                </div>

                                <h2 class="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition leading-snug">${b.title}</h2>
                                ${b.description ? `<p class="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">${b.description}</p>` : ''}
                            </div>

                            <div>
                                <!-- Tags List -->
                                <div class="flex flex-wrap gap-1.5 mb-4">
                                    ${(b.tags || []).map(t => `
                                        <span class="text-[10px] bg-slate-950/80 text-slate-400 border border-white/5 px-2 py-0.5 rounded">#${t}</span>
                                    `).join('')}
                                </div>

                                <div class="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 pt-2 border-t border-white/5">
                                    Read Article <i class="fas fa-external-link-alt text-[10px]"></i>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            ` : `
                <!-- EMPTY STATE -->
                <div class="text-center py-16 bg-slate-900/40 rounded-2xl border border-white/5 my-8">
                    <i class="fas fa-search text-3xl text-slate-500 mb-3 block"></i>
                    <h3 class="text-lg font-bold text-white mb-1">No articles found</h3>
                    <p class="text-slate-400 text-xs mb-4">Try adjusting your search terms or clearing tag filters.</p>
                    <button onclick="updateBlogState({searchQuery: '', selectedTag: 'ALL', currentPage: 1})" class="px-4 py-2 bg-amber-500 text-black font-bold text-xs rounded-lg hover:bg-amber-400 transition">
                        Reset Filters
                    </button>
                </div>
            `}

            <!-- PAGINATION CONTROLS -->
            ${totalPages > 1 ? `
                <div class="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4">
                    <p class="text-slate-400 text-xs">
                        Showing <span class="text-white font-semibold">${startIndex + 1}</span> to <span class="text-white font-semibold">${Math.min(startIndex + blogPageState.itemsPerPage, filteredArticles.length)}</span> of <span class="text-white font-semibold">${filteredArticles.length}</span> articles
                    </p>

                    <div class="flex items-center gap-2">
                        <!-- Previous Button -->
                        <button 
                            onclick="updateBlogState({currentPage: ${blogPageState.currentPage - 1}})"
                            ${blogPageState.currentPage === 1 ? 'disabled class="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-white/5 text-slate-600 cursor-not-allowed text-xs font-semibold"' : 'class="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/50 transition text-xs font-semibold"'}>
                            <i class="fas fa-chevron-left mr-1"></i> Prev
                        </button>

                        <!-- Page Number Buttons -->
                        ${Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
                            <button 
                                onclick="updateBlogState({currentPage: ${p}})"
                                class="w-8 h-8 rounded-lg text-xs font-bold transition ${
                                    blogPageState.currentPage === p 
                                        ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                                        : 'bg-slate-900 text-slate-400 border border-white/10 hover:text-white hover:border-amber-500/40'
                                }">
                                ${p}
                            </button>
                        `).join('')}

                        <!-- Next Button -->
                        <button 
                            onclick="updateBlogState({currentPage: ${blogPageState.currentPage + 1}})"
                            ${blogPageState.currentPage === totalPages ? 'disabled class="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-white/5 text-slate-600 cursor-not-allowed text-xs font-semibold"' : 'class="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/50 transition text-xs font-semibold"'}>
                            Next <i class="fas fa-chevron-right ml-1"></i>
                        </button>
                    </div>
                </div>
            ` : ''}

        </div>

        ${renderFooter()}
    `;

    // Attach Search Debounce Listener
    const searchInput = document.getElementById('articleSearchInput');
    if (searchInput) {
        searchInput.focus();
        // Move cursor to end of input text
        searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
        
        searchInput.addEventListener('input', (e) => {
            updateBlogState({ searchQuery: e.target.value, currentPage: 1 }, false);
        });
    }
}

// HELPER FUNCTION TO UPDATE STATE AND RE-RENDER
function updateBlogState(newState, reRenderImmediately = true) {
    blogPageState = { ...blogPageState, ...newState };
    if (reRenderImmediately) {
        renderBlogList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        renderBlogList();
    }
}

// INITIAL STARTUP
navigate('home');