import ElementStore from './store.js'
import Router from './router.js'
import fetch_data from './kanji_data.js';

window.app = {};
app.Router = Router;
app.ElementStore = new ElementStore();

window.addEventListener("DOMContentLoaded", async () => {
	console.log("DOMContentLoaded");

	app.ElementStore.kanji_json = await fetch_data();
	app.ElementStore.init();

	app.Router.init();
	app.Router.go('/');
});

