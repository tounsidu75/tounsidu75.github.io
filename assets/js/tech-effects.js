/**
 * Effets dynamiques pour le portfolio tech
 * Animations avancées et éléments interactifs
 */

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser tous les effets
  initParticlesBackground();
  initCustomCursor();
  initMatrixRain();
  initRippleEffect();
  initDataFlowEffects();
  initHolographicBadges();
  initConnectionLines();
  initPowerUpEffect();
  
  // Observer les éléments pour ajouter des effets quand ils sont visibles
  observeElements();
});

/**
 * Crée un arrière-plan de particules qui flottent lentement
 */
function initParticlesBackground() {
  const container = document.createElement('div');
  container.className = 'particles-bg';
  document.body.appendChild(container);
  
  // Ajouter des particules avec tailles et vitesses variables
  for (let i = 0; i < 50; i++) {
    createParticle(container);
  }
  
  // Continuer à ajouter de nouvelles particules périodiquement
  setInterval(() => {
    if (container.children.length < 80) {
      createParticle(container);
    }
  }, 1000);
}

/**
 * Crée une particule individuelle avec des propriétés aléatoires
 */
function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Taille aléatoire
  const size = Math.random() * 4 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Position aléatoire en bas de l'écran
  const posX = Math.random() * window.innerWidth;
  const posY = window.innerHeight + Math.random() * 100;
  particle.style.left = `${posX}px`;
  particle.style.top = `${posY}px`;
  
  // Durée d'animation aléatoire
  const duration = Math.random() * 20 + 10;
  particle.style.animationDuration = `${duration}s`;
  
  // Délai d'animation aléatoire
  const delay = Math.random() * 5;
  particle.style.animationDelay = `${delay}s`;
  
  // Ajouter la particule au conteneur
  container.appendChild(particle);
  
  // Supprimer la particule après la fin de l'animation
  setTimeout(() => {
    if (particle.parentNode === container) {
      container.removeChild(particle);
    }
  }, (duration + delay) * 1000);
}

/**
 * Initialise le curseur personnalisé
 */
function initCustomCursor() {
  // Créer les éléments du curseur
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  
  const cursorOutline = document.createElement('div');
  cursorOutline.className = 'cursor-outline';
  
  // Ajouter les éléments au body
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);
  
  // Suivre le mouvement de la souris
  document.addEventListener('mousemove', (e) => {
    // Mettre à jour la position des éléments du curseur
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    
    // Ajouter un léger délai pour l'outline pour un effet plus fluide
    setTimeout(() => {
      cursorOutline.style.left = `${e.clientX}px`;
      cursorOutline.style.top = `${e.clientY}px`;
    }, 100);
  });
  
  // Cacher le curseur natif
  document.documentElement.style.cursor = 'none';
  
  // Gestion des éléments interactifs
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.style.transform = "translate(-50%, -50%) scale(0.75)";
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
    });
    
    el.addEventListener('mouseleave', () => {
      cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
}

/**
 * Crée un effet de pluie de code Matrix pour les sections appropriées
 */
function initMatrixRain() {
  // Sélectionner les sections qui auront l'effet matrix (ex: sections cybersécurité)
  const securitySections = document.querySelectorAll('.security-section, .security-skill');
  
  securitySections.forEach(section => {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    section.appendChild(matrixContainer);
    
    // Générer des caractères aléatoires
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,./<>?';
    
    // Créer les gouttes
    for (let i = 0; i < 30; i++) {
      createMatrixDrop(matrixContainer, characters);
    }
    
    // Continuer à ajouter des gouttes périodiquement
    setInterval(() => {
      if (matrixContainer.children.length < 50) {
        createMatrixDrop(matrixContainer, characters);
      }
    }, 500);
  });
}

/**
 * Crée une goutte individuelle pour l'effet Matrix
 */
function createMatrixDrop(container, characters) {
  const drop = document.createElement('div');
  drop.className = 'matrix-drop';
  
  // Position horizontale aléatoire
  const posX = Math.random() * 100;
  drop.style.left = `${posX}%`;
  
  // Contenu aléatoire
  drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
  
  // Durée d'animation aléatoire
  const duration = Math.random() * 5 + 3;
  drop.style.animationDuration = `${duration}s`;
  
  // Ajouter la goutte au conteneur
  container.appendChild(drop);
  
  // Changer périodiquement le caractère
  const changeInterval = setInterval(() => {
    drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
  }, 300);
  
  // Nettoyer après la fin de l'animation
  setTimeout(() => {
    clearInterval(changeInterval);
    if (drop.parentNode === container) {
      container.removeChild(drop);
    }
  }, duration * 1000);
}

/**
 * Ajoute un effet d'onde au clic
 */
function initRippleEffect() {
  document.addEventListener('click', function(e) {
    // Créer l'élément d'onde
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    // Positionner l'onde
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    
    // Ajouter au DOM
    document.body.appendChild(ripple);
    
    // Nettoyer après l'animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

/**
 * Initialise les flux de données animés pour les sections réseau
 * DÉSACTIVÉ - effet retiré pour cohérence visuelle
 */
function initDataFlowEffects() {
  // Fonction désactivée - ne plus ajouter d'effets de flux de données
  return;
}

/**
 * Transforme les badges de certification en badges holographiques
 */
function initHolographicBadges() {
  const badges = document.querySelectorAll('.certification-card, .badge-diploma, .badge-certificate');
  
  badges.forEach(badge => {
    badge.classList.add('holo-badge');
  });
}

/**
 * Crée des lignes de connexion entre les éléments au survol
 */
function initConnectionLines() {
  const containers = document.querySelectorAll('.skills-container, .projects-grid, .certifications-container');
  
  containers.forEach(container => {
    const items = container.querySelectorAll('.skill-block, .project-card, .certification-card');
    
    items.forEach(sourceItem => {
      sourceItem.addEventListener('mouseenter', () => {
        items.forEach(targetItem => {
          if (sourceItem !== targetItem) {
            createConnectionLine(sourceItem, targetItem);
          }
        });
      });
      
      sourceItem.addEventListener('mouseleave', () => {
        document.querySelectorAll('.connection-line').forEach(line => {
          line.style.opacity = '0';
          setTimeout(() => {
            if (line.parentNode) {
              line.parentNode.removeChild(line);
            }
          }, 500);
        });
      });
    });
  });
}

/**
 * Crée une ligne de connexion entre deux éléments
 */
function createConnectionLine(element1, element2) {
  // Positions relatives
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  
  // Centre des éléments
  const x1 = rect1.left + rect1.width / 2;
  const y1 = rect1.top + rect1.height / 2;
  const x2 = rect2.left + rect2.width / 2;
  const y2 = rect2.top + rect2.height / 2;
  
  // Calculer la longueur et l'angle
  const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  
  // Créer la ligne
  const line = document.createElement('div');
  line.className = 'connection-line';
  
  // Positionner et dimensionner
  line.style.width = `${length}px`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;
  line.style.transform = `rotate(${angle}deg)`;
  
  // Ajouter au DOM avec transition
  document.body.appendChild(line);
  
  // Animation d'apparition
  setTimeout(() => {
    line.style.opacity = '1';
  }, 10);
}

/**
 * Observer les éléments pour déclencher des animations quand ils sont visibles
 */
function observeElements() {
  const elements = document.querySelectorAll('.tech-card, .formation-card, .project-card, .skill-block, .certification-card');
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Déclencher l'animation quand l'élément est visible
        entry.target.classList.add('animated');
        
        // Arrêter d'observer une fois l'animation déclenchée
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Ajoute un effet d'allumage progressif aux sections principales
 */
function initPowerUpEffect() {
  // Appliquer l'effet aux sections principales
  const mainSections = document.querySelectorAll('main section');
  
  let delay = 0;
  mainSections.forEach(section => {
    // Ajouter l'effet avec un délai croissant
    setTimeout(() => {
      section.classList.add('power-on');
    }, delay);
    
    // Incrémenter le délai pour chaque section
    delay += 300;
  });
}

/**
 * Ajoute un fond de grille 3D animé à la page
 */
function addGridBackground() {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-bg';
  
  const grid = document.createElement('div');
  grid.className = 'grid';
  
  gridContainer.appendChild(grid);
  document.body.appendChild(gridContainer);
}

// Ajouter un fond de grille 3D pour compléter l'ambiance tech
addGridBackground();

/**
 * Initialisation et gestion des effets visuels du thème tech
 */
document.addEventListener('DOMContentLoaded', function() {
  // Cette fonction sera appelée par toutes les pages pour initialiser les effets
  window.initTechEffects = function() {
    // Création des lignes tech
    createTechLines();
    
    // Création des particules
    createTechParticles();
    
    // Création des cercles tech
    createTechCircles();
    
    // Initialisation du stream de données
    initDataStream();
    
    // Animation des éléments tech au scroll
    initScrollAnimations();
  };
  
  // Création des lignes tech
  function createTechLines() {
    const techLinesContainer = document.querySelector('.tech-lines');
    if (!techLinesContainer) return;
    
    // Vider le conteneur
    techLinesContainer.innerHTML = '';
    
    // Créer des lignes horizontales et verticales aléatoires
    for (let i = 0; i < 8; i++) {
      const line = document.createElement('div');
      line.classList.add('tech-line');
      
      // 50% de chance d'être horizontale ou verticale
      const isHorizontal = Math.random() > 0.5;
      
      if (isHorizontal) {
        line.style.width = '100%';
        line.style.height = '1px';
        line.style.top = `${Math.random() * 100}%`;
        line.style.left = '0';
      } else {
        line.style.width = '1px';
        line.style.height = '100%';
        line.style.top = '0';
        line.style.left = `${Math.random() * 100}%`;
      }
      
      // Ajouter un délai d'animation aléatoire
      line.style.animationDelay = `${Math.random() * 2}s`;
      
      techLinesContainer.appendChild(line);
    }
  }
  
  // Création des particules tech
  function createTechParticles() {
    const techParticlesContainer = document.querySelector('.tech-particles');
    if (!techParticlesContainer) return;
    
    // Vider le conteneur
    techParticlesContainer.innerHTML = '';
    
    // Créer des particules
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('tech-particle');
      
      // Position aléatoire
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      
      // Taille aléatoire entre 2px et 6px
      const size = 2 + Math.random() * 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Délai d'animation aléatoire
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      techParticlesContainer.appendChild(particle);
    }
  }
  
  // Création des cercles tech
  function createTechCircles() {
    const techCirclesContainer = document.querySelector('.tech-circles');
    if (!techCirclesContainer) return;
    
    // Vider le conteneur
    techCirclesContainer.innerHTML = '';
    
    // Créer des cercles
    for (let i = 0; i < 5; i++) {
      const circle = document.createElement('div');
      circle.classList.add('tech-circle');
      
      // Position aléatoire
      circle.style.top = `${Math.random() * 80 + 10}%`;
      circle.style.left = `${Math.random() * 80 + 10}%`;
      
      // Taille aléatoire
      const size = 50 + Math.random() * 200;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      
      // Délai d'animation aléatoire
      circle.style.animationDelay = `${Math.random() * 2}s`;
      
      techCirclesContainer.appendChild(circle);
    }
  }
  
  // Stream de données
  function initDataStream() {
    const dataStreamContainer = document.querySelector('.data-stream');
    if (!dataStreamContainer) return;
    
    // Vider le conteneur
    dataStreamContainer.innerHTML = '';
    
    // Créer des bits de données
    for (let i = 0; i < 20; i++) {
      const dataBit = document.createElement('div');
      dataBit.classList.add('data-bit');
      
      // Position aléatoire
      dataBit.style.top = `-50px`;
      dataBit.style.left = `${Math.random() * 100}%`;
      
      // Contenu aléatoire (0 ou 1)
      dataBit.textContent = Math.random() > 0.5 ? '0' : '1';
      
      // Délai d'animation aléatoire
      dataBit.style.animationDuration = `${3 + Math.random() * 7}s`;
      dataBit.style.animationDelay = `${Math.random() * 5}s`;
      
      dataStreamContainer.appendChild(dataBit);
    }
  }
  
  // Animation au scroll
  function initScrollAnimations() {
    // Observer pour les animations au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });
    
    // Sélectionner tous les éléments avec la classe tech-animate
    document.querySelectorAll('.tech-animate').forEach(el => {
      observer.observe(el);
    });
  }

  // Si cette fonction existe dans le scope global, l'appeler
  if (typeof initTechEffects === 'function') {
    initTechEffects();
  }
});
