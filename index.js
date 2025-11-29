document.addEventListener('DOMContentLoaded', function() {
    const imgPrincipal = document.getElementById('img-principal');

    const miniaturas = document.querySelectorAll('.img-carrossel img');
    
    if (imgPrincipal && miniaturas.length > 0) {
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function() {
                const novoSrc = this.getAttribute('src');
                imgPrincipal.setAttribute('src', novoSrc);
                miniaturas.forEach(img => img.classList.remove('ativa'));
                this.classList.add('ativa');

            });
        });
    } else {
        console.error('Um ou mais elementos do carrossel não foram encontrados.');
    }
});