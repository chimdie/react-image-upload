import React from 'react'
import ImageUploader, { FileObjectType } from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import './index.css'
import { BsCamera } from 'react-icons/bs'
import { RiDeleteRow } from 'react-icons/ri'

const App = () => {
  function getImageFileObject(imageFile: FileObjectType) {
    console.log({ onAdd: imageFile })
  }
  function runAfterImageDelete(file: FileObjectType) {
    console.log({ onDele: file })
  }
  return (
    <div className='_dFlex'>
      {/* example 1 */}
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
          uploadIcon={<BsCamera fontSize='30px' />}
        />
      </div>
      {/* example 3 */}
      <div className='_m4'>
        <ImageUploader
          onFileAdded={(img) => getImageFileObject(img)} // Runs to confirm that the image actually exists
          onFileRemoved={(img) => runAfterImageDelete(img)} // Runs once the image is deleted
          uploadIcon={<BsCamera fontSize='50px' />}
          deleteIcon={<RiDeleteRow fontSize='30px' />}
          style={{
            height: '250px',
            width: '300px',
            color: '#ffb200',
            backgroundColor: 'white',
            border: '1px dashed #dddd',
            borderRadius: '6px'
          }}
        />
      </div>
    </div>
  )
}

export default App
