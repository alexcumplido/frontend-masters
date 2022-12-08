{
    const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items';
    const apiKey = generateKey()
    const settings = { 
            method: 'GET', 
            mode:'cors', 
            headers: { 'X-API-Key': apiKey,  'Content-Type': 'application/json'}
        }

    function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++){
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
    }

    function logItems(items) {
        for (const item of items) {
            console.log(item.name)
        } 
    }

    async function requestData(url) {
        const httpRequest = fetch(itemURL,settings)
        .then( function onfullfilled (httpResponse){
            return httpResponse.json();
        })
        .catch(function onrejected(httpResponse){
            console.log(httpResponse);
        })
        return httpRequest;
    }   

    async function renderItems() {
        requestData()
        .then(function onfullfilled(httpResponse){
            logItems(httpResponse);
        })
        .catch(function onrejected(httpResponse){
            console.log(httpResponse);
        })

    }
    
    renderItems();
}