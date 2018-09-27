'use strict';

// document ready
$(document).ready( function(){

    $('#slider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 550
    });

    // run foundation methods for UI
    $(document).foundation();

    // taglines for the showcase
    var taglines = [
        "More Bang For Your Buck" ,
        "Get Experience Before You Graduate" ,
        "Live the Life You Dreamed" ,
        "Earn As You Learn" 
    ];
    var i = 0; // starting position in the taglines
    var timer = setInterval( changeTagline , 3500 );
    function changeTagline( ){
        $('#showcase-tagline').fadeOut('slow', function(){
            $(this).text( taglines[i] ).fadeIn('slow');
        });
        i++;
        if( i >= taglines.length ) i = 0; // reset the counter, yay!
    }


    $('#menu a').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var href = $(this).attr("href");
            $('html,body').animate({
                scrollTop: $(href).offset().top - 100
            }, 1200)
        })
    })




    loadAllPrograms();
    // load the programs
    

    



    $('#scroll-top').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    })
});

function loadAllPrograms(){
    $.ajax({
        url: "data/programs.json",
        type: "get" ,
        dataType: "json"
    }).then( function(data){
        let programs = data.program.sort();
        programs = sortByKey( programs , "name" );
        let programList = $('#program-list');
        $.each( programs , function( i, program ){
            let prog = $('<div></div>').addClass("program");
            prog.html( "<h4>" + program.name + "</h4>");
            let a = $('<a></a>').click(function(){
                loadProgram( program );
            });
            a.append(prog);
            programList.append(a);            
        })
    });
}


// loadProgram - creates individual modals for each program
function loadProgram( p ){
    let $modal = $('#modal');
    $modal.html(''); // clear everything from the modal

    // program name
    let h3 = $('<h3></h3>').text( p.name );

    // tags
    let tags = $('<p></p>');
    $.each( p.tags, function(i,tag){
        let t = $('<span></span>').addClass('program-tag').text( tag );
        tags.append( t );
    })

    let descText = p.desc;
    let desc = $('<p></p>').text (descText);

    // degrees
    //let degreesText = "Degrees: " + p.degrees.join(", ");
    let degreeOptions = $('<div></div>');
    for( let d in p.degrees ){
        let label = $('<span></span>').addClass("label").text(p.degrees[d]);
        degreeOptions.append( label );
    }
    //let degrees = $('<p></p>').text( degreesText ).addClass("program-degrees");
    let degrees = degreeOptions;
    
    // learn more button
    let learnmore = $('<a></a>').addClass("button large alert").attr("href", p.link).attr("target", "_blank").text('Learn More');
    
    let close = $('<a></a>').addClass("button large alert").text('Close').attr('data-close','');

    // close button
    let button = $('<button></button>').addClass("close-button").attr("data-close", '').attr("type","button");
    let x = $('<span></span>').text( "x" );
    button.append( x );
    

    $modal
        .append( h3 )
        // .append( jobs )
        .append( desc )
        .append( degrees )
        .append( learnmore)
        .append( button )
        .foundation('open');
}





// AIzaSyC5BQTWAZOu6nYlZTV0fMI84ePDtBDqPyI
function createMap(){
    // location of Williams Conference Center
    // 46.411727, -117.027863
    var mapCenter = {lat:46.411727, lng: -117.027863};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: mapCenter,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map ,
        title: 'Sam Glenn Complex'
        
    });
    var info = '<h4 style="margin-bottom: 1rem;">CTE Career Showcase</h4>' + 
               '<p>October 13, 2017 in the Williams Conference Center</p>'
    ;
    var infowindow = new google.maps.InfoWindow({
        content: info
    })
    marker.addListener('click', function(){
        infowindow.open( map, marker );
    })
    

    
}


// https://stackoverflow.com/a/8837505
// sorts an array of objects by a specified key
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}




console.log("Looking at the console, are you? :)")
console.log("Sounds like you have a nack for looking at code!")
console.log("Consider enrolling in the Web Design and Development program. We'll show you how to do what you're already doing, and make money doing it!")