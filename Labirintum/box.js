        let key=0;
        let el;
    $(document).ready(function(){
 
        $("ul").hide();
        $(".box").click(function(){
          
            let node = $(this).children("h3").children("span");
            node.parent().parent().css("opacity", "1");
            if(!(node.parent().parent().attr('style').indexOf("color: black; height: auto; border-radius: 21px;") !=-1 ||  node.parent().parent().attr('style').indexOf("color: black; height: auto; border-radius: 35px;") !=-1))
            {  
                
                node.parent().parent().css("color", "black");
                node.children("img").css("transform", "rotate(180deg)");
                node.parent().parent().css("height", "auto");
                if(node.parent().parent().attr('class')!="box box-req")
                {
                    node.parent().parent().css("border-radius", "21px");
                }
                else
                {
                    node.parent().parent().css("border-radius", "35px");
                }

                
            node.parent().next().css("display","block");
            
            
            key=1;}
            else{
                node.children("img").css("transform", "rotate(360deg)");               
               
               
                node.parent().parent().css("border-radius", "67px");
                if(node.parent().parent().attr('class')!="box box-req")
                {
                    node.parent().parent().css("height", "44px");  
                }
                else
                {
                    if(window.innerWidth<1400)
                        node.parent().parent().css("height", "50px");
                    else
                    node.parent().parent().css("height", "70px");
                    node.parent().parent().css("color", "#898989");                    
                }
                     
               
                node.parent().next().css("display","none");
                key=0;
            }
        });
        $(".box ul li").click(function(eventObject){
            $(this).parent().parent().children("h3").html(eventObject.target.innerText + '<span class="expand"><img src="img/swipe.svg" ></span>');
            $(this).parent().parent().css("border-color", "#04E000")
        });
    });