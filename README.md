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
  return (
    <div>
      {/* example 1 */}
      <ImageUploader
        width={300}
        height={200}
        background='grey'
        uploadIcon={'+'}
        deleteIcon={'-'}
      />

      {/* example 2 */}
      <ImageUploader width={300} height={200} background='white' />
    </div>
  )
}
```

## License

MIT © [chimdie](https://github.com/chimdie)
