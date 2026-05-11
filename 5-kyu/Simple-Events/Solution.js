function Event() {
	this.handlers = [];
}

Event.prototype.subscribe = function (fn) {
	if (!this.handlers.includes(fn)) {
		this.handlers.push(fn);
	}
	return this;
};

Event.prototype.unsubscribe = function (fn) {
	const index = this.handlers.indexOf(fn);
	if (index !== -1) {
		this.handlers.splice(index, 1);
	}
	return this;
};

Event.prototype.emit = function (...args) {
	this.handlers.forEach(fn => fn(...args));
};
