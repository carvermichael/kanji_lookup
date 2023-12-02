// すごい！

const split = (term) => {
	console.log('split...');
	const kanji_regex = new RegExp('([一-龯])');
	
	let curr = ''
	let split_terms = [];
	for (let i = 0; i < term.length; i++) {
		if(kanji_regex.exec(term[i])) {
			if(curr != '') {
				split_terms.push(curr);
			}
			split_terms.push(term[i]);
		} else {
			curr += term[i];
		}
	}
	if(curr != '') {
		split_terms.push(curr);
	}

	return split_terms;
}

const find_all_terms = (terms) => {

	const matching_elements = [];

	// TODO: create a couple maps to speed this up:
	//	1. kanji character --> element
	//	2. component name --> list of elements
	//
	// TODO: create a set for these elements...though in testing they didn't seem to dupe...
	terms.forEach(term => {
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
	});

	return matching_elements;
}

const search = (term) => {

	const main_node = document.querySelector('main');
	main_node.innerHTML = '';

	if (term == "") {
		// TODO: this is duped
		main_node.append(...app.ElementStore.elements);
		main_node.removeChild(main_node.firstChild);
		return;
	}

	const split_terms = split(term);

	const matching_elements = find_all_terms(split_terms);

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
