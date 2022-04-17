const sections = document.getElementsByTagName('section');

/**
 * Helper functions
 */

/**
 * Creates a new li element for the navigation bar
 * @param text: text for menu link
 * @param sectionId: Id of the element to which the menu link should reference
 * @returns {HTMLLIElement}: list item for navbar
 */
function createNewNavbarItem(text, sectionId) {
    const navbarItem = document.createElement('li');
    let menuLink = document.createElement('a');
    menuLink.classList.add('menu__link');
    menuLink.innerHTML = text;
    menuLink.href = '#' + sectionId;
    navbarItem.append(menuLink);
    return navbarItem;
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
        const sectionId = section.getAttribute('id');

        const navbarItem = createNewNavbarItem(menuLinkText, sectionId);

        navbarItems.appendChild(navbarItem);
    }

    navbarList.append(navbarItems);
}

/**
 * Sets current section to active, so that it is highlighted and can be distinguished in view
 */
function setCurrentSectionToActive() {
    let currentSectionId;
    for (const section of sections) {
        let positionOfSection = section.getBoundingClientRect();

        if (positionOfSection.y > 0) {
            currentSectionId = section.id;
            break;
        }
    }

    for (const section of sections) {
        if (section.id === currentSectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
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
    setCurrentSectionToActive();
});


