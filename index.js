function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value //arredondamento
}

function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
}


function update() {
    let bill = Number(document.getElementById('yourBill').value)// recebe bill para inserir no cálculo
    let tipPercent = document.getElementById('tipInput').value // recebe a porcentagem do tip
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100) //faz a conta da porcentagem 
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}
