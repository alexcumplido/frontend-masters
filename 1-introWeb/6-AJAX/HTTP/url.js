


{
    function getDomainNameFromURL(url) {
        return url.hostname;
    }
    const urlObject = new URL('https://example.com/example-path');
    console.log(getDomainNameFromURL(urlObject));
    getDomainNameFromURL(urlObject) ;
}

{
    // URL parts
    function printURLParts(urlString) {
        const urlObj = new URL(urlString);
        const urlParts = {
            "protocol": urlObj.protocol, // required
            "username": urlObj.username, // optional
            "password": urlObj.password, // optional
            "hostname": urlObj.hostname, // required
            "port": urlObj.port, // if not given by default
            "port": urlObj.pathname, // if not given by default
            "search": urlObj.search, // optional
            "hash": urlObj.hash, // optional
        }
        console.log(urlString,urlParts)
        return urlParts;
    }

    const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
    printURLParts(fantasyQuestURL)
}

{
    function getMailtoLinkForEmail(email) {
        return `mailto:${email}`
    }   
    let email = 'slayer@fquest.app'
    console.log(getMailtoLinkForEmail(email));
}
