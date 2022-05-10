const buttonsum = document.getElementById('buttonsom')
const buttonzer = document.getElementById('buttonzer')
const resulbox = document.getElementById('textresult')
const box1 = document.getElementById('textbox1')
const box2 = document.getElementById('textbox2')

buttonsum.onclick = function(){ 
    v1 = Number(box1.value)
    v2 = Number(box2.value)
    let calc = v1 + v2
    resulbox.value = calc
    console.log(resulbox.value)
}

buttonzer.onclick = function(){ 
    resulbox.value = ""
    box1.value = ""
    box2.value = ""
}