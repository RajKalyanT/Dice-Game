var button=document.getElementsByTagName("button")[0]
var array=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
button.onclick=function(){
    var random1=Math.floor(Math.random()*6)
    document.getElementsByTagName("img")[0].src="images/"+array[random1]
    var random2=Math.floor(Math.random()*6)
    document.getElementsByTagName("img")[1].src="images/"+array[random2]
    if(random1>random2){
        document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins"
    }
    else if(random2>random1){
        document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins"
    }
    else{
        document.getElementsByTagName("h1")[0].innerHTML="Draw"
    }
}