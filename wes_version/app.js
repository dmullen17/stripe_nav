/* Select DOM elements */ 
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

/* Define Functions */ 
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');
    
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    console.log(dropdownCoords);
    const navCoords = nav.getBoundingClientRect();
    console.log(navCoords);
    
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        left: dropdownCoords.left - navCoords.left,
        top: dropdownCoords.top - navCoords.top
    }
    
    // Set Coordinates
    background.style.transform = `translate(${coords.left}px,  ${coords.top}px)`;
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');

}

/* Set up event listeners */
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter)); 
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));



/* Define Functions */ 
/*function hoverActive() {
    // get bounding coordinates
    //const coords = this.getBoundingClientRect(); // this is the <li> - I don't want those coordinates
    const dropdown = this.querySelector('.dropdown');
    console.log(dropdown);
    
    const coords = dropdown.getBoundingClientRect()
    console.log(coords);

    // move the rectangle first
    background.style.transform = `translate(${coords.x}px,  ${coords.y}px)`;
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;

    
    // change the opacity to 1
    background.classList.add('open');
        
    // Update <li>
    this.classList.add('trigger-enter');
    this.classList.add('trigger-enter-active');
}

function closeDropdown() {
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
}*/

/* Set up event listeners */
/*triggers.forEach(trigger => trigger.addEventListener('mouseenter', hoverActive)); 
triggers.forEach(trigger => trigger.addEventListener('mouseout', closeDropdown))*/