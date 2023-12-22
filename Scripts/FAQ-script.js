    document.addEventListener('DOMContentLoaded', function () {
        // Get all FAQ questions
        const faqQuestions = document.querySelectorAll('.faq-question');

        // Add event listener to each question
        faqQuestions.forEach(function (question) {
            question.addEventListener('mouseover', function () {
                // Toggle the 'show' class on the corresponding answer
                const answer = question.nextElementSibling;
                answer.classList.toggle('show');
            });

            question.addEventListener('mouseout', function () {
                // Toggle the 'show' class on mouseout
                const answer = question.nextElementSibling;
                answer.classList.toggle('show');
            });
        });
    });