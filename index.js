import{a as c,S as u,i as a}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const f="54229536-6dca3b178fde1af9ce529c0e1",d="https://pixabay.com/api/";function m(e){return c.get(d,{params:{key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data)}let p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){const o=document.querySelector(".gallery"),i=e.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
            <img class="gallery-image" 
            src="${s.webformatURL}" 
            alt="${s.tags}"/>
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${s.likes}</p>
          <p class="info-item"><b>Views</b> ${s.views}</p>
          <p class="info-item"><b>Comments</b> ${s.comments}</p>
          <p class="info-item"><b>Downloads</b> ${s.downloads}</p>
        </div>
        </li>`).join("");o.insertAdjacentHTML("beforeend",i),p.refresh()}function g(){const e=document.querySelector(".gallery");e.innerHTML=""}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function b(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",L);function L(e){e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){a.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}g(),h(),m(o).then(i=>{if(i.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits)}).catch(i=>{a.error({title:"Error",message:`Something went wrong: ${i.message}`,position:"topRight"})}).finally(()=>{b(),l.reset()})}
//# sourceMappingURL=index.js.map
