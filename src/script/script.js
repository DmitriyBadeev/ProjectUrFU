
 /*const anchors = [].slice.call(document.querySelectorAll('a[href ="#down"]')),
      animationTime = 500,
      framesCount = 100;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled <= 200) {
        e.preventDefault();
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
      let scroller = setInterval(function() {

        let scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    } else return;
    
  });
});  */


window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 500) {
        document.getElementById('up').style.display = 'block';
    } else {
      document.getElementById('up').style.display = 'none';
    }
  }