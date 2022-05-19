function contar(){
    let c = 1
    let n = Number(num.value)
    result.innerHTML = null

    while(c<=100){
        if(c % n == 0){
            result.innerHTML += `<strong><mark> ${c}</mark></strong>, `
        }else{
            result.innerHTML += `<del>${c}</del>, `
        }
        c++
    }
    return false
}