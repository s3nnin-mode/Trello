import { useState } from "react";
import '../styles/sidebar.scss';
import React from "react";


export const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <div className={sidebar ? 'sidebar' : 'sidebar-desactive'}>
            <header className='sidebar-header'>
                <div className='logo-and-text'>
                    <img src='https://narutoversity.wordpress.com/wp-content/uploads/2017/03/senjutsu.png?w=640' alt='logo app'/>
                    <p>Espacio de tra888bajo </p>
                </div>
                
                <button onClick={toggleSidebar}>
                    <i className={`bi bi-arrow-${sidebar ? 'left' : 'right'}`}></i>
                </button>
            </header>
        </div>
    )
}