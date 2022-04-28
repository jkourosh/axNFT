// Grab elements
const selectElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`Error Selector: ${selector}`);
};

// const scrollHeader = () => {
// 	const headerElement = selectElement('#header');
// 	if (this.scrollY >= 15) {
// 		headerElement.classList.add('activated');
// 	} else {
// 		headerElement.classList.remove('activated');
// 	}
// };

//Nav styles on scroll
window.addEventListener('scroll', scrollHeader);


// function switchTheme(el) {
// 	document.querySelector('html').className = 'theme-' + el.className;
//   }

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme) {
	bodyElement.classList.add('light-theme');
}
themeToggleBtn.addEventListener('click', () => {
	bodyElement.classList.toggle('light-theme');
	if (bodyElement.classList.contains('light-theme')) {
		localStorage.setItem('currentTheme', 'themeActive');
	} else {
		localStorage.removeItem('currentTheme');
	}
});



const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchformcontainer = selectElement('#search-section');
//formOpenBtn.addEventListener('click', () => searchformcontainer.classList.add('activated'));
formOpenBtn.addEventListener('click', () => searchformcontainer.classList.toggle('activated'));
formCloseBtn.addEventListener('click', () => searchformcontainer.classList.remove('activated'));

// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (e) => {
	if (e.key === 'Escape') searchformcontainer.classList.remove('activated');
});



function openCity(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	
	tabcontent = document.getElementsByClassName("idhero__tab-content");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
  }
// Swiper
function openCity1(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
 
 
