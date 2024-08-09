import {useState, useEffect} from 'react';

const useFetch = (url) =>  {
    const[data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(response =>{
            if(!response.ok){
                throw Error('could not fetch the data from the sentences API');
            }
            return response.json();
        })
        .then(data=>{
            setIsLoading(false);
            setData(data);
            setError(null)
        })
        .catch(err =>{
            setIsLoading(false);
            setError(err.message)
        })
    }, [url])

return { data, isLoading, error }



}

export default useFetch;