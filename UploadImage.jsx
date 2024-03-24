import React from "react";
export default function uploadImg({UploadImgHandle})  {
    return(
        <section className="Upload_img"> 
        <h2>IMG Upload</h2>
        <input type="file" accept="image/*" onChange={UploadImgHandle}/>
        </section>
    )
}
