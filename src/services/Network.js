export async function getJSON(url) {
    const token = JSON.parse(sessionStorage.getItem('token'))?.token;
    const result = fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => response.json())
    return result;
}

export async function putJSON(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.token;
    const result = fetch(url,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: option,
    }).then(response =>response.json());
    return result;
}

export async function postJSON(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.token;
    const result = fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: option,
    }).then(response =>response.json());
    return result;
}

export async function deleteJSON(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.token;
    const result = fetch(url,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: option,
    }).then(response =>response.json());
    return result;
}

