import { useState, useEffect } from "react";




const useApiFetch = (URL) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

  

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    setError('Failed to fetch');
                } else {
                    const result = await response.json();
                    setData(result.data);
                    setError(null); // Clear error on success
                }
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };

        fetchData();
    }, [URL]);

    return {
        data,
        error,
        loading,
    };
};

export default useApiFetch;



// import React, { useState, useEffect } from "react";

// function App() {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
    
//     const URL = "https://api.example.com/data"; // Replace with your API URL

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(URL);

//                 if (!response.ok) {
//                     setError('Failed to fetch');
//                 } else {
//                     const result = await response.json();
//                     setData(result.data);
//                     setError(null); // Clear error on success
//                 }
//             } catch (err) {
//                 setError(err.message);
//             }
//             setLoading(false);
//         };

//         fetchData();
//     }, [URL]);

//     return (
//         <div>
//             <h1>API Fetch Example</h1>
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//             <ul>
//                 {data.map(item => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;
