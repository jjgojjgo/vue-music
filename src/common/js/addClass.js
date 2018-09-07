export function addClass (el, className) {
  // console.log(el.className)
  if (hasClass(el, className)) {
    return
  }
  let classNameList = el.className.split(' ')
  classNameList.push(className)
  el.className = classNameList.join(' ')
}

export function hasClass (el, className) {
  // console.log(el.className)
  if (el.className.indexOf(className) > -1) {
    return true
  } else {
    return false
  }
}
