// Отримуємо всі елементи з номером по порядку, включаючи заголовки, абзаци та окремі елементи списків
const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');

// Додаємо обробник подій на кожен елемент
elements.forEach((element, index) => {
    element.id = `element-${index + 1}`; // встановлюємо унікальний id для кожного елемента
    element.addEventListener('click', () => {
        // Перевіряємо, чи номер по порядку кратний 5 (для кожного 5-го елемента)
        if ((index + 1) % 5 === 0) {
            // Змінюємо колір фону та тексту для елемента, використовуючи getElementById()
            document.getElementById(`element-${index + 1}`).classList.toggle('lighted');
        } else {
            // Змінюємо колір фону та тексту за допомогою querySelector()
            document.querySelector(`#element-${index + 1}`).classList.toggle('highlighted');
        }
    });

    // Додаємо обробник подій для подвійного кліку
    element.addEventListener('dblclick', () => {
        // Видаляємо клас 'highlighted' та 'lighted', якщо вони присутні
        element.classList.remove('highlighted', 'lighted');
    });
});




const image = document.querySelector('img');

// Додати зображення
document.getElementById('add-image').addEventListener('click', () => {
    image.style.width = `500px`;
});

// Збільшити зображення
document.getElementById('increase-image').addEventListener('click', () => {
    image.style.width = `${image.offsetWidth * 1.1}px`;
});

// Зменшити зображення
document.getElementById('decrease-image').addEventListener('click', () => {
    image.style.width = `${image.offsetWidth * 0.9}px`;
});

// Видалити зображення
document.getElementById('remove-image').addEventListener('click', () => {
    image.style.width = `0px` ;
});