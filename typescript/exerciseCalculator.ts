interface Result {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

const calculateExercise = (args: number[], tar : number): Result => {
	if(args.length !== 7) throw new Error('number of elements must be 7');
	const trained : number = args.reduce((acc, cur) => {
			if(cur > 0) 
				return acc+1;
			else
				return acc;
		}, 0
	);
	const reached : boolean = (trained === tar) ? true : false; 
	const avg : number = (args.reduce((acc, cur) => acc + cur)) / args.length;
	let rate : number;
	let desc : string;
	if(trained > tar){
		rate = 3;
		desc = "Good job! You have reached your goal!"; 
	}else if(trained < tar && (tar-trained > 5)){
		rate = 1;
		desc = "You can do better";
	}else{
		rate = 2;
		desc = "not too bad but could be better";
	}


	return {
		periodLength : args.length,
		trainingDays : trained,
		success : reached,
		rating : rate,
		ratingDescription : desc,
		target : tar,
		average : avg,
	}
	
}
