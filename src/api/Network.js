export async function getJSON(url) {
    const result = fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    return result;
}