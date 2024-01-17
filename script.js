function toggleMode() {

  const html = document.documentElement

  html.classList.toggle("light")
  
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {

    img.setAttribute('src', './assets/otocabral-light.png')
  } else {

    img.setAttribute('src', './assets/otocabral.png')
  }

  if (html.classList.contains('light')) {

    img.setAttribute('alt', 'Foto de Oto Cabral modo Light')
  } else {

    img.setAttribute("alt", '"Foto de Oto Cabral"')
  }

}
