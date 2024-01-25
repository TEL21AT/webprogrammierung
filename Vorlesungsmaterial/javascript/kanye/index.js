function get_kanye() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then((data) => {
            document.getElementById('p2').innerHTML = data.quote;
        }).catch(error => console.error(error));
}