 var random_images_array = ["img/crab.jpg", "img/fish.png","img/duck.png","img/nimo.jpg","img/dolphin.jpg","img/starfish.png" ];


        function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}


        function picRotate(id){
         document.getElementById(id).style.transform="rotateY(180deg)"
         ;
            
            
        
    
            
         
        }
               var flag=false;
               
                var score=0;
                var fail=0;
             var firstCard=null;
                var secondCard=null;
            var firstID=null;
            var secondID=null;
            
            function calcScore(id,name){
                
                if(fail<3){
                picRotate(id);
                
             
                
                if (flag==false){
                    firstCard=name;
                    firstID=id;
                    flag=true;
                    
                }
                else{
                     secondCard=name;
                    secondID=id;
                    flag=false;
                    
                }
                if((firstCard==secondCard) && (secondCard!=null)&&(firstID!=secondID)){
                    score++;
                    
                
                   document.getElementById("score").innerHTML=score;
                    document.getElementById("fail").innerHTML=fail;
                    firstCard=null;
                    secondCard=null;
                    firstID=null;
                    secondID=null;

                    
                    
                }
            
                if((firstCard!=secondCard) && (secondCard!=null)&&(firstID!=secondID)){
                    
                    fail++;
                    
                    document.getElementById(firstID).style.transform="rotateY(360deg)";
                    
                    document.getElementById(secondID).style.transform="rotateY(360deg)";
                    firstCard=null;
                    secondCard=null;
                    firstID=null;
                    secondID=null;
                }
                
                if(fail==3){
                        document.getElementById("gameOver").innerHTML="Game Over";

                    }
            
                    document.getElementById("score").innerHTML=score;
                    document.getElementById("fail").innerHTML=fail;
                    
                }
                 
            
                   
               
            }
                
                
               
            
        