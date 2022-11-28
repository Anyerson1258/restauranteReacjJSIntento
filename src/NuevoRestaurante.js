import React, { useState } from 'react'

export const NuevoRestaurante = () => {


    const [restarurante, setRestaurante] = useState([])

    const hansleOnChange = (e) => {
        console.log(e.target.nombbre, e.target.descripcion, e.target.direccion, e.target.imagen)}

        return <>
        const hansleOnChangeSumbit = (e) => { 

        }



<div className="container-fluid">
            <div className="mb-3">
                <form>
                    <label className="form-label">Nombre</label>
                    <input type="text" 
                    onChange={(e) => hansleOnChange}
                    name="nombre"
                    className="form-control" />
                </form>
            </div>

            <div className="mb-3">
                <form>
                    <label className="form-label">Dirección</label>
                    <input type="text" 
                    onChange={(e) => hansleOnChange}
                    name="direccion"
                    className="form-control" />
                </form>
            </div>

            <div className="mb-3">
                <form>
                    <label className="form-label">Descripción</label>
                    <input type="text" 
                    onChange={(e) => hansleOnChange}
                    name="descripcion"
                    className="form-control" />
                </form>
            </div>

            <div className="mb-3">
                <form>
                    <label className="form-label">Imagen URL</label>
                    <input type="text" 
                    onChange={(e) => hansleOnChange}
                    name="imagen"
                    className="form-control" />

                    <button>Guardar</button>
                </form>
            </div>

        </div>

    </>

}

