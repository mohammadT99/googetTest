import React, { useRef } from "react";
import { useState, useCallback } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from "react-image-crop";
import setcanvasPrivew from "./setcanvasPrivew";
import "react-image-crop/dist/ReactCrop.css";
import "./style.scss";

const ASPECT_RATIO = 1 ;
const MIN_DIMENSION = 150 ;

const Demo = () => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();
  const [ image , setImage] = useState();  
  const [error , setError ] = useState("");



  const submitImage = (crop) => {
    const imageElemant = new Image(); 
      imageElemant.src = crop ; 
      setImage(toString(imageElemant.src));
      console.log('image: ' ,imageElemant.src );
  }

  
  const onSelectFile = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImageSrc(file);
  };
  const onImageLoad = (e) => {
    const {width , height} = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100 ;

    const crop = makeAspectCrop(
        {
            unit:"%",
           width:cropWidthInPercent ,
        },
        ASPECT_RATIO ,
        width , 
        height
    );
    const cropWidthParent = (150/width) * 100 ;
    const centeredCrop = centerCrop(crop , width , height) 
    setCrop(centeredCrop)
    
  }

  return (
    <React.Fragment>
     <div className="container">
     <input type="file" onChange={onSelectFile} />
      <p>lll</p>
      {error && <p className="alert">{error}</p>}
      {imageSrc && (
        <div className="container align-content-center">
        <ReactCrop
        crop={crop}
        onChange={(pixelCrop , percentCrop) => setCrop(percentCrop)}
        circularCrop
        aspect={ASPECT_RATIO}
        minWidth={MIN_DIMENSION}
        >
        <img 
        ref={imgRef}
        src={imageSrc}
        alt="upload"
        onLoad={onImageLoad}
         />
        </ReactCrop>
        <button onClick={ () => {
          setcanvasPrivew(
          imgRef.current,
          previewCanvasRef.current ,
          convertToPixelCrop(
            crop , 
            imgRef.current.width ,
            imgRef.current.height
          )
        );
        const dataUrl = previewCanvasRef.current.toDataURL();
       
        }
        }>crop image</button>
        </div>
      )}
      {crop && (
        <canvas 
        ref={previewCanvasRef}
        className="mt-4"
        style={{
          border: "1px solid black" ,
          objectFit: "contain",
          width : 150 ,
          height : 150
        }}
        />
      )}
      <button type="button" className="btn btn-primary" onClick={submitImage}> crop image</button>

      <img src={image} alt="" />
     </div>
    </React.Fragment>
  );
};
export default Demo;
