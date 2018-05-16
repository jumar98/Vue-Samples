//Constantes
const price_phone = 100.00
const tax_price = 0.15
const accesories = 20.00

//Declaracion de variables
let account_bank = 500.00
let amount_phone = 0
let cost_purchase = 0;

amount_phone = prompt("Ingrese cuantos telefonos quiere comprar")

for(let i = 0; i < amount_phone; i++){
    cost_purchase += price_phone
    let res = prompt("Quiere comprar el accesorio para el telefono (S/N)")
    if(res === "S"){
        cost_purchase += accesories
    }
}

checkMoney(account_bank,tax(cost_purchase,tax_price))


function tax(purchase, tax){
    return purchase = purchase + (purchase*tax)
}

function formated(amount_total){
    return `$${amount_total}`
}

function checkMoney(account, amount_total){
    if(amount_total > account){
        let dif = amount_total-account  
        alert("Costo total:"+formated(amount_total)+"\nNo puede comprar esta cantidad le faltan "+formated(dif))
    }else{
        let dif = account - amount_total
        alert("Costo total:"+formated(amount_total)+"\nCompra realizada exitosamente, dispone de "+formated(dif))
    }
}