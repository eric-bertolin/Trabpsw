document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('profile-popup');
    const sidebar = document.getElementById('sidebar');
    const profBtn = document.getElementById('prof-btn');
    const closePopup = document.getElementById('close-popup');
    const menuBtn = document.getElementById('menu-btn');
    const closeSidebar = document.getElementById('close-btn');

    popup.classList.remove('show');
    sidebar.classList.remove('show');

    profBtn.addEventListener('click', () => {
        popup.classList.add('show');
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('show');
        }
        if (e.target === addPopup) {
            addPopup.classList.remove('show');
        }
    });

    // Botão de adicionar
    const addBtn = document.getElementById('addbtn');
    const addPopup = document.getElementById('add-popup');
    const closeAddPopup = document.getElementById('close-add-popup');

    if (addBtn && addPopup && closeAddPopup) {
        addBtn.addEventListener('click', () => {
            addPopup.classList.add('show');
        });

        closeAddPopup.addEventListener('click', () => {
            addPopup.classList.remove('show');
        });
    }
});