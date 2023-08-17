import { useSelector } from "react-redux";
import { FileUpload } from "./FileUpload";
import { allInfosUser } from "../reducer/userSlice";
import { ListeLinks } from "./ListeLinks";
import { BonusClient } from "./BonusClient";

export function MonEspace(){
    const infosUsr = useSelector(allInfosUser)

    return (<>
            <ListeLinks/>
            <h3>Mon espace</h3>
            <div> 
                <div>
                <label>Ma photo :</label>
                <FileUpload/>
                </div>
                <label>Mon nom :</label>
                <span>{infosUsr.name}</span>
                </div>
                <div>
                <label>Mon ancienneté :</label>
                <span>{infosUsr.ancienneté}</span>
                </div>
                <div>
                <label>Mon role :</label>
                <span>{infosUsr.role}</span>
            </div>
                <BonusClient></BonusClient>
            </>)
}