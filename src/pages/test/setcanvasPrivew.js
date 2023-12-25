const setcanvasPrivew = (
    image,
    canvas ,
    crop
) => {
    const ctx = canvas.getContext("2d")
    if(!ctx) {
        throw  new  Error ("Not 2d context ");
    }

    // 
    const pixelRatio = window.devicePixelRatio ;
    const scalex = image.naturalWidth / image.width ;
    const scaleY = image.naturalHeight / image.height ;

    canvas.width =Math.floor(crop.width * scalex * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
    ctx.scale(pixelRatio , pixelRatio);
    ctx.imageSoomthingQulity = 'high';
    ctx.save();
    const cropX = crop.x * scalex ;
    const cropY = crop.y * scaleY ;

    // move the crop origin to the canvas origin ( 0 , 0 )
    ctx.translate(-cropX , -cropY) ;
    ctx.drawImage(
        image , 
        0 ,
        0 ,
        image.naturalWidth , 
        image.naturalHeight , 
        0 ,
        0 ,
        image.naturalWidth ,
        image.naturalHeight 
    );
    ctx.restore ();
};
export default setcanvasPrivew ;