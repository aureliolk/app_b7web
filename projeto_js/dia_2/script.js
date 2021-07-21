let timeDigital = document.querySelector('.digital')
let s_element = document.querySelector('.p_s')
let m_element = document.querySelector('.p_m')
let h_element = document.querySelector('.p_h')


function time_Digital() {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    timeDigital.innerHTML = `${fix_zero(hours)}:${fix_zero(minutes)}:${fix_zero(seconds)}`



    let s_deg = ((360 / 60) * seconds) - 90
    let m_deg = ((360 / 60) * minutes) - 90
    let h_deg = ((360 / 12) * hours) - 90

    s_element.style.transform = `rotate(${s_deg}deg)`
    m_element.style.transform = `rotate(${m_deg}deg)`
    h_element.style.transform = `rotate(${h_deg}deg)`

}

function fix_zero(time) {
    // if (time < 10) {
    //     return `0${time}`
    // } else {
    //     return time
    // }

    return time < 10 ? `0${time}` : time
}

setInterval(time_Digital, 1000)
time_Digital()