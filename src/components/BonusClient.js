import React, { useState } from "react";


export function BonusClient() {
    const [data, setData] = useState(null);
    const [dataHisto, setDataHisto] = useState(null);

    function getBonusClient (){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.example.com/mesBonus');
        xhr.onload = function() {
          if (xhr.status === 200) {
            setData(JSON.parse(xhr.responseText));
          }
        };
        xhr.send();
    }
    function getHistoriqueClient (){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.example.com/monHistorique');
      xhr.onload = function() {
        if (xhr.status === 200) {
          setDataHisto(JSON.parse(xhr.responseText));
        }
      };
      xhr.send();
  }
    return (<>    
    <div>
    <button id='getBonus' onClick={getBonusClient}>Voir mes points bonus</button>
    {data && <div><label>Mon bonus : </label><span>{data.bonus}</span></div>}
    </div>
    <div>
    <button id='getHistorique' onClick={getHistoriqueClient}>Voir mon historique de commande</button>
    {dataHisto && <div>      <table id='histoTab'>
        <thead>
        <tr>
          <th>Identifiant Commande</th>
          <th>Date Commande</th>
          <th>Remarque client</th>
          <th>Remarque livreur</th>
          </tr>
        </thead><tbody>{dataHisto.map((x) => (       
          <tr key={x.idCommande}>
            <td>{x.idCommande}</td>
            <td>{x.dateCommande}</td>
            <td>{x.remarqueClient}</td>
            <td>{x.remarqueLivreur}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
}
</div>
</>)}
