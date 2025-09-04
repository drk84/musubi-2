const options = {
    root:null,
    rootMargin:'0px 0px 0px 100%',
    scrollMargin:'0px',
    threshold: 0.25,
};

const callback = ( entries, observer ) => {
 entries.forEach((entry) => {
    if (entry.isIntersecting) {
         console.log(entries);
         console.log('Element is in view:', entry.target);
         entry.target.classList.add('trasla');
   }
 });
};

const observer = new IntersectionObserver(callback, options);
const targets = document.querySelectorAll('main section');
targets.forEach(target => observer.observe(target));

document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.contact-icons a:nth-of-type(2)').setAttribute('href', 'https://wa.me/6309564526718?text='+encodeURIComponent('Hello Missuv! I would like to inquire about...'));
});