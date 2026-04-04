solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
	const R = 0.082;
	const totalMoles = givenMass1 / molarMass1 + givenMass2 / molarMass2;
	return (totalMoles * R * (temp + 273.15)) / volume;
};
