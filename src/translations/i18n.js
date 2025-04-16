// Minimal i18n loader for OSM Traffic Signs Map
// Usage: t('map.title')

(function(global) {
  var translations = {};
  var currentLang = 'en';

  function loadTranslations(lang, callback) {
    $.getJSON('src/translations/' + lang + '.json')
      .done(function(data) {
        translations = data;
        currentLang = lang;
        if (typeof callback === 'function') callback();
      })
      .fail(function() {
        if (lang !== 'en') loadTranslations('en', callback); // fallback
      });
  }

  function t(key) {
    var parts = key.split('.');
    var value = translations;
    for (var i = 0; i < parts.length; i++) {
      if (value[parts[i]]) {
        value = value[parts[i]];
      } else {
        return key;
      }
    }
    return value;
  }

  // Expose globally
  global.t = t;
  global.loadTranslations = loadTranslations;

})(window);
