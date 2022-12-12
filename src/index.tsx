import React, { useState, ChangeEvent } from 'react'
import { DeleteIcon, UploadIcon } from './components/icons'
import { FileUploaderProps, FileObjectType } from './interface'
import './styles.css'

const ImageUploader = ({
  onFileAdded,
  onFileRemoved,
  uploadIcon,
  deleteIcon,
  style
}: FileUploaderProps): JSX.Element => {
  const [currentImg, setCurrentImg] = useState<Partial<FileObjectType>>({
    file: {} as File,
    dataUrl: ''
  })

  const handleFilePicker = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target

    if (files != null && files.length > 0) {
      const imageObject = {
        file: files[0],
        dataUrl: URL.createObjectURL(files[0])
      }
      setCurrentImg((oldImage) => {
        return { ...oldImage, ...imageObject }
      })
      if (onFileAdded) {
        onFileAdded(imageObject)
      }
    }
  }

  const handleDeleteImage = (): void => {
    if (onFileRemoved != null && Object.keys(currentImg).length > 0) {
      const partialCurrentImg: Partial<FileObjectType> = currentImg
      const _currentImg: FileObjectType = partialCurrentImg as FileObjectType
      onFileRemoved(_currentImg)
    }
    setCurrentImg({})
  }
  return (
    <div className='uploader__container'>
      {/* button wrapper */}
      <div className='uploader__placeholder' style={style}>
        <div className='uploader__btn_wrapper'>
          <div className='uploader__btn' onClick={() => handleDeleteImage()}>
            <DeleteIcon icon={deleteIcon} />
          </div>
        </div>

        {/* upload Input Box */}
        {currentImg && currentImg.dataUrl !== null && (
          <label id='file_uploader' className='uploader__file_input_label'>
            <UploadIcon element={uploadIcon} />
            {/* input element */}
            <input
              className='uploader__file_input'
              key={currentImg.dataUrl}
              type='file'
              name='upload'
              onChange={(e) => handleFilePicker(e)}
              accept='image/*'
              id='file_uploader'
            />
          </label>
        )}
        {/* image */}
        {currentImg.dataUrl && (
          <img
            className='uploader__file'
            src={currentImg.dataUrl}
            alt={currentImg.dataUrl}
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}

export default ImageUploader
export type { FileUploaderProps, FileObjectType }
