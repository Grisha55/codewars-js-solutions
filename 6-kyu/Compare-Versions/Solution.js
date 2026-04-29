function compareVersions(version1, version2) {
	const v1Parts = version1.split('.').map(Number);
	const v2Parts = version2.split('.').map(Number);

	const maxLength = Math.max(v1Parts.length, v2Parts.length);

	for (let i = 0; i < maxLength; i++) {
		const v1 = i < v1Parts.length ? v1Parts[i] : 0;
		const v2 = i < v2Parts.length ? v2Parts[i] : 0;

		if (v1 > v2) return true;
		if (v1 < v2) return false;
	}
	return true;
}
