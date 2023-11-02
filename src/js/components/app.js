const input = document.querySelector('.form-field__input');
const submitBtn = document.querySelector('.form-field__btn');
const container = document.querySelector('.main-wrapper__container');
const form = document.querySelector('.form-field')
const list = document.querySelector('.list')
const validate = document.querySelector('.form-field__validate')


submitBtn.addEventListener('click', async e => {
    e.preventDefault();
    const quantity = input.value;
    list.textContent = "";
    form.reset();


    if (!quantity) {
        validate.classList.add('form-field__validate--active');
        return;
    } else {
        validate.classList.remove('form-field__validate--active');
    }

    try {
        const response = await fetch(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`)
        const {data} =  await response.json();

        if (data.length > 0) {
            data.forEach(item => {
                list.insertAdjacentHTML('afterbegin', teampale(item.name));
            })
        } else {
            list.textContent = "No items";
        }

    } catch (err) {
        console.log(`Error:${err}`);
    }

});


function teampale(name) {
    return  `
    <li class="list__item">${name}</li>
    `
};
