/*jslint browser */

// Rotate cross into a close button
function mbpRotateCross(element) {
    'use strict';

    if (element.parentNode.classList.contains('mbp-rotated')) {
        element.parentNode.classList.remove('mbp-rotated');
        element.style.transform = 'none';
    } else {
        element.parentNode.classList.add('mbp-rotated');
        element.style.transform = 'rotate(45deg)';
    }
}

// Move close button in and out of modal
function mbpMoveButton(modal, button) {
    'use strict';
    if (modal.contains(button)) {
        modal.previousElementSibling.appendChild(button);
    } else {
        modal.insertAdjacentElement('afterbegin', button);
    }
}

// Toggle modal when cross is clicked
function mbpOpenModal(button) {
    'use strict';

    var task = button.closest('.task');

    // If a modal is open, remove it
    var modal;
    if (task.querySelector('.task-text').nextElementSibling) {
        modal = task.querySelector('.task-text').nextElementSibling;
        mbpRotateCross(button);
        mbpMoveButton(modal, button.parentNode);
        modal.remove();
    } else {
        mbpRotateCross(button);
        modal = document.createElement('div');
        modal.innerHTML = task.innerHTML;
        modal.classList.toggle('task-modal');
        task.insertAdjacentElement('beforeend', modal);
        mbpMoveButton(modal, button.parentNode);
    }
}

// Listen for clicks on crosses
function mbpListenToButtons() {
    'use strict';
    var buttons = document.querySelectorAll('.task-expand svg');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            mbpOpenModal(event.currentTarget);
        });
    });
}

// Start
mbpListenToButtons();
