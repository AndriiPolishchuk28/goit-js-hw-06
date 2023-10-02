const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
    event.preventDefault();
    const data = {};
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email !== '' && password !== '') {
        data.email = email,
            data.password = password;
            console.log(data);
    } else {
        alert('Please fill out all fields')
    }
    form.reset();
})
