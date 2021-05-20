var link = document.getElementById('a');

function shuffle(array){
    var questions = ['q1.html', 'q2.html', 'q3.html', 'q4.html', 'q5.html']
    questions = questions.sort(() => Math.random() - 0.5)
    var qt1 = questions[0];
    var qt2 = questions[1];
    var qt3 = questions[2];
    var qt4 = questions[3];
    var qt5 = questions[4];
    link.href = qt1;
    localStorage.setItem("qt2", qt2);
    localStorage.setItem("qt3", qt3);
    localStorage.setItem("qt4", qt4);
    localStorage.setItem("qt5", qt5);
}

window.onload = shuffle

