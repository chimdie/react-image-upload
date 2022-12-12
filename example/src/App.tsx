import React from 'react'
import ImageUploader, { FileObjectType } from 'react-image-upload'
import 'react-image-upload/dist/style.css'
import './index.css'

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
          uploadIcon={
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
          onFileAdded={(img) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
          onFileRemoved={(img) => runAfterImageDelete(img)} // function runs on once you delete your image
          style={{
            height: '250px',
            width: '300px',
            color: '#ffb200',
            backgroundColor: 'white',
            border: '1px dashed #dddd',
            borderRadius: '6px'
          }}
          uploadIcon={
            <div>
              <svg
                width='53'
                height='40'
                viewBox='0 0 53 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.636 0.96875C18.6462 0.968778 17.6744 1.17057 16.8213 1.5532C15.9683 1.93584 15.265 2.4854 14.7843 3.14495L13.1048 5.44857H8.18907C6.19746 5.44857 4.28742 6.05166 2.87913 7.12515C1.47085 8.19865 0.679688 9.65463 0.679688 11.1728V28.0966C0.679688 29.6147 1.47085 31.0707 2.87913 32.1442C4.28742 33.2177 6.19746 33.8208 8.18907 33.8208H22.8761C22.4374 33.0188 22.1066 32.1849 21.8888 31.332H8.18907C7.06337 31.332 5.98379 30.9911 5.1878 30.3843C4.39182 29.7776 3.94464 28.9546 3.94464 28.0966V11.1728C3.94464 10.3147 4.39182 9.49175 5.1878 8.88499C5.98379 8.27823 7.06337 7.93736 8.18907 7.93736H15.0259L17.6378 4.3535C17.8358 4.0819 18.1255 3.85561 18.4768 3.69807C18.8281 3.54053 19.2284 3.45749 19.636 3.45754H28.7386C29.1463 3.45749 29.5465 3.54053 29.8978 3.69807C30.2491 3.85561 30.5388 4.0819 30.7368 4.3535L33.3488 7.93736H40.1856C41.3112 7.93736 42.3908 8.27823 43.1868 8.88499C43.9828 9.49175 44.43 10.3147 44.43 11.1728V16.6979C45.5819 17.0214 46.6763 17.4386 47.6949 17.9363V11.1728C47.6949 9.65463 46.9038 8.19865 45.4955 7.12515C44.0872 6.05166 42.1772 5.44857 40.1856 5.44857H35.2699L33.5904 3.14495C33.1097 2.4854 32.4064 1.93584 31.5533 1.5532C30.7002 1.17057 29.7284 0.968778 28.7386 0.96875H19.636Z'
                  fill='#F5B73C'
                />
                <path
                  d='M24.1878 10.9238C26.377 10.9238 28.5109 11.4478 30.2884 12.4218C32.066 13.3958 33.3975 14.7706 34.095 16.3524C33.0306 16.5724 32.008 16.87 31.039 17.2354C30.6575 16.3182 29.9657 15.4938 29.0333 14.8453C28.1008 14.1968 26.9606 13.747 25.7275 13.5413C24.4944 13.3356 23.212 13.3812 22.0094 13.6736C20.8068 13.966 19.7265 14.4947 18.8774 15.2067C18.0282 15.9186 17.4402 16.7885 17.1725 17.7288C16.9048 18.6691 16.9668 19.6466 17.3525 20.5628C17.7381 21.479 18.4336 22.3015 19.3691 22.9476C20.3045 23.5937 21.4467 24.0404 22.6807 24.2428C22.2968 25.0114 22.0055 25.8158 21.8188 26.647C19.3181 26.2059 17.1179 25.0784 15.638 23.4797C14.158 21.8811 13.5019 19.9231 13.7948 17.9792C14.0877 16.0354 15.3091 14.2417 17.2259 12.9405C19.1428 11.6392 21.621 10.9213 24.1878 10.9238Z'
                  fill='#F5B73C'
                />
                <path
                  d='M52.919 28.8433C52.919 34.891 46.4871 39.7939 38.5533 39.7939C30.6194 39.7939 24.1875 34.891 24.1875 28.8433C24.1875 22.7955 30.6194 17.8926 38.5533 17.8926C46.4871 17.8926 52.919 22.7955 52.919 28.8433ZM39.8593 22.8702C39.8593 22.6061 39.7217 22.3529 39.4767 22.1662C39.2318 21.9795 38.8996 21.8746 38.5533 21.8746C38.2069 21.8746 37.8747 21.9795 37.6298 22.1662C37.3849 22.3529 37.2473 22.6061 37.2473 22.8702V27.8477H30.7174C30.371 27.8477 30.0388 27.9526 29.7939 28.1393C29.549 28.326 29.4114 28.5792 29.4114 28.8433C29.4114 29.1073 29.549 29.3605 29.7939 29.5472C30.0388 29.7339 30.371 29.8388 30.7174 29.8388H37.2473V34.8163C37.2473 35.0804 37.3849 35.3336 37.6298 35.5203C37.8747 35.707 38.2069 35.8119 38.5533 35.8119C38.8996 35.8119 39.2318 35.707 39.4767 35.5203C39.7217 35.3336 39.8593 35.0804 39.8593 34.8163V29.8388H46.3891C46.7355 29.8388 47.0677 29.7339 47.3126 29.5472C47.5575 29.3605 47.6951 29.1073 47.6951 28.8433C47.6951 28.5792 47.5575 28.326 47.3126 28.1393C47.0677 27.9526 46.7355 27.8477 46.3891 27.8477H39.8593V22.8702Z'
                  fill='#F5B73C'
                />
              </svg>
            </div>
          }
          deleteIcon={
            <img
              src='https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'
              alt=''
            />
          }
        />
      </div>
    </div>
  )
}

export default App
