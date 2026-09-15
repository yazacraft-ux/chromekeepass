const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');
if(menuBtn&&mobileMenu){menuBtn.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);mobileMenu.setAttribute('aria-hidden',!open)});mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');mobileMenu.setAttribute('aria-hidden','true')}))}
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const copy=document.getElementById('copyUrl');const state=document.getElementById('copyState');if(copy){copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('https://chromekeepass.com');copy.textContent='Copied ✓';state.textContent='https://chromekeepass.com';setTimeout(()=>copy.textContent='Copy website URL',1800)}catch(e){state.textContent='chromekeepass.com'}})}
