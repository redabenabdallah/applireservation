
import React, { useState } from "react";
import style from '../styles/ProfilPersonnel.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

export function FileUpload(){

    const [file, setFile] = useState(null);
    const [imageDisplay, updateImageDisplay] = useState(null);
    const [isSubmitActive, updateActive] = useState(false);
    const [msgDrop, updateMsgDrop] = useState(null)



    const verifFichier = (e) => {
        setFile(file);
        const imageFile = e.target.files[0];
        
        if(imageFile !== undefined){
            if(fileTypes.indexOf(imageFile.name.split('.').pop().toUpperCase()) === -1){
                updateActive(false)
                updateMsgDrop("Seuls les fichiers JPG, PNG, GIF sont acceptés")
            } else {
                updateMsgDrop("Fichier accepté")
                updateActive(true)
                const reader = new FileReader();
                reader.addEventListener("load", (e) => {
                updateImageDisplay(e.target.result);
                });
    
                reader.readAsDataURL(imageFile);
                return imageDisplay
            }
        }

      };
    return (<>
        {isSubmitActive && <div className={style.displayImage}><img  ref={null} src={imageDisplay} alt="logo" /></div>}
        <div>        
        <form  id="form-file-upload">
        <input type="file" onChange={(e) => {verifFichier(e)}} onDrop={(e) => {verifFichier(e)}} />
        <i>{msgDrop}</i>
        </form></div>

        
        </>
      );
}