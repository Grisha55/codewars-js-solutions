function timeConvert(num) {
	if (num <= 0) return '00:00';

	const hours = Math.floor(num / 60);
	const minutes = num % 60;

	const formattedHours = hours.toString().padStart(2, '0');
	const formattedMinutes = minutes.toString().padStart(2, '0');

	return `${formattedHours}:${formattedMinutes}`;
}
