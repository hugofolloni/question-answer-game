var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');


function shuffle(array){
    var btns = ['Pedro Alvares Cabral', 'Cristovão Colombo', 'Leonardo da Vinci', 'D. Pedro I', 'Pero Vaz de Caminha']
    btns = btns.sort(() => Math.random() - 0.5)
    btn1.value = btns[0];
    btn2.value = btns[1];
    btn3.value = btns[2];
    btn4.value = btns[3];
    btn5.value = btns[4];
}

window.onload = shuffle

btn1.addEventListener('click', checkButton1);
btn2.addEventListener('click', checkButton2);
btn3.addEventListener('click', checkButton3);
btn4.addEventListener('click', checkButton4);
btn5.addEventListener('click', checkButton5);

function checkButton1(){
    if(btn1.value == 'Pedro Alvares Cabral'){
        return acerto();
    } else {
        return erro();
    }
}

function checkButton2(){
    if(btn2.value == 'Pedro Alvares Cabral'){
        return acerto();
    } else {
        return erro();
    }
}

function checkButton3(){
    if(btn3.value == 'Pedro Alvares Cabral'){
        return acerto();
    } else {
        return erro();
    }
}

function checkButton4(){
    if(btn4.value == 'Pedro Alvares Cabral'){
        return acerto();
    } else {
        return erro();
    }
}

function checkButton5(){
    if(btn5.value == 'Pedro Alvares Cabral'){
        return acerto();
    } else {
        return erro();
    }
}

function acerto(){
    var msg = document.createElement('p');
    msg.textContent = 'VOCÊ ACERTOU!';
    msg.style.cssText = "color: green; margin-top: 2vh; font-family: 'Poppins'; font-size: 28px; font-weight: 600;"
    document.body.appendChild(msg);
    var prosseguir = document.createElement('a');
    prosseguir.textContent = 'Próxima pergunta!'
    prosseguir.href = 'q2.html';
    prosseguir.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: rgb(236, 232, 232); border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  #1b2029; transition: all 0.3s ease; color:#1b2029; cursor:pointer; padding-top: 4px'
    prosseguir.addEventListener('mouseover', function(event){
        event.target.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: #1b2029; border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  rgb(236, 232, 232); transition: all 0.3s ease; color:rgb(236, 232, 232); cursor:pointer; padding-top: 4px'});
    prosseguir.addEventListener('mouseout', function(event){
        event.target.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: rgb(236, 232, 232); border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  #1b2029; transition: all 0.3s ease; color:#1b2029; cursor:pointer; padding-top: 4px';});
    document.body.appendChild(prosseguir);
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}


function erro(){
    var msgerro = document.createElement('p');
    msgerro.textContent = "Voce errou!";
    msgerro.style.cssText = "color: red; margin-top: 2vh; font-family: 'Poppins'; font-size: 28px; font-weight: 600;"
    document.body.appendChild(msgerro);
    var voltar = document.createElement('a');
    voltar.textContent = 'Recomeçar!'
    voltar.href = 'index.html';
    voltar.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: rgb(236, 232, 232); border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  #1b2029; transition: all 0.3s ease; color:#1b2029; cursor:pointer; padding-top: 4px'
    voltar.addEventListener('mouseover', function(event){
        event.target.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: #1b2029; border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  rgb(236, 232, 232); transition: all 0.3s ease; color:rgb(236, 232, 232); cursor:pointer; padding-top: 4px'});
    voltar.addEventListener('mouseout', function(event){
        event.target.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: rgb(236, 232, 232); border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  #1b2029; transition: all 0.3s ease; color:#1b2029; cursor:pointer; padding-top: 4px';});
    document.body.appendChild(voltar);
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}