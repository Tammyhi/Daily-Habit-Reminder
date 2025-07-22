const habits = document.getElementById('habits');

document.addEventListener('DOMContentLoaded', () => {
    habits.addEventListener('click', (event) => {
        const incrementBtn = event.target.closest('.habit__btn--increment');
        const deleteBtn = event.target.closest('.habit__btn--delete');
        if (incrementBtn) {
            console.log('Increment button clicked');
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                const countSpan = habitItem.querySelector('.habit__count');
                let count = parseInt(countSpan.textContent, 10);
                count++;
                countSpan.textContent = count;
            }
        }
        else if (deleteBtn) {
            console.log('Delete button clicked');
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                habitItem.remove();
            }
        }
    });
});