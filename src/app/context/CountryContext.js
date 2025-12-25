// src/app/context/CountryContext.js
 "use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIpAndLocation = async () => {
            try {
                const ipRes = await fetch('../../api/getIp');
                const ipData = await ipRes.json();
                const ip = ipData.ip;

                const locationRes = await fetch('../../api/getLocation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ip }),
                });
                const locationData = await locationRes.json();
                setCountry(locationData.country);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchIpAndLocation();
    }, []);

    return (
        <CountryContext.Provider value={{ country, loading, error }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry = () => {
    return useContext(CountryContext);
};
