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

function handleTypeChange() {
    const selectedType = fieldTypeSelect.value;
    if (selectedType === "checkbox" || selectedType === "radio") {
        placeholderGroup.style.display = "none";
    } else {
        placeholderGroup.style.display = "block";
    }
}

function addField() {
    const type = fieldTypeSelect.value;
    const label = fieldLabelInput.value.trim();
    const placeholder = fieldPlaceholderInput.value.trim();

    if (!label) {
        alert("Please enter a label for the field.");
        fieldLabelInput.focus();
        return;
    }

    fieldCount++;
    const fieldId = "field_" + fieldCount;

    const fieldItem = document.createElement("div");
    fieldItem.className = "field-item";

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

    fieldHTML += `
        <button type="button" class="btn-delete" title="Delete Field" onclick="removeField(this)">✕</button>
    `;

    fieldItem.innerHTML = fieldHTML;

    fieldsContainer.appendChild(fieldItem);

    fieldLabelInput.value = "";
    fieldPlaceholderInput.value = "";
    fieldLabelInput.focus();

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

function clearAllFields() {
    const totalFields = fieldsContainer.querySelectorAll(".field-item").length;
    if (totalFields === 0) return;

    if (confirm("Are you sure you want to clear all fields?")) {
        fieldsContainer.innerHTML = "";
        updateUI();
    }
}


function updateUI() {
    const totalFields = fieldsContainer.querySelectorAll(".field-item").length;

    fieldCounter.textContent = `${totalFields} Field${totalFields === 1 ? "" : "s"}`;

    if (totalFields > 0) {
        emptyState.style.display = "none";
        formActions.classList.remove("hidden");
    } else {
        emptyState.style.display = "block";
        formActions.classList.add("hidden");
    }
}

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

fieldLabelInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addField();
    }
});

updateUI();