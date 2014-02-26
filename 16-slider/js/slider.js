function Slider(node, speed, delay) {
    var self = this;
    this.slider = node;
    this.img = $(node).find('img')[0];

    this.timer = setInterval(function() { self.moveNext() }, speed);

    $(node).on('click', '.block', function(e){
        var id = $(e.currentTarget).attr('data-id');
        this.moveNext(id);
        console.log('clear' + self.timer);
        clearInterval(self.timer);
        clearTimeout(self.timerId);
        self.timerId = setTimeout(function() {
            self.timer = setInterval(function() { self.moveNext() }, speed);
        }, delay);
    }.bind(self));

};

Slider.prototype.moveNext = function(number){
    var slider = this.slider;
    var shift;
    var nextNode;
    var activeNode = $(slider).find('.active')[0];
    $(activeNode).removeClass('active');

    if(number === undefined){
        nextNode = $(activeNode).next();
        if (nextNode.length === 0){
            nextNode  = $('.block')[0];
        }
        activeId = $(nextNode).attr('data-id');
    }
    else {
        nextNode = $(slider).find('[data-id="'+ number +'"]');
        activeId = number;
    }

    $(nextNode).addClass('active');

    shift = -910 * activeId;

    $(this.img).animate({
        marginLeft: shift
    }, 500);

};

