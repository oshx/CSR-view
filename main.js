;(function main($) {
  'use strict'

  return $(function documentCallback() {
    'use strict'
    var parsed = (function (parsed) {
      try {
        var queryString = window.location.search || ''
        queryString = queryString.substr(1).split('&')

        for (var i = 0; i < queryString.length; i++) {
          var mapped = queryString[i].split('=')
          var key = mapped[0]
          var value = mapped[1] || null
          parsed[key] = value
        }
        return parsed
      } catch (exception) {
        return parsed
      }
    })({})
    if (!parsed.width && !parsed.height && !parsed.size) {
      console.debug({ checked: false, parsed })
      if (documentCallback.count === 5) {
        return undefined
      }
      documentCallback.count = documentCallback.count || 0
      documentCallback.count++
      return setTimeout(documentCallback, 100)
    }
    var $head = $('head')
    var $body = $('body')
    var src =
      'https://via.placeholder.com/' +
      (parsed.width || parsed.height || parsed.size)
    $body.append($('<img />').attr('src', src))
    $head.append(
      $('<meta />').attr('property', 'og:image').attr('content', src),
    )
  })
})(jQuery)
