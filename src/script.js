function buttonClicked() {
    console.log('button clicked');
    document.getElementById('lhs').style.background = 'lightcyan';
    document.getElementById('rhs').style.background = 'lightcyan';

    const lhs = document.getElementById('lhs').value;
    if (/\D/.test(lhs)) {
        document.getElementById('results').value += 'left operator not valid\n';
        document.getElementById('lhs').style.background = 'red';
        return;
    }
    const rhs = document.getElementById('rhs').value;
    if (/\D/.test(rhs)) {
        document.getElementById('results').value += 'right operator not valid\n';
        document.getElementById('rhs').style.background = 'red';
        return;
    }

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
            if(rhs==0.0)
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