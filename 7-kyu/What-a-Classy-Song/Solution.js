class Song {
	constructor(title, artist) {
		this.title = title;
		this.artist = artist;
		this.listeners = new Set();
	}

	howMany(arr) {
		const initialSize = this.listeners.size;

		arr.forEach(l => {
			if (!this.listeners.has(l.toLowerCase())) {
				this.listeners.add(l.toLowerCase());
			}
		});

		return this.listeners.size - initialSize;
	}
}
