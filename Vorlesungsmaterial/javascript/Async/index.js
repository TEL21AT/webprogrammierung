function listPokemon() {
    var tableBody = document.getElementById('apiTable').getElementsByTagName('tbody')[0];
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(data => {
                        var row = tableBody.insertRow();

                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);

                        cell1.textContent = data.name;
                        var names = data.moves.map(function(obj) {
                            return obj.move.name;
                        });
                        cell2.textContent = names.join(', ');

                        var img = document.createElement('img');
                        img.src = data.sprites.front_default;
                        cell3.appendChild(img);
                    })
            });
        });
}

document.addEventListener('DOMContentLoaded', function () {
    listPokemon();
});