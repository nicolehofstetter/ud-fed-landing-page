const sections = document.getElementsByTagName('section');

/**
 * Helper functions
 */

/**
 * Creates a new li element for the navigation bar
 * @param text: text for menu link
 * @param section: Id of the element to which the menu link should reference
 * @returns {HTMLLIElement}: list item for navbar
 */
function createNewNavbarItem(text, section) {
    const navbarItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.classList.add('menu__link');
    menuLink.classList.add(section.id);
    menuLink.innerHTML = text;
    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({behavior: 'smooth'});
    });
    navbarItem.append(menuLink);
    return navbarItem;
}

/**
 * Removes class active from element by given selector
 * @param selectors
 */
function removeActiveFromElementBy(selectors) {
    const activeMenuLink = document.querySelector(selectors);
    activeMenuLink && activeMenuLink.classList.remove('active');
}

/**
 * Return section that is currently in top of viewport
 * @returns {HTMLElement}
 */
function getActiveSection() {
    for (const section of sections) {
        const sectionBox = section.getBoundingClientRect();

        if (sectionBox.top >= 0) {
            return section;
        }
    }
}

/**
 * Main functions
 */

/**
 * Build the navigation bar based on the section of the page
 */
function buildNavigationBar() {
    const navbarList = document.getElementById('navbar__list');
    const navbarItems = document.createDocumentFragment();

    for (const section of sections) {
        const menuLinkText = section.getAttribute('data-nav');

        const navbarItem = createNewNavbarItem(menuLinkText, section);

        navbarItems.appendChild(navbarItem);
    }

    navbarList.append(navbarItems);
}

/**
 * Sets current section to active, so that it is highlighted and can be distinguished in view
 */
function setSectionToActiveState(currentSection) {
    removeActiveFromElementBy('a.active');
    removeActiveFromElementBy('section.active');

    currentSection.classList.add('active');

    const menuLinkToCurrentSection = document.querySelector('.' + currentSection.id);
    menuLinkToCurrentSection.classList.add('active');
}

/**
 * Events
 */

/**
 * Builds navigation bar on DOMContentLoaded event
 */
document.addEventListener('DOMContentLoaded', () => {
    buildNavigationBar();
});

/**
 * Changes active section if necessary on scroll
 */
document.addEventListener('scroll', () => {
    const activeSection = getActiveSection();
    setSectionToActiveState(activeSection);
});


