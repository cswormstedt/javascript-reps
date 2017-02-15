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



function toonify(accent, sentence){
	if (accent === "daffy"){
		return sentence.replace(new RegExp('s', 'g'),'th');
	} else if (accent === "elmer"){
		return sentence.replace(new RegExp('r', 'g'),'w');
	} else {
		return sentence;
	}
}

//round 4  


function wordReverse(str){
	var splitString = str.split(" ");
	var newString = splitString.reverse();
	var rStr = ("");
	for (i = 0; i < newString.length; i++){
		rStr =(rStr + " " + newString[i]);
	}
	return rStr;
}


//round 5

//  "Now I know what a TV dinner feels like"
//  "Put Hans back on the line"


function letterReverse (string){
	var strReverse = string.split(' ');
	
	var final = "";

	for (i = 0 ; i < strReverse.length; i++){

		final += " " + strReverse[i].split('').reverse().join('');
	
	}
	return final;
}


//6 

function longest(string){
	// for (var i = 0; i < string.length; i++){
	// 	console.log(string.string[i].length);
var sortArray = string.sort(function(a,b){return b.length - a.length});

return console.log(sortArray[0]);
	}


//7 



function master(string){
	console.log(string)

}

function repMaster(wordReverse, input){
	wordReverse.call();
	var input = 'oh yeah';
	wordReverse(input)

}

repMaster(master);












