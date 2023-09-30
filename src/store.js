const Service = {
	init: async () => {			
		const res = await fetch('./data/data.json');
		const kanji = await res.json();
		console.log(`loaded kanji: ${kanji[1034].character}`);
		return kanji;
	}
}

export default Service;
