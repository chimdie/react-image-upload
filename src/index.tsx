import React, { useState, ChangeEvent, ReactNode } from 'react'

export interface FileObjectType {
  file: File
  dataUrl: string
  name: string
  size: number
}

export interface FileUploaderProps {
  onFileAdded?: (file: FileObjectType) => void
  onFileRemoved?: (file: FileObjectType) => void
  renderFilePreview?: (
    file: FileObjectType,
    handleDelete: () => void
  ) => ReactNode
  renderUploadButton?: (triggerFilePicker: () => void) => ReactNode
  noThumbnails?: boolean // Toggle for hiding previews
  customContainerStyle?: React.CSSProperties
  customContainerClassName?: string
}

const FileUploader = ({
  onFileAdded,
  onFileRemoved,
  renderFilePreview,
  renderUploadButton,
  noThumbnails = false,
  customContainerStyle,
  customContainerClassName
}: FileUploaderProps): JSX.Element => {
  const [currentFile, setCurrentFile] = useState<FileObjectType | null>(null)

  const handleFilePicker = (e: ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target

    if (files && files.length > 0) {
      const file = files[0]
      const fileObject: FileObjectType = {
        file,
        dataUrl: URL.createObjectURL(file),
        name: file.name,
        size: file.size
      }
      setCurrentFile(fileObject)
      onFileAdded?.(fileObject)
    }
  }

  // Handle file deletion
  const handleDeleteFile = (): void => {
    if (currentFile) {
      onFileRemoved?.(currentFile)
      setCurrentFile(null)
    }
  }

  // Trigger file picker programmatically
  const triggerFilePicker = (): void => {
    const input = document.getElementById(
      'file-picker-input'
    ) as HTMLInputElement
    if (input) input.click()
  }

  return (
    <div
      className={`file-uploader-container ${customContainerClassName || ''}`}
      style={customContainerStyle}
    >
      <input
        type='file'
        accept='image/*'
        id='file-picker-input'
        style={{ display: 'none' }}
        onChange={handleFilePicker}
      />

      {renderUploadButton ? (
        renderUploadButton(triggerFilePicker)
      ) : (
        <button onClick={triggerFilePicker}>Upload File</button>
      )}

      {!noThumbnails &&
        currentFile &&
        (renderFilePreview ? (
          renderFilePreview(currentFile, handleDeleteFile)
        ) : (
          <div className='default-preview'>
            <img
              src={currentFile.dataUrl}
              alt={currentFile.name}
              style={{ maxWidth: '200px', marginBottom: '10px' }}
            />
            <div>
              <p>{currentFile.name}</p>
              <p>{(currentFile.size / 1024).toFixed(2)} KB</p>
              <button onClick={handleDeleteFile}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default FileUploader
