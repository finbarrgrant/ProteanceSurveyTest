function submitPrimary() {
    const mainReason = document.getElementById('main-reason').value;
    
    if (!mainReason) {
        alert('Please select a reason');
        return;
    }

    // Hide primary question
    document.getElementById('primary-question').style.display = 'none';
    
    // Show relevant follow-up question
    document.getElementById(`${mainReason}-followup`).style.display = 'block';
}

function submitFollowup(type) {
    const detail = document.getElementById(`${type}-detail`).value;
    
    if (!detail) {
        alert('Please select an option');
        return;
    }

    // Collect all survey data
    const surveyData = {
        primaryReason: document.getElementById('main-reason').value,
        followupResponse: detail
    };

    // You can send this data to your server here
    console.log('Survey Responses:', surveyData);
    alert('Thank you for your feedback!\n\n' + JSON.stringify(surveyData, null, 2));
    
    // Hide the follow-up question
    document.getElementById(`${type}-followup`).style.display = 'none';
}