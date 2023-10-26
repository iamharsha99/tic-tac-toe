
var started=false;
var count=0;

function updatePlayer()
{
    if(count%2==0)
        {
            $("h2").text("Player 1 turn");
            $("h2").addClass("X");
            $("h2").removeClass("O");
            
        }
    else
        {
            $("h2").text("Player 2 turn");
            $("h2").addClass("O");
            $("h2").removeClass("X");
            
        }
    
        count+=1;
}
function check()
{
    var b1=$("#b1").text();
    var b2=$("#b2").text();
    var b3=$("#b3").text();
    var b4=$("#b4").text();
    var b5=$("#b5").text();
    var b6=$("#b6").text();
    var b7=$("#b7").text();
    var b8=$("#b8").text();
    var b9=$("#b9").text();

    console.log(b1+" "+b2+" "+b3);
    console.log(b4+" "+b5+" "+b6);
    console.log(b7+" "+b8+" "+b9);
    if(b1==b2 && b2==b3 && b2.length!=0)
        return true;
    else if(b4==b5 && b5==b6 && b5.length!=0)
        return true;
    else if(b7==b8 && b8==b9 && b8.length!=0)
        return true;
    else if(b1==b4 && b4==b7 && b4.length!=0)
        return true;
    else if(b2==b5 && b5==b8 && b5.length!=0)
        return true;
    else if(b3==b6 && b6==b9 && b6.length!=0)
        return true;
    else if(b1==b5 && b5==b9 && b5.length!=0)
        return true;
    else if(b3==b5 && b5==b7 && b5.length!=0)
        return true;
    else    
        return false;
    
    }
$(document).keypress(function(){

    if(!started)
    {
        updatePlayer();
        started=true;

        $(".box").click(function(){
            

            if($(this).text().length==0)
            {
                if(count%2==0)
                { $(this).text("O");
                    $(this).addClass("O");
                }   
                else
                { $(this).text("X");
                $(this).addClass("X");
            }  
                console.log(check());
                if(check())
                    {
                        var winner= "Player "+(count%2==0 ? "2":"1")+"  wins !!!!";
                        $("h2").text(winner); 
                        $(".box").off("click");                     
                    }
                else
                updatePlayer();
                if(count==10)
                {
                    $("h2").text("Draw");
                }
            }

            
        });
        
    }
});






