let globalZIndex = 1000;
const backdrop = document.getElementById('modal-backdrop');

function openModal(modalId) {
    const modal = document.getElementById(modalId);

    globalZIndex++;

    modal.style.zIndex = globalZIndex;
    modal.style.opacity = '1';

    backdrop.style.opacity = '1';
    backdrop.style.pointerEvents = 'auto';
}

function bringToFront(element) {
    globalZIndex++;
    element.style.zIndex = globalZIndex;
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.zIndex = '-1';
        modal.style.opacity = '0';
    });

    backdrop.style.opacity = '0';
    backdrop.style.pointerEvents = 'none';
}

function closeSpecificModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.zIndex = '-1';
    modal.style.opacity = '0';

}

backdrop.addEventListener('click', () => {
    closeAllModals();
});