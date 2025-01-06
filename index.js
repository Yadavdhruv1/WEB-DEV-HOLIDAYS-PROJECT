// function home(){
//     $("h1").html("Press any key to play");
//     $("body").click(()=>{
//         $("h1").html("level 1");
//         gameStart(1);
//     }).keydown(()=>{
//         $("h1").html("level 1");
//         gameStart(1);
//     });
// }

// let x=Math.floor((Math.random()*4)+1);

// console.log(x)

// let arr=[];

// function gameStart(level){
//     if(level===1) arr=[];
//     arr.push(Math.floor((Math.random()*4)+1))
    
//     var carryAhead=1;

//     let arrCol=['.w','.a','.s','.d'];
//     $(arrCol[arr[arr.length-1]]).fadeOut().fadeIn();

//     for(let i=0;i<arr.length;i++){

//         console.log(arr[i]);


//         $(".box").on("click",function(){
//             if(arr[i]!=($(this).html())-'0'){
//                 carryAhead=0;
//                 console.log(($(this).html())-'0');
//                 console.log("wrong");
//             }
//         });
        
//     }
//     console.log("Hello");
//     console.log(carryAhead);
// }


// home();

// var ad = new Audio('song.mp3');
// ad.play();

started=false;
end=true;

let choice=null;

$(".box").click(function(){
    if($(this).html()-'0'==1){one();check();}
    else if($(this).html()-'0'==2){two();check()}
    else if($(this).html()-'0'==3){three();check()}
    else if($(this).html()-'0'==4){four();check()}
});

function one(){arrIn.push(1);}
function two(){arrIn.push(2);}
function three(){arrIn.push(3);}
function four(){arrIn.push(4);}

function show(cl,time){
    setTimeout(function(){
        $("."+cl).fadeOut().fadeIn();
    }, time);
}


function ani(cl){
    $("."+cl).addClass("opa");
    setTimeout(() => {
        $("."+cl).removeClass("opa");
    }, 800);
}


console.log(choice);

var level=1;

arr=[];
arrBox=['w','a','s','d'];

function game(level){
    if(level===1) arr=[];

    $("h1").html("level "+level);

    let x=Math.floor((Math.random()*4)+1);

    arr.push(x);  

    for(var i=0;i<arr.length;i++){
        show(arrBox[arr[i]-1],i*800);
    }

}

arrIn=[]
let boxNo=0;

function check(){
    if(boxNo==arr.length-1 && arrIn[boxNo]==arr[boxNo]){
        console.log("Next level");
        level=level+1;
        boxNo=0;
        arrIn=[];
        game(level);
        
    }
    else if(arrIn[boxNo]!=arr[boxNo]){
        console.log("Game over");
        startOver();
        // arr=[];
        // arrIn=[];
        // boxNo=0;
        // game(1)
    }
    else if(arr[boxNo]==arrIn[boxNo]){
        boxNo++;
    }
}

function startOver(){
    $("h1").html("Click anywhere to start");
    started=false;
}

function home(){
    $("body").click(function(){
        if(started!=true){
            game(1);
            started=true;
        }
    });
}

home();