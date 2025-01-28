import React, { useState } from 'react';

const CreditCardForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cardType: 'Visa'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreditCardForm;
