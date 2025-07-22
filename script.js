const habits = document.getElementById('habits');
const addHabit = document.getElementById('addHabit');
const addHabitInput = document.getElementById('addHabit__input');

function createHabitElement(habitText) {
    const habitEl = document.createElement('div');
    habitEl.classList.add('habit');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('habit__btn--delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark" style="color: #ff0000;"></i>';

    const countSpan = document.createElement('span');
    countSpan.classList.add('habit__count');
    countSpan.textContent = '0';

    const textSpan = document.createElement('span');
    textSpan.classList.add('habit__text');
    textSpan.textContent = habitText;

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('habit__btn--increment');
    incrementBtn.innerHTML = '<i class="fa-solid fa-plus" style="color: #80ff00;"></i>';

    habitEl.appendChild(deleteBtn);
    habitEl.appendChild(countSpan);
    habitEl.appendChild(textSpan);
    habitEl.appendChild(incrementBtn);
    return habitEl;
}

document.addEventListener('DOMContentLoaded', () => {
    habits.addEventListener('click', (event) => {
        const incrementBtn = event.target.closest('.habit__btn--increment');
        const deleteBtn = event.target.closest('.habit__btn--delete');

        if (incrementBtn) {
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                const countSpan = habitItem.querySelector('.habit__count');
                let count = parseInt(countSpan.textContent, 10);
                count++;
                countSpan.textContent = count;
            }
        }
        else if (deleteBtn) {
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                habitItem.remove();
            }
        }
    });

    addHabit.addEventListener('click', (event) => {
        const addHabitBtn = event.target.closest('#addHabit__btn');
        if (addHabitBtn){
            const habitName = addHabitInput.value.trim();
            if (habitName) {
                const newHabit = createHabitElement(habitName);
                habits.appendChild(newHabit);
                addHabitInput.value = '';
            } else {
                alert('Please enter a habit name.');
            }
        }
    });
});