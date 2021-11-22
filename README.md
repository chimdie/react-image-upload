# react-image-upload

React package for uploading images.

[![NPM](https://img.shields.io/npm/v/react-image-upload.svg)](https://www.npmjs.com/package/react-image-upload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-image-upload
```

## Usage

```jsx
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({ onAdd: imageFile })
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file })
  }
  return (
    <div className='_dFlex'>
      {/* example one */}
      <div className='_m4'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          height={200}
          width={300}
        />
      </div>

      {/* example 2 */}
      <div className='_m4'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          uploadElement={
            <div>
              <svg
                class='svg-circleplus'
                viewBox='0 0 100 100'
                style={{ height: '20px', stroke: 'green' }}
              >
                <circle
                  cx='50'
                  cy='50'
                  r='45'
                  fill='none'
                  strokeWidth='7.5'
                ></circle>
                <line
                  x1='32.5'
                  y1='50'
                  x2='67.5'
                  y2='50'
                  strokeWidth='5'
                ></line>
                <line
                  x1='50'
                  y1='32.5'
                  x2='50'
                  y2='67.5'
                  strokeWidth='5'
                ></line>
              </svg>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default App
```

## License

MIT © [chimdie](https://github.com/chimdie)
