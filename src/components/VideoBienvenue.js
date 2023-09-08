import { useState } from "react"

export function VideoBienvenue(){
    
    let music1={'nomChanson' : 'Italiano' , 'ref' : 'rL1svMa518w'}
    let music2={'nomChanson' : 'Susana' , 'ref' : 'Jpb7J_PcV3k'}
    let music3={'nomChanson' : 'Balla Balla' , 'ref' : 'zS59Rh5ipZs'}
    let listeMusic = [music1, music2, music3]
    let [musicDefaut, setMusicDefaut] = useState(music3.ref)

    return (<>    
      <h4>Ecoutez la musique en commandant vos pizzas</h4>
      {listeMusic.map(m => 
      <div key={m.ref}>    
        <input type="radio" id="music" name="drone" value="music" onClick={() => setMusicDefaut(m.ref)}/>
        <label>{m.nomChanson}</label></div> )}
      <iframe title={musicDefaut} width="200" height="250"
        src={"https://www.youtube.com/embed/" + musicDefaut}>
      </iframe>
</>)
}