/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


function createNewNavbarItem(text, anchorId) {
    let navbarItem = document.createElement("li");
    let menuLink = document.createElement("a");
    menuLink.className = "menu__link"
    menuLink.innerHTML = text
    menuLink.href = "#" + anchorId
    navbarItem.append(menuLink)
    return navbarItem;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavigationBar() {
    const sections = document.getElementsByTagName("section");

    const navbarList = document.getElementById("navbar__list");
    const navbarItems = document.createDocumentFragment();

    for (const section of sections) {
        const menuLinkText = section.getAttribute("data-nav");
        const anchorIdForMenuLink = section.getAttribute("id");

        const navbarItem = createNewNavbarItem(menuLinkText, anchorIdForMenuLink);

        navbarItems.appendChild(navbarItem)
    }

    navbarList.append(navbarItems)
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 
document.addEventListener("DOMContentLoaded", () => {
    buildNavigationBar();
})

// Scroll to section on link click

// Set sections as active


