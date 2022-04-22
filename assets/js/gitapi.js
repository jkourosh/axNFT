const selectElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`Error Selector: ${selector}`);
};

const isEmpty = (str) => !str.trim().length;

const API_URl = 'https://api.github.com/users/';
const username = selectElement('#username');
let submitElm = selectElement('#submit');
let profileElm = selectElement('#profile');
let loaderElm = selectElement('#loader');
let cardElm = selectElement('#card');
let notifier = new AWN();

const getProfile = () => {
	//submitElm.addEventListener('click', function () {
	if (isEmpty(username.value)) {
		notifier.alert('Please enter a username');
	} else {
		loaderElm.innerHTML = `
               <div class="loader"></div>
               `;

		fetch(`${API_URl}${username.value}`)
			.then((response) => response.json())
			.catch((error) => console.log(error))
			.then((data) => {
				console.log(data.message);
				setInterval(() => {
					loader.innerHTML = ``;
				}, 1000);
				if (data.message == undefined) {
					cardElm.innerHTML = `
            <div class="pcard">
              <div class="pcard__avatar">
                <img src="${data.avatar_url}" alt="avator" />
              <!--  <span id="burst-12"></span>
                <span id="tick"></span> -->
              </div>
              <div class="pcard__desc">
                <div class="pcard__desc-title">${data.name}</div>
                <div class="pcard__desc-id">${data.id}</div>
                <div class="pcard__desc-follow">
                    <div class="pcard__desc-item">
                        ${data.public_repos}
                        <h4>repository</h4>
                    </div>
                    <div class="pcard__desc-item">
                        ${data.followers}
                        <h4>followers</h4>
                    </div>
                    <div class="pcard__desc-item">
                        ${data.following}
                        <h4>following</h4>
                    </div>
                </div>
                <div class="pcard__desc-url"> <a href="${data.html_url}">${data.html_url}</a> </div>
              </div>
            </div>
            `;
				} else {
					notifier.alert('User Not Found');
					username.value = '';
					cardElm.innerHTML = ``;
				}
			});
	}
};
