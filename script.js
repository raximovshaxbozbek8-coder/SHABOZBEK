function startMovie(id, title) {
            document.getElementById('modalBody').innerHTML = `
                <h3 style="margin-top:0; margin-bottom:8px;">${title}</h3>
                
                <!-- Кнопки переключения плееров (зеркал) -->
                <div style="margin-bottom: 12px; display: flex; gap: 8px;">
                    <button onclick="changePlayer('https://vidlink.pro/movie/${id}', this)" style="background: #e50914; color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; font-weight: bold;">Плеер 1 (HD)</button>
                    <button onclick="changePlayer('https://vidsrc.xyz/embed/movie?tmdb=${id}', this)" style="background: #2a2d3d; color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer;">Плеер 2 (Запасной)</button>
                </div>

                <!-- Сам iframe с плеером -->
                <iframe id="moviePlayer" src="https://vidlink.pro/movie/${id}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
                
                <!-- БЛОК РЕКЛАМЫ #2 -->
                <div class="ad-banner" style="margin-top:15px; margin-bottom:0;">
                    <span>🎰 Sponsor Ad / Promo Code Banner (Under Player)</span>
                </div>
            `;
        }

        // Функция для переключения ссылок без перезагрузки модального окна
        function changePlayer(url, btn) {
            document.getElementById('moviePlayer').src = url;
            
            // Меняем подсветку активной кнопки
            const buttons = btn.parentElement.querySelectorAll('button');
            buttons.forEach(b => b.style.background = '#2a2d3d');
            btn.style.background = '#e50914';
        }
