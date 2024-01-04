let currentGame

document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM LOADED")

    fetch("http://localhost:3000/games")
        .then(response => response.json())
        .then(gamesData => {
            displayGames(gamesData)
            showDetails(gamesData[0])
            submitScore()
        })

    function displayGames(gamesData) {
        let gamesList = document.querySelector(".game-list")

        gamesData.forEach(game => {
            // console.log(game)

            let gameNav = document.createElement("h5")
            gameNav.textContent = `${game.name} (${game.manufacturer_name})`
            gamesList.appendChild(gameNav)
            gameNav.addEventListener("click", () => {
                // console.log(game)
                showDetails(game)
            }) 
        });
    }

    function showDetails(gamesData) {
        currentGame = gamesData
        const detailImage = document.querySelector("#detail-image")
        detailImage.src = gamesData.image

        const detailTitle = document.querySelector("#detail-title")
        detailTitle.textContent = gamesData.name

        const detailHighScore = document.querySelector("#detail-high-score")
        detailHighScore.textContent = gamesData.high_score        
    }

    function submitScore() {
        let scoreForm = document.querySelector("#high-score-form")
        scoreForm.addEventListener("submit", (event) => {
            event.preventDefault()
            currentGame.high_score = event.target["score-input"].value
            showDetails(currentGame)
        })
    }
})