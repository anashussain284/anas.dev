// Network Canvas Animation Background
const canvas = document.getElementById('networkCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let points = [];

function initCanvas() {
    if (!canvas) return;
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
    if (!canvas || !ctx) return;
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
initCanvas(); 
animateBackground();
window.addEventListener('resize', initCanvas);

const app = document.getElementById('app-root');
let fetchedArticles = [];

// Global State Object for Articles
window.articleState = {
    currentPage: 1,
    itemsPerPage: 9, // 3 rows x 3 columns
    searchQuery: "",
    selectedTag: "all"
};

// Fetch Dev.to Articles with Fallback, Tag Parsing & ID Descending Sorting
async function fetchDevToArticles() {
    if (fetchedArticles.length > 0) return fetchedArticles;

    try {
        const response = await fetch(`https://dev.to/api/articles?username=${portfolioData.devToUsername}&per_page=1000`);
        if (!response.ok) throw new Error('Dev.to response error');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            fetchedArticles = data.map(article => {
                let rawTags = [];
                if (Array.isArray(article.tag_list) && article.tag_list.length > 0) {
                    rawTags = article.tag_list;
                } else if (typeof article.tags === 'string' && article.tags.trim().length > 0) {
                    rawTags = article.tags.split(',').map(t => t.trim());
                } else if (Array.isArray(article.tags)) {
                    rawTags = article.tags;
                } else {
                    rawTags = ['php', 'laravel'];
                }

                return {
                    id: Number(article.id),
                    date: new Date(article.published_at).toLocaleDateString('en-US', { day: '2-digit', month: 'SHORT', year: 'numeric' }).toUpperCase(),
                    title: article.title || "Untitled Article",
                    description: article.description || "",
                    url: article.canonical_url || article.url || "#",
                    reading_time_minutes: article.reading_time_minutes || 3,
                    cover_image: article.cover_image || article.social_image || null,
                    tags: rawTags.map(t => t.toLowerCase().trim())
                };
            });

            // Sort descending by ID (newest/highest ID first)
            fetchedArticles.sort((a, b) => b.id - a.id);
            return fetchedArticles;
        }
    } catch (error) {
        console.warn("Dev.to API offline. Using fallback blogs array:", error);
    }

    // Fallback using portfolioData.blogs sorted DESC by ID
    fetchedArticles = (portfolioData.blogs || []).map(b => ({
        ...b,
        id: Number(b.id),
        tags: Array.isArray(b.tags) ? b.tags.map(t => t.toLowerCase().trim()) : ['php', 'laravel']
    })).sort((a, b) => b.id - a.id);

    return fetchedArticles;
}

// Navigation & Scroll Helpers
window.navigate = function(page) {
    if (!app) return;
    app.style.opacity = '0';
    setTimeout(async () => {
        if (page === 'home') await renderHome();
        else if (page === 'blog-list') {
            window.articleState.currentPage = 1;
            window.articleState.searchQuery = "";
            window.articleState.selectedTag = "all";
            await renderBlogList();
        }
        app.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
};

window.scrollToSection = function(id) {
    const el = document.getElementById(id);
    if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    } else { 
        window.navigate('home'); 
        setTimeout(() => {
            const target = document.getElementById(id);
            if (target) {
                const yOffset = -100;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 300); 
    }
};

// Global Dynamic Footer Component
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
    
    // Pick the top 4 latest articles (already sorted DESC by ID)
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
                
                <!-- ARTICLES HOME CARD -->
                <div class="glass-card flex flex-col justify-between h-[520px]">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">Latest <span class="gradient-text">Articles</span></h2>
                        <span onclick="window.navigate('blog-list')" class="text-amber-500 hover:underline cursor-pointer font-bold text-xs uppercase tracking-wider">View All</span>
                    </div>
                    <div class="scroll-container custom-scroll overflow-y-auto flex-1 pr-2">
                        <div class="space-y-4">
                            ${homeArticles.map(b => `
                                <a href="${b.url}" target="_blank" class="p-5 bg-slate-900/60 rounded-xl border border-white/5 block cursor-pointer group hover:border-amber-500/40 transition">
                                    <p class="text-[11px] text-amber-500 font-bold uppercase tracking-wider mb-1.5">${b.date} • ${b.reading_time_minutes} min read</p>
                                    <h4 class="text-lg font-bold text-slate-100 group-hover:text-amber-500 transition leading-snug">${b.title}</h4>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- ENDORSEMENTS WITH LINKEDIN VERIFICATION -->
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

// ARTICLES INTERACTIVE LOGIC
function filterArticles() {
    const query = window.articleState.searchQuery.toLowerCase().trim();
    const selectedTag = window.articleState.selectedTag.toLowerCase();

    // Filter matching articles while maintaining ID descending order
    return fetchedArticles.filter(article => {
        const matchesQuery = !query || 
            article.title.toLowerCase().includes(query) || 
            (article.description && article.description.toLowerCase().includes(query)) ||
            (article.tags && article.tags.some(t => t.includes(query)));

        const matchesTag = selectedTag === "all" || 
            (article.tags && article.tags.includes(selectedTag));

        return matchesQuery && matchesTag;
    });
}

window.handleSearchInput = function(e) {
    window.articleState.searchQuery = e.target.value;
    window.articleState.currentPage = 1;
    updateArticlesGridUI();
};

window.handleTagSelect = function(tag) {
    window.articleState.selectedTag = tag;
    window.articleState.currentPage = 1;
    updateArticlesGridUI();
};

window.handlePageChange = function(newPage) {
    window.articleState.currentPage = newPage;
    updateArticlesGridUI();
    window.scrollTo({ top: 180, behavior: 'smooth' });
};

function updateArticlesGridUI() {
    const filtered = filterArticles();
    const totalPages = Math.ceil(filtered.length / window.articleState.itemsPerPage) || 1;

    if (window.articleState.currentPage > totalPages) {
        window.articleState.currentPage = totalPages;
    }

    const startIndex = (window.articleState.currentPage - 1) * window.articleState.itemsPerPage;
    const paginatedArticles = filtered.slice(startIndex, startIndex + window.articleState.itemsPerPage);

    // Render Grid Cards
    const gridContainer = document.getElementById('articles-grid-container');
    if (gridContainer) {
        if (paginatedArticles.length === 0) {
            gridContainer.innerHTML = `
                <div class="col-span-full py-16 text-center glass-card">
                    <i class="fas fa-search-minus text-4xl text-amber-500/60 mb-3"></i>
                    <h3 class="text-xl font-bold text-white mb-1">No articles found</h3>
                    <p class="text-slate-400 text-sm">Try tweaking your search term or selecting another tag filter.</p>
                </div>
            `;
        } else {
            gridContainer.innerHTML = paginatedArticles.map(b => `
                <a href="${b.url}" target="_blank" class="glass-card flex flex-col justify-between cursor-pointer group hover:border-amber-500/50 transition h-full">
                    <div>
                        ${b.cover_image ? `<img src="${b.cover_image}" alt="Article Cover" class="w-full h-36 object-cover rounded-lg mb-4 border border-white/5">` : ''}
                        <span class="text-amber-500 text-[11px] font-bold uppercase tracking-wider block mb-2">${b.date} • ${b.reading_time_minutes} min read</span>
                        <h2 class="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition leading-snug">${b.title}</h2>
                        ${b.description ? `<p class="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">${b.description}</p>` : ''}
                    </div>
                    <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            ${b.tags.map(t => `<span class="bg-slate-900 text-slate-400 px-2 py-0.5 rounded text-[10px] font-mono border border-white/5">#${t}</span>`).join('')}
                        </div>
                        <div class="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 pt-2 border-t border-white/5">
                            Read on Dev.to <i class="fas fa-external-link-alt text-[10px]"></i>
                        </div>
                    </div>
                </a>
            `).join('');
        }
    }

    // Update Highlighted Tag UI Status
    const tagButtons = document.querySelectorAll('.tag-btn');
    tagButtons.forEach(btn => {
        const tagValue = btn.getAttribute('data-tag');
        if (tagValue === window.articleState.selectedTag) {
            btn.className = "tag-btn px-3.5 py-1.5 rounded-full text-xs font-semibold transition bg-amber-500 text-black shadow-lg shadow-amber-500/20";
        } else {
            btn.className = "tag-btn px-3.5 py-1.5 rounded-full text-xs font-semibold transition bg-slate-900/80 text-slate-400 hover:text-white border border-white/10";
        }
    });

    // Render Pagination Bar
    const paginationContainer = document.getElementById('articles-pagination');
    if (paginationContainer) {
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
        } else {
            let pageBtns = '';
            for (let i = 1; i <= totalPages; i++) {
                const isActive = i === window.articleState.currentPage;
                pageBtns += `
                    <button onclick="window.handlePageChange(${i})" class="w-9 h-9 rounded-lg text-xs font-bold transition ${isActive ? 'bg-amber-500 text-black' : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-amber-500/50'}">
                        ${i}
                    </button>
                `;
            }

            paginationContainer.innerHTML = `
                <div class="flex items-center justify-center gap-2 mt-12">
                    <button onclick="window.handlePageChange(${window.articleState.currentPage - 1})" ${window.articleState.currentPage === 1 ? 'disabled' : ''} class="px-3.5 h-9 rounded-lg text-xs font-bold bg-slate-900 border border-white/10 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-amber-500/50 transition">
                        <i class="fas fa-chevron-left mr-1"></i> Prev
                    </button>
                    ${pageBtns}
                    <button onclick="window.handlePageChange(${window.articleState.currentPage + 1})" ${window.articleState.currentPage === totalPages ? 'disabled' : ''} class="px-3.5 h-9 rounded-lg text-xs font-bold bg-slate-900 border border-white/10 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-amber-500/50 transition">
                        Next <i class="fas fa-chevron-right ml-1"></i>
                    </button>
                </div>
            `;
        }
    }
}

// FULL ARTICLES PAGE VIEW
async function renderBlogList() {
    const articles = await fetchDevToArticles();

    // Deduplicate and extract all article tags
    const tagsSet = new Set();
    articles.forEach(article => {
        if (Array.isArray(article.tags)) {
            article.tags.forEach(t => tagsSet.add(t.toLowerCase().trim()));
        }
    });
    const uniqueTags = Array.from(tagsSet).sort();

    app.innerHTML = `
        <div class="max-w-6xl mx-auto px-6 min-h-[70vh]">
            
            <!-- HEADER & SEARCH BAR -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                    <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2">Technical <span class="gradient-text">Writing</span></h1>
                    <p class="text-slate-400 text-sm">Deep dives into Laravel core, architecture patterns, and system performance.</p>
                </div>

                <div class="flex items-center gap-4 w-full md:w-auto">
                    <div class="relative w-full md:w-72">
                        <i class="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                        <input id="article-search-input" 
                               type="text" 
                               value="${window.articleState.searchQuery}"
                               placeholder="Search 100+ articles..." 
                               oninput="window.handleSearchInput(event)"
                               class="w-full bg-slate-900/90 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition">
                    </div>

                    <span onclick="window.navigate('home')" class="text-amber-500 cursor-pointer font-bold uppercase tracking-wider text-xs hover:underline flex items-center gap-2 shrink-0">
                        <i class="fas fa-arrow-left"></i> Home
                    </span>
                </div>
            </div>

            <!-- DYNAMIC TAG FILTERS -->
            <div class="mb-8 flex flex-wrap items-center gap-2">
                <span class="text-xs text-slate-500 font-semibold mr-1">Filter Tag:</span>
                
                <button onclick="window.handleTagSelect('all')" 
                        data-tag="all" 
                        class="tag-btn px-3.5 py-1.5 rounded-full text-xs font-semibold transition bg-amber-500 text-black shadow-lg shadow-amber-500/20">
                    All
                </button>

                ${uniqueTags.map(tag => `
                    <button onclick="window.handleTagSelect('${tag}')" 
                            data-tag="${tag}" 
                            class="tag-btn px-3.5 py-1.5 rounded-full text-xs font-semibold transition bg-slate-900/80 text-slate-400 hover:text-white border border-white/10">
                        #${tag}
                    </button>
                `).join('')}
            </div>

            <!-- ARTICLES GRID (SORTED DESCENDING BY ID) -->
            <div id="articles-grid-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <!-- PAGINATION -->
            <div id="articles-pagination"></div>

        </div>

        ${renderFooter()}
    `;

    // Initialize UI
    updateArticlesGridUI();
}

// INITIAL STARTUP
window.navigate('home');

