const addScript = ( src, id ) => {
  let s = document.getElementById(id)
  if (s) {
    s.setAttribute('src', src)
  } else {
    let newScript = document.createElement('script')
    newScript.setAttribute('src', src)
    newScript.setAttribute('id', id)
    document.body.appendChild(newScript)
  }
}

const removeScript = ( id ) => {
  let s = document.getElementById(id)
  s.removeAttribute('src')
}

export default { addScript, removeScript }
