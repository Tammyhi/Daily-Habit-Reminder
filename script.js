const habits = document.getElementById('habits');
const addHabit = document.getElementById('addHabit');
const addHabitName = document.getElementById('addHabit__name');
const addHabitGoal = document.getElementById('addHabit__goal');

function createHabitElement(habitText, habitGoal) {
    const habitEl = document.createElement('div');
    habitEl.classList.add('habit');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('habit__btn--delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark" style="color: #ff0000;"></i>';

    const habitCount = document.createElement('p');
    habitCount.classList.add('habit__counted');

    const countSpan = document.createElement('span');
    countSpan.classList.add('habit__completed');
    countSpan.textContent = '0';

    const dividerSpan = document.createElement('span');
    dividerSpan.textContent = '/';

    const goalSpan = document.createElement('span');
    goalSpan.classList.add('habit__goal');
    goalSpan.textContent = habitGoal;

    const textSpan = document.createElement('span');
    textSpan.classList.add('habit__text');
    textSpan.textContent = habitText;

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('habit__btn--increment');
    incrementBtn.innerHTML = '<i class="fa-solid fa-plus" style="color: #80ff00;"></i>';

    const decrementBtn = document.createElement('button');
    decrementBtn.classList.add('habit__btn--decrement');
    decrementBtn.innerHTML = '<i class="fa-solid fa-minus" style="color: #ff8000;"></i>';

    const newReminderBtn = document.createElement('button');
    newReminderBtn.classList.add('habit__btn--newReminder');
    newReminderBtn.innerHTML = '<i class="fa-regular fa-clock"></i>';

    habitEl.appendChild(deleteBtn);
    habitCount.appendChild(countSpan);
    habitCount.appendChild(dividerSpan);
    habitCount.appendChild(goalSpan);
    habitEl.appendChild(habitCount);
    habitEl.appendChild(textSpan);
    habitEl.appendChild(incrementBtn);
    habitEl.appendChild(decrementBtn);
    habitEl.appendChild(newReminderBtn);
    return habitEl;
}

function timeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    return midnight - now;
}
function resetHabits() {
    const habitsList = document.querySelectorAll('.habit');
    habitsList.forEach(habit => {
        const countSpan = habit.querySelector('.habit__completed');
        countSpan.textContent = '0';
        habit.style.backgroundColor = '';
    });
}

function scheduleReset() {
    setTimeout(() => {
        resetHabits();
        scheduleReset(); 
    }, timeUntilMidnight());
}

document.addEventListener('DOMContentLoaded', () => {
    habits.addEventListener('click', (event) => {
        const incrementBtn = event.target.closest('.habit__btn--increment');
        const deleteBtn = event.target.closest('.habit__btn--delete');
        const decrementBtn = event.target.closest('.habit__btn--decrement');

        if (incrementBtn) {
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                const countSpan = habitItem.querySelector('.habit__completed');
                let count = parseInt(countSpan.textContent, 10);
                count++;
                countSpan.textContent = count;
                const goalSpan = habitItem.querySelector('.habit__goal');
                const goal = parseInt(goalSpan.textContent, 10);
                if (count >= goal) {
                    habitItem.style.backgroundColor = 'lightgreen';
                }
            }
        }
        else if (deleteBtn) {
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                habitItem.remove();
            }
        }
        else if (decrementBtn) {
            const habitItem = event.target.closest('.habit');
            if (habitItem) {
                const countSpan = habitItem.querySelector('.habit__completed');
                let count = parseInt(countSpan.textContent, 10);
                if (count > 0) {
                    count--;
                    countSpan.textContent = count;
                    if (count < parseInt(habitItem.querySelector('.habit__goal').textContent, 10)) {
                        habitItem.style.backgroundColor = '';
                    }
                }
            }
        }
    });

    addHabit.addEventListener('click', (event) => {
        const addHabitBtn = event.target.closest('#addHabit__btn');
        if (addHabitBtn){
            const habitName = addHabitName.value.trim();
            let habitGoal = addHabitGoal.value.trim();
            habitGoal = parseInt(habitGoal, 10);
            if (habitName && habitGoal > 0) {
                const newHabit = createHabitElement(habitName, habitGoal);
                habits.appendChild(newHabit);
                addHabitName.value = '';
            } else {
                alert('Please enter a habit name and habit goal greater than 0.');
            }
        }
    });

    scheduleReset();
});