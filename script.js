let nameOne = prompt("Кто Бабка?")
let nameTwo = prompt("Кто Дед?")
/*let nameThree = prompt("Кто Колобок?")
let nameFour = prompt("Кто Заяц?")
let nameFive = prompt("Кто Волк?")
let nameSix = prompt("Кто ЛИса?")*/
alert(`${nameOne}
${nameTwo}`)


/*let div = document.createElement('div')
div.innerHTML = `Привет  ${nameTwo}`
document.body.append(div)*/
elementList = document.querySelectorAll("h3");
for (let i = 0; i < elementList.length; i++) {
    if(elementList[i].innerHTML == 'БАБКА')
    {
        elementList[i].innerHTML = nameOne
    }
    if(elementList[i].innerHTML == 'ДЕД')
    {
        elementList[i].innerHTML = nameTwo
    }
}
