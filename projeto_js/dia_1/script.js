document.body.addEventListener('keyup', (event) => {
    var key_board = event.code.toLowerCase()
    clickKey(key_board)
})

document.querySelector('#play').addEventListener('click', () => {
    let song = document.querySelector('#input').value
    let songArry = song.split('')
    playComposition(songArry)
})

function clickKey(key) {
    let key_board = document.querySelector(`[data-key='${key}']`)
    let audio = document.querySelector(`#s_${key}`)

    if (key_board) {
        key_board.classList.add('active')
        setTimeout(() => {
            key_board.classList.remove('active')
        }, 300)
    }

    if (audio) {
        audio.currentTime = 0
        audio.play()
    }
}

function playComposition(songArray) {
    let wait = 0

    for (let songItem of songArray) {

        setTimeout(() => {
            clickKey(`key${songItem}`)
        }, wait)

        wait += 200
    }
}