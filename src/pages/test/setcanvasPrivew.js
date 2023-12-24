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
    const slectx = image.naturalWidth / image.width ;
    

}