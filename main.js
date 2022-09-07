function validateSNILS(number) {
	number = number.toString().replace(/\D/g, '')

	// Цифр всегда 11
	if (number.length != 11)
		return false

	// Трёх одинаковых цифр подряд быть не может
	if (/(\d)\1\1/.test(number.toString()))
		return false

	const controlCode = Number(number.substr(-2))
	let hashCode = number.substr(0, 9)
		.split('')
		.map((N, idx) => Number(N) * (9 - idx))
		.reduce((sum, N) => sum + N)

	if (hashCode == 100)
		hashCode = 0

	return controlCode == hashCode % 101
}