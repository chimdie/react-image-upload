# react-image-upload

A react library for uploading image. [Demo](https://codesandbox.io/s/weathered-monad-ffdf7?file=/src/App.js)

[![NPM](https://img.shields.io/npm/v/react-image-upload.svg)](https://www.npmjs.com/package/react-image-upload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-upload
```

## Examples

```jsx
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({ imageFile })
  }

  function runAfterImageDelete(file) {
    console.log({ file })
  }

  return (
    <ImageUploader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
  )
}

export default App
```

### Adding props

```jsx
<ImageUploader
  style={{ height: 200, width: 200, background: 'rgb(0 182 255)' }}
  deleteIcon={<RiDeleteRow />}
  uploadIcon={<BsCamera />}
/>
```

## Props

| Property      | Type | Default  | Description                                                                     |
| :------------ | :--: | -------- | ------------------------------------------------------------------------------- |
| style         | obj  | optional | Write your custom css                                                           |
| deleteIcon    | ele  | optional | The icon used to delete file                                                    |
| uploadIcon    | ele  | optional | The icon used to upload file                                                    |
| onFileAdded   | func | required | A function that runs after file has been uploaded and returns the uploaded file |
| onFileRemoved | func | optional | A function that runs after file has been removed and returns the removed file   |

## License

MIT © [chimdie](https://github.com/chimdie)
