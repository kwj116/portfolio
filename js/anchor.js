const header = document.querySelector('.header');
const introduce = document.querySelector('.menu1');
const skill = document.querySelector('.menu2');
const portfolio = document.querySelector('.menu3');
const contact = document.querySelector('.menu4');

window.addEventListener('scroll',function(e){
    if (window.scrollY !== 0) {
        header.style.backgroundColor = '#313537';
        header.style.transition ='0.2s ease-in-out';

    }
    else{
        header.style.backgroundColor = '#1e2021';
        header.style.color="white";
        header.style.transition ='0.2s ease-in-out';
    }
})




introduce.addEventListener('click', function () {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

skill.addEventListener('click', function () {
    document.querySelector('.skill').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

portfolio.addEventListener('click', function () {
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

contact.addEventListener('click', function () {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
