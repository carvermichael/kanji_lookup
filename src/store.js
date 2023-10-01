class ElementStore {

	constructor() {
		this.elements = Array(2201); // kanji numbers are 1-based
		console.log('elementStore constructor complete');
	}

	async init() {
		console.log(`loaded kanji: ${this.kanji_json[1034].character}`);

		const template = document.getElementById('kanji-template');

		this.kanji_json.forEach(kanji => {
			const copy = template.content.cloneNode(true);

			const section = copy.querySelector('section')
			section.setAttribute('data-id', `${kanji.number}`);

			const link = copy.querySelector('a');
			link.setAttribute('href', kanji.number);	
			link.addEventListener('click', (event) => {
				event.preventDefault();

				const dest_number = link.getAttribute('href');
				console.log(dest_number);

				app.Router.go(dest_number);
			})

			const character = copy.querySelector('.character');
			character.innerText = `${kanji.character}`;	

			const keyword = copy.querySelector('.keyword')
			keyword.innerText = `${kanji.keyword}`;	

			const components = copy.querySelector('.components')
			components.innerText = `${kanji.components}`;	

			this.elements[kanji.number] = section;
		});
		console.log('elementStore init complete');
	}
}

export default ElementStore;
