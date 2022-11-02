let gohanPt =""; //ごはんを食べるを選択した回数の箱
let oyatsuPt =""; //おやつを食べるを選択した回数の箱
let CodePt =""; //コードをかくを選択した回数の箱
let SuiminPt =""; //すいみんを選択した回数の箱

//ごはんのクリック回数
let gohanCount =function(){
$("#gohanbtn").on("click",function(){
    $("#liGohan").html(gohanPt+1);
    gohanPt++
    return console.log(gohanPt)
})};

gohanCount();


//おやつのクリック回数
$("#oyatsubtn").on("click",function(){
    oyatsuPt++
    $("#liOyatsu").html(oyatsuPt);
});

//コードをかく
$("#codebtn").on("click",function(){
    CodePt++
    $("#liCode").html(CodePt);
});

//すいみんのクリック回数
$("#suiminbtn").on("click",function(){
    SuiminPt++
    $("#liSuimin").html(SuiminPt);
});

//3回選択するとべびっち→こどもっちへ進化
//たまっち進化条件：ごはん1回以上、コード1回以上 くちたまっち進化条件：それ以外
console.log(gohanPt);
