$( document ).ready(function() {
    // Bounce button
    $("#animatebutton").click(function(){
        const element =  document.querySelector('.animatebutton');
        element.classList.add('animated', 'tada');
        setTimeout(function() {
          element.classList.remove('tada'); 
  },        1000); 
    });
    
    
});


                        
                        
                        
                        
