import "./styles.css";
import React from "react";

function ItemList ({title,descricao}){
    return(
        <div className="item-list">
            <strong>{title}</strong>
            <p>{descricao}</p>
            <hr/>
        </div>
    );
}


export default ItemList;