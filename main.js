// Check if consent has been given
        if (!localStorage.getItem('consentGiven')) {
            // Show modal if no consent
            document.getElementById('consentModal').style.display = 'block';
        }

        // Get modal and close button
        var modal = document.getElementById('consentModal');
        var closeBtn = document.getElementsByClassName('close')[0];

        // Close modal when close button is clicked
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        // Handle form submission
        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            var consentChecked = document.getElementById('personal_data').checked;
            var privacyPolicyChecked = document.getElementById('privacy_policy').checked;
            console.log("Consent:", consentChecked);
            console.log("Privacy:", privacyPolicyChecked);
            
            if (consentChecked && privacyPolicyChecked) {
                // Store consent in localStorage
                localStorage.setItem('consentGiven', 'true');
                
                // Hide modal
                modal.style.display = 'none';
                
                // Optional: Alert user or handle form data (e.g., send to server)
                alert('Thank you for signing up! Your consent has been recorded.');
            } 
            else {
                alert('Please check the consent box to proceed.');
            }
        });