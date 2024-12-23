(function () {
  'use strict';

  var toggleDrawer = function toggleDrawer() {
    document.body.classList.toggle('is-drawer-active');
  };
  document.getElementById('drawer_btn').addEventListener('click', toggleDrawer);
  document.getElementById('drawer_shade').addEventListener('click', toggleDrawer);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
      }
    });
  }, {
    rootMargin: "0px 0px -30% 0px"
  });
  document.querySelectorAll(".fadein").forEach(function (element) {
    observer.observe(element);
  });

})();
