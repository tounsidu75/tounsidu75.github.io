# Portfolio Deployment Checklist

## Pre-Deployment Checks

1. **Directory Structure**
   - [x] All directories created according to the new structure
   - [ ] All project HTML files moved to the `projects` directory
   - [ ] All images placed in the `assets/images` directory
   - [ ] All CSS files placed in the `assets/css` directory
   - [ ] All JavaScript files placed in the `assets/js` directory
   - [ ] CV file placed in the `assets/docs` directory

2. **File Updates**
   - [ ] All internal links updated to reflect the new structure
   - [ ] CSS references updated in all HTML files
   - [ ] JavaScript references updated in all HTML files
   - [ ] Image paths updated in all HTML files
   - [ ] Document paths updated (CV download link)

3. **Content Validation**
   - [ ] All pages display correctly with the new structure
   - [ ] All interactive elements work properly (buttons, links, etc.)
   - [ ] All animations and effects work properly
   - [ ] Site is responsive on different screen sizes
   - [ ] Custom cursor works correctly (disabled on project pages)

## Deployment Steps

1. **Local Testing**
   - [ ] Test the site locally using a web server
   - [ ] Verify all functionality works as expected
   - [ ] Check for any console errors

2. **Backup**
   - [ ] Create a backup of the current live site (if applicable)
   - [ ] Keep a copy of the old structure in case rollback is needed

3. **Upload**
   - [ ] Upload all files to the web server
   - [ ] Ensure proper file permissions (typically 644 for files, 755 for directories)
   - [ ] Verify index.html is set as the default document

4. **Post-Deployment Checks**
   - [ ] Verify all pages load correctly from the server
   - [ ] Test all functionality on the live site
   - [ ] Check site performance and loading time
   - [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
   - [ ] Test on different devices (desktop, tablet, mobile)

5. **Final Steps**
   - [ ] Remove any temporary or backup files from the server
   - [ ] Update any links pointing to your portfolio
   - [ ] Consider implementing analytics to track visitor activity
