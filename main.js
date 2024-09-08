var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
// Add More Skills Logic
(_a = document.getElementById("add-skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillContainer = document.getElementById("skills-container");
    if (!skillContainer) {
        console.error("Skills container not found.");
        return;
    }
    var firstSkillInput = document.querySelector("#skills-container input");
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
        alert("Please fill in the first skill before adding more.");
        return;
    }
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
    skillContainer.appendChild(skillInput);
});
// Event Listener for "Generate Resume" button
(_b = document.getElementById("resume-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    if (!validateFormFields()) {
        return;
    }
    // Capture form data
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDate = document.getElementById("graduation-date").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    // Display other dynamic content
    document.getElementById("display-name").textContent = userName;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-date").textContent = graduationDate;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    // Handle Profile Picture
    var profilePic = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById("display-profile-pic").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Collect and display skills
    var skillInputs = document.querySelectorAll("#skills-container input");
    var skills = [];
    skillInputs.forEach(function (input) {
        if (input.value.trim()) {
            skills.push(input.value);
        }
    });
    var displaySkills = document.getElementById("display-skill-list");
    if (displaySkills) {
        displaySkills.innerHTML = "";
        skills.forEach(function (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            displaySkills.appendChild(skillItem);
        });
    }
});
// Form Validation
function validateFormFields() {
    var isValid = true;
    var errorMessage = "";
    // Capture Input Fields
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var graduationDate = document.getElementById("graduation-date").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    // Validate user
    if (!userName) {
        isValid = false;
        errorMessage += "Name is required.\n";
    }
    // Validate user email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errorMessage += "Valid email is required.\n";
    }
    // Validate user phone number
    var phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        errorMessage += "Valid phone number is required.\n";
    }
    // Validate user degree
    if (!degree) {
        isValid = false;
        errorMessage += "Degree is required.\n";
    }
    // Validate institution
    if (!institution) {
        isValid = false;
        errorMessage += "Institution is required.\n";
    }
    // Validate graduation year
    if (!graduationDate) {
        isValid = false;
        errorMessage += "Graduation year is required.\n";
    }
    // Validate job title
    if (!jobTitle) {
        isValid = false;
        errorMessage += "Job Title is required.\n";
    }
    // Validate company
    if (!company) {
        isValid = false;
        errorMessage += "Company is required.\n";
    }
    // Validate start date
    if (!startDate) {
        isValid = false;
        errorMessage += "Start date is required.\n";
    }
    // Validate end date
    if (!endDate) {
        isValid = false;
        errorMessage += "End date is required.\n";
    }
    // Validate skills 
    var skillInputs = document.querySelectorAll("#skills-container input");
    if (skillInputs.length === 0 || !skillInputs[0].value.trim()) {
        isValid = false;
        errorMessage += "At least one skill is required.\n";
    }
    // Check if there are errors, show alert
    if (errorMessage) {
        alert(errorMessage);
    }
    // Otherwise return true and generate form
    return isValid;
}
// Initialize resumeData with default values
var resumeData = {
    name: "",
    email: "",
    phone: "",
    degree: "",
    institution: "",
    graduationYear: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    skills: [],
};
// Function to save changes made to resume data
function saveChanges(fieldId, value) {
    console.log("Field edited: ".concat(fieldId, ", New Value: ").concat(value));
    // Check if the field is an array (skills in this case)
    if (fieldId === "skills") {
        resumeData.skills = __spreadArray(__spreadArray([], resumeData.skills, true), [value], false); // Add new skill to the array
    }
    else {
        resumeData[fieldId] = value; // Update other fields with the new value
    }
    console.log("Updated resume data:", resumeData);
}
// Add an event listener for DOMContentLoaded to ensure elements are available
document.addEventListener("DOMContentLoaded", function () {
    // Capture all elements with contenteditable attribute set to true
    document.querySelectorAll("[contenteditable=true]").forEach(function (element) {
        // Add an input event listener to each of these elements
        element.addEventListener("input", function (event) {
            var target = event.target;
            // Call saveChanges with the id of the element and its new innerText
            saveChanges(target.id, target.innerText);
        });
    });
});
