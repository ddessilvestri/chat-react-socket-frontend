const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = async ( endpoint,data,method='GET' )=> {
    const url = `${baseUrl}/${endpoint}`

    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: method !== 'GET' ? JSON.stringify(data) : undefined
        }

        const resp = await fetch(url, options);
        const json = await resp.json();
        return json;

    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }

    // if (method ==='GET'){
    //     const resp = await fetch(url);
    //     return await resp.json();
    // }else{
    //     const resp = await fetch(url,{
    //         method,
    //         headers:{
    //             'Content-type':'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
        
    //     return await resp.json();
    // }


}