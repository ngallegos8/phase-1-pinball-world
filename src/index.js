/*   ISSUES
    1. submit button is causing a refresh even with preventDefault
    2. why does += operator vs = operator show the first game vs every game in each h5
    3. explain e.target.reset()

*/


document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM LOADED")
    // showGames(9)
})

let games = []

// function showGames (limit) {
//     fetch("http://localhost:3000/games")
//     .then (response => response.json())
//     .then (games => {
//         gamesData = games;
//         const showXGames = games.slice(0, limit)

//         showXGames.forEach((game) => {
//             displayGameList(game)
//         })
//     })
// }

fetch("http://localhost:3000/games")
    .then (response => response.json())
    .then (games => {
        gamesData = games;
        games.forEach((game) => {
            displayGameList(game)
        })
    })



    // function showMonsters(limit) {
    //     fetch("http://localhost:3000/monsters")
    //         .then(response => response.json())
    //         .then(monsters => {
    //             monstersData = monsters;
    //             const first50Monsters = monsters.slice(0, limit);
    
    //             first50Monsters.forEach(monster => {
    //                 renderMonsters(monster);
    //             });
    //         });
    // }

function displayGameList(game) {
    const gamesList = document.querySelector(".game-list")

    const newName = document.createElement("h5");
   
    gamesData.forEach(game => {
        let newNameCreate = newName
        newName.textContent =`${game.name} (${game.manufacturer_name})`
        gamesList.append(newName)
        newNameCreate.addEventListener("click", (e) => {
            displayGameDetails(game)
        })
        
    })
}


// function displayGameList (games) {
//     const gamesList = document.querySelector(".game-list")

//     games.forEach( game => {
//         console.log(game)
//         let newName = document.createElement("h5")
//         newName.textContent =`${game.name} (${game.manufacturer_name})`
//         gameList.append(newName)
//     })
// }



// newName.addEventListener("click", (e) => {
//     displayGameDetails(game)
// })

let selectedGame

function displayGameDetails(game) {
    selectedGame = game
    
    const gameDetails = document.querySelector(".game-details")

    const detailName = document.querySelector("#detail-title")
    const detailImage = document.querySelector("#detail-image")
    const detailImageCreate = document.createElement("img")
    const detailHiScore = document.querySelector("#detail-high-score")

    detailName.textContent = game.name
    detailImage.src = game.image
    detailHiScore.textContent = game.high_score
    detailImage.append(detailImageCreate)
}

function inputHighScore() {
    let userScore = document.querySelector("#high-score-form")
    userScore.addEventListener("submit", (e) => {
        e.preventDefault()
        selectedGame.high_score = e.target["score-input"].value
        displayGameDetails(selectedGame)
        // e.target.reset()

    })
}




// STEPHEN'S SOLUTION CODE


// let currentGame;
// document.addEventListener("DOMContentLoaded",() =>  {
//     fetch("http://localhost:3000/games")
//     .then(response => response.json())
//     .then(gameData => {
//         buildNav(gameData)
//         showDetails(gameData[0])
//         submitForm()
//     })

//     function buildNav(gameData){
//         let gameList = document.querySelector(".game-list")
//         gameData.forEach(game => {
//             console.log(game)
//             let navItem = document.createElement("h5")
//             // navItem.textContent += game.name + " "+ "("+ game.manufacturer_name + ")"
//             navItem.textContent = `${game.name} (${game.manufacturer_name})`
//             gameList.appendChild(navItem)
//             navItem.addEventListener("click", ()=> {
//                 console.log(game)
//                 showDetails(game)
//             })

//         })
//     }

//     function showDetails(gameData){
//         currentGame = gameData
//         console.log(gameData)
//         const detailImage = document.querySelector("#detail-image")
//         detailImage.src = gameData.image

//         const detailTitle = document.querySelector("#detail-title")
//         detailTitle.textContent = gameData.name

//         const detailHighScore = document.querySelector("#detail-high-score")
//         // detailHighScore.textContent = gameData["high_score"]
//         detailHighScore.textContent = gameData.high_score


//     }

//     function submitForm(){
//         let form = document.querySelector("#high-score-form")
//         form.addEventListener("submit", (event)=> {
//             event.preventDefault()
//             currentGame.high_score = event.target["score-input"].value
//             showDetails(currentGame)
//         })
//     }
    
// })
