import React, { useState } from 'react';

function Validar(props) {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
        let errors = {};

        if (!formValues.name.trim()) {
            errors.name = 'El nombre es requerido';
        }

        if (!formValues.email.trim()) {
            errors.email = 'El correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'El correo electrónico no es válido';
        }

        if (!formValues.password.trim()) {
            errors.password = 'La contraseña es requerida';
        }

        setFormErrors(errors);

        return Object.keys(errors).length === 0; // retorna true si no hay errores
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Enviamos el formulario
            setFormSubmitted(true);
        }
    };

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form class="formulario" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} />
                {formErrors.name && !formSubmitted && <span>{formErrors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} placeholder="email"/>
                {formErrors.email && !formSubmitted && <span>{formErrors.email}</span>}
            </div>
            <div>
                <input type="password" id="password" name="password" value={formValues.password} placeholder="password" onChange={handleChange} />
                {formErrors.password && !formSubmitted && <span>{formErrors.password}</span>}
            </div>
            {formSubmitted && <p>El formulario se envió correctamente</p>}
            {!formSubmitted && <button type="submit">Enviar</button>}
        </form>
    );
}

export default Validar;

