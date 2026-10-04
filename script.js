const proxyUrl = 'https://shaxboz-khaki.vercel.app';

function openPlayer(movieId) {
    const modal = document.getElementById('movieModal');
    const iframe = document.getElementById('playeriframe');
    
    // Вставляем ссылку на фильм через твой прокси прямо в плеер на сайте
    iframe.src = `${proxyUrl}/embed/${movieId}`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('movieModal');
    const iframe = document.getElementById('playeriframe');
    
    iframe.src = '';
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('movieModal');
    if (event.target === modal) {
        closeModal();
    }
}
