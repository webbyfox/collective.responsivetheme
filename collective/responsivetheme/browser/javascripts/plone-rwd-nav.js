/* Sample scripts for RWD nav patterns 
   (c) 2012 Maggie Wachs, Filament Group, Inc - http://filamentgroup.com/examples/rwd-nav-patterns/GPL-LICENSE.txt
   Last updated: March 2012
   Dependencies: jQuery
  Changes made by Rob Porter - WebLion
  Last Updated: April 2012
*/

function below_610(){
      // on load add the li if less than 610 px wide and the nav-menu class
      if(window.location.hash != '#portal-megamenu') {
        if ($(window).width() < 768) {
            var showNavigationLabel = _('Menu');
            var hideNavigationLabel = _('Hide Menu ');  
            
            //$("#portal-globalnav").prepend('<li class="navigation-pulldown">Navigation</li>');
            
            // always show right Navigation label for button, even in rare situations: 
            // e.g. expand the mobile menu, enlarge the browser so the mobile menu disappears, 
            //      make the browser smaller and see the right label with the expanded menu again
            var initialNavigationLabel = showNavigationLabel;
            if ($('.nav-primary').hasClass('expanded')) {
                   initialNavigationLabel = hideNavigationLabel;
            }                   
            $(".nav-primary").prepend('<button type="button" class="navigation-button">' + initialNavigationLabel + '</button>');
            $("#portal-top-megamenu").addClass('nav-menu');
            $(".nav-primary").prepend('<span class="nav-section" />');
            // toggle the menu items' visiblity. it gives the parent the class .expanded
            $('.nav-primary').find('span.nav-section').bind('click focus', function(){
                $(this).parent().toggleClass('expanded');
               // always show right Navigation label for but Menu ton, even in rare situations...               
                if ($('.nav-primary').hasClass('expanded')) {
                    $(this).parent().find('button.navigation-button').text(hideNavigationLabel);
                } else {
                    $(this).parent().find('button.navigation-button').text(showNavigationLabel); 
                }                 
                });
            $('button.navigation-button').bind('click', function() {
               $('.nav-primary').toggleClass('expanded');
               // always show right Navigation label for button, even in rare situations...               
               if ($('.nav-primary').hasClass('expanded')) {
                   $(this).text(hideNavigationLabel);
               } else {
                   $(this).text(showNavigationLabel); 
               }                 
               });
        }
     }
}

$(document).ready(function() {
            // i18n
        jarn.i18n.loadCatalog('collective.responsivetheme');
        _ = jarn.i18n.MessageFactory('collective.responsivetheme');
         // add a div around globalnav
        $('ul#portal-megamenu').wrap('<div class="nav-primary" />');
        if ( $(".navigation-button").length == 0 ) {
            below_610();
        }
        $(window).resize(function() {
            // if window is smaller than 610px put in the extra li
            if ($(window).width() <= 768) { 
                 // check to see if we have this particular li.. if not add it
                 if ( $(".navigation-button").length == 0 ) {
                   below_610(); 
                 }
             } 
            // if window is bigger take away li
            if ($(window).width() > 768) {
                 // check and see if .navigation-button is there.. if so remove it
                 if ( $(".navigation-button").length > 0 ) {
                     $('#portal-top-megamenu').removeClass('nav-menu'); 
                     $('.navigation-button').remove();
                     $('.nav-section').remove();
                 }
            }

        });
   

});

