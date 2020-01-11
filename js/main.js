window.onload = function () {
    
    var slideViewer = document.getElementById("slide_viewer");
    var slideButtons = document.getElementsByClassName("slide-btn");
    var right = document.querySelector("#right");
    var left = document.querySelector("#left");
    var move = 0;
    var i = 0;
    var timer = 0;
                
    right.onclick = moveRight;
        
        function moveRight(){
        move = move - 1200;
        if(move < -2553){
           move = 0; 
        }
        slideViewer.style.left = move + 'px';
        
        
        slideButtons[i].classList.remove('activeBtn');
        i++;
        
        if (i < slideButtons.length){
             slideButtons[i].classList.add('activeBtn');
        }
        else{
            i = 0;
            slideButtons[i].classList.add('activeBtn');
        }
        timer = 0;
            
    }
    
    left.onclick = function(){         
        move = move + 1200;
        if(move > 1){
           move = -2553; 
        }
        slideViewer.style.left = move + 'px';
        
         
        slideButtons[i].classList.remove('activeBtn');
        i--;
        if (i < 0){
           i = slideButtons.length - 1;
        }  
        
        
        slideButtons[i].classList.add('activeBtn');
        timer = 0;
    }
    
    
    function timerIteration(){
        timer++;
        console.log(timer);
        if(timer > 3){
            moveRight();
            timer = 0;
        }
        autoSlider();
    }
    
    function autoSlider(){
        setTimeout(timerIteration, 1000);        
        
    }
    autoSlider();
  
}