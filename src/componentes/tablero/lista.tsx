import React from "react";
import '../../styles/tablero/lista.scss';

export const List = () => {
    return (
        <div className='board__list'>
            <header>
                <p className='name_list'>Nombre columna</p>
                <div>
                    <button className='collapse-list'></button>
                    <button className='options'></button>
                </div>
            </header>
            <div className='content-list'>
                
            </div>
        </div>
    )
}