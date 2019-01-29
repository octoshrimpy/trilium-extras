$('#global-buttons').prepend($('<div class="collapse-sidebar icon-action jam jam-book" title="Collapse or hide sidebar"></div>'));

$('.collapse-sidebar').click(function(){
    $('#container').toggleClass('collapsed-sidebar');
});
