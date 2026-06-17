function findEmployeesRole(name) {
	const [first, second] = name.split(' ');
	console.log(first);
	console.log(second);
	const res = employees.filter(
		n => n.firstName === first && n.lastName === second
	);
	return res.length > 0 ? res[0].role : 'Does not work here!';
}
