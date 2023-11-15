const header =document.querySelector('.head__section');
const nav = document.querySelector('.navbar__nav');
const height =nav.getBoundingClientRect().height;
const stickynav = document.querySelector('.special_nav');
const dropdown = document.querySelector('.dropdown');
const dropdownContent =document.querySelector('.dropdown-content');
// const special_dropdown = document.querySelector('.special_dropdown');
const special_dropdownContent =document.querySelector('.special_dropdown-content');
const first =document.querySelector('.first');
const second =document.querySelector('.second');

const stickyNav =(entries)=>{
    const[entry]=entries;
    if(entry.isIntersecting){
        document.querySelector('nav').classList.remove('special_nav');
        document.querySelector('nav').classList.add('navbar__nav');
        document.querySelector('.navbarBrand').classList.remove('special__navbar__brand');
        document.querySelector('.navbarBrand').classList.add('navbar__brand');
        document.querySelector('.dropBtn').classList.remove('special_dropbtn');
        document.querySelector('.dropBtn').classList.add('dropbtn');
        document.querySelector('.btn-1').classList.remove('special__search__btn');
        document.querySelector('.btn-1').classList.add('search__btn');
        document.querySelector('.signIn').classList.remove('special__sign_in');
        document.querySelector('.signIn').classList.add('sign__in');
        document.querySelector('.btn-2').classList.remove('special__sales__btn');
        document.querySelector('.btn-2').classList.add('talk__to__sales__btn');
        document.querySelector('.btn-3').classList.remove('special__try__for__free__btn');
        document.querySelector('.btn-3').classList.add('try__for__free__btn');
    }else{
        document.querySelector('nav').classList.add('special_nav');
        document.querySelector('nav').classList.remove('navbar__nav');
        document.querySelector('.navbarBrand').classList.add('special__navbar__brand');
        document.querySelector('.navbarBrand').classList.remove('navbar__brand');
        document.querySelector('.dropBtn').classList.add('special_dropbtn');
        document.querySelector('.dropBtn').classList.remove('dropbtn');
        document.querySelector('.btn-1').classList.add('special__search__btn');
        document.querySelector('.btn-1').classList.remove('search__btn');
        document.querySelector('.signIn').classList.add('special__sign_in');
        document.querySelector('.signIn').classList.remove('sign__in');
        document.querySelector('.btn-2').classList.add('special__sales__btn');
        document.querySelector('.btn-2').classList.remove('talk__to__sales__btn');
        document.querySelector('.btn-3').classList.add('special__try__for__free__btn');
        document.querySelector('.btn-3').classList.remove('try__for__free__btn');
    }
}

const navObserver = new IntersectionObserver(stickyNav,{
    root:null,
    threshold:.6,
});

navObserver.observe(header);
let isblock=false;


dropdown.addEventListener('click',(e)=>{
    if(!isblock){
        dropdownContent.style.display="block";
        isblock=true;
    }
    else if(isblock){
        dropdownContent.style.display="none";
        isblock=false;
    }
});

document.addEventListener('click',(e)=>{
    if((isblock && !first.contains(e.target))){
        dropdownContent.style.display="none";
        isblock=false;
    }
});


