# Guide du Thème Tech Network 2.0

Ce guide décrit le thème technique utilisé dans le portfolio, optimisé pour refléter l'univers des réseaux informatiques, de la cybersécurité et des technologies digitales.

## Palette de couleurs

Le thème utilise une palette inspirée des interfaces de cybersécurité modernes et des environnements réseaux:

### Couleurs primaires
- **Noir bleuté** (`#0D1117`) : Fond principal, évoquant les interfaces de monitoring nocturnes
- **Bleu électrique** (`#1A4CFF`) : Couleur primaire, rappelant les connexions réseau actives
- **Cyan électrique** (`#00E5FF`) : Couleur d'accentuation principale, inspirée des interfaces de cybersécurité
- **Vert néon** (`#00FF8C`) : Couleur secondaire pour éléments spéciaux, évoquant les terminaux Matrix

### Couleurs fonctionnelles
- **Vert matrix** (`#3FFF6F`) : Pour éléments de code, cybersécurité
- **Violet hi-tech** (`#A374FF`) : Innovation, éléments créatifs
- **Orange alerte** (`#FF7D3A`) : Attention, services, systèmes
- **Rouge cyber** (`#FF2957`) : Alertes, erreurs, sécurité

### Accents néon
- **Vert fluo** (`#39FF14`) : Accentuation style terminal
- **Bleu holographique** (`#00D8FF`) : Accentuation électrique

## Application du thème

Pour utiliser le thème tech sur une page, ajoutez :
1. La classe `theme-tech` à l'élément `<body>`
2. L'inclusion du fichier CSS : `<link rel="stylesheet" href="../assets/css/tech-theme.css">`

## Éléments spécifiques

### Cartes avec effet "cyber"
Les cartes reçoivent automatiquement :
- Un fond semi-transparent noir bleuté
- Une bordure subtile cyan électrique
- Un effet de lueur au survol évoquant les interfaces de science-fiction

### Boutons
- Boutons primaires : dégradé bleu électrique → cyan électrique
- Boutons secondaires : bordure cyan électrique sur fond transparent

### Icônes par domaine
Chaque domaine de compétence a sa couleur distinctive :
- Réseaux : Cyan électrique (`#00E5FF`)
- Cybersécurité : Vert matrix (`#3FFF6F`)
- Programmation : Violet hi-tech (`#A374FF`)
- Cloud : Bleu holographique (`#00D8FF`)
- Systèmes : Vert néon (`#00FF8C`)
- Télécommunications : Orange alerte (`#FF7D3A`)

## Motifs et arrière-plans

Le thème inclut des motifs de circuits SVG actualisés avec la nouvelle palette:
- `circuit-pattern.svg` : Motif général pour les sections
- `circuit-footer.svg` : Version simplifiée pour le pied de page

## Effets visuels

- **Lueur cyan** : `box-shadow: 0 0 20px rgba(0, 229, 255, 0.6);`
- **Dégradé principal** : `linear-gradient(135deg, #1A4CFF, #00E5FF);`
- **Élévation au survol** : `transform: translateY(-5px);`
- **Effet Cyber-Pulse** : Animation de pulsation pour les éléments importants

## Animations spéciales

- **cyber-glow** : Classe pour ajouter un effet de pulsation cyan électrique
- **cyber-glitch** : Classe pour ajouter un effet de scintillement style "glitch" au texte
