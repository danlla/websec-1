function buttonClicked() {
    console.log('button clicked');

    const lhs = document.getElementById('lhs').value;
    if (/\D/.test(lhs)){
        document.getElementById('textarea').innerText += 'left operator not valid';
        return;
    }
    const rhs = document.getElementById('rhs').value;
    if (/\D/.test(rhs)){
        document.getElementById('textarea').innerText += 'right operator not valid';
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
            res = parseFloat(lhs) / parseFloat(rhs);
            break;
    }

    document.getElementById('textarea').innerText = res;
}