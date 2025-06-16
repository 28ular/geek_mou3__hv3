

const seasons = {
    winter:['december','january', 'february'],
    spring:['march','april','may'],
    summer:['june', ' july' , 'august'],
    autumn:['september','october','november']
};


const cloudy__btns = document.getElementById('cloudy__buttons')
const seasons__btns = document.getElementById('season__buttons')


for ( let season in seasons) {

    const button = document.createElement('button');
    button.classList.add('season__btn');
    button.textContent =  season;


    button.onclick = function () {
        showMonts(season);
    };

    seasons__btns.append(button)

}
function showMonts(season) {

    cloudy__btns.innerHTML = '';

    const months_1 = seasons[season];

    for (let i = 0; i < months_1.length; i++) {
        const monthButton = document.createElement('button');
        monthButton.textContent = months_1[i]
        monthButton.classList.add('month__btns');
        cloudy__btns.append(monthButton)

    }

}


