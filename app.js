let head = document.querySelector('h2');
let image = document.querySelector('img');

function toss(choice) {
    let num = Math.ceil(Math.random() * 2);

    if ((num === 1 && choice === 'masjid') || (num === 2 && choice === 'chand')) {
        head.innerHTML = 'You win the toss';
        image.src = choice === 'masjid' ? 'download (1).jpg' : 'download.jpg';
    } else {
        head.innerHTML = 'You lose the toss';
        image.src = choice === 'masjid' ? 'download.jpg' : 'download (1).jpg';
    }
}
