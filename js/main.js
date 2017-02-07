//round 1
console.log("hello console")

var words = ["hello", "what", "is", "up", "dude"]

function lengths(arrayOfStrings) {
	for (var i = 0; i < words.length; i++) {
		console.log(words[i].length);
	}
}

//round 2

function transmogrifier(x, y, z){
	return ("transmogrified " + (Math.pow((x * y), z)));
}

transmogrifier(5, 4, 3)//8000
transmogrifier(13, 12, 5)//92389579776
transmogrifier(42, 13, 7)//14466001271480793000

//round 3

// var looney = {
// 		accent: ["daffy", "elmer", "porky"],
// 		sentence: ["it's rabbit season", "be very very quiet im hunting rabbit", "that's all folks"]
// }
// if (looney.accent[0] + looney.sentence[0]) {
// 		return(looney.sentence[0].replace(new RegExp('s', 'g'),'th'));
// 	} else  if (looney.accent[1] + looney.sentence[1]) {
// 		return(looney.sentence[1].replace(new RegExp('r', 'g'),'w'));

// 	}
// }

//^^first attempt 
function toonify(accent, sentence){
	if (accent === "daffy"){
		return sentence.replace(new RegExp('s', 'g'),'th');
	} else if (accent === "elmer"){
		return sentence.replace(new RegExp('r', 'g'),'w');
	} else {
		return sentence;
	}
}

















