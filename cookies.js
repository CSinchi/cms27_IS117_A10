function onLoad() {
    let cookieInput = prompt("Please enter cookie value:");
    setCookie(cookieInput);

    const cookieList = getCookies();
    console.log(cookieList);
    alert(`Stored cookie value: ${cookieList}`);
   
}

function setCookie(value) {
    document.cookie = "cookieInput=" + value;
}

function getCookies() {
    let cookies = document.cookie;
    console.log(cookies);
    return cookies;
}

function deleteCookie() {
    document.cookie = "cookieInput=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload(); 
}