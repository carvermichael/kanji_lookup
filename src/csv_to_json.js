const fs = require('fs');

const kanji = [];

const callback = (err, data) => {
	if (err) {
		console.log(`err: ${err}`);
	} else if (data) {

		console.log(`type: ${typeof data}`);

		data.split('\n').forEach(element => {
			const split = element.split('\"');
			const pre_quote = split[0].split(',');
			const post_quote = split[1];
			// console.log(`pre: ${pre_quote} | post: ${post_quote}`);

			let components;
			if (post_quote) {
				components = post_quote.split(',');
			}

			const new_kanji = {
				number: pre_quote[0],
				keyword: pre_quote[1],
				character: pre_quote[2],
				components,
			}

			kanji.push(new_kanji);
		});
	}

	const json = JSON.stringify(kanji);

	fs.writeFileSync('./data.json', json);
}

fs.readFile('./data.csv', 'utf-8', callback);

