function task(w, t, c) {
	const people = {
		Monday: 'James',
		Tuesday: 'John',
		Wednesday: 'Robert',
		Thursday: 'Michael',
		Friday: 'William'
	};
	const price = t * c;

	return `It is ${w} today, ${people[w]}, you have to work, you must spray ${t} trees and you need ${price} dollars to buy liquid`;
}
