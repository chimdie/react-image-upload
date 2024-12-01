// import React from 'react'
// import ImageUploader, { FileObjectType } from 'react-image-upload'
// import 'react-image-upload/dist/index.css'
// import './index.css'
// import { BsCamera } from 'react-icons/bs'
// import { RiDeleteRow } from 'react-icons/ri'

// const App = () => {
//   function getImageFileObject(imageFile: FileObjectType) {
//     console.log({ onAdd: imageFile })
//   }
//   function runAfterImageDelete(file: FileObjectType) {
//     console.log({ onDele: file })
//   }
//   return (
//     <div className='_dFlex'>
//       {/* example 1 */}
//       <div className='_m4'>
//         <ImageUploader
//           onFileAdded={(img) => getImageFileObject(img)}
//           onFileRemoved={(img) => runAfterImageDelete(img)}
//           style={{ height: 200, width: 200 }}
//         />
//       </div>
//       {/* example 2 */}
//       <div className='_m4'>
//         <ImageUploader
//           onFileAdded={(img) => getImageFileObject(img)}
//           onFileRemoved={(img) => runAfterImageDelete(img)}
//           style={{
//             height: 200,
//             width: 200,
//             background: 'rgb(0 182 255)',
//             borderRadius: '8px',
//             color: 'white'
//           }}
//         />
//       </div>
//       {/* example 3 */}
//       <div className='_m4'>
//         <ImageUploader
//           onFileAdded={(img) => getImageFileObject(img)}
//           onFileRemoved={(img) => runAfterImageDelete(img)}
//           uploadIcon={<BsCamera fontSize='30px' />}
//         />
//       </div>
//       {/* example 3 */}
//       <div className='_m4'>
//         <ImageUploader
//           onFileAdded={(img) => getImageFileObject(img)} // Runs to confirm that the image actually exists
//           onFileRemoved={(img) => runAfterImageDelete(img)} // Runs once the image is deleted
//           uploadIcon={<BsCamera fontSize='50px' />}
//           deleteIcon={<RiDeleteRow fontSize='30px' />}
//           style={{
//             height: '250px',
//             width: '300px',
//             color: '#ffb200',
//             backgroundColor: 'white',
//             border: '1px dashed #dddd',
//             borderRadius: '6px'
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import FileUploader, { FileObjectType } from 'react-image-upload'

const App = () => {
  const handleFileAdded = (file: FileObjectType) => {
    console.log('File added:', file)
  }

  const handleFileRemoved = (file: FileObjectType) => {
    console.log('File removed:', file)
  }

  return (
    <div>
      {/* <FileUploader
        onFileAdded={handleFileAdded}
        onFileRemoved={handleFileRemoved}
        customContainerStyle={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '300px'
        }}
        renderUploadButton={(triggerFilePicker) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={triggerFilePicker}
          >
            <span>Click to Upload</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-upload'
              viewBox='0 0 16 16'
            >
              <path d='M.5 9.9V15a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V9.9a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v4.6H2V9.9a.5.5 0 0 0-.5-.5H.5z' />
              <path d='M10.354 5.854a.5.5 0 0 1-.708 0L8 4.207 6.354 5.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708z' />
              <path d='M8 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 1 0z' />
            </svg>
          </div>
        )}
        renderFilePreview={(file, handleDelete) => (
          <div
            style={{
              marginTop: '10px',
              border: '1px solid #ccc',
              padding: '10px'
            }}
          >
            <img
              src={file.dataUrl}
              alt={file.name}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <p>{file.name}</p>
                <p>{(file.size / 1024).toFixed(2)} KB</p>
              </div>
              <button
                onClick={handleDelete}
                style={{
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '5px 10px'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      /> */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <FileUploader
          onFileAdded={handleFileAdded}
          onFileRemoved={handleFileRemoved}
          customContainerStyle={{ display: 'flex' }}
          renderFilePreview={(file, handleDelete) => (
            <div>
              <img
                src={file.dataUrl}
                alt={file.name}
                style={{ maxWidth: '100px', marginBottom: '10px' }}
              />
              <div>
                <p>{file.name}</p>
                <p>{(file.size / 1024).toFixed(2)} KB</p>
                <button onClick={handleDelete}>Remove</button>
              </div>
            </div>
          )}
          renderUploadButton={(triggerFilePicker) => (
            <button
              onClick={triggerFilePicker}
              style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Select File
            </button>
          )}
        />
      </div>
    </div>
  )
}

export default App
