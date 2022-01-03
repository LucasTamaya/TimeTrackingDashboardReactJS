// Hook perso afin de fetcher de la data depuis une url données
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortControl = new AbortController(); // Permet de détecter les AbortError

        fetch(url, { signal: abortControl.signal })
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                // AbortError désigne le fait de changer de composant, pendant une requête de données. Si cette erreur survient, on ne fait rien
                if (err.name === "AbortError") {
                }
                else {
                    setError(err.message);
                };
            });

        return () => abortControl.abort();
    })

    return {
        data,
        error,
    };

};

export default useFetch;