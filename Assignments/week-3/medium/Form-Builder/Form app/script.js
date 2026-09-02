// ==========================================================================
// Dynamic Form Builder - Beginner JavaScript
// ==========================================================================

// Global counter for unique field IDs
let fieldCount = 0;

// DOM Elements
const fieldTypeSelect = document.getElementById("field-type");
const fieldLabelInput = document.getElementById("field-label");
const fieldPlaceholderInput = document.getElementById("field-placeholder");
const placeholderGroup = document.getElementById("placeholder-group");
const fieldsContainer = document.getElementById("fields-container");
const emptyState = document.getElementById("empty-state");
const fieldCounter = document.getElementById("field-counter");
const formActions = document.getElementById("form-actions");
const dynamicForm = document.getElementById("dynamic-form");

/**
 * Handles toggling placeholder input visibility based on chosen field type
 */
function handleTypeChange() {
    const selectedType = fieldTypeSelect.value;
    // Checkbox and Radio do not need placeholder inputs
    if (selectedType === "checkbox" || selectedType === "radio") {
        placeholderGroup.style.display = "none";
    } else {
        placeholderGroup.style.display = "block";
    }
}

/**
 * Adds a new input field to the live form preview
 */
function addField() {
    const type = fieldTypeSelect.value;
    const label = fieldLabelInput.value.trim();
    const placeholder = fieldPlaceholderInput.value.trim();

    // 1. Validation: Ensure label is not empty
    if (!label) {
        alert("Please enter a label for the field.");
        fieldLabelInput.focus();
        return;
    }

    // 2. Increment unique counter
    fieldCount++;
    const fieldId = "field_" + fieldCount;

    // 3. Create the container div for this field
    const fieldItem = document.createElement("div");
    fieldItem.className = "field-item";

    // 4. Generate HTML according to field type
    let fieldHTML = "";

    if (type === "text" || type === "number" || type === "email") {
        fieldHTML = `
            <label class="field-label" for="${fieldId}">${label}</label>
            <input type="${type}" id="${fieldId}" name="${fieldId}" placeholder="${placeholder || 'Enter ' + label.toLowerCase() + '...'}" />
        `;
    } else if (type === "textarea") {
        fieldHTML = `
            <label class="field-label" for="${fieldId}">${label}</label>
            <textarea id="${fieldId}" name="${fieldId}" placeholder="${placeholder || 'Enter ' + label.toLowerCase() + '...'}"></textarea>
        `;
    } else if (type === "checkbox") {
        fieldHTML = `
            <label class="choice-wrapper" for="${fieldId}">
                <input type="checkbox" id="${fieldId}" name="${fieldId}" />
                <span>${label}</span>
            </label>
        `;
    } else if (type === "radio") {
        fieldHTML = `
            <label class="choice-wrapper" for="${fieldId}">
                <input type="radio" id="${fieldId}" name="preview_radio_group" />
                <span>${label}</span>
            </label>
        `;
    }

    // 5. Append Delete button to allow removing this specific field
    fieldHTML += `
        <button type="button" class="btn-delete" title="Delete Field" onclick="removeField(this)">✕</button>
    `;

    fieldItem.innerHTML = fieldHTML;

    // 6. Append to the preview container
    fieldsContainer.appendChild(fieldItem);

    // 7. Reset inputs and set focus back
    fieldLabelInput.value = "";
    fieldPlaceholderInput.value = "";
    fieldLabelInput.focus();

    // 8. Update preview UI (counts and empty state)
    updateUI();
}

/**
 * Removes a specific field from the preview
 * @param {HTMLElement} button - The clicked delete button
 */
function removeField(button) {
    const fieldItem = button.closest(".field-item");
    if (fieldItem) {
        fieldItem.remove();
        updateUI();
    }
}

/**
 * Clears all fields from the preview form
 */
function clearAllFields() {
    const totalFields = fieldsContainer.querySelectorAll(".field-item").length;
    if (totalFields === 0) return;

    if (confirm("Are you sure you want to clear all fields?")) {
        fieldsContainer.innerHTML = "";
        updateUI();
    }
}

/**
 * Updates UI counter and empty state visibility
 */
function updateUI() {
    const totalFields = fieldsContainer.querySelectorAll(".field-item").length;

    // Update field counter badge
    fieldCounter.textContent = `${totalFields} Field${totalFields === 1 ? "" : "s"}`;

    // Toggle empty state & form action buttons
    if (totalFields > 0) {
        emptyState.style.display = "none";
        formActions.classList.remove("hidden");
    } else {
        emptyState.style.display = "block";
        formActions.classList.add("hidden");
    }
}

/**
 * Handle form submission in the preview
 */
dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(dynamicForm);
    const entries = {};

    for (let [key, value] of formData.entries()) {
        entries[key] = value;
    }

    alert("Form submitted successfully! Check console for form data.");
    console.log("Submitted Form Data:", entries);
});

// Allow pressing 'Enter' key in label input to quickly add field
fieldLabelInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addField();
    }
});

// Initial UI setup on page load
updateUI();