function createSecretHolder(secret) {
	let _secret = secret;
	return {
		getSecret() {
			return _secret;
		},
		setSecret(newSecret) {
			_secret = newSecret;
		}
	};
}
