babySharkLyrics = _ => ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa']
	.flatMap(s =>
		[...Array(3)]
			.map(_ => `${s} shark, doo doo doo doo doo doo`)
			.concat(`${s} shark!`)
	)
	.concat(
		[...Array(3)].map(_ => `Let's go hunt, doo doo doo doo doo doo`),
		`Let's go hunt!`,
		`Run away,…`
	).join`
`;
