'use strict';

/////////////////////////////////////////////////////////////////////////////
// не успел навесить обработчики событий через addEventListener
// принцип почему так делать не стоит понял
// нет реализации с несколькими секундомерами.
/////////////////////////////////////////////////////////////////////////////

function addEvent(obj, event_name, handler) {
    var handler_wrapper = function(event) {
        event = event || window.event;
        if (!event.target && event.srcElement) {
            event.target = event.srcElement;
        }
        return handler.call(obj, event);
    };

    if (obj.addEventListener) {
        obj.addEventListener(event_name, handler_wrapper, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + event_name, handler_wrapper);
    }
    return handler_wrapper;
}

var	stopWatch = function() {

    var	startAt	= 0;
    var	lapTime	= 0;

    var	now	= function() {
        return (new Date()).getTime();
    };

    this.start = function() {
        startAt	= startAt ? startAt : now();
    };

    this.stop = function() {
        lapTime	= startAt ? lapTime + now() - startAt : lapTime;
        startAt	= 0; // Paused
    };

    this.reset = function() {
        lapTime = startAt = 0;
    };

    // Duration
    this.time = function() {
        return lapTime + (startAt ? now() - startAt : 0);
    };

    this.isActive = function() {
        if(startAt === 0) return false;
        else return true;
    };
};

var sw = new stopWatch();
var time = document.querySelector('.stopwatch-current');
var clocktimer;

window.onkeydown = keydown;
function keydown(e) {
    if(e.keyCode === 83){
        if(sw.isActive()) {
            stop();
        }
        else {
            start();
        }
    }
    else if(e.keyCode === 76){
        lap();
    }
    else if(e.keyCode === 82){
        reset();
    }
}

function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function formatTime(time) {
    var h = 0,
        m = 0,
        s = 0,
        ms = 0;

    var newTime = '';

    h = Math.floor( time / (60 * 60 * 1000) );
    time = time % (60 * 60 * 1000);
    m = Math.floor( time / (60 * 1000) );
    time = time % (60 * 1000);
    s = Math.floor( time / 1000 );
    ms = time % 1000;

    newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
    return newTime;
}

function update() {
    time.innerHTML = formatTime(sw.time());
}

function start() {
    if(sw.isActive()) {
        stop();
    }
    else {
        clocktimer = setInterval("update()", 1);
        sw.start();
    }


}

function stop() {
    sw.stop();
    clearInterval(clocktimer);
}

function reset() {
    stop();
    sw.reset();
    update();
    var laps = document.querySelector('.stopwatch-laps');
    laps.innerHTML = '';
}

function lap() {
    var laps = document.querySelector('.stopwatch-laps');
    var lap = document.createElement('div');
    lap.className = 'alert alert-info';
    lap.innerHTML = formatTime(sw.time()) + '<span class="label label-danger">×</span>';
    lap.querySelector('span').onclick = function(){
        this.parentNode.remove();
    }

    laps.insertBefore(lap, laps.childNodes[0]);
}

