// ADD VERIFIED OFFICIAL SOCIAL LINKS BELOW. Leave blank until confirmed.
// Example: facebook: 'https://www.facebook.com/your-official-page'
const TOP_COMET_SOCIAL = {
  facebook: 'https://www.facebook.com/share/19Qhs62VVG/',
  tiktok: 'https://www.tiktok.com/@hotc26?_r=1&_t=ZS-9AmgKfdoAo4'
};

(() => {
 // Display only configured, valid HTTPS social profiles (never invent official accounts).
 document.querySelectorAll('[data-social]').forEach(link => {
   const value = TOP_COMET_SOCIAL[link.dataset.social];
   if (!value) return;
   try {
     const url = new URL(value);
     const domains = {facebook:['facebook.com','www.facebook.com','m.facebook.com','web.facebook.com'],tiktok:['tiktok.com','www.tiktok.com']};
     if (url.protocol === 'https:' && domains[link.dataset.social].includes(url.hostname)) {
       link.href=url.href;
       link.hidden=false;
     }
   } catch(e) { /* invalid URL stays hidden */ }
 });
 const menuToggle=document.getElementById('menuToggle');
 const nav=document.getElementById('nav');
 document.documentElement.lang='en';
 menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
 document.getElementById('year').textContent=new Date().getFullYear();
})();
