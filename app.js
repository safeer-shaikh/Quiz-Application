var name = prompt('Enter your name: ', '');
alert('Now start your Quiz!');

function check(){
	score = 0;

	var q1_answer_1 = document.getElementById('q1-a1');
	var q1_answer_2 = document.getElementById('q1-a2');
	var q1_answer_3 = document.getElementById('q1-a3');
	var q1_answer_4 = document.getElementById('q1-a4');
	if (q1_answer_1.checked == true) {
		score = score + 2;
		alert('Q1 is Correct!');
	}
	else{
		alert('Q1 is wrong!');
	}

	var q2_answer_1 = document.getElementById('q2-a1');
	var q2_answer_2 = document.getElementById('q2-a2');
	var q2_answer_3 = document.getElementById('q2-a3');
	var q2_answer_4 = document.getElementById('q2-a4');
	if (q2_answer_2.checked == true) {
		score = score + 2;
		alert('Q2 is Correct!');
	}
	else{
		alert('Q2 is wrong!');
	}

	var q3_answer_1 = document.getElementById('q3-a1');
	var q3_answer_2 = document.getElementById('q3-a2');
	var q3_answer_3 = document.getElementById('q3-a3');
	var q3_answer_4 = document.getElementById('q3-a4');
	if (q3_answer_3.checked == true) {
		score = score + 2;
		alert('Q3 is Correct!');
	}
	else{
		alert('Q3 is wrong!');
	}

	var q4_answer_1 = document.getElementById('q4-a1');
	var q4_answer_2 = document.getElementById('q4-a2');
	var q4_answer_3 = document.getElementById('q4-a3');
	var q4_answer_4 = document.getElementById('q4-a4');
	if (q4_answer_1.checked == true) {
		score = score + 2;
		alert('Q4 is Correct!');
	}
	else{
		alert('Q4 is wrong!');
	}

	var q5_answer_1 = document.getElementById('q5-a1');
	var q5_answer_2 = document.getElementById('q5-a2');
	var q5_answer_3 = document.getElementById('q5-a3');
	var q5_answer_4 = document.getElementById('q5-a4');
	if (q5_answer_4.checked == true) {
		score = score + 2;
		alert('Q5 is Correct!');
	}
	else{
		alert('Q5 is wrong!');
	}

	alert(name + "'s score is: " + score + '/10');
}