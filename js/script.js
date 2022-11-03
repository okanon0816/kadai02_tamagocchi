//clickした時のポイント計算用
let gohanPt =0;
let codePt =0;
let suiminPt =0;
//clickの回数カウント用
let gohanClick =0;
let codeClick=0;
let suiminClick =0;
//テキスト表示用
let tamagoEmotion ="";//ランダムな感情表示
let shinkaText ="";//進化した時のメッセージを表示
// const onigiriIn = $("#onigiri").removeClass("addclass").fadeOut(2000); ★定数に入れると効かないのはなぜ？
const se = new Audio('music/se.mp3')
const bgm = new Audio('music/shuffle_shuffle.mp3')
const seHappy = new Audio('music/happy.mp3')
const seNormal = new Audio('music/normal.mp3')
const seBad = new Audio('music/bad.mp3')

//最初はメインを消しておく
$(".main").addClass("addclass")
//おとなっちたちを消しておく
$("#mamecchi").addClass("addclass");
$("#ginjirocchi").addClass("addclass");
$("#masukucchi").addClass("addclass");
$("#osozakicchi").addClass("addclass");
//アイテムを消しておく
$(".command").addClass("addclass")

//クリックでオープニングを消す
$("#btnStart").on("click",function(){
    $("#opening").fadeOut(2000);
    $(".main").removeClass("addclass");
    se.play();//クリック音
    se.volume = 0.3;//ボリュームを30％に
    setTimeout(function(){
        bgm.play();
        bgm.volume =0.1;
    },2000)//クリックした2秒後にbgm流れる
});

$(".btn").on("click" , function(){
    //行動した時の感情を決める
    let emotion = Math.ceil(Math.random()*3)
    console.log(emotion,"random");
    //選択されたボタンの番号と行動をとってくる
    let playerScore = $(this).attr("data-score")
    let playerAct = $(this).attr("data-act")

    // console.log(playerScore);
    // console.log(playerAct);

    if(emotion === 1){
        tamagoEmotion = "うれしそう"
        console.log(`たまごっちは${tamagoEmotion}に${playerAct}`);
    }
    if(emotion === 2){
        tamagoEmotion = "ふつう"
        console.log(`たまごっちは${tamagoEmotion}に${playerAct}`);
    }
    if(emotion === 3){
        tamagoEmotion = "めんどくさそう"
        console.log(`たまごっちは${tamagoEmotion}に${playerAct}`);
    }

    //うれしそう＆ごはん
    if(emotion == 1 && playerScore == 1){
        gohanPt += 5;
        console.log(gohanPt ,"gohanPt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#onigiri").removeClass("addclass").fadeOut(2000); 
        seHappy.play();  
        seHappy.volume=0.3;
    }
    //ふつう＆ごはん
    if(emotion == 2 && playerScore == 1){
        gohanPt += 3;
        console.log(gohanPt,"gohanPt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#onigiri").removeClass("addclass").fadeOut(2000);
        seNormal.play();
        seNormal.volume=0.3;
    }
    //いやいや＆ごはん
    if(emotion == 3 && playerScore == 1){
        gohanPt += 1;
        console.log(gohanPt,"gohanPt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#onigiri").removeClass("addclass").fadeOut(2000);
        seBad.play();
        seBad.volume =0.3;
    }
    //うれしそう＆こーど
    if(emotion == 1 && playerScore == 2){
        codePt += 5;
        console.log(codePt,"codePt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#pc").removeClass("addclass").fadeOut(2000);
        seHappy.play();
        seHappy.volume=0.3;
    }
    //ふつう＆こーど
    if(emotion == 2 && playerScore == 2){
        codePt += 3;
        console.log(codePt,"codePt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#pc").removeClass("addclass").fadeOut(2000);
        seNormal.play();
        seNormal.volume=0.3;
    }
    //いやいや＆こーど
    if(emotion == 3 && playerScore == 2){
        codePt += 1;
        console.log(codePt,"codePt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#pc").removeClass("addclass").fadeOut(2000);
        seBad.play();
        seBad.volume =0.3;
    }
    //うれしそう＆すいみん
    if(emotion == 1 && playerScore == 3){
        suiminPt += 5;
        console.log(suiminPt,"suiminPt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#makura").removeClass("addclass").fadeOut(2000);
        seHappy.play();
        seHappy.volume=0.3;
    }
    //ふつう＆すいみん
    if(emotion == 2 && playerScore == 3){
        suiminPt += 3;
        console.log(suiminPt,"suiminPt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#makura").removeClass("addclass").fadeOut(2000);
        seNormal.play();
        seNormal.volume=0.3;
    }
    //いやいや＆すいみん
    if(emotion == 3 && playerScore == 3){
        suiminPt += 1;
        console.log(suiminPt,"suiminPt");
        $("#text").text(`たまごっちは${tamagoEmotion}に${playerAct}`);
        $("#makura").removeClass("addclass").fadeOut(2000);
        seBad.play();
        seBad.volume =0.3;
    }
    
    //おとなっちへの進化条件
    if(codePt>=15){
        if(gohanPt===0 && suiminPt===0){
            console.log("おそざきっちに進化");
            $("#tamacchi").addClass("addclass");
            $("#osozakicchi").fadeIn(3000);
            shinkaText="たまごっちは おそざきっちに しんかした！"
            $("#text2").text(shinkaText);
        }
    }

    if(gohanPt>=15){
        if(codePt<15 && suiminPt<15){
            console.log("ぎんじろっちに進化");
            $("#tamacchi").addClass("addclass");
            $("#ginjirocchi").fadeIn(3000);
            shinkaText="たまごっちは ぎんじろっちに しんかした！"
            $("#text2").text(shinkaText);
        }
    }

    if(codePt>=15){
        if(gohanPt>0 &&gohanPt<15 && suiminPt>0 && suiminPt<15){
            console.log("まめっちに進化");
            $("#tamacchi").addClass("addclass");
            $("#mamecchi").fadeIn(3000);
            shinkaText="たまごっちは まめっちに しんかした！"
            $("#text2").text(shinkaText);
        }
    }

    if(suiminPt>=15){
        if(gohanPt<15 && codePt<15){
            console.log("ますくっちに進化");
            $("#tamacchi").addClass("addclass");
            $("#masukucchi").fadeIn(3000);
            shinkaText="たまごっちは ますくっちに しんかした！"
            $("#text2").text(shinkaText);

        }
    }

    if(gohanPt>30 || codePt>30 || suiminPt>30){
        console.log("死んだ");
        $("#mainContainer").html('<img src="img/end.png" alt="" width=800px>')
    }
    
})//けさない

//何回クリックしたかのカウント機能
let gohanCount = function(){
    $("#gohanbtn").on("click",function(){
        gohanClick++
        $("#liGohan").html(gohanClick);
    })}

gohanCount();
    
let codeCount = function(){
    $("#codebtn").on("click",function(){
        codeClick++
        $("#liCode").html(codeClick);
    })}

codeCount();
    
let suiminCount = function(){
    $("#suiminbtn").on("click",function(){
        suiminClick++
        $("#liSuimin").html(suiminClick);
    })}

suiminCount();