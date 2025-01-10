/**
 * @param {string} date,
 * @param {Intl.DateTimeFormatOptions['dateStyle']} dateStyle,
 * @param {string} locales
 */

export default function formatDate(date, dateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const options = { dateStyle };
	const dateFormatter = new Intl.DateTimeFormat(locales, options);
	return dateFormatter.format(dateToFormat);
}
