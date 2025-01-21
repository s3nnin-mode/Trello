import React, { ChangeEvent, FormEvent } from 'react';
import '../../styles/tablero/agregarLista.scss';
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';

interface AddListProps {
    createListWithThisName: (name: string) => void;
}


export const AddList: React.FC<AddListProps> = ({ createListWithThisName }) => {
    const [showForm, setShowForm] = useState(false);
    const [listName, setListName] = useState('');

    const cancel = () => {
        setShowForm(false);
        setListName('');
    }

    const handleClick = () => {
        if (listName.trim() === '') return;
        createListWithThisName(listName);
    }

    return (
        <div className='board_add_list'>
            <button className='btn_add_list' onClick={() => setShowForm(true)}>
                <AiOutlinePlus className='icon_add_list' />
                <span>Agregar lista</span>
            </button>
            <form className={`form_add_list_${showForm ? 'show' : 'hidden'}`}>
                <input
                    type='text'
                    className='input_add_list'
                    placeholder='Nombre de la lista'
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                />
                <div className='actions'>
                    <button type='button' className='btn_add' onClick={handleClick}>Agregar</button>
                    <button type='button' className='btn_cancel' onClick={cancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}