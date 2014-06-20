$(document).ready(function(){

/**
 * Add swipe/scroll effect for touch enabled browsers except IE10 which will use CSS only
 */


/**
 * Scroll animator using setInterval
 */
function initScroller( el, onEnd ){

    var t,             // <- timeout id
        ppf,           // <- pixels per frame
        maxFunc,       // <- Math.max, or Math.min depending on direction of scroll
        scrollNow,     // <- current element scrollLeft
        scrollTarget,  // <- target scrollLeft
        interval = 16; // <- 60fps
    function onInterval(){  
        scrollNow = Math.max( 0, maxFunc( scrollTarget, scrollNow + ppf ) );
        el.scrollLeft = scrollNow;
        if( scrollTarget === scrollNow ){
            stop();
            onEnd && onEnd();
        }
    }
    function start(){
        stop();
        t = setInterval( onInterval, interval );
    }
    function stop(){
        t && clearInterval(t);
        t = null;
    }
    // expose public functions, stop and scroll
    return { 
        stop: stop, 
        scroll: function ( scrollLeft, speed ){
            scrollTarget = scrollLeft;
            scrollNow = el.scrollLeft;
            var direction = scrollTarget > scrollNow ? 1 : -1;
            maxFunc = Math[ direction === 1 ? 'min' : 'max' ];
            ppf = Math.round( speed * interval * direction );
            start();
        }
    };
}      





/**
 * Enhance with touchstart and touchend for swipe inertia
 */
function initSwiper( el, onStart, onEnd ){
    var xstart  = 0,  // <- initial scroll position on first touch
        tstarts = [], // <- time each touch started
        xoffset = [], // <- initial x position of each touch
        yoffset = []; // <- initial y position of each touch

    /**
     * Utility for getting current time in milliseconds
     */
    var now = Date.now || function(){
        return new Date().getTime();
    };        

    /**
     * Initialize swipe on touchstart
     */
    function onTouchStart( event ){
        var t = now();
        eachTouchEvent( event, function( i, e ){
            tstarts[i] = t;
            xoffset[i] = e.clientX;
            onStart && onStart();
        } );
        xstart = el.scrollLeft;
        return true;
    }

    /**
     * Callback for touchmove
     */
    function onTouchMove( event ){
       var xmove, ymove;
       eachTouchEvent( event, function( i, e ){
            xmove = xoffset[i] - e.clientX;
            ymove = yoffset[i] - e.clientY;
       } );
       if( ymove && Math.abs(ymove) > Math.abs(xmove) ){
           // this was intended as a vertical scroll - probably of the page
           // we will allow this event through so the OS/browser can handle it.
           return true;
       }
       if( xmove ){
           // else take control of horizonal scroll and cancel event
           el.scrollLeft = Math.max( 0, xstart + xmove );
       }
       event.preventDefault();
       return false;
    }

    /**
     * Callback when touch released
     */
    function onTouchEnd( event ){
        eachTouchEvent( event, function( i, e ){
            var touchtime  = now() - tstarts[i],
                touchmoved = xoffset[i] - e.clientX,
                speed = Math.abs( touchmoved ) / touchtime,
                direction = touchmoved ? ( touchmoved < 0 ? -1 : 1 ) : 0;
            onEnd && onEnd( speed, direction );
        } );
        return true;
    }

    /**
     * multi-touch iterator
     */
    function eachTouchEvent( event, callback ){
        var i = -1, 
            touched = event.originalEvent || event,
            changed = touched.changedTouches||[];
        while( ++i < changed.length ){
            callback( i, changed[i] );
        }    
    }
    
    // bind standard touch events
    el.addEventListener('touchstart', onTouchStart, false );
    el.addEventListener('touchmove', onTouchMove, false );
    el.addEventListener('touchend', onTouchEnd, false );
} 

 
 

/**
 * enable swipe/scroll of test element
 */
function run(){
    
    /**
     * indicate click with simple message
     */        
    function onLinkClick( event ){
        event.preventDefault();
        var link = event.target,
            html = link.innerHTML;
        link.innerHTML = 'Click';
        link.className = 'item clicked';
        setTimeout( function(){
            link.innerHTML = link.getAttribute('data-num');
            link.className = 'item';
        }, 500 );
        return false;
    }        

    var i = -1,
        wrap  = document.getElementById('testwrap'),
        links = wrap.getElementsByTagName('div');
    
    while( ++i < links.length ){
        links[i].setAttribute('data-num', links[i].innerHTML );
        // very important to use capture here. So container gets event before we do.
        links[i].addEventListener('click', onLinkClick, true );
    }    
    
    
    
    // initialize animated-scrolling of element
    var scroller = initScroller( wrap );

    // initialize swiping of scroll area with start and end handlers
    initSwiper( wrap, 
        // stop scroll animation when swipe starts
        function(){
            scroller.stop();
        }, 
        // carry on to nearest item when swipe stops
        function( speed, direction ){
            if( ! speed ){ 
                return; 
            }
            // apply some tollerance as to speed of swipe and tweak expected behavior
            var spaced = 187,
                minSpeed = 0.6,
                round  = speed > minSpeed ? Math[ direction === 1 ? 'ceil' : 'floor' ] : Math.round,
                snapTo = spaced * ( round( wrap.scrollLeft / spaced ) ),
                speed  = Math.max( speed, minSpeed );
            scroller.scroll( snapTo, speed  );            
        }
    );        
    
}



    
// Skip IE10 as we're handling it in pure CSS
if( navigator.msPointerEnabled ){
    // skip MS pointer events
}
// else enable for any modern browser that might support touch events
else if( document.body.addEventListener ){
    //console.log('log2')
    run();
}


})
