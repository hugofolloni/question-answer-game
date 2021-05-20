var concluir = document.createElement('a');
concluir.textContent = 'Concluir jornada!'
concluir.href = 'index.html';
concluir.target = '_blank'
concluir.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: rgb(236, 232, 232); border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  #1b2029; transition: all 0.3s ease; color:#1b2029; cursor:pointer; padding-top: 4px'
concluir.addEventListener('mouseover', function(event){
    event.target.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: #1b2029; border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  rgb(236, 232, 232); transition: all 0.3s ease; color:rgb(236, 232, 232); cursor:pointer; padding-top: 4px'});
    concluir.addEventListener('mouseout', function(event){
    event.target.style.cssText = 'text-decoration: none; text-align: center; align-content: center; font-weight: 600; margin-top: 1vh; margin-bottom: 1vh; letter-spacing: 1px; font-size: 18px; background: rgb(236, 232, 232); border-radius: 30px; width: 30%; height: 40px; text-align: center; justify-content: center; border: 2px solid  #1b2029; transition: all 0.3s ease; color:#1b2029; cursor:pointer; padding-top: 4px';});
document.body.appendChild(concluir);