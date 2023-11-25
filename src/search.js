
const search = (term) => {
	/*
	 * TODO: 
	 *	Starting with the naive solution here: flip through current objects, match, and manipulate DOM from here. Eventually, I'd want the following improvements:
	 *	1. create central place for DOM manipulations --> pass an index list to that
	 *	2. switch store from array of objects to object of arrays (measure perf diff)
	 */
	const main_node = document.querySelector('main');
	main_node.innerHTML = '';

	if (term == "") {
		// TODO: this is duped
		main_node.append(...app.ElementStore.elements);
		main_node.removeChild(main_node.firstChild);
		return;
	}

	const matching_elements = [];
	app.ElementStore.kanji_json.forEach((kanji) => {
		if (kanji.character.includes(term) || kanji.keyword.includes(term)) {
			matching_elements.push(app.ElementStore.elements[kanji.number]);
		} else if(kanji.components) {
			if (kanji.components.some((component) => {
				return component.includes(term);
			})) {
				matching_elements.push(app.ElementStore.elements[kanji.number]);
			}
		}
	});

	main_node.append(...matching_elements);

	return;
}

const init = () => {
	window.addEventListener("kanji_input", (event) => {
		console.log(`kanji_input event: ${event.detail}`);
		search(event.detail);
	});
}

export default init;
