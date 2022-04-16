const selectElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`Error Selector: ${selector}`);
};

function editKey() {
    var allInputs = document.getElementsByTagName("input");
    alert("kkkk");
    allInputs[0].readOnly = false;
    
}