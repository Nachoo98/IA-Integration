async function fetchImageText() {
  const imageNameInput = document.getElementById('imageNameInput')
  const imageName = imageNameInput.value.trim()

  if (!imageName) {
    alert('Por favor ingresa un nombre de imagen válido.')
    return
  }

  const url = `http://localhost:3000/image-to-text?image=${imageName}`
  const response = await fetch(url)

  if (response.ok) {
    const data = await response.text()
    document.getElementById('result').textContent = `${data}`
  } else {
    throw new Error(`Error al obtener texto de la imagen - Código de estado: ${response.status}`)
  }
}

async function handleUpload() {
  const fileInput = document.getElementById('imageInput')
  const formData = new FormData()
  formData.append('image', fileInput.files[0])

  const response = await fetch('http://localhost:3000/image-to-text/upload', {
    method: 'POST',
    body: formData,
  })

  if (response.ok) {
    const data = await response.text()
    document.getElementById('uploadResult').textContent = `Imagen subida: ${data}`
  } else {
    throw new Error(`Error al subir imagen - Código de estado: ${response.status}`)
  }
}
