const fetch_data = async () => {
	const res = await fetch('./data/data.json');
	return await res.json();
}

export default fetch_data;
