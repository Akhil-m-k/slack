const header =document.querySelector('.head__section');
const nav = document.querySelector('.navbar__nav');
const height =nav.getBoundingClientRect().height;
const stickynav = document.querySelector('.special_nav');
const stickyNav =(entries)=>{
    const[entry]=entries;
    console.log(entry);
    if(entry.isIntersecting){
        stickynav.classList.add('d-special-none');
        nav.classList.remove('d-none');
        
    }else{
        stickynav.classList.remove('d-special-none');
        nav.classList.add('d-none');
    }
}
const navObserver = new IntersectionObserver(stickyNav,{
    root:null,
    threshold:.4,
});

navObserver.observe(header);