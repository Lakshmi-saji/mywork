function submitSurvey() {
    answers[currentQuestionIndex] = answerField.value.trim();

    // Construct a query string to pass answers as URL parameters
    const queryString = `?answers=${encodeURIComponent(JSON.stringify(answers))}`;
    
    // Redirect to the results page with the answers in the URL
    window.location.href = 'results.html' + queryString;
}
