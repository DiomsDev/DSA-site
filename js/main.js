// =========================================
// D.S.A Service Informatique - main.js
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  // 1. Année automatique dans le pied de page
  var annee = document.getElementById("annee");
  if (annee) {
    annee.textContent = new Date().getFullYear();
  }

  // 2. Apparition des éléments au défilement
  var elements = document.querySelectorAll(".apparait");

  if ("IntersectionObserver" in window) {
    var observateur = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            entree.target.classList.add("visible");
            observateur.unobserve(entree.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach(function (el) {
      observateur.observe(el);
    });
  } else {
    // Anciens navigateurs : tout afficher directement
    elements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // 3. Fermer le menu mobile après un clic sur un lien
  var menu = document.getElementById("menu");
  if (menu) {
    menu.querySelectorAll(".nav-link").forEach(function (lien) {
      lien.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }

  // 4. Formulaire de contact : envoi vers WhatsApp (si présent sur la page)
  var formulaire = document.getElementById("form-contact");
  if (formulaire) {
    formulaire.addEventListener("submit", function (e) {
      e.preventDefault();

      var nom = document.getElementById("nom").value.trim();
      var sujet = document.getElementById("sujet").value.trim();
      var message = document.getElementById("message").value.trim();

      var texte =
        "Bonjour D.S.A Service Informatique,\n" +
        "Nom : " +
        nom +
        "\n" +
        "Sujet : " +
        sujet +
        "\n" +
        "Message : " +
        message;

      window.open(
        "https://wa.me/2250759429655?text=" + encodeURIComponent(texte),
        "_blank",
      );
    });
  }
});
