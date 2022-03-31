// Grab elements
const selectElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`Error Selector: ${selector}`);
};

const scrollHeader = () => {
	const headerElement = selectElement('#header');
	if (this.scrollY >= 15) {
		headerElement.classList.add('activated');
	} else {
		headerElement.classList.remove('activated');
	}
};

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




// Swiper
