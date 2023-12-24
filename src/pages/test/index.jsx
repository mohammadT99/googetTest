import React from "react";
import { useState, useCallback } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "./style.scss";

const Demo = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();


  const submitImage = (image) => {
    const imageElemant = new Image(); 
      imageElemant.src = imageSrc ; 
      console.log('image: ' ,imageSrc );
  }
  
  const onSelectFile = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImageSrc(file);
  };
  const onImageLoad = (e) => {
    const {width , height} = e.currentTarget
    const crop = makeAspectCrop(
        {
            unit:"%",
            x:25,
            y:25,
            width:cropWidthParent,
            height:50,
        }

    )
    const cropWidthParent = (150/width) * 100 ;
    const centeredCrop = centerCrop(crop , width , height) 
    setCrop(centeredCrop)
  }

  return (
    <React.Fragment>
     <div className="container">
     <input type="file" onChange={onSelectFile} />
      <p>lll</p>
      <ReactCrop
        onChange={
            (pixelCrop) => setCrop(pixelCrop)
        }
        crop={crop}
        circularCrop
      >
        <img src={imageSrc} alt="" onLoad={onImageLoad} />
        
      </ReactCrop>
      <button type="button" className="btn btn-primary"> crop image</button>

      {/* <img src={} alt="" /> */}
     </div>
    </React.Fragment>
  );
};
export default Demo;
