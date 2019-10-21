window.onload = (e) => {
  var $features = document.querySelector('#features');
  var $wrapper = document.querySelector('#features__wrapper');
  var $wrapperCanvas = document.querySelector('#features__wrapper__scrollCanvas');
  
  $features.style.height = $wrapperCanvas.getBoundingClientRect().width + 'px';
  $wrapper.style.width = $wrapperCanvas.getBoundingClientRect().width + 'px';
}

window.onscroll = (e) => {

  var $features = document.querySelector('#features');
  var $wrapper = document.querySelector('#features__wrapper');
  var $bounding = $features.getBoundingClientRect();

  if( $bounding.top <= 0 ){

    e.preventDefault();
    $('.features__wrapper__scrollCanvas').css({
      "webkitTransform": 'translateX(' + $bounding.top + 'px)',
      "MozTransform": 'translateX(' + $bounding.top + 'px)',
      "msTransform": 'translateX(' + $bounding.top + 'px)',
      "OTransform": 'translateX(' + $bounding.top + 'px)',
      'transform': 'translateX(' + $bounding.top + 'px)'
    });
  }
}