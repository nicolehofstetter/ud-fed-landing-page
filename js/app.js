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
const sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


function createNewNavbarItem(text, sectionId) {
    let navbarItem = document.createElement("li");
    let menuLink = document.createElement("a");
    menuLink.classList.add("menu__link");
    menuLink.innerHTML = text
    menuLink.href = "#" + sectionId
    navbarItem.append(menuLink)
    return navbarItem;
}

function getCurrentSectionId() {
    let activeSectionId;
    for (const section of sections) {
        let positionOfSection = section.getBoundingClientRect();

        if(positionOfSection.y > 0 ){
            activeSectionId = section.id;
            return activeSectionId;
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavigationBar() {
    const navbarList = document.getElementById("navbar__list");
    const navbarItems = document.createDocumentFragment();

    for (const section of sections) {
        const menuLinkText = section.getAttribute("data-nav");
        const sectionId = section.getAttribute("id");

        const navbarItem = createNewNavbarItem(menuLinkText, sectionId);

        navbarItems.appendChild(navbarItem);
    }

    navbarList.append(navbarItems);
}


// Add class 'active' to section when near top of viewport
function setCurrentSectionActive() {
  let currentSectionId = getCurrentSectionId();

    for (const section of sections){
        if(section.id === currentSectionId){
            section.classList.add("active")
        }else {
            section.classList.remove("active")
        }
    }
}


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

// Set sections as active
document.addEventListener("scroll", () => {
    setCurrentSectionActive();
})


