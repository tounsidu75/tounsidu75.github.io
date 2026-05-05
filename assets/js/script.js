/**
 * Script principal du portfolio
 * Contient les fonctionnalités communes à toutes les pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Fonctionnalité de navigation responsive
  setupMobileNavigation();
  
  // Gestion du défilement et animations
  handleScroll();
  
  // Gestion des liens externes
  setupExternalLinks();
  
  // Initialiser les animations au chargement
  initAnimations();
});

/**
 * Configuration de la navigation mobile avec menu hamburger
 */
function setupMobileNavigation() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  
  // Créer le bouton de menu mobile s'il n'existe pas déjà
  if (!menuToggle && window.innerWidth <= 768) {
    const nav = document.querySelector('nav');
    if (nav) {
      const toggle = document.createElement('button');
      toggle.className = 'mobile-menu-toggle';
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
      toggle.setAttribute('aria-label', 'Menu de navigation');
      
      nav.parentNode.insertBefore(toggle, nav);
      
      // Ajout du gestionnaire d'événement
      toggle.addEventListener('click', function() {
        nav.classList.toggle('mobile-nav-open');
        this.classList.toggle('active');
        
        // Mettre à jour l'icône
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
      
      // Ajouter les styles nécessaires
      const style = document.createElement('style');
      style.textContent = `
        .mobile-menu-toggle {
          display: none;
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--card-bg);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.5rem;
          color: var(--secondary-color);
          z-index: 1001;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .mobile-menu-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .mobile-menu-toggle.active {
          background: var(--secondary-color);
          color: white;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          nav {
            position: fixed;
            top: 0;
            left: -100%;
            width: 80%;
            height: 100vh;
            background: rgba(30, 30, 30, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            padding-top: 80px;
            transition: left 0.3s ease;
            box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
          }
          
          nav.mobile-nav-open {
            left: 0;
          }
          
          nav ul {
            flex-direction: column;
            gap: 30px;
          }
          
          nav a {
            font-size: 1.2rem;
          }
        }
      `;
      
      document.head.appendChild(style);
    }
  }
  
  // Fermer le menu mobile quand on clique sur un lien
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const nav = document.querySelector('nav');
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      
      if (nav && menuToggle && window.innerWidth <= 768) {
        nav.classList.remove('mobile-nav-open');
        menuToggle.classList.remove('active');
        
        const icon = menuToggle.querySelector('i');
        if (icon && icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });
}

/**
 * Gestion du défilement et animations associées
 */
function handleScroll() {
  // Variables pour la détection de direction de défilement
  let lastScrollTop = 0;
  
  // Gestionnaire d'événement de défilement
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Détecter la direction du défilement
    const scrollingDown = scrollTop > lastScrollTop;
    
    // Gestion de l'en-tête
    const header = document.querySelector('header');
    if (header) {
      // Ajouter la classe "scrolled" si on a défilé
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Masquer/afficher l'en-tête selon la direction de défilement (sur mobile uniquement)
      if (window.innerWidth <= 768) {
        if (scrollingDown && scrollTop > 150) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
    }
    
    // Mettre à jour la dernière position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

/**
 * Configuration des liens externes pour qu'ils s'ouvrent dans un nouvel onglet
 */
function setupExternalLinks() {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Vérifier si c'est un lien externe
    if (href && (href.startsWith('http') || href.startsWith('https')) && !href.includes(window.location.hostname)) {
      // Ajouter target="_blank" et rel="noopener noreferrer" pour la sécurité
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Ajouter une icône pour indiquer que c'est un lien externe (si pas déjà une icône)
      if (!link.querySelector('i') && !link.classList.contains('btn') && !link.classList.contains('social-links') && !link.parentNode.classList.contains('social-links')) {
        const icon = document.createElement('i');
        icon.className = 'fas fa-external-link-alt';
        icon.style.marginLeft = '5px';
        icon.style.fontSize = '0.8em';
        link.appendChild(icon);
      }
    }
  });
}

/**
 * Initialisation des animations de base au chargement de la page
 */
function initAnimations() {
  // Animation des éléments avec la classe "animate-on-scroll"
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    // Utiliser IntersectionObserver si disponible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      animatedElements.forEach(element => {
        observer.observe(element);
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
      animatedElements.forEach(element => {
        element.classList.add('animated');
      });
    }
  }
  
  // Initialiser les animations de page spécifiques
  initPageSpecificAnimations();
}

/**
 * Initialisation des animations spécifiques à chaque type de page
 */
function initPageSpecificAnimations() {
  // Détecter le type de page en fonction de l'URL ou d'éléments spécifiques
  const isHomePage = document.querySelector('#hero') !== null;
  const isProjectPage = document.querySelector('.project-detail') !== null;
  const isContactPage = document.querySelector('.contact-form') !== null;
  
  // Animations spécifiques à la page d'accueil
  if (isHomePage) {
    // Animation du texte d'introduction avec effet de machine à écrire
    const introText = document.querySelector('.hero-description');
    if (introText) {
      // Animation déjà gérée via CSS, ajout d'une classe pour cohérence
      introText.classList.add('animated');
    }
    
    // Animation des preview-cards
    const previewCards = document.querySelectorAll('.preview-card');
    previewCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('reveal');
      }, 300 + (index * 150));
    });
  }
  
  // Animations spécifiques aux pages de projet
  if (isProjectPage) {
    // Animation en cascade des sections de projet
    const projectSections = document.querySelectorAll('.project-description, .project-challenges, .project-technologies');
    projectSections.forEach((section, index) => {
      section.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });
  }
  
  // Animations spécifiques à la page de contact
  if (isContactPage) {
    // Animations pour les champs de formulaire
    const formFields = document.querySelectorAll('.form-group');
    formFields.forEach((field, index) => {
      field.style.animationDelay = `${0.1 + (index * 0.1)}s`;
      field.classList.add('animate-on-scroll');
      
      setTimeout(() => {
        field.classList.add('animated');
      }, 100 + (index * 100));
    });
  }
}

/**
 * Fonction utilitaire pour détecter et traiter les erreurs d'image
 */
function handleImageErrors() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Si l'image est déjà en erreur
    if (img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) {
      handleImageError(img);
    }
    
    // Écouter les erreurs futures
    img.addEventListener('error', function() {
      handleImageError(this);
    });
  });
  
  // Fonction pour traiter une image en erreur
  function handleImageError(img) {
    // Vérifier si c'est un logo d'expérience
    if (img.parentNode && img.parentNode.classList.contains('experience-logo')) {
      const iconClass = img.alt.toLowerCase().includes('tmi') ? 'fas fa-building' : 
                        img.alt.toLowerCase().includes('paris') ? 'fas fa-medal' : 
                        'fas fa-briefcase';
      
      const icon = document.createElement('i');
      icon.className = iconClass;
      icon.style.fontSize = '2.5rem';
      icon.style.color = '#81c784';
      
      img.parentNode.innerHTML = '';
      img.parentNode.appendChild(icon);
    } else {
      // Pour les autres images, appliquer un style de substitution
      img.style.display = 'none';
      
      // Si l'image a une classe spécifique, ajouter un remplacement approprié
      if (img.classList.contains('profile-image')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-placeholder';
        placeholder.innerHTML = '<i class="fas fa-user"></i>';
        placeholder.style.width = '200px';
        placeholder.style.height = '200px';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.backgroundColor = 'rgba(129, 199, 132, 0.2)';
        placeholder.style.borderRadius = '50%';
        placeholder.style.fontSize = '4rem';
        placeholder.style.color = 'var(--secondary-color)';
        
        img.parentNode.insertBefore(placeholder, img);
      }
    }
  }
}

// Appeler la fonction de gestion des erreurs d'image au chargement
window.addEventListener('load', handleImageErrors);


