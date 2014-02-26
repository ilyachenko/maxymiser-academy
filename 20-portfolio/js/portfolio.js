(function(){
    utils.setHashVar('lesson', 'qwe');

    $(window).bind('hashchange', function (e) {
        var folder = utils.getHashVar('lesson');
        $('.nav-list .active').removeClass('active');
        $('a[href="#lesson='+folder+'"]').parent().addClass('active');
    });

    $('dl.tabs dt').click(function(){
        $(this)
            .siblings().removeClass('selected').end()
            .next('dd').andSelf().addClass('selected');
    });

})();