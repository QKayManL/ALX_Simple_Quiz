function checkAnswer() {
    // 1. Correct answer
    const correctAnswer = "4";

    // 2. Get user answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If user didn't select anything
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please choose an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // 3. Compare answers
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// 4. Add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
