const selectElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`Error Selector: ${selector}`);
};

function editKey() {
    let allInputs = document.getElementsByTagName("input");
    console.log(typeof allInputs);
    for(var i = 0; i < allInputs.length; i++)
    {
        allInputs[i].disabled = false;
    }
    

    
}