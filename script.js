function toggleMode() {

  const html = document.documentElement

  html.classList.toggle("light")
  
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {

    img.setAttribute('src', './assets/avatar-light.png')
  } else {

    img.setAttribute('src', './assets/avatar.png')
  }

  if (html.classList.contains('light')) {

    img.setAttribute('alt', 'Foto com Fundo Azul de MaykBrito')
  } else {

    img.setAttribute("alt", '"Foto de Maik Brito"')
  }

}
