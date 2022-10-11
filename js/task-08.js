const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    for (let inputIndex = 0; inputIndex < inputs.length; inputIndex += 1) {
        if (inputs[inputIndex].value === "") {
            alert("All fields must be filled!")
            return;
        }
    }
    console.log('hi!')
    event.currentTarget.reset();
}
