# BRIEF CORRECTION — finir la refonte (état actuel : 30% fait)

## Constat factuel

Tu as fait `index.html` et `pages/parcours.html` dans le nouveau design sobre, mais **tu as oublié de refaire toutes les autres pages**. Le site est maintenant un **frankenstein** entre 2 designs qui cohabitent. C'est inacceptable pour un portfolio destiné à LinkedIn et à des recruteurs ESN.

**Lis BRIEF.md (le brief original) en parallèle de ce fichier** — il reste la source de vérité, ce document ajoute uniquement les corrections.

---

## 1. Pages à REFAIRE (encore en ancien design)

Toutes ces pages ont conservé l'ancien design (dark navy, ancien nav, ancien footer, gimmicks). À refaire intégralement avec le nouveau design system de `index.html` et `parcours.html` :

### `pages/about.html`
- Dit "étudiant en dernière année de B.U.T" — FAUX. Mettre : "diplômé d'un BUT R&T parcours Cybersécurité (2025), actuellement en cycle ingénieur à l'UTT (2025-2028)"
- Section "Mes Valeurs" (Sécurité First / Curiosité / Collaboration) — **SUPPRIMER**, c'est du remplissage
- Centre d'intérêt "Gaming" — **SUPPRIMER**, remplace par "CTF / Bug Bounty" ou "Veille techno"
- "Disponible pour opportunités" — remplacer par le badge précis : "Stage 6 mois · Septembre 2026 · Île-de-France"
- Mon Parcours dans cette page = doublon de `parcours.html` — **SUPPRIMER cette section** (la page parcours fait déjà ça)
- "Stage Technicien Réseau & Sécurité TMI Tunisia" séparé + "Agent d'accueil JO Paris 2024" séparé — **on a fusionné JO 2024 dans ENJOÉ**, ne pas les avoir séparément ici
- Garder : la photo, les coordonnées, les langues
- Reprendre le texte de la section 3.2 du `BRIEF.md`

### `pages/projects.html`
- Décor `<security>`, `function hack() {}`, `sudo apt install`, `git push origin main` — **TOUT VIRER**
- Stats "10+ Projets / 5000+ Lignes / 15+ Technologies / 100% Passion" — **TOUT VIRER**, c'est cringe
- Projet "Portfolio Personnel" dans la liste — **SUPPRIMER** (un site portfolio n'est pas un projet)
- Catégorie "Web" dans le filtre — supprimer (plus de projet web)
- Garder les 5 vrais projets BUT : Wi-Fi Sécurisée, Réseau d'Entreprise, Pentesting, DNS Sécurisée, Météo IoT
- Layout : grille de cartes propre et moderne, hover état soigné, filtre par catégorie (Tous / Sécurité / Réseau / IoT)
- Reprendre les bullets de la section 3.4 du `BRIEF.md`

### `pages/skills.html`
- 🚨 **CRIME #1** : Cisco CCNA dit "En préparation" — **JE L'AI OBTENU en juillet 2023**. Corriger immédiatement → "Obtenue · juillet 2023"
- "CompTIA Security+ — En préparation" — **SUPPRIMER**, je ne prépare pas cette certif
- "Azure Fundamentals — En préparation" — garder OU supprimer selon ce que je dirai
- TOEIC "Obtenu" sans score — **demander mon score**
- **Ajouter** : MOOC SecNumacadémie (ANSSI) — Attestation obtenue
- Compétences "Téléphonie VoIP/SIP" — faible, à supprimer
- "AWS (IaaS, PaaS, SaaS)" — trop pompeux pour un étudiant en stage, mettre simplement "AWS — notions"
- "BGP, MPLS" — projet d'opérateur, à confirmer si vraiment vu en cours, sinon supprimer
- Refaire la liste en suivant la section 3.3 du `BRIEF.md` (4 piliers : Sécurité / Réseaux & Systèmes / Cloud & Infra / Développement & Données), avec les niveaux honnêtes

### `pages/contact.html`
- À refaire avec le nouveau design system
- Formulaire fonctionnel (Formspree ou simple `mailto:`)
- Coordonnées : sami.kharraz.pro@gmail.com, LinkedIn, GitHub, localisation Paris

### `projects/wifi-securise.html`, `projects/reseau-entreprise.html`, `projects/pentesting.html`, `projects/resolution-dns.html`, `projects/meteo-data.html`
- 🔴 **TEXTE À PRÉSERVER À 100%** (contenu factuel SAE, ne PAS reformuler) — comme spécifié dans la section 3.4 du `BRIEF.md`
- **Mais le HTML/CSS doit être REFAIT** pour adopter le nouveau design : nouvelle nav, nouveau footer, nouvelle palette, nouvelles typographies, nouveau traitement visuel des sections
- ⚠️ **Le projet "site-personnel.html" → SUPPRIMER ce fichier**

### `projects/site-personnel.html`
- **À SUPPRIMER** (le projet "Portfolio Personnel" n'a plus lieu d'être)

---

## 2. Pages à SUPPRIMER (obsolètes après la nouvelle structure)

- `pages/formations.html` — **SUPPRIMER** (remplacée par `parcours.html`)
- `pages/experiences.html` — **SUPPRIMER** (remplacée par `parcours.html`)
- `projects/site-personnel.html` — **SUPPRIMER**

⚠️ Vérifier qu'aucun lien interne ne pointe vers ces pages avant de les supprimer.

---

## 3. Cohérence globale (CRITIQUE)

### Navigation unifiée partout

Toutes les pages doivent avoir EXACTEMENT la même nav :
```
Accueil · À propos · Projets · Compétences · Parcours · Contact
```

(et les pages détail projet aussi)

### Footer unifié partout

Reprendre le footer minimaliste de `index.html` / `parcours.html` sur **toutes les pages**, y compris les pages détail projet. Plus de footer triple-colonne avec "Sami KHARRAZ / Navigation / Liens utiles".

### Branding cohérent

- **Toujours "Sami Kharraz"** (Pascal case), jamais "Sami KHARRAZ" en majuscules
- **Toujours `© 2026`**
- **Theme color partout : `#FAFAF8`**
- Une seule version de la photo (vérifier qu'elle s'affiche partout)

### Versionning EN

- La version anglaise dans `/en/` doit aussi être refaite avec le même design
- Si trop long, remplacer toutes les pages EN par une simple redirection vers la version FR avec un placeholder "English version coming soon"

---

## 4. Personnalité visuelle (le 2ᵉ gros problème)

D'après la home actuelle, le design est **propre mais sans personnalité** — trop sobre, trop plat, trop générique "Linear-clone basique". Il manque le caractère que le brief demandait. À ajouter :

### Une vraie couleur d'accent
**Choisis une seule couleur d'accent forte** parmi (et propose-moi les 3 options en visuel) :
- **Vert sapin profond** : `#1F4D3F` — sobre mais distinctif, évoque le réseau et la nature
- **Ambre brûlé** : `#C2410C` — chaleureux, énergique, lecture naturelle des highlights
- **Bordeaux profond** : `#7F1D1D` — rare et premium, marque les esprits

Cette couleur doit apparaître :
- Dans les CTA boutons primaires (background ou border)
- Dans les liens hover
- Dans les badges de statut ("En cours", "Obtenu")
- Dans les filtres actifs
- Dans les accents de titres (un soulignage subtil par exemple)
- Dans les icônes ou marqueurs subtils

**Pas partout** : le mot d'ordre c'est "ponctuelle mais identifiable".

### Typographie distinctive

Si tu utilises Inter ou system fonts — **change**. Propose à la place :
- **Geist** + **Geist Mono** (libre, très moderne, Vercel)
- ou **Söhne** + **JetBrains Mono**
- ou **Söhne + Source Serif** pour un twist éditorial

La typographie doit avoir une **personnalité**, pas être neutre comme Inter.

### Micro-interactions et animations

- Hover sur les cartes projet : élévation subtile + accent color qui pointe
- Apparition au scroll : un fade-up séquencé sur les cartes (uniquement la 1ʳᵉ visite)
- Liens nav : underline animé sur hover
- Boutons : transition de couleur fluide
- Curseur custom sur les liens cliquables (subtil, pas gimmick)
- **Pas d'animations grossières** : tout doit être discret et en service du contenu
- Respecter `prefers-reduced-motion` : désactiver toutes les animations si demandé par le user

### Détails de finition

- Hiérarchie typographique claire (titre H1 = vraiment grand, contraste avec corps de texte)
- Espacements cohérents basés sur une échelle (4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 px)
- Bordures `1px solid` discrètes, pas de gros traits
- Ombres : `box-shadow` très subtiles (pas plus de `0 1px 3px rgba(0,0,0,0.05)`)
- Coins arrondis : 4 ou 6px max, pas plus

---

## 5. Détails à corriger

- `ENJOÉ by Samsic` sur `parcours.html` — **typo**, c'est `ENJOÉ` (avec accent) — **CORRIGER**
- `Mission phare : Jeux Olympiques Paris 2024` — garder comme dans le BRIEF
- `CV_2024_Sami_Kharraz.pdf` — demander à l'utilisateur le nouveau CV (renommer en `CV_Sami_Kharraz_2026.pdf`)
- ⚠️ Vérifier tous les **liens internes** : pages refaites pointent vers `pages/parcours.html` mais les anciennes pages renvoient vers `pages/formations.html` et `pages/experiences.html` — uniformiser

---

## 6. Workflow attendu pour cette correction

1. **Avant tout code** :
   - Lis ce fichier en entier
   - Lis aussi le `BRIEF.md` original
   - Liste-moi clairement les pages que tu vas modifier et celles que tu vas supprimer
   - Propose-moi 3 couleurs d'accent en mock visuel (texte ou capture si possible)
   - Propose-moi 2 combos typographiques avec captures de référence

2. **Validation utilisateur** : j'approuve la couleur d'accent + la typo

3. **Refonte page par page** :
   - Commence par `pages/about.html` (le plus visible après home)
   - Puis `pages/projects.html`
   - Puis `pages/skills.html`
   - Puis `pages/contact.html`
   - Puis les 5 pages détail projet (HTML/CSS uniquement, texte préservé)
   - Suppression des pages obsolètes en dernier

4. **Après chaque page** : me montrer un avant/après ou un récap des modifs avant de passer à la suivante

5. **À la fin** :
   - Audit cohérence : vérifier que tout est uniforme
   - Lighthouse 4 catégories
   - Validation HTML W3C
   - Test sur mobile (375px) prioritaire

---

## 7. Ce que je veux ressentir

Quand un recruteur arrive sur mon portfolio et navigue, il doit **immédiatement comprendre** :
- C'est un **profil tech sérieux**
- C'est **soigné dans tous les détails** (un détail moche = signal négatif)
- C'est **une personne avec du goût** (pas un template générique)
- Le contenu est **scannable en 30 secondes** (les recruteurs sont pressés)

Aujourd'hui le site **ne tient aucune** de ces promesses parce qu'il est inachevé. Faisons-le tenir toutes.

---

**On bosse toujours sur la branche `refonte-2026`. Pose-moi tes questions si tu en as, propose-moi les directions design demandées, attends ma validation avant de coder.**
