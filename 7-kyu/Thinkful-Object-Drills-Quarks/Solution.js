class Quark {
	static validColors = ['red', 'blue', 'green'];
	static validFlavors = ['up', 'down', 'strange', 'charm', 'top', 'bottom'];

	constructor(color, flavor) {
		if (Quark.validColors.includes(color)) {
			this.color = color;
		}
		if (Quark.validFlavors.includes(flavor)) {
			this.flavor = flavor;
		}
		this.baryon_number = 1 / 3;
	}

	interact(fl) {
		const temp = this.color;
		this.color = fl.color;
		fl.color = temp;
	}
}
