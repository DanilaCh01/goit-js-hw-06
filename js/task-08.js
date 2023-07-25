const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', callback);

function callback(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Всі поля форми повинні бути заповнені");
    }
    
    const subData = {
        email: email.value,
        password: password.value,
    }
    console.log(subData);
    event.currentTarget.reset();
};
