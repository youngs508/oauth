let elInputUsername = document.querySelector('#username')

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')


elInputUsername.onkeyup = function() { // event handler
    if(isMoreThan4Length(elInputUsername.value)) {
        // 성공 메시지가 보여야 한다.
        elSuccessMessage.classList.remove('hide')

        // 실패 메시지가 가려져야 한다.
        elFailureMessage.classList.add('hide')
    }
    else {
        // 성공 메시지가 가려져야 한다.
        elSuccessMessage.classList.add('hide')

        // 실패 메시지가 보여야 한다.
        elFailureMessage.classList.remove('hide')
    }
}

function isMoreThan4Length(value) {
    return value.length >= 4;
    
}