/**
 * Internationalization (i18n) System
 * Portfolio Sami KHARRAZ
 * Supports: French (fr) and English (en)
 */

const translations = {
  // ==================== NAVIGATION ====================
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.skills": { fr: "Compétences", en: "Skills" },
  "nav.education": { fr: "Formations", en: "Education" },
  "nav.experience": { fr: "Expériences", en: "Experience" },
  "nav.projects": { fr: "Projets", en: "Projects" },
  "nav.contact": { fr: "Contact", en: "Contact" },

  // ==================== LANGUAGE SELECTOR ====================
  "lang.fr": { fr: "Français", en: "Français" },
  "lang.en": { fr: "English", en: "English" },
  "lang.current.fr": { fr: "Français", en: "French" },
  "lang.current.en": { fr: "Anglais", en: "English" },

  // ==================== HOMEPAGE ====================
  "home.status": { fr: "Disponible pour opportunités", en: "Available for opportunities" },
  "home.greeting": { fr: "Bonjour, je suis", en: "Hello, I'm" },
  "home.role.prefix": { fr: "Futur ingénieur en", en: "Future engineer in" },
  "home.description": {
    fr: "Passionné par la sécurité des systèmes d'information et les technologies réseau. Je protège, analyse et sécurise les infrastructures numériques de demain.",
    en: "Passionate about information systems security and network technologies. I protect, analyze and secure tomorrow's digital infrastructures."
  },
  "home.btn.discover": { fr: "Découvrir mon profil", en: "Discover my profile" },
  "home.btn.cv": { fr: "Télécharger CV", en: "Download CV" },

  // Stats
  "home.stat.years": { fr: "Années d'études", en: "Years of study" },
  "home.stat.projects": { fr: "Projets réalisés", en: "Projects completed" },
  "home.stat.technologies": { fr: "Technologies", en: "Technologies" },
  "home.stat.certifications": { fr: "Certifications", en: "Certifications" },

  // Highlights
  "home.highlights.title": { fr: "Ce que je fais", en: "What I do" },
  "home.highlights.subtitle": { fr: "Mes domaines d'expertise en cybersécurité et réseaux", en: "My areas of expertise in cybersecurity and networks" },
  "home.highlight.security.title": { fr: "Cybersécurité", en: "Cybersecurity" },
  "home.highlight.security.desc": { fr: "Analyse de vulnérabilités, tests d'intrusion, mise en place de solutions de sécurité et réponse aux incidents.", en: "Vulnerability analysis, penetration testing, security solutions implementation and incident response." },
  "home.highlight.network.title": { fr: "Administration Réseau", en: "Network Administration" },
  "home.highlight.network.desc": { fr: "Conception, déploiement et maintenance d'infrastructures réseau sécurisées et performantes.", en: "Design, deployment and maintenance of secure and high-performance network infrastructures." },
  "home.highlight.dev.title": { fr: "Développement", en: "Development" },
  "home.highlight.dev.desc": { fr: "Création d'outils d'automatisation et de scripts pour la sécurité et l'administration système.", en: "Creating automation tools and scripts for security and system administration." },
  "home.highlight.tag.forensics": { fr: "Forensique", en: "Forensics" },

  // CTA
  "home.cta.title": { fr: "Prêt à collaborer ?", en: "Ready to collaborate?" },
  "home.cta.desc": { fr: "Je suis actuellement à la recherche d'opportunités en cybersécurité. N'hésitez pas à me contacter pour discuter de vos projets.", en: "I'm currently looking for opportunities in cybersecurity. Feel free to contact me to discuss your projects." },
  "home.cta.contact": { fr: "Me contacter", en: "Contact me" },
  "home.cta.projects": { fr: "Voir mes projets", en: "View my projects" },

  // ==================== ABOUT PAGE ====================
  "about.badge": { fr: "À propos de moi", en: "About me" },
  "about.title.passion": { fr: "Passionné par la", en: "Passionate about" },
  "about.title.cyber": { fr: "Cybersécurité", en: "Cybersecurity" },
  "about.description": {
    fr: "Je suis <span class='about-highlight'>Sami KHARRAZ</span>, un étudiant en dernière année de B.U.T Réseaux et Télécommunications, spécialisé en Cybersécurité à l'Université Sorbonne Paris Nord.",
    en: "I'm <span class='about-highlight'>Sami KHARRAZ</span>, a final-year student in Networks and Telecommunications, specializing in Cybersecurity at Sorbonne Paris Nord University."
  },
  "about.description2": {
    fr: "Ma passion pour la sécurité informatique m'a conduit à développer une expertise solide en <span class='about-highlight'>pentesting</span>, <span class='about-highlight'>administration réseau</span> et <span class='about-highlight'>analyse de vulnérabilités</span>. Je suis constamment à la recherche de nouveaux défis pour renforcer mes compétences et contribuer à la protection des systèmes d'information.",
    en: "My passion for IT security has led me to develop solid expertise in <span class='about-highlight'>pentesting</span>, <span class='about-highlight'>network administration</span> and <span class='about-highlight'>vulnerability analysis</span>. I'm constantly looking for new challenges to strengthen my skills and contribute to protecting information systems."
  },
  "about.info.location": { fr: "Localisation", en: "Location" },
  "about.info.education": { fr: "Formation", en: "Education" },
  "about.info.email": { fr: "Email", en: "Email" },
  "about.info.languages": { fr: "Langues", en: "Languages" },
  "about.btn.cv": { fr: "Télécharger mon CV", en: "Download my CV" },
  "about.status": { fr: "Disponible pour opportunités", en: "Available for opportunities" },

  // Journey section
  "about.journey.title": { fr: "Mon Parcours", en: "My Journey" },
  "about.journey.subtitle": { fr: "Les étapes clés qui ont forgé ma passion pour la cybersécurité", en: "Key milestones that shaped my passion for cybersecurity" },
  "about.journey.but.title": { fr: "B.U.T Réseaux & Télécommunications", en: "Bachelor in Networks & Telecommunications" },
  "about.journey.but.desc": { fr: "Spécialisation en Cybersécurité à l'Université Sorbonne Paris Nord. Formation complète en sécurité des systèmes d'information.", en: "Cybersecurity specialization at Sorbonne Paris Nord University. Complete training in information systems security." },
  "about.journey.stage.title": { fr: "Stage Technicien Réseau & Sécurité", en: "Network & Security Technician Internship" },
  "about.journey.stage.desc": { fr: "Mise en place d'infrastructures réseau sécurisées chez TMI Tunisia. Configuration de solutions LAN/WLAN avec équipements Huawei.", en: "Setting up secure network infrastructures at TMI Tunisia. Configuration of LAN/WLAN solutions with Huawei equipment." },
  "about.journey.jo.title": { fr: "Agent d'accueil JO Paris 2024", en: "Reception Agent Paris 2024 Olympics" },
  "about.journey.jo.desc": { fr: "Gestion des flux de voyageurs et sécurité pendant les Jeux Olympiques. Développement des compétences en communication et gestion de crise.", en: "Managing passenger flows and security during the Olympics. Developing communication and crisis management skills." },
  "about.journey.ccna.title": { fr: "Certification CCNA", en: "CCNA Certification" },
  "about.journey.ccna.desc": { fr: "Obtention de la certification Cisco CCNA validant mes compétences en administration réseau et routage.", en: "Obtained Cisco CCNA certification validating my skills in network administration and routing." },

  // Values
  "about.values.title": { fr: "Mes Valeurs", en: "My Values" },
  "about.values.subtitle": { fr: "Les principes qui guident mon approche professionnelle", en: "The principles that guide my professional approach" },
  "about.value.security.title": { fr: "Sécurité First", en: "Security First" },
  "about.value.security.desc": { fr: "La sécurité n'est pas une option mais une priorité. Je m'engage à protéger les systèmes et les données avec rigueur et éthique.", en: "Security is not an option but a priority. I am committed to protecting systems and data with rigor and ethics." },
  "about.value.curiosity.title": { fr: "Curiosité", en: "Curiosity" },
  "about.value.curiosity.desc": { fr: "Le domaine de la cybersécurité évolue constamment. Je reste en veille permanente pour anticiper les nouvelles menaces.", en: "The cybersecurity field is constantly evolving. I stay on permanent watch to anticipate new threats." },
  "about.value.collab.title": { fr: "Collaboration", en: "Collaboration" },
  "about.value.collab.desc": { fr: "Le travail en équipe est essentiel. Je valorise le partage de connaissances et l'entraide pour atteindre nos objectifs communs.", en: "Teamwork is essential. I value knowledge sharing and mutual support to achieve our common goals." },

  // Interests
  "about.interests.title": { fr: "Centres d'intérêt", en: "Interests" },
  "about.interests.subtitle": { fr: "Ce qui me passionne au quotidien", en: "What I'm passionate about" },
  "about.interest.bounty": { fr: "Bug Bounty", en: "Bug Bounty" },
  "about.interest.bounty.desc": { fr: "Recherche de vulnérabilités", en: "Vulnerability research" },
  "about.interest.ctf": { fr: "CTF", en: "CTF" },
  "about.interest.ctf.desc": { fr: "Capture The Flag challenges", en: "Capture The Flag challenges" },
  "about.interest.ai": { fr: "IA & Sécurité", en: "AI & Security" },
  "about.interest.ai.desc": { fr: "Applications de l'IA en cyber", en: "AI applications in cyber" },
  "about.interest.gaming": { fr: "Gaming", en: "Gaming" },
  "about.interest.gaming.desc": { fr: "Jeux vidéo stratégiques", en: "Strategy video games" },

  // ==================== SKILLS PAGE ====================
  "skills.hero.title": { fr: "Compétences Techniques", en: "Technical Skills" },
  "skills.hero.subtitle": { fr: "Expertise en cybersécurité, réseaux, développement et technologies cloud", en: "Expertise in cybersecurity, networks, development and cloud technologies" },
  "skills.filter.all": { fr: "Toutes", en: "All" },
  "skills.filter.security": { fr: "Cybersécurité", en: "Cybersecurity" },
  "skills.filter.network": { fr: "Réseaux", en: "Networks" },
  "skills.filter.dev": { fr: "Développement", en: "Development" },
  "skills.filter.cloud": { fr: "Cloud", en: "Cloud" },
  "skills.filter.system": { fr: "Systèmes", en: "Systems" },
  "skills.filter.telecom": { fr: "Télécom", en: "Telecom" },

  // Skill cards
  "skills.security.title": { fr: "Cybersécurité", en: "Cybersecurity" },
  "skills.security.subtitle": { fr: "Protection & Analyse", en: "Protection & Analysis" },
  "skills.security.pentest": { fr: "Tests d'intrusion", en: "Penetration testing" },
  "skills.security.soc": { fr: "Supervision SOC", en: "SOC Monitoring" },
  "skills.security.soc.desc": { fr: "SIEM, GoAccess, analyse des logs", en: "SIEM, GoAccess, log analysis" },
  "skills.security.osint": { fr: "OSINT", en: "OSINT" },
  "skills.security.osint.desc": { fr: "Recherche en sources ouvertes", en: "Open source intelligence" },

  "skills.network.title": { fr: "Réseaux & Sécurité", en: "Networks & Security" },
  "skills.network.subtitle": { fr: "Infrastructure & Protocoles", en: "Infrastructure & Protocols" },
  "skills.network.protocols": { fr: "Protocoles & VPN", en: "Protocols & VPN" },
  "skills.network.firewall": { fr: "Pare-feu", en: "Firewall" },
  "skills.network.equipment": { fr: "Équipements", en: "Equipment" },
  "skills.network.equipment.desc": { fr: "Cisco, Huawei - Configuration CLI", en: "Cisco, Huawei - CLI Configuration" },

  "skills.system.title": { fr: "Systèmes", en: "Systems" },
  "skills.system.subtitle": { fr: "Administration & Scripts", en: "Administration & Scripts" },
  "skills.system.os": { fr: "Systèmes d'exploitation", en: "Operating systems" },
  "skills.system.admin": { fr: "Administration", en: "Administration" },
  "skills.system.scripting": { fr: "Scripting", en: "Scripting" },
  "skills.system.scripting.desc": { fr: "Bash, PowerShell, automatisation", en: "Bash, PowerShell, automation" },

  "skills.dev.title": { fr: "Développement", en: "Development" },
  "skills.dev.subtitle": { fr: "Code & Bases de données", en: "Code & Databases" },
  "skills.dev.languages": { fr: "Langages", en: "Languages" },
  "skills.dev.databases": { fr: "Bases de données", en: "Databases" },
  "skills.dev.versioning": { fr: "Versioning", en: "Versioning" },
  "skills.dev.versioning.desc": { fr: "Git, GitHub, workflows", en: "Git, GitHub, workflows" },

  "skills.cloud.title": { fr: "Cloud & Virtualisation", en: "Cloud & Virtualization" },
  "skills.cloud.subtitle": { fr: "Infrastructure moderne", en: "Modern infrastructure" },
  "skills.cloud.platforms": { fr: "Plateformes Cloud", en: "Cloud Platforms" },
  "skills.cloud.containers": { fr: "Conteneurisation", en: "Containerization" },
  "skills.cloud.containers.desc": { fr: "Docker, notions Kubernetes", en: "Docker, Kubernetes basics" },
  "skills.cloud.virtual": { fr: "Virtualisation", en: "Virtualization" },

  "skills.telecom.title": { fr: "Télécommunications", en: "Telecommunications" },
  "skills.telecom.subtitle": { fr: "Réseaux & Téléphonie", en: "Networks & Telephony" },
  "skills.telecom.mobile": { fr: "Réseaux mobiles", en: "Mobile networks" },
  "skills.telecom.fiber": { fr: "Fibre optique", en: "Fiber optics" },
  "skills.telecom.fiber.desc": { fr: "Installation, configuration, test", en: "Installation, configuration, testing" },
  "skills.telecom.voip": { fr: "Téléphonie", en: "Telephony" },
  "skills.telecom.voip.desc": { fr: "VoIP, SIP, téléphonie IP", en: "VoIP, SIP, IP telephony" },

  // Certifications
  "skills.cert.title": { fr: "Certifications", en: "Certifications" },
  "skills.cert.subtitle": { fr: "Mes qualifications professionnelles", en: "My professional qualifications" },
  "skills.cert.progress": { fr: "En préparation", en: "In progress" },
  "skills.cert.obtained": { fr: "Obtenu", en: "Obtained" },

  // CTA
  "skills.cta.title": { fr: "Intéressé par mon profil ?", en: "Interested in my profile?" },
  "skills.cta.desc": { fr: "Découvrez mes projets ou contactez-moi directement pour discuter de vos besoins", en: "Discover my projects or contact me directly to discuss your needs" },
  "skills.cta.projects": { fr: "Voir mes projets", en: "View my projects" },
  "skills.cta.contact": { fr: "Me contacter", en: "Contact me" },

  // ==================== EDUCATION PAGE ====================
  "education.hero.title": { fr: "Parcours Académique", en: "Academic Background" },
  "education.hero.subtitle": { fr: "Mon cheminement éducatif en cybersécurité, réseaux et télécommunications", en: "My educational journey in cybersecurity, networks and telecommunications" },
  "education.stat.diplomas": { fr: "Diplômes obtenus", en: "Diplomas obtained" },
  "education.stat.certifications": { fr: "Certifications", en: "Certifications" },
  "education.stat.years": { fr: "Années d'études", en: "Years of study" },
  "education.stat.schools": { fr: "Établissements", en: "Institutions" },
  "education.section.title": { fr: "Formations Diplômantes", en: "Degree Programs" },
  "education.section.subtitle": { fr: "Un parcours progressif vers l'expertise en cybersécurité", en: "A progressive path towards cybersecurity expertise" },

  // BUT
  "education.but.period": { fr: "2022 - 2025", en: "2022 - 2025" },
  "education.but.title": { fr: "B.U.T Réseaux & Télécommunications", en: "Bachelor in Networks & Telecommunications" },
  "education.but.school": { fr: "Université Sorbonne Paris Nord, Villetaneuse", en: "Sorbonne Paris Nord University, Villetaneuse" },
  "education.but.desc": { fr: "Formation approfondie avec parcours spécialisé en Cybersécurité. Acquisition de compétences en administration réseau, sécurité des systèmes d'information, protection des infrastructures et analyse des menaces informatiques.", en: "In-depth training with a specialized track in Cybersecurity. Acquired skills in network administration, information systems security, infrastructure protection and cyber threat analysis." },

  // BTS
  "education.bts.period": { fr: "2021 - 2022", en: "2021 - 2022" },
  "education.bts.title": { fr: "BTS Systèmes Numériques", en: "BTS Digital Systems" },
  "education.bts.school": { fr: "Lycée Langevin Wallon, Champigny-sur-Marne", en: "Langevin Wallon High School, Champigny-sur-Marne" },
  "education.bts.desc": { fr: "Option \"Informatique et Réseaux\" axée sur le développement d'applications et la configuration des infrastructures réseaux. Compétences techniques polyvalentes couvrant le développement logiciel et l'administration système.", en: "\"IT and Networks\" option focused on application development and network infrastructure configuration. Versatile technical skills covering software development and system administration." },

  // Bac
  "education.bac.period": { fr: "2018 - 2021", en: "2018 - 2021" },
  "education.bac.title": { fr: "Baccalauréat STMG", en: "STMG Baccalaureate" },
  "education.bac.school": { fr: "Lycée International De Balzac, Paris", en: "Balzac International High School, Paris" },
  "education.bac.desc": { fr: "Option \"Systèmes d'Information et de Gestion\" orientée vers l'informatique de gestion, les bases de données et le développement d'applications. Fondamentaux en gestion de systèmes d'information.", en: "\"Information Systems and Management\" option oriented towards business IT, databases and application development. Fundamentals in information systems management." },

  // Certifications section
  "education.cert.title": { fr: "Certifications", en: "Certifications" },
  "education.cert.subtitle": { fr: "Validations officielles de mes compétences techniques", en: "Official validations of my technical skills" },
  "education.cert.ccna.title": { fr: "CCNAv7 - Cisco Networking Academy", en: "CCNAv7 - Cisco Networking Academy" },
  "education.cert.ccna.desc": { fr: "Certification validant les compétences fondamentales en réseaux informatiques, incluant les protocoles de routage, la configuration de switchs et routeurs, et les technologies WAN.", en: "Certification validating fundamental skills in computer networks, including routing protocols, switch and router configuration, and WAN technologies." },
  "education.cert.anssi.title": { fr: "SecNumacadémie - ANSSI", en: "SecNumacadémie - ANSSI" },
  "education.cert.anssi.desc": { fr: "Formation délivrée par l'Agence Nationale de la Sécurité des Systèmes d'Information couvrant les fondamentaux de la cybersécurité et les bonnes pratiques de sécurité.", en: "Training delivered by the French National Agency for Information Systems Security covering cybersecurity fundamentals and security best practices." },
  "education.cert.status": { fr: "Certifié", en: "Certified" },

  // CTA
  "education.cta.title": { fr: "En quête de nouvelles compétences", en: "Seeking new skills" },
  "education.cta.desc": { fr: "Je continue à me former et à obtenir de nouvelles certifications pour rester à la pointe de la cybersécurité.", en: "I continue to train and obtain new certifications to stay at the forefront of cybersecurity." },
  "education.cta.skills": { fr: "Voir mes compétences", en: "View my skills" },
  "education.cta.contact": { fr: "Me contacter", en: "Contact me" },

  // ==================== EXPERIENCE PAGE ====================
  "exp.hero.title": { fr: "Expériences Professionnelles", en: "Professional Experience" },
  "exp.hero.subtitle": { fr: "Mon parcours professionnel dans le monde de l'IT, de la cybersécurité et au-delà", en: "My professional journey in IT, cybersecurity and beyond" },

  // JO 2024
  "exp.jo.period": { fr: "Juillet - Septembre 2024", en: "July - September 2024" },
  "exp.jo.title": { fr: "Agent d'accueil JO Paris 2024", en: "Reception Agent Paris 2024 Olympics" },
  "exp.jo.company": { fr: "ENJOÏ Paris", en: "ENJOÏ Paris" },
  "exp.jo.desc": { fr: "Agent d'accueil pendant les Jeux Olympiques de Paris 2024, responsable de l'orientation et de l'information des voyageurs internationaux lors de cet événement historique.", en: "Reception agent during the Paris 2024 Olympics, responsible for guiding and informing international travelers during this historic event." },
  "exp.jo.missions": { fr: "Missions principales", en: "Main missions" },
  "exp.jo.mission1": { fr: "Accueil et orientation des voyageurs vers les sites olympiques", en: "Welcoming and guiding travelers to Olympic venues" },
  "exp.jo.mission2": { fr: "Gestion des flux et prévention des effets de foule", en: "Crowd management and flow control" },
  "exp.jo.mission3": { fr: "Assistance multilingue aux visiteurs internationaux", en: "Multilingual assistance to international visitors" },
  "exp.jo.mission4": { fr: "Vigilance et contribution à la sécurité des voyageurs", en: "Vigilance and contribution to traveler safety" },
  "exp.jo.skills.title": { fr: "Compétences développées", en: "Skills developed" },
  "exp.jo.skill.crowd": { fr: "Gestion de foule", en: "Crowd management" },
  "exp.jo.skill.multilingual": { fr: "Multilingue", en: "Multilingual" },
  "exp.jo.skill.security": { fr: "Sécurité", en: "Security" },
  "exp.jo.skill.communication": { fr: "Communication", en: "Communication" },
  "exp.jo.stat.months": { fr: "Mois", en: "Months" },
  "exp.jo.stat.travelers": { fr: "Voyageurs/jour", en: "Travelers/day" },
  "exp.jo.stat.nationalities": { fr: "Nationalités", en: "Nationalities" },

  // TMI
  "exp.tmi.period": { fr: "Avril - Juin 2024", en: "April - June 2024" },
  "exp.tmi.title": { fr: "Technicien Réseau & Sécurité", en: "Network & Security Technician" },
  "exp.tmi.company": { fr: "TMI Tunisia, Tunis", en: "TMI Tunisia, Tunis" },
  "exp.tmi.desc": { fr: "Stage technique intensif axé sur l'implémentation d'infrastructures réseau sécurisées, combinant solutions LAN/WLAN avec configuration avancée d'équipements Huawei.", en: "Intensive technical internship focused on implementing secure network infrastructures, combining LAN/WLAN solutions with advanced Huawei equipment configuration." },
  "exp.tmi.missions": { fr: "Réalisations techniques", en: "Technical achievements" },
  "exp.tmi.mission1": { fr: "Déploiement solution LAN/WLAN sécurisée complète", en: "Complete secure LAN/WLAN solution deployment" },
  "exp.tmi.mission2": { fr: "Configuration VLANs, adressage IP et règles firewall", en: "VLANs, IP addressing and firewall rules configuration" },
  "exp.tmi.mission3": { fr: "Administration équipements Huawei (CLI & Web)", en: "Huawei equipment administration (CLI & Web)" },
  "exp.tmi.mission4": { fr: "Tests de sécurité et validation de l'infrastructure", en: "Security testing and infrastructure validation" },
  "exp.tmi.skills.title": { fr: "Technologies maîtrisées", en: "Technologies mastered" },
  "exp.tmi.stat.equipment": { fr: "Équipements", en: "Equipment" },
  "exp.tmi.stat.secured": { fr: "Sécurisé", en: "Secured" },

  // E-commerce
  "exp.ecom.period": { fr: "Juin - Septembre 2022", en: "June - September 2022" },
  "exp.ecom.title": { fr: "Entrepreneur E-commerce", en: "E-commerce Entrepreneur" },
  "exp.ecom.company": { fr: "Freelance, Paris", en: "Freelance, Paris" },
  "exp.ecom.desc": { fr: "Expérience entrepreneuriale complète dans le e-commerce : création, gestion et optimisation de boutiques en ligne avec analyse data-driven des performances.", en: "Complete entrepreneurial experience in e-commerce: creation, management and optimization of online stores with data-driven performance analysis." },
  "exp.ecom.missions": { fr: "Activités clés", en: "Key activities" },
  "exp.ecom.mission1": { fr: "Conception et développement de sites e-commerce", en: "E-commerce website design and development" },
  "exp.ecom.mission2": { fr: "Analyse de données et optimisation des conversions", en: "Data analysis and conversion optimization" },
  "exp.ecom.mission3": { fr: "Stratégies marketing digital et SEO", en: "Digital marketing and SEO strategies" },
  "exp.ecom.mission4": { fr: "Gestion relation client et service après-vente", en: "Customer relationship and after-sales service" },
  "exp.ecom.skills.title": { fr: "Outils utilisés", en: "Tools used" },
  "exp.ecom.stat.stores": { fr: "Boutiques", en: "Stores" },
  "exp.ecom.stat.sales": { fr: "Ventes", en: "Sales" },

  // CTA
  "exp.cta.title": { fr: "Prêt à collaborer ?", en: "Ready to collaborate?" },
  "exp.cta.desc": { fr: "Je suis actuellement à la recherche d'opportunités en cybersécurité et réseaux. N'hésitez pas à me contacter !", en: "I'm currently looking for opportunities in cybersecurity and networks. Feel free to contact me!" },
  "exp.cta.contact": { fr: "Me contacter", en: "Contact me" },
  "exp.cta.cv": { fr: "Télécharger CV", en: "Download CV" },

  // ==================== PROJECTS PAGE ====================
  "projects.hero.title": { fr: "Mes Projets", en: "My Projects" },
  "projects.hero.subtitle": { fr: "Découvrez mes réalisations en cybersécurité, réseaux et développement", en: "Discover my work in cybersecurity, networks and development" },
  "projects.filter.all": { fr: "Tous", en: "All" },
  "projects.filter.security": { fr: "Cybersécurité", en: "Cybersecurity" },
  "projects.filter.network": { fr: "Réseaux", en: "Networks" },
  "projects.filter.web": { fr: "Web", en: "Web" },
  "projects.filter.iot": { fr: "IoT", en: "IoT" },
  "projects.btn.details": { fr: "Voir détails", en: "View details" },
  "projects.btn.github": { fr: "GitHub", en: "GitHub" },
  "projects.cta.title": { fr: "Vous avez un projet ?", en: "Do you have a project?" },
  "projects.cta.desc": { fr: "Je suis toujours intéressé par de nouveaux défis techniques", en: "I'm always interested in new technical challenges" },
  "projects.cta.contact": { fr: "Me contacter", en: "Contact me" },

  // ==================== CONTACT PAGE ====================
  "contact.hero.title": { fr: "Me Contacter", en: "Contact Me" },
  "contact.hero.subtitle": { fr: "Discutons de vos projets et opportunités", en: "Let's discuss your projects and opportunities" },
  "contact.title": { fr: "Me Contacter", en: "Contact Me" },
  "contact.subtitle": { fr: "N'hésitez pas à me contacter pour toute opportunité professionnelle ou collaboration", en: "Feel free to contact me for any professional opportunity or collaboration" },
  "contact.role": { fr: "Étudiant en Cybersécurité", en: "Cybersecurity Student" },
  "contact.available": { fr: "Disponible", en: "Available" },

  // Contact Info
  "contact.info.title": { fr: "Informations de contact", en: "Contact Information" },
  "contact.info.email": { fr: "Email", en: "Email" },
  "contact.info.phone": { fr: "Téléphone", en: "Phone" },
  "contact.info.location": { fr: "Localisation", en: "Location" },
  "contact.info.availability": { fr: "Disponibilité", en: "Availability" },
  "contact.info.hours": { fr: "Lun - Ven, 9h - 18h", en: "Mon - Fri, 9am - 6pm" },

  // Social
  "contact.social.title": { fr: "Suivez-moi", en: "Follow me" },

  // Form
  "contact.form.title": { fr: "Envoyez-moi un message", en: "Send me a message" },
  "contact.form.subtitle": { fr: "Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.", en: "Fill out the form below and I'll get back to you as soon as possible." },
  "contact.form.name": { fr: "Nom complet", en: "Full name" },
  "contact.form.name.placeholder": { fr: "Votre nom", en: "Your name" },
  "contact.form.name.error": { fr: "Veuillez entrer votre nom", en: "Please enter your name" },
  "contact.form.email": { fr: "Email", en: "Email" },
  "contact.form.email.placeholder": { fr: "votre.email@exemple.com", en: "your.email@example.com" },
  "contact.form.email.error": { fr: "Veuillez entrer un email valide", en: "Please enter a valid email" },
  "contact.form.subject": { fr: "Sujet", en: "Subject" },
  "contact.form.subject.placeholder": { fr: "Sujet de votre message", en: "Subject of your message" },
  "contact.form.subject.error": { fr: "Veuillez entrer un sujet", en: "Please enter a subject" },
  "contact.form.message": { fr: "Message", en: "Message" },
  "contact.form.message.placeholder": { fr: "Votre message...", en: "Your message..." },
  "contact.form.message.error": { fr: "Veuillez entrer un message (min. 10 caractères)", en: "Please enter a message (min. 10 characters)" },
  "contact.form.submit": { fr: "Envoyer le message", en: "Send message" },
  "contact.form.success": { fr: "Message envoyé avec succès !", en: "Message sent successfully!" },
  "contact.form.success.desc": { fr: "Je vous répondrai dans les plus brefs délais.", en: "I'll get back to you as soon as possible." },

  // CTA
  "contact.cta.title": { fr: "Prêt à travailler ensemble ?", en: "Ready to work together?" },
  "contact.cta.desc": { fr: "Je suis disponible pour des opportunités en cybersécurité", en: "I'm available for cybersecurity opportunities" },
  "contact.cta.cv": { fr: "Télécharger CV", en: "Download CV" },

  // ==================== FOOTER ====================
  "footer.description": { fr: "Étudiant en réseaux et cybersécurité", en: "Networks and cybersecurity student" },
  "footer.description2": { fr: "Passionné par la sécurité informatique", en: "Passionate about IT security" },
  "footer.nav.title": { fr: "Navigation", en: "Navigation" },
  "footer.links.title": { fr: "Liens utiles", en: "Useful links" },
  "footer.rights": { fr: "Tous droits réservés", en: "All rights reserved" },

  // ==================== TYPING EFFECT ROLES ====================
  "typing.roles": {
    fr: ["Cybersécurité", "Réseaux", "Pentesting", "SOC Analyst"],
    en: ["Cybersecurity", "Networks", "Pentesting", "SOC Analyst"]
  }
};

// ==================== I18N CLASS ====================
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('portfolio-lang') || 'fr';
    this.init();
  }

  init() {
    // Apply saved language on page load
    document.addEventListener('DOMContentLoaded', () => {
      this.setLanguage(this.currentLang);
      this.setupLanguageSelector();
    });
  }

  setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');

    if (!languageBtn || !languageDropdown) return;

    // Remove href behavior and use click
    languageOptions.forEach(option => {
      option.removeAttribute('href');
      option.style.cursor = 'pointer';

      option.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const lang = option.dataset.lang;
        this.setLanguage(lang);
        languageDropdown.classList.remove('show');
      });
    });

    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });

    // Close on outside click
    document.addEventListener('click', () => {
      languageDropdown.classList.remove('show');
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[key] && translations[key][lang]) {
        // Check if it contains HTML
        if (translations[key][lang].includes('<')) {
          el.innerHTML = translations[key][lang];
        } else {
          el.textContent = translations[key][lang];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[key] && translations[key][lang]) {
        el.placeholder = translations[key][lang];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update language selector appearance
    this.updateLanguageSelector(lang);

    // Dispatch event for components that need to react
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  updateLanguageSelector(lang) {
    const btn = document.querySelector('.language-btn');
    const currentIcon = document.querySelector('.current-lang-icon');
    const currentText = document.querySelector('.current-lang-text');
    const options = document.querySelectorAll('.language-option');

    if (currentIcon) {
      currentIcon.src = lang === 'fr'
        ? currentIcon.src.replace('uk.png', 'france.png')
        : currentIcon.src.replace('france.png', 'uk.png');
      currentIcon.alt = lang === 'fr' ? 'Français' : 'English';
    }

    if (currentText) {
      currentText.textContent = lang === 'fr' ? 'Français' : 'English';
    }

    options.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }

  t(key) {
    if (translations[key] && translations[key][this.currentLang]) {
      return translations[key][this.currentLang];
    }
    return key;
  }

  getCurrentLang() {
    return this.currentLang;
  }
}

// Create global instance
window.i18n = new I18n();

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18n, translations };
}
