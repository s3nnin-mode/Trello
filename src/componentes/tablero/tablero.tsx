import React, { SetStateAction } from "react";
import '../../styles/tablero/tablero.scss';
import { List } from './lista';
import { AddList } from './agregarLista';
import { useState } from "react";

interface TableroProps {
    name: string
}

export const Tablero = () => {
    const [lists, setLists] = useState<TableroProps[]>([]);

    const createList = (nameList:  string) => {
        const newLists = [...lists, {name: nameList}];
        setLists(newLists);
    }

    return (
        <div className='board'>
            <header>
                <h2>Nombre Tablero</h2>

            </header>
            <div className='board_content'>
                <AddList createListWithThisName={createList} />
            </div>
        </div>
    )
};