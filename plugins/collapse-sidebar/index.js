$('#global-buttons').prepend($('<div class="collapse-sidebar icon-action jam jam-book"></div>'));

$('.collapse-sidebar').click(function(){
    $('#container').toggleClass('collapsed-sidebar');
});
