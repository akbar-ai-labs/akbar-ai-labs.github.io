// Visit + download counting with GoatCounter (privacy-friendly: no cookies, no personal data).
// Page visits are counted by count.js. Downloads (.pdf, .zip) are counted as events named "download: <file>",
// tagged with the kit page they came from.
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!/\.(pdf|zip)(\?|#|$)/i.test(href)) return;
    var file = href.split('/').pop().split(/[?#]/)[0];
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'download: ' + file, title: 'from ' + location.pathname, event: true });
    }
  });
})();
