document.querySelectorAll('.accordian .question').forEach(question => {
    question.addEventListener('click', () => {
        const accordian = question.parentElement;

        // Toggle active class
        accordian.classList.toggle('active');

        // Close other accordions
        document.querySelectorAll('.accordian').forEach(item => {
            if (item !== accordian) {
                item.classList.remove('active');
            }
        });
    });
});
