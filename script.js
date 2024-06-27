document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');
    const playersFilter = document.getElementById('players');
    const propsFilter = document.getElementById('props');

    let games = [];

    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            games = data;
            displayGames(games);
        });

    playersFilter.addEventListener('change', () => {
        filterGames();
    });

    propsFilter.addEventListener('change', () => {
        filterGames();
    });

    function filterGames() {
        const playersValue = playersFilter.value;
        const propsValue = propsFilter.value;

        let filteredGames = games;

        if (playersValue !== 'all') {
            filteredGames = filteredGames.filter(game => game.players.includes(playersValue));
        }

        if (propsValue !== 'all') {
            filteredGames = filteredGames.filter(game => game.props.includes(propsValue));
        }

        displayGames(filteredGames);
    }

    function displayGames(games) {
        gameList.innerHTML = '';
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.innerHTML = `
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <a href="game.html?id=${game.id}">查看詳情</a>
            `;
            gameList.appendChild(gameItem);
        });
    }
});
