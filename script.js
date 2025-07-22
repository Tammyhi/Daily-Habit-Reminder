const habits = document.getElementById('habits');

document.addEventListener('DOMContentLoaded', () => {
    habits.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('btn--increment')) {
            console.log('Increment button clicked');
            const habitItem = target.closest('.habit');
            if (habitItem) {
                const countSpan = habitItem.querySelector('.habit__count');
                let count = parseInt(countSpan.textContent, 10);
                count++;
                countSpan.textContent = count;
            }
        }
        else if (target.classList.contains('btn--delete')) {
            console.log('Delete button clicked');
            const habitItem = target.closest('.habit');
            if (habitItem) {
                habitItem.remove();
            }
        }
    });
});