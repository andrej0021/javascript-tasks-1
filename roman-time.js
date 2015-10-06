var hours = process.argv[2];
var minutes = process.argv[3];

//if (hours < 0 || hours > 23 || minutes <0 || minutes > 59) console.log ('Время указано неверно') 
//else{

function getRomanEquivalent (pos, value) {
	switch (value) {
		case 0: return  0;											
		case 1: return  pos;
		case 2: return  pos*10  + pos;
		case 3: return  pos*100 + pos*10  +   pos;
		case 4: return  pos*10  + (pos + 1);
		case 5: return 	(pos + 1);
		case 6: return  (pos + 1)*10  + pos;
		case 7: return  (pos + 1)*100	+	pos*10  + pos;
		case 8: return  pos*100 + pos*10  + (pos + 2);
		case 9: return  pos*10  + (pos + 2);
	}
}

function toRoman(number) {
	var rest = number;
	var pos = 1, digit;
	var roman_number = [];
	
	do {
		digit = rest % 10;
		var r = getRomanEquivalent(pos, digit);
		for (var d, i = 0; i < 3; ++i) {
			d = r % 10;
			r = r / 10 |0;
			if (d != 0) roman_number [roman_number.length] = d;
		}
		rest = rest / 10 |0;
		pos += 2;
	} while (rest > 0);
	
	return roman_number;
}

function unite (image_vector, heigh, gap) {
	var unite_image = [];
	var i, j;
	for (i = 0; i < heigh; ++i) {
		unite_image[i] = '';
		for (j = 0; j < image_vector.length; ++j) {
			unite_image[i] += image_vector[j][i] + gap;
		}
	}
	return unite_image;
}

function renderRomanTime(roman_hours, roman_minutes) {
	var ROMAN_LETTER_I = 
	        				 ['--@@@@@@@@@@@@--',
						  '--@@@@@@@@@@@@--',
						  '-----@@@@@@-----',
						  '-----@@@@@@-----',
						  '-----@@@@@@-----',
						  '-----@@@@@@-----',
						  '-----@@@@@@-----',
						  '-----@@@@@@-----',
						  '-----@@@@@@-----',
						  '--@@@@@@@@@@@@--',
						  '--@@@@@@@@@@@@--'];
	
	var ROMAN_LETTER_V = 
	        				 ['@@@@@----@@@@@@@',
						  '@@@@@----@@@@@@@',
						  '-@@@------@@@@@-',
						  '-@@@------@@@@@-',
						  '-@@@------@@@@@-',
						  '-@@@------@@@@@-',
						  '-@@@@----@@@@@@-',
						  '--@@@@@@@@@@@@--',
						  '---@@@@@@@@@@---',
						  '----@@@@@@@@----',
						  '------@@@@------'];
						  
	var ROMAN_LETTER_X = 
	        			  	 ['@@@@@@--@@@@@@@@',
						  '@@@@@@---@@@@@@-',
						  '-@@@@@---@@@@@--',
						  '-@@@@@@-@@@@@@--',
						  '--@@@@@@@@@@@---',
						  '---@@@@@@@@-----',
						  '--@@@@@@@@@@@---',
						  '-@@@@@--@@@@@@--',
						  '@@@@@@---@@@@@@-',
						  '@@@@@@---@@@@@@@',
						  '@@@@@@@--@@@@@@@'];
						  
	var ROMAN_LETTER_L = 
	           				 ['@@@@@@@@@@------',
						  '-@@@@@@@@-------',
						  '--@@@@@@--------',
						  '--@@@@@@--------',
						  '--@@@@@@--------',
						  '--@@@@@@--------',
						  '--@@@@@@--------',
						  '--@@@@@@-------@',
						  '--@@@@@@@----@@@',
						  '-@@@@@@@@@@@@@@@',
						  '@@@@@@@@@@@@@@@@'];
						  
	var ROMAN_LETTER_C = 
	        				 ['----@@@@@@@@@---',
						  '-@@@@@@@@@@@@@@-',
						  '@@@@@@@----@@@@@',
						  '@@@@@--------@@@',
						  '@@@@------------',
						  '@@@@------------',
						  '@@@@------------',
						  '@@@@@--------@@@',
						  '@@@@@@@----@@@@@',
						  '-@@@@@@@@@@@@@@-',
						  '---@@@@@@@@@@---'];
						  
	var COLON = 
				['--------',
				 '--------',
				 '---@@---',
				 '--@@@@--',
				 '---@@---',
				 '--------',
				 '---@@---',
				 '--@@@@--',
				 '---@@---',
				 '--------',
				 '--------',];
						  
	var romanLetter = [ROMAN_LETTER_I, ROMAN_LETTER_V, ROMAN_LETTER_X, ROMAN_LETTER_L, ROMAN_LETTER_C];
	var heigh = 11;
	var gap = '-';
	var image_vector = [];
	
	for (var i = roman_hours.length - 1; i >= 0; --i) {
		image_vector.push(romanLetter[roman_hours[i] - 1]);
	}
	image_vector.push(COLON);
	for (var i = roman_minutes.length - 1; i >= 0; --i) {
		image_vector.push(romanLetter[roman_minutes[i] - 1]);
	}
	return unite (image_vector, heigh, gap);
}

console.log (renderRomanTime( toRoman(hours), toRoman(minutes) ));

//}
