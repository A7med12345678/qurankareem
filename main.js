/* Sebha : */


let show = document.getElementById("show");
let show2 = document.getElementById("show2");
let show3 = document.getElementById("show3");
let show4 = document.getElementById("show4");
let show5 = document.getElementById("show5");
let show6 = document.getElementById("show6");

let st1 = document.getElementById("st1");
let st2 = document.getElementById("st2");
let st3 = document.getElementById("st3");
let st4 = document.getElementById("st4");
let st5 = document.getElementById("st5");
let st6 = document.getElementById("st6");

let sto1 = document.getElementById("sto1");
let sto2 = document.getElementById("sto2");
let sto3 = document.getElementById("sto3");
let sto4 = document.getElementById("sto4");
let sto5 = document.getElementById("sto5");
let sto6 = document.getElementById("sto6");


var num = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;




function start() {
  num++;
  show.innerHTML = num;
  sto1.classList.remove("disabled");



}


function start2() {
  num2++;
  show2.innerHTML = num2;
  sto2.classList.remove("disabled");


}


function start3() {
  num3++;
  show3.innerHTML = num3;
  sto3.classList.remove("disabled");


}


function start4() {
  num4++;
  show4.innerHTML = num4;
  sto4.classList.remove("disabled");


}


function start5() {
  num5++;
  show5.innerHTML = num5;
  sto5.classList.remove("disabled");


}





function start6() {
  num6++;
  show6.innerHTML = num6;
  sto6.classList.remove("disabled");


}








function stop1() {
  num = 0;
  show.innerHTML = "";
  sto1.classList.add("disabled");

}


function stop2() {
  num2 = 0;
  show2.innerHTML = "";
  sto2.classList.add("disabled");

}


function stop3() {
  num3 = 0;
  show3.innerHTML = "";
  sto3.classList.add("disabled");

}


function stop4() {
  num4 = 0;
  show4.innerHTML = "";
  sto4.classList.add("disabled");

}


function stop5() {
  num5 = 0;
  show5.innerHTML = "";
  sto5.classList.add("disabled");

}


function stop6() {
  num6 = 0;
  show6.innerHTML = "";
  sto6.classList.add("disabled");

}



/* quiZs : */

let quiZ1 = document.getElementById("quiZ1");
let quiZ2 = document.getElementById("quiZ2");
let quiZ3 = document.getElementById("quiZ3");
let quiZ4 = document.getElementById("quiZ4");
let quiZ5 = document.getElementById("quiZ5");
let quiZ6 = document.getElementById("quiZ6");

function quiZZ1(){
  quiZ1.classList.remove("d-none");

  quiZ2.classList.add("d-none");

}




function quiZZ2(){
  quiZ1.classList.add("d-none");

  quiZ2.classList.remove("d-none");

}










let result = document.getElementById("result");

let degree = 0;

let q1 = document.getElementById("q1-1");
let q2 = document.getElementById("q2-1");
let q3 = document.getElementById("q3-4");
let q4 = document.getElementById("q4-3");
let q5 = document.getElementById("q5-3");
let q6 = document.getElementById("q6-2");
let q7 = document.getElementById("q7-1");
let q8 = document.getElementById("q8-1");
let q9 = document.getElementById("q9-4");
let q10 = document.getElementById("q10-3");

let button = document.getElementById("send");

let m1q1 = document.getElementById("m1-q1");
let m1q2 = document.getElementById("m1-q1");
let m1q3 = document.getElementById("m1-q3");
let m1q4 = document.getElementById("m1-q4");
let m1q5 = document.getElementById("m1-q5");
let m1q6 = document.getElementById("m1-q6");
let m1q7 = document.getElementById("m1-q7");
let m1q8 = document.getElementById("m1-q8");
let m1q9 = document.getElementById("m1-q9");
let m1q10 = document.getElementById("m1-q10");



function how() {

  if (q1.checked == true) {
    degree++;
  }

  if (q2.checked == true) {
    degree++;
  }

  if (q3.checked == true) {
    degree++;
  }

  if (q4.checked == true) {
    degree++;
  }

  if (q5.checked == true) {
    degree++;
  }


  if (q6.checked == true) {
    degree++;
  }

  if (q7.checked == true) {
    degree++;
  }

  if (q8.checked == true) {
    degree++;
  }

  if (q9.checked == true) {
    degree++;
  }

  if (q10.checked == true) {
    degree++;
  }




  button.classList.add('disabled');

  result.classList.add('p-3');
  result.classList.add('text-danger');
  result.classList.add('h3');

result.innerHTML = "لقد حصلت على : " + degree ;







}