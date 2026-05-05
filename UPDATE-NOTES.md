# Portfolio Structure Update Notes

## Changes Made

1. **Directory Structure**
   - Reorganized files into a cleaner structure following modern web development standards
   - Created dedicated directories for assets (css, js, images, docs)
   - Renamed 'projets' folder to 'projects' for consistency with English naming

2. **File Updates**
   - Renamed 'presentation.html' to 'index.html' for better SEO and standard practices
   - Updated all internal links to reflect the new structure
   - Created separate CSS files for better organization (style.css, projects.css)
   - Organized JavaScript into separate files (script.js, particles.js, cursor-utils.js)

3. **Content Enhancements**
   - Improved cursor behavior and disabled custom cursor on project pages
   - Optimized particle effects for better performance
   - Fixed formations section display issues

## Directory Structure Overview

```
portfolio/
├── index.html                # Main page (renamed from presentation.html)
├── assets/                   # All static resources
│   ├── css/                  # Styles
│   │   ├── style.css         # Main styles
│   │   └── projects.css      # Project page styles
│   ├── js/                   # Scripts
│   │   ├── script.js         # Main script
│   │   ├── particles.js      # Particle animations
│   │   └── cursor-utils.js   # Cursor functionality
│   ├── images/               # Images
│   │   ├── profile-pic.png   # Profile picture
│   │   └── logos/            # Company logos
│   └── docs/                 # Documents
│       └── CV_2024_Sami_Kharraz.pdf
├── projects/                 # Project pages (renamed from projets)
│   ├── wifi-securise.html
│   ├── reseau-entreprise.html
│   ├── pentesting.html
│   ├── resolution-dns.html
│   ├── site-personnel.html
│   ├── meteo-data.html
│   ├── tirelire.html
│   └── fibre-optique.html
└── view-project.html         # Project viewer page
```

## Next Steps

1. Run the batch files to ensure all directories exist and project files are moved:
   - `create-directories.bat`
   - `move-projects.bat`

2. Test all links and functionality to ensure everything works as expected

3. After confirming everything works correctly, you can delete:
   - The old `projets` directory
   - The old `presentation.html` file (if it exists)
   - Any temporary backup files
