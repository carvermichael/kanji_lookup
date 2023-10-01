const Router = {
	init: () => {
		window.addEventListener('popstate', (event) => {
			Router.go(event.state, false);
		})
	},
	go: (route, addToHistory = true) => {
		if (addToHistory) {
			history.pushState(route, null, route);
		}

		if (route == '/') {
			const main_node = document.querySelector('main');
			main_node.innerHTML = '';

			main_node.append(...app.ElementStore.elements);
			return;
		}

		const kanji_int = parseInt(route);

		if (kanji_int) {
			const main_node = document.querySelector('main');
			main_node.innerHTML = '';

			const ele = app.ElementStore.elements[kanji_int];

			main_node.append(ele);
			return
		}

		console.log('where you goin\'? nowhere!');
	}
}

export default Router;
