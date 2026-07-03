document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du panier
    const cartCountEl = document.getElementById('cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            cartCount++;
            cartCountEl.textContent = cartCount;
            
            // Animation du bouton
            const originalText = btn.textContent;
            btn.textContent = 'Ajouté !';
            btn.style.backgroundColor = 'var(--success-color)';
            btn.style.color = 'white';
            
            // Effet "pop" sur le compteur du panier
            cartCountEl.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCountEl.style.transform = 'scale(1)';
            }, 300);

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '#ffd814';
                btn.style.color = 'var(--text-main)';
            }, 2000);
        });
    });

    // 2. Gestion du Carrousel (Hero)
    // Pour une version simple, on pourrait faire défiler plusieurs slides.
    // Ici nous avons une seule slide pour la démo, mais préparons le code pour plusieurs.
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    
    if(slides.length > 1) {
        let currentSlide = 0;
        
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 5000); // Change de slide toutes les 5 secondes
    }
});
