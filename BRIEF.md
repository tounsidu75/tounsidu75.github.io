# Refonte portfolio — Sami Kharraz (cible : stage cyber/réseaux/sysadmin sept. 2026)

## Contexte

**Mon parcours :**
- **2022 – 2025 : BUT Réseaux & Télécommunications, parcours Cybersécurité** à l'IUT de Villetaneuse (Université Sorbonne Paris Nord) — obtenu. Tous mes projets actuels viennent de cette formation.
- **2025 – 2028 : Cycle ingénieur à l'UTT (Université de Technologie de Troyes)**, filière Réseaux & Télécommunications, spécialisation Cybersécurité. Diplôme prévu en 2028.

Je cherche un **stage de 6 mois à partir de septembre 2026 en Île-de-France**, ciblant des postes en :

- Cybersécurité (SOC analyst, pentester junior, sécurité opérationnelle)
- Administration systèmes & réseaux
- Infrastructure / Cloud (Azure, AWS, conteneurs)

Cibles recruteurs : **ESN (Capgemini, Sopra Steria, Atos, Orange Cyberdefense, Wavestone)**, grands groupes (banques, télécoms, énergie), entreprises avec vraie infra réseau/sécurité.

Mon portfolio actuel est ici : `https://tounsidu75.github.io/` (repo : `tounsidu75/tounsidu75.github.io` sur GitHub). Le contenu projet est correct mais le design est générique et obsolète. **Refonte complète attendue — je veux garder uniquement les vrais projets BUT (listés en section 3.4) et n'inventer aucun projet UTT (je n'en ai pas encore).**

## Mission

Refonds intégralement le portfolio en respectant les exigences ci-dessous. Tu peux soit garder la structure multi-pages soit basculer en **single-page scrollable avec nav sticky** (ma préférence : single-page, plus moderne et plus efficace pour un recruteur qui scanne 30 secondes).

---

## 1. Stack technique imposée

- **HTML5 + CSS3 + JS vanilla** (pas de framework lourd, GitHub Pages doit déployer instantanément)
- Optionnel : Astro ou Eleventy si tu juges que ça apporte vraiment, sinon HTML/CSS/JS pur
- **Aucune dépendance npm runtime** (pas de React, Vue, etc. — sauf si tu utilises un static site generator qui pré-compile en HTML statique)
- Compatible **GitHub Pages** sans build complexe (idéal : pousse le HTML directement)
- **Mobile-first responsive** (testé 375px / 768px / 1280px / 1920px)
- Score Lighthouse cible : **Performance 95+, Accessibilité 95+, Best Practices 95+, SEO 100**
- Conformité WCAG 2.1 AA minimum

---

## 2. Identité visuelle — sortir du cliché cyber

**À éviter absolument :**

- Le combo dark navy/bleu + vert/cyan néon "hacker"
- Texte avec effet "matrice" qui défile
- Polices type "Source Code Pro" ou monospace partout
- Emojis 🔐🛡️💻 ou icônes Font Awesome de cadenas
- Compteurs animés "0 → 100"
- Sections "Mes Valeurs" génériques (Passion / Curiosité / Collaboration)
- Particles.js, étoiles qui bougent, fond animé criard
- Boutons gradient violet/bleu (cliché AI-slop ultime)

**Direction artistique attendue : choisir UNE identité claire parmi ces pistes (à toi de proposer la plus pertinente) :**

1. **Editorial / magazine tech** : typographie premium (display serif type *Fraunces*, *Reckless*, *Editorial New* + sans neutre type *Söhne*, *Geist*, *Suisse Int'l* en body), grille rigoureuse, mise en page éditoriale, beaucoup d'espace blanc, accents colorés discrets
2. **Brutaliste raffiné** : grille apparente, contraste fort noir/blanc, une seule couleur d'accent saturée, typographie technique condensée (*Neue Haas Grotesk*, *Söhne Mono* pour les détails)
3. **Swiss/minimaliste technique** : très propre, typographique pure, basé sur la grille, accent unique (orange ou vert profond), zéro effet superflu
4. **Tech sobre coloré** : palette inspirée Linear/Vercel/Stripe — fond clair (off-white #FAFAF8), un noir profond, un accent unique (terracotta, vert sapin, bleu klein, ambre), zéro gradient cheap

**Ma préférence : option 1 ou 4**, mais propose et justifie ton choix.

**Règles typographiques :**

- 2 polices maximum (display + body)
- **Pas** d'Inter, Roboto, Arial, Open Sans (overused)
- Charger les fonts via `font-display: swap` et préchargement (`<link rel="preload">`)
- Tailles fluides : `clamp()` pour le responsive

**Règles couleurs :**

- 1 couleur dominante (fond + texte)
- 1 couleur d'accent maximum
- Mode clair par défaut (les recruteurs scrollent dans le métro, fond clair = plus pro)
- Toggle dark/light mode optionnel (bonus si propre)

---

## 3. Contenu — texte exact à utiliser

### 3.1 Hero / Accueil

**Titre** : `Sami Kharraz`
**Sous-titre** : `Étudiant-ingénieur cybersécurité & réseaux — UTT`
**Statut (badge bien visible, à droite ou sous le titre)** :
> Stage 6 mois · Septembre 2026 · Île-de-France
> Cybersécurité / Admin Sys & Réseaux / Infrastructure

**Pitch (2-3 lignes max)** :
> Étudiant en **3ᵉ année** à l'UTT (Université de Technologie de Troyes), je conçois et sécurise des infrastructures réseau et systèmes. Je m'intéresse particulièrement à la détection d'intrusion, à l'automatisation et aux architectures cloud-native.

**CTA principaux** :
- Bouton primaire : `Voir mes projets` → ancre #projets
- Bouton secondaire : `Télécharger CV` → `/assets/cv/CV_Sami_Kharraz_2026.pdf` (renomme le fichier !)
- Liens icône : LinkedIn, GitHub, Email (haut de page, toujours visibles)

### 3.2 À propos

> Je viens de terminer un **BUT Réseaux & Télécommunications, parcours Cybersécurité** à l'**IUT de Villetaneuse (Université Sorbonne Paris Nord)** où j'ai construit l'essentiel de mes compétences techniques : architectures Wi-Fi sécurisées avec authentification 802.1X, routage Cisco, audit de vulnérabilités, sécurisation DNS. J'ai complété cette formation par un **stage chez TMI Tunisia** sur des déploiements LAN/WLAN en environnement Huawei.
>
> Je suis maintenant en **cycle ingénieur à l'UTT (Université de Technologie de Troyes)**, filière Réseaux & Télécommunications, spécialisation **Cybersécurité**. Diplôme prévu en 2028.
>
> Je cherche un stage de 6 mois à partir de **septembre 2026** dans une équipe qui exploite une vraie infrastructure : ESN, opérateur télécom, banque, ou groupe industriel — sur des sujets de cybersécurité, administration systèmes/réseaux, ou infrastructure cloud.

**Bloc infos rapides :**
- 📍 Paris (75018), mobile Île-de-France
- 🎓 UTT — cycle ingénieur RT (diplôme 2028) · BUT R&T Cybersécurité (Sorbonne Paris Nord, obtenu 2025)
- 🌍 Français (natif), Anglais (B2), Arabe (natif)
- ✉️ sami.kharraz.pro@gmail.com

### 3.3 Compétences (refonte complète)

Organiser en 4 piliers max, chaque pilier avec niveau réaliste (basé sur mes vrais projets BUT et mon stage TMI Tunisia) :

**Sécurité**
- Pentesting & audit de vulnérabilités : `Kali Linux`, `Metasploit`, `Wireshark`, `Nessus` — projet BUT
- Hardening Wi-Fi entreprise : `802.1X`, `FreeRADIUS`, `WPA2-Enterprise`, portail captif — SAE501
- Sécurisation DNS : `DNSSEC`, `DoT`, `DoH`, `BIND 9` — projet BUT
- Pare-feu & segmentation : `pfSense` — projet BUT, notions `Stormshield`/`Fortinet`
- OWASP Top 10, IDS/IPS — notions formation

**Réseaux & Systèmes**
- Cisco IOS : OSPF, HSRP, QoS, VLANs, ACL — projet BUT
- Huawei VRP : configuration LAN/WLAN — stage TMI Tunisia
- Linux (Debian, Kali) : administration, scripting Bash — projets BUT
- Windows / Active Directory : notions
- DNS, DHCP, VPN (notions)

**Cloud & Infra** (en cours d'approfondissement à l'UTT)
- Docker — cours UTT en cours
- Kubernetes — cours UTT en cours
- Azure — notions, AZ-900 visée
- Virtualisation : VMware, VirtualBox, GNS3 — projets BUT
- Git / GitHub workflows

**Développement & Données**
- Python — scripting réseau et sécurité
- Java — projets BUT
- HTML/CSS/JavaScript — portfolio personnel
- SQL : MySQL — projet FreeRADIUS
- IoT : ESP32, MQTT, InfluxDB, Grafana — projet BUT

**Certifications** (uniquement ce qui est CONCRET et obtenu) :
- **Cisco CCNA** — *Obtenue en juillet 2023*
- **MOOC SecNumacadémie** (ANSSI) — *Attestation de suivi obtenue* — formation en cybersécurité (sécurité de l'information, cryptographie, sécurité du poste de travail, sécurité des réseaux)
- **TOEIC** — *(à me confirmer : score obtenu ?)*
- **Azure Fundamentals (AZ-900)** — *en préparation* (à afficher uniquement si tu veux mettre en avant ta démarche cloud, sinon retire-le)

### 3.4 Projets (LE COEUR DU PORTFOLIO)

**🔴 RÈGLE CRITIQUE — À NE PAS IGNORER :**

Les **pages de détail individuelles** de chaque projet sont déjà rédigées dans le portfolio actuel à ces URLs :
- `https://tounsidu75.github.io/projects/wifi-securise.html`
- `https://tounsidu75.github.io/projects/reseau-entreprise.html`
- `https://tounsidu75.github.io/projects/pentesting.html`
- `https://tounsidu75.github.io/projects/resolution-dns.html`
- `https://tounsidu75.github.io/projects/meteo-data.html`

**Ces pages contiennent un contenu rédigé minutieusement** (contexte académique, objectifs, méthodologie, architecture, composants, configurations VLAN, détails techniques par composant, résultats obtenus, composition d'équipe, etc.). **TU NE TOUCHES PAS À CE CONTENU.** Tu te contentes de :

1. **Reprendre le texte existant tel quel** (récupère-le directement depuis les fichiers du repo `tounsidu75/tounsidu75.github.io` dans le dossier `projects/`)
2. **Reformater visuellement** chaque page de détail pour qu'elle adopte le **nouveau design system** (typographie, couleurs, espacements, composants) — uniquement la mise en forme HTML/CSS, pas le texte
3. **Garder la structure de contenu identique** : mêmes sections, mêmes titres, mêmes paragraphes, mêmes tableaux

**Ce que tu refonds librement** : la grille/cartes projet sur la page principale, le filtre par catégorie, les transitions, le menu sticky.
**Ce que tu NE refonds PAS** : le texte des pages de détail. Ce contenu est validé, factuel, vécu — toute reformulation introduirait des erreurs ou des inventions.

Si une page de détail manque (ex : un projet n'avait pas de page individuelle), demande-moi avant de générer du contenu.

---

**Format des cartes projet sur la page principale (mini-résumés) :**
- Titre clair
- 1 phrase de pitch
- Stack tech en tags
- Catégorie (Sécurité / Réseau / IoT)
- Bouton "Voir le détail" → vers la page individuelle

**⚠️ IMPORTANT — Tous mes projets actuels viennent du BUT R&T parcours Cybersécurité (IUT Villetaneuse, Sorbonne Paris Nord, 2022-2025). Je n'ai PAS encore de projet académique UTT à présenter — c'est ma 1ʳᵉ année là-bas et le stage de septembre 2026 sera ma première vraie expérience industrielle de cycle ingénieur. Garde uniquement la liste réelle ci-dessous, n'invente rien.**

**Liste des 5 projets RÉELS à intégrer (pour les cartes de la page principale uniquement — le détail reste celui des pages existantes) :**

#### 🛡️ Architecture Wi-Fi Sécurisée (SAE501)
- Conception et déploiement d'une architecture Wi-Fi entreprise avec authentification 802.1X, segmentation VLAN et portail captif
- Mise en place d'un serveur **FreeRADIUS + MySQL** pour l'authentification centralisée, configuration **pfSense** (firewall, VLANs, portail captif), simulation initiale sous **GNS3** puis déploiement physique
- *Rôle dans l'équipe (4 étudiants)* : Responsable configuration pare-feu et segmentation VLAN
- Cadre : SAE501 — BUT R&T Cybersécurité, semestre 5, IUT Villetaneuse — durée 8 semaines — 2024
- Stack : `FreeRADIUS` `MySQL` `pfSense` `GNS3` `VLANs` `802.1X` `Linux Debian`
- Lien rapport : `assets/docs/Rapport_SAE_Equipe_6.pdf` (déjà en ligne)

#### 🌐 Réseau d'Entreprise — Routage & Redondance
- Conception et mise en œuvre d'un réseau d'entreprise complet avec routage dynamique, redondance de passerelle, QoS et sécurité périmétrique
- Configuration Cisco IOS : OSPF (multi-area), HSRP (haute disponibilité), QoS (priorisation des flux voix/vidéo)
- Cadre : projet BUT R&T — IUT Villetaneuse
- Stack : `Cisco IOS` `OSPF` `HSRP` `QoS` `ACL`

#### 🔍 Pentesting & Analyse de Vulnérabilités
- Audit de sécurité et analyse de vulnérabilités sur un environnement de test (machines virtuelles)
- Exploitation contrôlée de failles, capture de trafic, analyse forensique, documentation des CVE et remédiations proposées
- Stack : `Kali Linux` `Metasploit` `Wireshark` `Nessus`

#### 🔐 Résolution DNS Sécurisée
- Implémentation d'une infrastructure DNS sécurisée et redondante avec **DNSSEC** (signature des zones), **DoT** et **DoH** pour chiffrer les résolutions
- Configuration **BIND 9** maître/esclave, gestion des clés KSK/ZSK, tests de validation de chaîne de confiance
- Cadre : projet BUT R&T — IUT Villetaneuse
- Stack : `BIND 9` `DNSSEC` `DoT` `DoH` `Linux`

#### 📡 IoT — Réseau de Capteurs Météo
- Conception d'un réseau de capteurs IoT pour collecter et analyser des données météorologiques en temps réel
- Capteurs **ESP32**, transmission via **MQTT**, stockage **InfluxDB**, visualisation **Grafana** (dashboards temps réel)
- Cadre : projet BUT R&T — IUT Villetaneuse
- Stack : `ESP32` `MQTT` `InfluxDB` `Grafana` `Python`

**⚠️ Le projet "Portfolio Personnel" présent dans l'ancien portfolio est à RETIRER de la liste — un site portfolio n'est pas un projet en soi pour un recruteur cyber/réseau. Le site lui-même prouve les compétences web, pas besoin de le mettre comme projet.**

**Section "Projets UTT à venir" (optionnelle, élégant)** : tu peux ajouter un petit encart en bas de la grille projets indiquant *"Projets UTT en cours — résultats à venir au fil des semestres"* pour montrer que tu es en train d'en construire de nouveaux. À toi de juger si c'est utile ou si ça affaiblit la section.

**Filtre par catégorie en haut** (Tous / Sécurité / Réseau / IoT) avec animation propre (pas de fade cheap).

### 3.5 Expériences

**TMI Tunisia — Stagiaire Technicien Réseau & Sécurité** *(2024)*
- Déployé une infrastructure LAN/WLAN sécurisée pour 50+ utilisateurs : switches managés, contrôleurs Wi-Fi, bornes d'accès et pare-feu Huawei
- Conçu le plan d'adressage IP et segmenté le réseau en VLANs avec politiques de sécurité (ACL, filtrage MAC, SSID dédiés)
- Administré les équipements Huawei (S5700, AR) via CLI et interface web en environnement de production
- Configuré les règles de pare-feu et réalisé les tests de connectivité pour valider l'architecture réseau avant mise en production
- Rédigé la documentation technique complète du projet (schémas réseau, procédures de configuration)

**ENJOÉ BY SAMSIC — Agent d'accueil et information en gare SNCF/RATP** *(2024 — en cours)*
- Accueil, information et orientation des voyageurs vers les correspondances, sorties ou substitutions
- Fluidification de la circulation en dispersant les flux de voyageurs pour éviter les effets de foule
- Veille à la sécurité en gare en restant attentif au comportement et aux besoins des usagers
- **Rôle de chef d'équipe sur le terrain** : encadrement et coordination des binômes d'agents, gestion des plannings et briefings, suivi opérationnel des missions
- **Mission phare : Jeux Olympiques Paris 2024** — déploiement sur le dispositif olympique, gestion de flux massifs internationaux, communication multilingue, environnement haute pression
- *Compétences transverses : leadership terrain, gestion opérationnelle, communication, gestion de crise*

### 3.6 Formation

**UTT — Université de Technologie de Troyes** *(2025 — 2028, en cours)*
- Cycle ingénieur, filière Réseaux & Télécommunications
- Spécialisation : Cybersécurité
- Cours en cours : sécurité réseau, cloud, administration systèmes
- Stage de 6 mois prévu à partir de septembre 2026
- *Aucun projet académique UTT à présenter pour l'instant — première année dans l'école*

**BUT Réseaux & Télécommunications — parcours Cybersécurité** *(2022 — 2025, obtenu)*
- IUT de Villetaneuse — Université Sorbonne Paris Nord
- Tous les projets présentés ci-dessus ont été réalisés dans ce cadre
- **Cours clés (organisés par thème) :**
  - **Cybersécurité** : méthodologie du pentest, audits de sécurité, cryptographie, sécurisation de services réseaux, architectures sécurisées, supervision de la sécurité, réponse à incidents, normes et sécurité, droit de la cyber
  - **Réseaux & infrastructure** : réseaux de campus, réseaux d'opérateurs, services réseaux avancés, services d'annuaire, Wi-Fi avancé, supervision réseaux, réseaux cellulaires
  - **Télécommunications** : chaînes de transmission numérique, fibres optiques, systèmes télécom, transmissions avancées
  - **Systèmes & développement** : automatisation des tâches d'administration, programmation événementielle, gestion de bases de données, développement d'applications communiquantes

### 3.7 Contact

- Formulaire fonctionnel (Formspree ou Netlify Forms — ou simple `mailto:` propre)
- LinkedIn : `linkedin.com/in/sami-kharraz` *(à vérifier)*
- GitHub : `github.com/tounsidu75`
- Email : `sami.kharraz.pro@gmail.com`
- Localisation : Paris, mobile Île-de-France

---

## 4. À VIRER ABSOLUMENT

- Section "Mes Valeurs" (Sécurité First / Curiosité / Collaboration)
- Centre d'intérêt "Gaming" (remplacer par CTF / Bug Bounty / Veille techno)
- Statistiques "10+ projets / 5000+ lignes / 100% Passion"
- Animations gimmick : `function hack() {}`, `sudo apt install`, `git push origin main` en décor
- Compteurs animés 0 → X
- Le statut "En préparation" sur TOUTES les certifs (à remplacer par le statut réel de chacune — me poser la question)
- Mention "futur ingénieur" — trop attentiste, écrire "étudiant-ingénieur" ou "ingénieur en formation"
- Le CV daté 2024 — renommer `CV_Sami_Kharraz_2026.pdf`

---

## 5. Exigences techniques précises

### Performance
- Images : format **WebP** avec fallback PNG/JPG, lazy-loading natif (`loading="lazy"`)
- Photo de profil : **200 KB max**, optimisée
- CSS : un seul fichier minifié, pas de framework CSS (pas de Bootstrap, pas de Tailwind si tu peux écrire du CSS propre — sinon Tailwind via CDN OK mais purger)
- JS : minimal, vanilla, pas de dépendances lourdes
- Pas de `@import` CSS (bloquant)
- Préchargement des fonts critiques

### SEO
- Meta description unique par page (ou par section si single-page)
- Open Graph + Twitter Card complets avec image dédiée 1200×630
- `sitemap.xml` + `robots.txt`
- Structured data JSON-LD : `Person` schema avec `jobTitle`, `alumniOf`, `knowsAbout`
- Title format : `Sami Kharraz — Étudiant-ingénieur Cybersécurité & Réseaux | Stage Sept. 2026`
- URL canoniques

### Accessibilité
- Contraste AA minimum partout (vérifier au validateur)
- Tous les `<img>` avec `alt` descriptif
- Navigation clavier 100% fonctionnelle, focus visible custom
- `aria-label` sur les liens icône (LinkedIn, GitHub, etc.)
- Skip-to-content link
- `prefers-reduced-motion` respecté (désactiver les animations si demandé)
- Hiérarchie de titres correcte (un seul `<h1>` par page)
- Formulaire contact avec labels associés

### Responsive
- Breakpoints : 375px, 768px, 1024px, 1440px
- Test prioritaire sur **mobile** (la moitié des recruteurs scrollent depuis leur téléphone)
- Touch targets ≥ 44px

### i18n
- Garder la version FR + EN existante
- Toggle de langue propre (pas de drapeaux — préférer `FR / EN` typographique, plus pro)

---

## 6. Structure de fichiers attendue

```
/
├── index.html               (single-page principal en FR)
├── en/index.html            (version anglaise)
├── 404.html
├── robots.txt
├── sitemap.xml
├── projects/                ⚠️ PAGES EXISTANTES — texte conservé, mise en forme refaite
│   ├── wifi-securise.html
│   ├── reseau-entreprise.html
│   ├── pentesting.html
│   ├── resolution-dns.html
│   └── meteo-data.html
├── assets/
│   ├── css/
│   │   └── styles.css       (un seul fichier, propre, commenté)
│   ├── js/
│   │   └── main.js          (interactions : nav sticky, filtres projets, toggle theme)
│   ├── fonts/               (fonts auto-hébergées si possible)
│   ├── img/
│   │   ├── profile.webp
│   │   ├── og-image.png
│   │   └── projects/        (1 image par projet, format 16:9)
│   └── cv/
│       └── CV_Sami_Kharraz_2026.pdf
└── README.md                (description du repo, propre, avec captures)
```

---

## 7. Workflow attendu

1. **Avant tout code**, propose-moi :
   - 2 directions de design (mood-board verbal : palette, fonts, références visuelles type "à la Linear", "à la Vercel docs", "à la Pentagram")
   - Le wireframe rapide en ASCII ou en pseudo-structure
   - Les 3 questions que tu te poses pour lever les ambiguïtés

2. Une fois validé : implémentation **section par section**, en me montrant le rendu à chaque étape. **Pas de monolithe d'un coup.**

3. À chaque section livrée :
   - Capture du rendu desktop + mobile
   - Score Lighthouse
   - Validation HTML W3C

4. Tests finaux avant push GitHub Pages :
   - Lighthouse 4 catégories
   - axe-core a11y scan
   - Test sur Chrome, Firefox, Safari iOS

---

## 8. Questions que tu DOIS me poser avant de commencer

Pour éviter les allers-retours, demande-moi :

1. Statut **TOEIC** : score obtenu ?
2. **GitHub des 5 projets BUT** : sont-ils dans des repos publics ? Si oui, donne-moi les URLs précises pour chaque projet (Wi-Fi sécurisé, Réseau d'entreprise, Pentesting, DNS sécurisé, Météo IoT). Sinon je les laisse comme cartes sans lien GitHub. **LinkedIn** : URL exacte à confirmer.
3. Photo de profil : tu réutilises l'actuelle ou je dois en fournir une nouvelle ?
4. Direction de design préférée parmi les 4 proposées plus haut
5. Domaine custom souhaité ? (`samikharraz.fr` recommandé, ~10€/an chez Gandi/OVH) ou on garde GitHub Pages avec le sous-domaine ? *(suggestion : minimum renommer le repo en `samikharraz.github.io` au lieu de `tounsidu75.github.io`)*
6. Mode dark/light ou un seul mode ?
7. Date d'obtention du **MOOC SecNumacadémie** (mois / année) pour l'afficher proprement

---

## 9. Critères de réussite

Le portfolio doit me permettre de :
- Le partager **tel quel** sur LinkedIn sans rougir
- Tenir face au portfolio d'un étudiant Epitech/42 ou d'un ingénieur Centrale
- Convertir un recruteur ESN en moins de 60 secondes de scroll
- Charger en moins de 1.5s en 4G
- Être **moi**, pas un template générique

**Important** : j'ai un style direct, pas marketé. Évite les phrases creuses type "passionné par les défis", "toujours en quête d'excellence", "team player". Du concret. Des chiffres. Des projets réels.

---

## 🔴 RAPPEL FINAL — CONTENU À NE PAS RÉÉCRIRE

Le contenu textuel des **pages de détail projet** (`projects/wifi-securise.html`, `projects/reseau-entreprise.html`, `projects/pentesting.html`, `projects/resolution-dns.html`, `projects/meteo-data.html`) a été rédigé soigneusement avec des informations factuelles vécues (rôle dans l'équipe, configurations exactes, composition VLANs, technologies utilisées, résultats obtenus, etc.).

**TU NE RÉÉCRIS PAS CE TEXTE.** Tu :
- Récupères le texte tel quel depuis les fichiers existants
- Reformates uniquement la mise en page (HTML/CSS) selon le nouveau design
- Conserves chaque section, chaque titre, chaque paragraphe, chaque tableau
- N'ajoutes pas d'informations
- Ne supprimes pas de détails techniques

**Toute reformulation, paraphrase, "amélioration" du contenu projet est interdite.** Si tu veux suggérer une amélioration de fond, demande-moi avant.

---

**Go. Pose-moi tes questions avant de coder.**
