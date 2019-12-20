function validateSNILS(number) {
	number = number.toString().replace(/\D/g, '')

	// Цифр всегда 11
	if (number.length != 11) return false
	// Трёх одинаковых цифр подряд быть не может
	if (/(\d)\1\1/.test(number.toString())) return false

	const controlCode = Number(number.substr(-2))
	let calcCode = number.substr(0, 9).split('').map((N, idx) => Number(N) * (9 - idx)).reduce((Sum, N) => Sum + N)
	if (calcCode == 100) calcCode = 0
	if (calcCode % 101 != controlCode) return false

	return true
}