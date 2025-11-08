document.addEventListener("DOMContentLoaded",function(){
            const burger = document.querySelector('.burger');
            const mobileMenu=document.querySelector('.mobile-menu');

            burger.addEventListener('click', function(){
                this.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                if(mobileMenu.classList.contains('active')){
                    document.body.style.overflow='hidden';
                }
                else{
                    document.body.style.overflow='';
                }
            });
            const menuLinks = document.querySelectorAll('.mobile-menu a');
            menuLinks.forEach(link => {
                link.addEventListener('click',function(){
                    burger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow='';
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toogle__button');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const contentBlock = document.getElementById(targetId);
            
            // Закрываем все остальные блоки
            document.querySelectorAll('.content').forEach(block => {
                if (block.id !== targetId) {
                    block.classList.remove('show');
                    // Обновляем текст кнопок других блоков
                    const otherButton = document.querySelector(`[data-target="${block.id}"]`);
                    if (otherButton) {
                        otherButton.textContent = 'Подробнее';
                    }
                }
            });
            
            // Переключаем текущий блок
            if (contentBlock.classList.contains('show')) {
                // Закрываем блок
                contentBlock.classList.remove('show');
                this.textContent = 'Подробнее';
            } else {
                // Открываем блок
                contentBlock.classList.add('show');
                this.textContent = 'Свернуть';
                
                // Прокручиваем к открытому блоку
                contentBlock.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        });
    });
});