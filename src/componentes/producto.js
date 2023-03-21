import React, { useState, useEffect } from 'react';
import './estilos.css';

function Productos(props) {
    const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);

    const handleClick = () => {
        setCount(contador + 1);
    };

    useEffect(() => {
        
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProductos(data.products);
            });
    }, []);

    return (
        <div className="productos">
            {contador}
            <button className="boton" onClick={handleClick}>
                Click
            </button>
            <h1>{productos[contador]?.title}</h1>
            <img className="imagenes" src={productos[contador]?.images[0]} alt="Producto" />
            <p className="p">
                <b>Precio:</b> {productos[contador]?.price}
            </p>
            <button className="boton"><a href='validacion.js'>redidirir a validacion</a></button>
        </div>
    );
}

export default Productos;