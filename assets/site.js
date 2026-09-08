import { content } from './site-data.js?v=20260908-contact';

const itemClass='border-t border-slate-200 py-6 first:border-t-0 first:pt-0',metaClass='font-mono text-sm text-slate-500',titleClass='mt-1 text-xl font-semibold leading-7 tracking-tight text-slate-900',bodyClass='mt-2 text-[15px] leading-7 text-slate-600',linkClass='mt-4 inline-block font-mono text-sm text-portfolio-accent hover:text-teal-700';
const render=(id,items,template)=>{const target=document.getElementById(id);if(target)target.innerHTML=items.map(template).join('')};
const attrs=href=>href?` href="${href}" target="_blank" rel="noreferrer"`:'';
const tags=values=>`<ul class="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-slate-500">${values.map(v=>`<li>${v}</li>`).join('')}</ul>`;
const ids=['opportunities','now','experience','projects','research','writing','links'];
const localeFromUrl=()=>new URLSearchParams(location.search).get('lang');
let locale=localeFromUrl()==='en'?'en':(localeFromUrl()==='zh'?'zh':localStorage.getItem('portfolio-locale')==='en'?'en':'zh');

function renderPage(){const data=content[locale],{ui,profile}=data;
 document.documentElement.lang=data.meta.lang;document.title=data.meta.title;document.querySelector('meta[name="description"]').content=data.meta.description;
 const aside=document.querySelector('aside'),paras=aside.querySelectorAll('p');aside.querySelector('a').textContent=profile.name;paras[0].textContent=profile.secondaryName;paras[1].innerHTML=ui.profile.replace('\n','<br />');
 document.querySelector('header > p').textContent=ui.header;document.querySelectorAll('aside nav a').forEach((a,i)=>a.textContent=ui.nav[i]);ids.forEach((id,i)=>document.querySelector(`#${id} h2`).textContent=ui.sections[i]);
 document.querySelector('#projects > a').textContent=ui.moreProjects;document.querySelector('#writing > a').textContent=ui.moreArticles;document.querySelector('#wechat-qr figcaption').textContent=ui.wechat;document.querySelectorAll('footer span').forEach((el,i)=>el.textContent=ui.footer[i]);
 const toggle=document.getElementById('language-toggle');toggle.textContent=ui.switch;toggle.setAttribute('aria-label',ui.switchLabel);
 document.getElementById('job-search-content').innerHTML=`<p class="text-[15px] leading-7 text-slate-700">${data.jobSearch.text}</p>`;
 render('now-list',data.currentFocus,x=>`<article class="${itemClass} grid grid-cols-[68px_minmax(0,1fr)] gap-4 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-5"><span class="${metaClass}">${x.date}</span><div><h3 class="text-xl font-semibold leading-7 tracking-tight text-slate-900">${x.title}</h3><p class="${bodyClass}">${x.text}</p></div></article>`);
 render('experience-list',data.timeline,x=>`<article class="${itemClass}"><p class="${metaClass}">${x.period}</p><h3 class="${titleClass}">${x.title}</h3><p class="mt-1 font-mono text-sm text-portfolio-accent">${x.role}</p><p class="${bodyClass}">${x.text}</p>${tags(x.tags)}</article>`);
 render('project-list',data.projects,x=>`<article class="${itemClass}"><p class="${metaClass}">${x.index}</p><h3 class="${titleClass}">${x.title}</h3><p class="mt-1 font-mono text-sm text-portfolio-accent">${x.subtitle}</p><p class="${bodyClass}">${x.text}</p>${tags(x.tags)}${x.href?`<a class="${linkClass}"${attrs(x.href)}>${ui.viewRepository}</a>`:`<span class="${linkClass} text-slate-500">${ui.projectPending}</span>`}</article>`);
 render('article-list',data.articles,x=>`<a class="${itemClass} block hover:bg-teal-50/70"${attrs(profile.links[1].href)}><span class="${metaClass}">${x.date}</span><h3 class="${titleClass}">${x.title}</h3><p class="${bodyClass}">${x.text}</p><b class="${linkClass}">${ui.readArticle}</b></a>`);
 render('publication-list',data.publications,x=>`<article class="${itemClass} grid grid-cols-[64px_minmax(0,1fr)] gap-4 sm:grid-cols-[92px_minmax(0,1fr)] sm:gap-5"><span class="${metaClass}">${x.year}</span><div><h3 class="text-xl font-semibold leading-7 tracking-tight text-slate-900">${x.title}</h3><p class="mt-1 font-serif text-sm italic leading-6 text-slate-500">${x.secondary}</p><p class="mt-2 font-mono text-sm text-portfolio-accent">${x.venue}</p><p class="${bodyClass}">${x.text}</p><a class="${linkClass}"${attrs(x.href)}>${ui.source}</a></div></article>`);
 render('profile-links',profile.links,x=>x.href?`<a class="min-w-0 bg-white p-4 font-mono text-sm text-slate-600 hover:bg-teal-50 hover:text-portfolio-accent"${attrs(x.href)}>${x.label} <b class="float-right">↗</b></a>`:`<span class="min-w-0 bg-white p-4 font-mono text-sm text-slate-600">${x.label}</span>`);
}
document.getElementById('language-toggle').addEventListener('click',()=>{locale=locale==='zh'?'en':'zh';localStorage.setItem('portfolio-locale',locale);const url=new URL(location.href);url.searchParams.set('lang',locale);history.replaceState(null,'',url);renderPage()});
renderPage();
