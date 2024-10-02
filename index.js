document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.article');
    const totalElement = document.getElementById('total');

    articles.forEach(article => {
        const decrementButton = article.querySelector('.decrement');
        const incrementButton = article.querySelector('.increment');
        const supprimerButton = article.querySelector('.supprimer');
        const aimerButton = article.querySelector('.aimer');
        const quantiteElement = article.querySelector('.quantite');
        const prixElement = article.querySelector('.prix');

        // Fonction pour mettre à jour le prix total
        const updateTotal = () => {
            let total = 0;
            articles.forEach(a => {
                const quantite = parseInt(a.querySelector('.quantite').textContent);
                const prix = parseFloat(a.dataset.prix);
                total += quantite * prix;
            });
            totalElement.textContent = `${total} €`;
        };

        // Gestion du bouton "-"
        decrementButton.addEventListener('click', () => {
            let quantite = parseInt(quantiteElement.textContent);
            if (quantite > 1) {
                quantite--;
                quantiteElement.textContent = quantite;
                prixElement.textContent = `${quantite * parseFloat(article.dataset.prix)} €`;
                updateTotal();
            }
        });

        // Gestion du bouton "+"
        incrementButton.addEventListener('click', () => {
            let quantite = parseInt(quantiteElement.textContent);
            quantite++;
            quantiteElement.textContent = quantite;
            prixElement.textContent = `${quantite * parseFloat(article.dataset.prix)} €`;
            updateTotal();
        });

        // Gestion du bouton "Supprimer"
        supprimerButton.addEventListener('click', () => {
            article.remove();
            updateTotal();
        });

        // Gestion du bouton "Aimer"
        aimerButton.addEventListener('click', () => {
            aimerButton.classList.toggle('aime');
        });
    });

    // Calcul initial du total
    updateTotal();
});
