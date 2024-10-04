import{i as d,S as p}from"./assets/vendor-Bg-92U7s.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const h=e=>`
    <li class="gallery-card">
        <a
          class="gallery-link"
          href="${e.largeImageURL}"
        >
          <img
            class="gallery-img"
            src="${e.webformatURL}"
            alt="${e.tags}"
            width=360
  //        onclick="return false"
            data-source="${e.largeImageURL}"
          />
          <ul class="description">
            <li>
              <p>Likes</p>
              <p class="description-value">${e.likes}</p>
            </li>
            <li>
              <p>Views</p>
              <p class="description-value">${e.views}</p>
            </li>
            <li>
              <p>Comments</p>
              <p class="description-value">${e.comments}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p class="description-value">${e.downloads}</p>
            </li>
          </ul>
        </a>
      </li>
    `;function n(e){d.show({message:e})}function m(){document.querySelector(".js-loader").classList.remove("is-hidden")}function f(){document.querySelector(".js-loader").classList.add("is-hidden")}const y="https://pixabay.com/api/",g=e=>{const o=new URLSearchParams({key:"46295007-756af9891ee3ef29b100a63be",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},i=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery");document.querySelector(".js-search-input");let c;d.settings({messageColor:"white",position:"bottomRight",backgroundColor:"#ef4040"});const L=e=>{e.preventDefault();const o=i.elements.user_search.value.trim();if(o===""){n("Please enter a search query.");return}m(),g(o).then(s=>{const a=s.hits.map(r=>h(r)).join("");if(u.innerHTML=a,s.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!"),u.innerHTML="",i.reset();return}c?c.refresh():c=new p(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(s=>{s.message==="404"&&n("Your request was not found")}).finally(()=>{f(),i.reset()})};i.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
