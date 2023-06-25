import { useState } from 'react';

const Strike = () => {
    const [inputValue, setInputValue] = useState('');

    // Sends post submitted to the backend for processing
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/api/strike', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ inputValue })
            });

            const data = await response.json();
            console.log('Response from backend: ', data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className='strike'>
            <p>P</p>
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleInputChange} />
                <button type='submit'>Submit</button>
            </form>
            <hr />
        </div>
    );
}

export default Strike