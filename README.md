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
  deleteIcon={
    <img
      src='https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'
      alt=''
    />
  }
  uploadIcon={
    <svg
      className='svg-circleplus'
      viewBox='0 0 100 100'
      style={{ height: '40px', stroke: '#000' }}
    >
      <circle cx='50' cy='50' r='45' fill='none' strokeWidth='7.5'></circle>
      <line x1='32.5' y1='50' x2='67.5' y2='50' strokeWidth='5'></line>
      <line x1='50' y1='32.5' x2='50' y2='67.5' strokeWidth='5'></line>
    </svg>
  }
/>
```

## Props

| Property      | Type | Default  | Description                                                     |
| :------------ | :--: | -------- | --------------------------------------------------------------- |
| style         | obj  | optional | style the file with css                                         |
| deleteIcon    | func | optional | adds your delete icon or html element                           |
| uploadIcon    | func | optional | adds your upload icon or html element                           |
| onFileAdded   | func | optional | runs after file has been selected and returns the selected file |
| onFileRemoved | func | optional | runs after file has been removed and returns the removed file   |

## License

MIT © [chimdie](https://github.com/chimdie)
