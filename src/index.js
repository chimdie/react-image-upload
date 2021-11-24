/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { DeleteIcon, UploadIcon } from './components/icons'
import './styles.css'

const ImageUploader = ({
  onFileAdded,
  onFileRemoved,
  uploadIcon,
  deleteIcon,
  style
}) => {
  const [currentImg, setCurrentImg] = useState({})

  const handleFilePicker = (e) => {
    if (e.target.files.length > 0) {
      const imageObject = {
        file: e.target.files[0],
        dataUrl: URL.createObjectURL(e.target.files[0])
      }
      setCurrentImg((oldImage) => {
        return { ...oldImage, ...imageObject }
      })
    }
  }
  useEffect(() => {
    if (onFileAdded) {
      onFileAdded(currentImg)
    }
  }, [currentImg])

  const handleDeleteImage = () => {
    if (onFileRemoved && Object.keys(currentImg).length > 0)
      onFileRemoved(currentImg)
    setCurrentImg({})
  }
  return (
    <div className='uploader__container'>
      {/* button wrapper */}
      <div className='uploader__placeholder' style={style}>
        <div className='uploader__btn_wrapper'>
          <div className='uploader__btn' onClick={handleDeleteImage}>
            <DeleteIcon icon={deleteIcon} />
          </div>
        </div>

        {/* upload Input Box */}
        {!currentImg?.dataUrl && (
          <label id='file_uploader' className='uploader__file_input_label'>
            <UploadIcon element={uploadIcon} color={style?.color} />
            {/* input element */}
            <input
              className='uploader__file_input'
              key={currentImg}
              type='file'
              name='upload'
              onChange={handleFilePicker}
              accept='image/*'
              id='file_uploader'
            />
          </label>
        )}
        {/* image */}
        {currentImg?.dataUrl && (
          <img
            className='uploader__file'
            src={currentImg?.dataUrl}
            alt={currentImg?.dataUrl}
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}

export default ImageUploader
