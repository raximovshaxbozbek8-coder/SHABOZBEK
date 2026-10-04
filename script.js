const proxyUrl = 'https://shaxboz-khaki.vercel.app';

function openPlayer(movieId) {
    const modal = document.getElementById('movieModal');
    const iframe = document.getElementById('playerIframe');
    
    // Ссылаемся на наш прокси для обхода блокировок
    iframe.src = `${proxyUrl}/embed/${movieId}`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    const iframe = document.getElementById('playerIframe');
    
    iframe.src = '';
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('movieModal');
    if (event.target === modal) {
        closeModal();
    }
}
