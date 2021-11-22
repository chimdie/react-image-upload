import React from 'react'

import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import './index.css'

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
          style={{ height: 200, width: 200 }}
        />
      </div>
      {/* example 2 */}
      <div className='_m4'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          style={{
            height: 200,
            width: 200,
            background: 'rgb(0 182 255)',
            borderRadius: '8px',
            color: 'white'
          }}
        />
      </div>
      {/* example 3 */}
      <div className='_m4'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          uploadElement={
            <div>
              <svg
                className='svg-circleplus'
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
      {/*  */}
      {/* example 3 */}
      <div className='_m4'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)}
          onFileRemoved={(img) => runAfterImageDelete(img)}
          style={{
            height: '250px',
            width: '300px',
            color: '#ffb200',
            backgroundColor: 'white',
            border: '1px dashed #dddd',
            borderRadius: '6px'
          }}
          uploadElement={
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 40 40'
                height='40px'
                viewBox='0 0 24 24'
                width='40px'
                fill='currentColor'
              >
                <rect fill='none' height='24' width='24' />
                <path d='M3,4V1h2v3h3v2H5v3H3V6H0V4H3z M6,10V7h3V4h7l1.83,2H21c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V10H6z M13,19c2.76,0,5-2.24,5-5s-2.24-5-5-5s-5,2.24-5,5S10.24,19,13,19z M9.8,14c0,1.77,1.43,3.2,3.2,3.2s3.2-1.43,3.2-3.2 s-1.43-3.2-3.2-3.2S9.8,12.23,9.8,14z' />
              </svg>
              <p>Upload File</p>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default App
