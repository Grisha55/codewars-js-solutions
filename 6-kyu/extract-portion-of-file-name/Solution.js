class FileNameExtractor {
	static extractFileName(dirtyFileName) {
		const withoutDate = dirtyFileName.substring(dirtyFileName.indexOf('_') + 1);
		const lastIndexOfDot = withoutDate.lastIndexOf('.');
		return withoutDate.substring(0, lastIndexOfDot);
	}
}
