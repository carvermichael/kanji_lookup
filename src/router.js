class Router {
	init() {
		window.addEventListener('popstate', (event) => {
			this.go(event.state, false);
		})
		this.base_path = window.location.href;
	}

	go(route, addToHistory = true) {
		console.log(this.base_path);

		if (addToHistory) {
			history.pushState(route, null, this.base_path + route);
		}

		if (route == '') {
			const search_div = document.querySelector('#search');
			search_div.innerHTML = '';

			const search_element = document.createElement('input');
			search_element.type = "text";

			search_element.addEventListener('input', (event) => {
				console.log(search_element.value);
				console.log(event);	

				const new_event = new CustomEvent('kanji_input', { detail: search_element.value });
				window.dispatchEvent(new_event);
			});

			search_div.append(search_element);

			const main_node = document.querySelector('main');
			main_node.innerHTML = '';

			main_node.append(...app.ElementStore.elements);

			// the kanji array is actually one-based to keep array numbers in sync with frame numbers, so the 0th element is undefined and needs to be removed
			main_node.removeChild(main_node.firstChild);
			return;
		}

		const kanji_int = parseInt(route);

		if (kanji_int) {
			const search_div = document.querySelector('#search');
			search_div.innerHTML = '';

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
