$(document).ready( ()=>{

    $('nav.menu a').on('click',(e)=>{
        let divSeccion = parseInt ( $(e.currentTarget.hash).offset().top )
    
        if( $(window).scrollTop() != divSeccion )
            $('HTML,BODY').animate({scrollTop: divSeccion}, 700)
    })

});