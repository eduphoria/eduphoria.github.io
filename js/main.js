$(function() {
  $('.mainNav a').click(function() {
    $('button[data-toggle="collapse"]').click();
  });

  $('.progressIndicator').waypoint('sticky', {
    offset: 100
  });

  $('#aboutus, #positions, #benefits, #join').waypoint(function(direction) {
    var $this = $(this);
    var id = $this.attr('id');
    var indicator = $('.' + id);
    indicator.addClass('active');
  }, {
    offset: 350
  });

  $(window).scroll(function(){        
    var $this = $(this);
    var scrollPosition = $this.scrollTop() + $this.height();
    var targetPosition = $('body').height();
    if (scrollPosition > targetPosition) {
       $(".join").addClass('active');
    }
  });

  $(window).stellar();
});