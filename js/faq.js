// Sélectionne toutes les entrées de la FAQ.

const faqItems = document.querySelectorAll('.contenu_faq .faq_item');

// Parcourt chaque bloc de question/réponse.

faqItems.forEach((item) => {

  // Récupère la zone cliquable (question) et l'icône + / -.

  const question = item.querySelector('.faq_question');
  const icon = item.querySelector('.icon');

  // Si la question n'existe pas, on ignore cet élément.

  if (!question) {
    return;
  }

  // Au cmoment du clic sur la question :

  // 1) ajoute/retire la classe "active" pour afficher/masquer la réponse,
  // 2) met à jour l'icône en conséquence.

  question.addEventListener('click', () => {
    const isActive = item.classList.toggle('active');

    // Affiche "-" quand la question est ouverte, sinon "+".

    if (icon) {
      icon.textContent = isActive ? '-' : '+';
    }
  });
});
