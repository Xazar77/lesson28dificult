
const usd = document.getElementById('radioId1'),
    eur = document.getElementById('radioId2'),
    inputCurrency = document.getElementById('currencyId'),
    btn = document.querySelector('.convert'),
    result = document.getElementById('resultId');
// console.log(usd.checked);
// console.log(eur.checked);


const getData = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => renderValute(data));

};
getData('https://www.cbr-xml-daily.ru/daily_json.js');


const validate = (input) => {

    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.match(/^[0-9\.]+/g);
        
    });
};
validate(inputCurrency);

const renderValute = (data) => {

    let valute = data.Valute;
    let courseEur = valute.EUR.Value;
    let courseUsd = valute.USD.Value;


    console.log(courseEur);
    console.log(courseUsd);

    btn.addEventListener('click', () => {
        if (usd.checked && inputCurrency.value != '') {
           
            result.value = (inputCurrency.value * courseUsd).toFixed(2);
        }else if (eur.checked && inputCurrency.value != '') {
         
            result.value = (inputCurrency.value * courseEur).toFixed(2);
        }
     
    });
};