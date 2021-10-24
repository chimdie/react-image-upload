import React from 'react'

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
    <div className='d-flex'>
      {/* example one */}
      <div className='m-4 content'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
        />
      </div>
      {/* example 2 */}
      {/* <div className='m-4 imgWrapper'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          uploadElement={
            <div>
              <svg
                class='svg-circleplus'
                viewBox='0 0 100 100'
                style={{ height: '20px', stroke: 'violet' }}
              >
                <circle
                  cx='50'
                  cy='50'
                  r='45'
                  fill='none'
                  stroke-width='7.5'
                ></circle>
                <line
                  x1='32.5'
                  y1='50'
                  x2='67.5'
                  y2='50'
                  stroke-width='5'
                ></line>
                <line
                  x1='50'
                  y1='32.5'
                  x2='50'
                  y2='67.5'
                  stroke-width='5'
                ></line>
              </svg>
            </div>
          }
        />
      </div> */}
    </div>
  )
}

export default App
