import React, { useEffect, useState , useRef } from "react";
import "./style.scss";
import ReactCrop ,{ Crop } from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'


const CroperImage = () => {
// =================== States ============= //
const allowedFileTypes = `image/gif image/png, image/jpeg, image/x-png`;
const [viewImage, setViewImage] = useState('');
const [crop, setCrop] = useState({
  aspect: 1 / 1,
  height: 468,
  unit: "px",
  width: 468,
  x: 0, 
  y: 107,
});
const [image, setImage] = useState(undefined);
const [imageUrl, setImageUrl] = useState(undefined);
  


// ========================== functions =============== //
const handleFileChange = (e) => {
    let image = e.target.files[0];
    if (image) {
     
        setViewImage(URL.createObjectURL(image));
      };
    }
  
    // console.log( 'crop:',crop);  
  const imageLoaded = (image) => {
    setImage(image);
    // console.log('sssvv');
  };

  function imageCrop(crop) {
    setCrop(crop);
    // console.log('ccc');
  }
  function imageCropComplete(crop) {
    userCrop(crop);
  }

  async function userCrop(crop) {
    if (image && crop.width && crop.height) {
      await getCroppedImage(image, crop, "newFile.jpeg");
    }
  }

  function getCroppedImage(image, crop, fileName) {
    const imageCanvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    imageCanvas.width = crop.width;
    imageCanvas.height = crop.height;
    const imgCx = imageCanvas.getContext("2d");
    imgCx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );


    return new Promise((reject, resolve) => {
        imageCanvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("the image canvas is empty"));
            return;
          }
          blob.name = fileName;
          let imageURL;
          window.URL.revokeObjectURL(imageURL);
          imageURL = window.URL.createObjectURL(blob);
          resolve(imageURL);
          setImageUrl(blob);
        }, "image1/jpeg");
      });
    }
    
    //function input image

   

   

   
    return (
    <React.Fragment>
      <div className="container">
        <form action="#" className="input__img">
          <label htmlFor="upload-image" className="label_imgae">
            
            <div className="uploads___image__label">
                <h3>عکس مورد نظر را اپلود کنید</h3>
            <span>
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 2V14.88"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.35 12.6499L12 15.9999L8.65002 12.6499"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
            </div>
          </label>
          
          <input
          style={{ display: "none" }}
          id="upload-image"
          name="upload photo"
          type="file"
          multiple={false}
          accept={allowedFileTypes}
          onChange={handleFileChange}
          
        />
        
          <button type="submit" className="btn btn-success">ویرایش عکس</button>
        </form>
        {/* <img src={viewImage} alt="" /> */}
        <div className="image__crop">
        <ReactCrop
        crop={crop}
        onImageLoaded={imageLoaded}
        onChange={imageCrop}
        onComplete={imageCropComplete}
      >
        <img src={viewImage} alt="" />
        </ReactCrop>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CroperImage;
