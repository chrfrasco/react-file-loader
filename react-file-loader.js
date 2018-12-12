module.exports = function reactFile(source) {
  return `
    ${injectCSS(getStyle(source))}
    ${getScript(source)}
  `
}

function getScript(source) {
  return getBetween(source, '<script>', '</script>')
}

function getStyle(source) {
  return getBetween(source, '<style>', '</style>')
}

/**
 * @param {string} text
 * @param {string} startText
 * @param {string} endText
 */
function getBetween(text, startText, endText) {
  const start = text.indexOf(startText)
  const end = text.lastIndexOf(endText)
  return text.slice(start + startText.length, end)
}

/**
 * @param {string} css
 */
function injectCSS(css) {
  return `
    (function() {
      const style = document.createElement('style')
      style.appendChild(document.createTextNode(
          ${JSON.stringify(css)}
      ))
      document.head.appendChild(style)
    })();
  `
}
