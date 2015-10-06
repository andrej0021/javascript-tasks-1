var hours = process.argv[2];
var minutes = process.argv[3];

//if (hours < 0 || hours > 23 || minutes <0 || minutes > 59) console.log ('Время указано неверно') 
//else{

function digitToRoman (pos, value) {
	switch (value) {
		case 0: return [];									
		case 1: return [pos];
		case 2: return [pos, pos];
		case 3: return [pos, pos, pos];
		case 4: return [pos, pos + 1];
		case 5: return [pos + 1];
		case 6: return [pos + 1, pos];
		case 7: return [pos + 1, pos, pos];
		case 8: return [pos, pos, pos + 2];
		case 9: return [pos, pos + 2];
	}
}

function toRoman(number) {
	var rest = number;
	var pos = 1, digit;
	var roman_number = [];
	
	do {
		digit = rest % 10;
		digit = digitToRoman(pos, digit);
		for (var i = digit.length - 1; i >= 0; --i) {
			roman_number.push(digit[i]);
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
						 ['__$$$$$$$$$$$$__',
						  '__$$$$$$$$$$$$__',
						  '_____$$$$$$_____',
						  '_____$$$$$$_____',
						  '_____$$$$$$_____',
						  '_____$$$$$$_____',
						  '_____$$$$$$_____',
						  '_____$$$$$$_____',
						  '_____$$$$$$_____',
						  '__$$$$$$$$$$$$__',
						  '__$$$$$$$$$$$$__',];
	
	var ROMAN_LETTER_V =
						 ['$$$$$____$$$$$$$',
						  '$$$$$____$$$$$$$',
						  '_$$$______$$$$$_',
						  '_$$$______$$$$$_',
						  '_$$$______$$$$$_',
						  '_$$$______$$$$$_',
						  '_$$$$____$$$$$$_',
						  '__$$$$$$$$$$$$__',
						  '___$$$$$$$$$$___',
						  '____$$$$$$$$____',
						  '______$$$$______'];
						  
	var ROMAN_LETTER_X = 
						 ['$$$$$$__$$$$$$$$',
						  '$$$$$____$$$$$$_',
						  '_$$$$____$$$$$__',
						  '__$$$$__$$$$$$__',
						  '___$$$$$$$$$$___',
						  '____$$$$$$$_____',
						  '___$$$$$$$$$$___',
						  '_$$$$$__$$$$$$__',
						  '$$$$$$___$$$$$$_',
						  '$$$$$$___$$$$$$$',
						  '$$$$$$$__$$$$$$$'];
						  
	var ROMAN_LETTER_L =
						 ['$$$$$$$$$$______',
						  '_$$$$$$$$_______',
						  '__$$$$$$________',
						  '__$$$$$$________',
						  '__$$$$$$________',
						  '__$$$$$$________',
						  '__$$$$$$________',
						  '__$$$$$$_______$',
						  '__$$$$$$$____$$$',
						  '_$$$$$$$$$$$$$$$',
						  '$$$$$$$$$$$$$$$$'];
						  
	var ROMAN_LETTER_C = 
						 ['____$$$$$$$$$___',
						  '_$$$$$$$$$$$$$$_',
						  '$$$$$$$____$$$$$',
						  '$$$$$________$$$',
						  '$$$$____________',
						  '$$$$____________',
						  '$$$$____________',
						  '$$$$$________$$$',
						  '$$$$$$$____$$$$$',
						  '_$$$$$$$$$$$$$$_',
						  '___$$$$$$$$$$___'];
						  
	var COLON = 
				['____',
				 '____',
				 '_$$_',
				 '_$$_',
				 '_$$_',
				 '____',
				 '_$$_',
				 '_$$_',
				 '_$$_',
				 '____',
				 '____',];
						  
	var romanLetter = [ROMAN_LETTER_I, ROMAN_LETTER_V, ROMAN_LETTER_X, ROMAN_LETTER_L, ROMAN_LETTER_C];
	var heigh = 11;
	var gap = '_';
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
