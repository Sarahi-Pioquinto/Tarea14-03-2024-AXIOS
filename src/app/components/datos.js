import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v4/rockets');
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <div>
                                <p>Nombre: {item.name}</p>
                                <img src={item.flickr_images} alt={item.name} />
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Espera, están cargando los datos...</p>
            )}
        </div>
    );
};

export default DataFetcher;
