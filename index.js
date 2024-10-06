import{i as f,a as y,S as v}from"./assets/vendor-CwBQXL9l.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const h=e=>`
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
    `;function l(e){f.show({message:e})}function g(){document.querySelector(".js-loader").classList.remove("is-hidden")}function L(){document.querySelector(".js-loader").classList.add("is-hidden")}y.defaults.baseURL="https://pixabay.com/api/";const b=(e,s=1)=>{const a={params:{key:"46295007-756af9891ee3ef29b100a63be",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return y.get("",a)},n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),o=document.querySelector(".js-load-more");let u=1,c="",m=0,w=new v(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});f.settings({messageColor:"white",position:"bottomRight",backgroundColor:"#ef4040"});const S=async e=>{try{if(e.preventDefault(),c=n.elements.user_search.value.trim(),u=1,c===""){l("Please enter a search query.");return}g();let s=await b(c,u);if(s.data.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!"),d.innerHTML="",n.reset(),o.classList.add("is-hidden");return}const a=s.data.hits.map(i=>h(i)).join("");d.innerHTML=a,o.classList.remove("is-hidden"),w.refresh()}catch(s){s.message==="404"&&l("Your request was not found")}finally{L(),n.reset()}},q=async e=>{try{u++,o.classList.add("is-hidden"),g();const s=await b(c,u),a=s.data.hits.map(r=>h(r)).join("");d.insertAdjacentHTML("beforeend",a),m=s.data.totalHits,h(s.data.hits),w.refresh();const t=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"}),d.children.length>=m?(o.classList.add("is-hidden"),l("We're sorry, but you've reached the end of search results.")):o.classList.remove("is-hidden")}catch(s){s.message==="404"&&l("Your request was not found")}finally{L(),n.reset()}};n.addEventListener("submit",S);o.addEventListener("click",q);
//# sourceMappingURL=index.js.map
