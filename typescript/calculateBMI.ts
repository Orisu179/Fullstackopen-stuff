const calculateBmi = (height : number, weight: number) : string => {
	const bmi : number = weight / ((height * 0.01) * (height*0.01));
	switch (true){
		case (bmi < 18.4):
		return `UnderWeight (${bmi})`;
		case (bmi < 24.9):
		return `Normal (${bmi})`;
		case (bmi < 29.9):
		return `Overweight (${bmi})`;
		case (bmi > 29.9):
		return `Obese (${bmi})`;
	}
}

console.log(calculateBmi(180, 74));


