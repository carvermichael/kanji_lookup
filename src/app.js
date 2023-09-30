import Store from './store.js'

window.addEventListener("DOMContentLoaded", async () => {
	console.log("content loaded");

	// TODO: not sure why I can't do this in the object... /shrug
	const data = await Store.init();
	Store.data = data;

	const template = document.getElementById('kanji-template');

	const main_node = document.querySelector('main');
	for (let i = 0; i < 10; i++) {
		const copy = template.content.cloneNode(true);
		// TODO: you were here, filling out the remainder of the info on each section...
		//		then --> doing this for all kanji, later --> simplimpl of search bar
		const character = copy.querySelector('.character')
		character.innerText = `${Store.data[i + 345].character}`;	

		main_node.appendChild(copy);
	}
	
	console.log(`template: ${template}`);
});
