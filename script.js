const buttons = document.querySelectorAll(`.button`);

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const answer = document.getElementById(`answer${index+1}`);
        const plus = document.getElementById(`plus${index+1}`);
        const minus = document.getElementById(`minus${index+1}`);
        
        if (answer.style.maxHeight) {
            // collapse
            answer.style.maxHeight = null;
            answer.classList.remove("open");
            plus.style.display = "block";
            minus.style.display = "none";
            } 
        else {
            // expand
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add("open");
            plus.style.display = "none";
            minus.style.display = "block";
        }
    })
})