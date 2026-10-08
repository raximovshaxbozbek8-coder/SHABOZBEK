function startMovie(id, title) {
            document.getElementById('modalBody').innerHTML = `
                <h3 style="margin-top:0; margin-bottom:12px;">${title}</h3>
                <iframe src="https://vidsrc.xyz/embed/movie?tmdb=${id}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
                
                <!-- БЛОК РЕКЛАМЫ #2: Баннер под видеоплеером -->
                <div class="ad-banner" style="margin-top:15px; margin-bottom:0;">
                    <span>🎰 Sponsor Ad / Promo Code Banner (Under Player)</span>
                </div>
            `;
        }
