// contact form msg received 
const btn = document.getElementById('btn-contact');
const msg = document.getElementById('msg');
const aboutMore = document.getElementById('about-more');

document.getElementById('form').addEventListener('submit', e => {
    msg.style.display = 'grid';
    setTimeout(() => {
        msg.style.display = 'none'
    }, 5000);
});

let show = false;

document.getElementById('btn-more').addEventListener('click', e => {
    show = !show;
    if (show == true){
        aboutMore.style.display = 'block';
    }
    else if (show == false) {
        aboutMore.style.display = 'none';
    }
    
});