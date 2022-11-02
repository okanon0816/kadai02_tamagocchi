//1.クリックされるとそれぞれの箱の中身が増える処理
//A.ごはんボタンをクリックした時
// function addCountNum1(){
//     num1++
//     console.log(num1);
// }

// function addCountNum1(){
//     num1++
//     // console.log(num1);
// }

// let gohanCount = document.getElementById("btnGohan");
// gohanCount.addEventListener("click", addCountNum1);

// console.log(num1);
// console.log(object);


// //B.おやつボタンをクリックした時
// function addCountNum2(){
//     num2++
//     console.log(num2);
// }
// let oyatsuCount = document.getElementById("btnOyatsu");
// oyatsuCount.addEventListener("click",addCountNum2);

// //C.こーどをかくボタンをクリックした時
// function addCountNum3(){
//     num3++
//     console.log(num3);
// }
// let codeCount = document.getElementById("btnCode");
// codeCount.addEventListener("click",addCountNum3);

// //d.すいみんボタンをクリックした時
// function addCountNum4(){
//     num4++;
//     console.log(num4);
// }
// let suiminCount = document.getElementById("btnSuimin");
// suiminCount.addEventListener("click",addCountNum4);

// //2.べびっち→こどもっち（3回お世話を選択した結果によって進化が決まる)
// //たまっち進化条件：ごはん1回以上、こーど1回以上、それ以外はくちぱっちに進化
// $.when(
// 	console.log('先に実行したい処理をここに')
// ).done(function(){ 
// 	if(num1>=1 && num3>=1){
//         console.log("たまっちになる");
//     } else {
//         console.log("くちぱっちになる");
//     }
// });

// var cutArray = [0,0,0,0];
// var btnName ="ボタン名"
// window.onload = function(){
//     for(var i=0;i<cutArray.length; i++){
//         setBtnValue(i);
//     }
// };

// function setBtnValue(num){
//     var btn = document.getElementById("cde"+ num);
//     btn.value = btnName + cutArray[num]++;
//     // console.log(btn.value);
// }