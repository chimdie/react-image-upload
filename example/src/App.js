import React from 'react'

import { ExampleComponent } from 'react-image-upload'
import 'react-image-upload/dist/index.css'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({ onAdd: imageFile })
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file })
  }
  return (
    <ExampleComponent
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
  )
}

export default App
