function animateProgressBar(el, width){
    el.animate(
        {width: width}, 
        {
            duration: 2000,
            step: function(now, fx) {
                if(fx.prop == 'width') {
                   
                }
            }
        }        
    );    
}


$('.Main__skills__bar').each(function(){
   animateProgressBar($(this).find("div"), $(this).data("width")) 
});