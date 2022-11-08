
const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6IkFkbWluQEciLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA5LzA5L2lkZW50aXR5L2NsYWltcy9hY3RvciI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IjIiLCJleHAiOjE2Njc3MjU1NDQsImlzcyI6Imh0dHBzOi8vd2ViYXBwLTIyMTAyNTEyNTczOC5henVyZXdlYnNpdGVzLm5ldC8iLCJhdWQiOiJodHRwczovL3dlYmFwcC0yMjEwMjUxMjU3MzguYXp1cmV3ZWJzaXRlcy5uZXQvIn0.2WdRN5uy4kN96OslmZkA0QKho8Wb-nydbIaZmiT6tk51AZGRE_UPKN6lK5rNCQpY1Niqqt6Oo8LTxxyxxwsLJA"
export async function getJSON(url) {
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

