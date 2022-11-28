export async function getJSON(url) {
    const token = JSON.parse(sessionStorage.getItem('token'))?.Token;
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

export async function putForm(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.Token;
    const formData = new FormData();
    for (const item in option){
        formData.append(item, option[item]);
    }
    const result = fetch(url,{
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData,
    }).then(response =>response.json());
    return result;
}

export async function putJSON(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.Token;
    const result = fetch(url,{
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': `application/json-patch+json`,
        },
        body: JSON.stringify(option),
    }).then(response =>response.json());
    return result;
}

export async function postForm(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.Token;
    const formData = new FormData();
    for (const item in option){
        formData.append(item, option[item]);
    }
    const result = fetch(url,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData,
    }).then(response =>response.json());
    return result;
}

export async function postJSON(url, option){
    const token = JSON.parse(sessionStorage.getItem('token'))?.Token;
    console.log(option)
    const result = fetch(url,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': `application/json-patch+json`,
        },
        body: JSON.stringify(option),
    }).then(response =>response.json());
    return result;
}

export async function deleteJSON(url){
    const token = JSON.parse(sessionStorage.getItem('token'))?.Token;
    const result = fetch(url,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    }).then(response =>response.json());
    return result;
}

