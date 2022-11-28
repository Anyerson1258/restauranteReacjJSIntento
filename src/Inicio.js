import React, { useState } from 'react'

import { listarestaurante } from './data-pructo'

export const Inicio = () => {

    const [restarurante, setRestaurante] = useState(listarestaurante);

    return (

        <div className="container container-fluid mt-3 mb-3">
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {
                    restarurante.map(restarurante => {
                        return (
                            <div className='col' key={restarurante.id}>
                                <div className="card">
                                    <img src={restarurante.imagen} alt="..." />
                                    <div className="card-container">
                                        <h5 className="">{restarurante.nombre}</h5>
                                        <p className="">{restarurante.direccion}</p>
                                        <p className="">{restarurante.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
