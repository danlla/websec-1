function buttonClicked() {
    const lhs = document.getElementById('lhs').value;
    const rhs = document.getElementById('rhs').value;

    const operation = document.getElementById('select').value;
    let res;
    switch (operation) {
        case '+':
            res = parseFloat(lhs) + parseFloat(rhs);
            break;
        case '-':
            res = parseFloat(lhs) - parseFloat(rhs);
            break;
        case '*':
            res = parseFloat(lhs) * parseFloat(rhs);
            break;
        case '/':
            if((rhs-0.0)<Number.EPSILON)
            {
                document.getElementById('results').value += 'right operator is zero\n';
                document.getElementById('rhs').style.background = 'red';
                return;
            }
            res = parseFloat(lhs) / parseFloat(rhs);
            break;
    }
    document.getElementById('results').value += res + '\n';
}

function inputChanged(){
    document.getElementById('lhs').style.background = 'lightcyan';
    document.getElementById('rhs').style.background = 'lightcyan';
    document.getElementById('button').disabled=false;

    const lhs = document.getElementById('lhs').value;
    if (isNaN(lhs)) {
        document.getElementById('results').value += 'left operator not valid\n';
        document.getElementById('lhs').style.background = 'red';
        document.getElementById('button').disabled=true;
        return;
    }
    const rhs = document.getElementById('rhs').value;
    if (isNaN(rhs)) {
        document.getElementById('results').value += 'right operator not valid\n';
        document.getElementById('rhs').style.background = 'red';
        document.getElementById('button').disabled=true;
        return;
    }
}