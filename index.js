const btn = document.getElementById('btn-contact');
const msg = document.getElementById('msg');

document.getElementById('form').addEventListener('submit', e => {
    msg.style.display = 'grid';
    setTimeout(() => {
        msg.style.display = 'none'
    }, 5000);
});


