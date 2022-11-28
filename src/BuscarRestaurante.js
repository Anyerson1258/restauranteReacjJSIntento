import React from 'react'

export const BuscarRestaurante = () => {
    return <>
        <div className="container-fluid">
            <div className="mb-3">
                <form>
                    <label className="form-label">Nombre productos</label>
                    <input type="text" className="form-control" />
                    <br></br>
                    <button type="button" claseName="btn btn-secondary card-button">Buscar</button>
                </form>
            </div>
        </div>

    </>
}
