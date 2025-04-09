document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
    const numberInHeader = document.querySelector('.number_in_header');
    if (nav.classList.contains('open')) {
        document.body.classList.add('no-scroll'); // Добавляем класс, чтобы заблокировать прокрутку
        numberInHeader.style.display = 'none'; // Hide number_in_header when burger is open
    } else {
        document.body.classList.remove('no-scroll'); // Убираем класс, чтобы разблокировать прокрутку
        numberInHeader.style.display = 'block'; // Show number_in_header when burger is closed
    }
});
document.querySelectorAll('.content').forEach(content => {
    content.style.display = 'none';
});

const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Показываем текст
            this.textContent = 'Свернуть'; // Меняем текст кнопки на "Свернуть"
        } else {
            content.style.display = 'none'; // Скрываем текст
            this.textContent = 'Подробнее'; // Меняем текст кнопки на "Подробнее"
        }
    });
});