(function () {
    'use strict';
    function pixelCall(_consent) {
      var _hn_ver = 10,
        _ref = encodeURIComponent(document.referrer),
        _kwQuery = window.captify_kw_query_12357 ? '&kw=' + encodeURIComponent(captify_kw_query_12357) : '',
        _pxlUrl = 'https://s.cpx.to/fire.js?',
        _pid = 12357,
        _uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }),
        _consentParam = _consent ? '&gcv=' + _consent : '',
        _groupParams = 'pid=' + _pid + '&ref=' + _ref + '&hn_ver=' + _hn_ver + '&fid=' + _uuid + _kwQuery + _consentParam;
 

      var syncScript = document.createElement('script');
      syncScript.src = _pxlUrl + _groupParams;
 
      document.head.appendChild(syncScript);
    }
    if (window.__cmp) {
      window.__cmp('getConsentData', null, function(result) {
        pixelCall(result.consentData);
      });
    } else {
      var _consentCookieName = 'euconsent';
      var _cookies = document.cookie.split(';');
      var _consentCookie = '';
      for (var i = 0; i < _cookies.length; i++) {
        if (_cookies[i].trim().substring(0, _consentCookieName.length) === _consentCookieName) {
          _consentCookie = _cookies[i];
        }
      }
      var _consent = _consentCookie.split(_consentCookieName + '=')[1];
      pixelCall(_consent || '');
    }
 
})(window);