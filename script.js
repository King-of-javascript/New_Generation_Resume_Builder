let educationCount = 1;
let experienceCount = 1;

function addEducation() {
    educationCount++;
    const educationFields = document.getElementById('educationFields');
    const newEducationGroup = document.createElement('div');
    newEducationGroup.className = 'educationGroup';
    newEducationGroup.innerHTML = `
        <label for="college${educationCount}">College Name:</label>
        <input type="text" id="college${educationCount}" name="college${educationCount}" placeholder="Enter your college name" required><br>
        
        <label for="year${educationCount}">Year of Graduation:</label>
        <input type="text" id="year${educationCount}" name="year${educationCount}" placeholder="Enter year of graduation" required><br>
        
        <label for="education${educationCount}">Education Details:</label>
        <textarea id="education${educationCount}" name="education${educationCount}" placeholder="Enter details about your education" required></textarea><br>
    `;
    educationFields.appendChild(newEducationGroup);
}

function addExperience() {
    experienceCount++;
    const experienceFields = document.getElementById('experienceFields');
    const newExperienceGroup = document.createElement('div');
    newExperienceGroup.className = 'experienceGroup';
    newExperienceGroup.innerHTML = `
        <label for="company${experienceCount}">Company Name:</label>
        <input type="text" id="company${experienceCount}" name="company${experienceCount}" placeholder="Enter company name" required><br>
        
        <label for="workDates${experienceCount}">Work Dates:</label>
        <input type="text" id="workDates${experienceCount}" name="workDates${experienceCount}" placeholder="Enter work dates" required><br>
        
        <label for="experience${experienceCount}">Work Experience Details:</label>
        <textarea id="experience${experienceCount}" name="experience${experienceCount}" placeholder="Enter details about your work experience" required></textarea><br>
        
        <label for="achievements${experienceCount}">Achievements:</label>
        <textarea id="achievements${experienceCount}" name="achievements${experienceCount}" placeholder="Enter any achievements"></textarea><br>
    `;
    experienceFields.appendChild(newExperienceGroup);
}

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (confirm("Are you sure you want to generate the resume?")) {
        // Collect input values
        const firstName = document.getElementById('firstName').value;
        const familyName = document.getElementById('familyName').value;

        // Generate resume preview HTML
        const resumePreview = `
            <div class="fullName">${firstName} ${familyName}</div>
            <h3>Education</h3>
            ${getEducationPreview()}
            <h3>Work Experience</h3>
            ${getExperiencePreview()}
            <h3>Skills</h3>
            <p>${document.getElementById('skills').value}</p>
        `;

        // Display preview
        document.getElementById('resumePreview').innerHTML = resumePreview;
    }
});

function getEducationPreview() {
    let educationHTML = '';
    for (let i = 1; i <= educationCount; i++) {
        const college = document.getElementById(`college${i}`).value;
        const year = document.getElementById(`year${i}`).value;
        const details = document.getElementById(`education${i}`).value;
        educationHTML += `
            <div>
                <h4>${college} (${year})</h4>
                <p>${details}</p>
            </div>
        `;
    }
    return educationHTML;
}

function getExperiencePreview() {
    let experienceHTML = '';
    for (let i = 1; i <= experienceCount; i++) {
        const company = document.getElementById(`company${i}`).value;
        const workDates = document.getElementById(`workDates${i}`).value;
        const details = document.getElementById(`experience${i}`).value;
        const achievements = document.getElementById(`achievements${i}`).value;
        experienceHTML += `
            <div>
                <h4>${company} (${workDates})</h4>
                <p>${details}</p>
                ${achievements ? `<p><strong>Achievements:</strong> ${achievements}</p>` : ''}
            </div>
        `;
    }
    return experienceHTML;
}