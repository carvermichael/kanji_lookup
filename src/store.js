class ElementStore {

	constructor() {
		this.elements = Array(2201); // kanji numbers are 1-based
		console.log('elementStore constructor complete');
	}

	createKanjiElements() {
		const template = document.getElementById('kanji-template');

		this.kanji_json.forEach(kanji => {
			const copy = template.content.cloneNode(true);

			const section = copy.querySelector('section')
			section.setAttribute('data-id', `${kanji.number}`);

			const link = copy.querySelector('.kanji-link');
			link.setAttribute('href', kanji.number);	
			link.addEventListener('click', (event) => {
				event.preventDefault();

				const dest_number = link.getAttribute('href');

				app.Router.go(dest_number);
			})

			if (kanji.character) {
				const character = copy.querySelector('.character');
				character.innerText = `${kanji.character}`;	
			}

			if (kanji.keyword) {
				const keyword = copy.querySelector('.keyword')
				keyword.innerText = `${kanji.keyword}`;	
			}

			// if (kanji.components) {
			// 	const components = copy.querySelector('.components')
			// 	components.innerText = `${kanji.components}`;	
			// }

			this.elements[kanji.number] = section;
		});
	}

	async init() {
		console.log(`loaded kanji: ${this.kanji_json[1034].character}`);

		this.createKanjiElements();

		console.log('elementStore init complete');
	}
	
}

export default ElementStore;
