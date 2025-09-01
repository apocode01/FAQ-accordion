const answers = document.querySelectorAll(`.answer`);
const buttons = document.querySelectorAll(`.button`);

answers.forEach(answer => {
    answer.classList.add('hidden');
})

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const answer = document.getElementById(`answer${index+1}`);
        answer.classList.toggle('hidden');
    })
})