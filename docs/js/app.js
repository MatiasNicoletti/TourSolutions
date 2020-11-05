const tableBody = document.getElementById('table-trips-body');
const btn = document.getElementById('historyButton');

const events = () => {
    
    btn.addEventListener('click', () => {
        
        fillTable();
    })
}

const fillTable = () => {
    tableBody.innerHTML = '';
    for (let index = 0; index < Object.keys({...localStorage}).length; index++) {
        const {duration, distance, date, start, end} = {...JSON.parse(localStorage.getItem(`trip-${index}`))};
        const realDate = new Date(date);
       const tr = document.createElement('tr');
       const tdDate = document.createElement('td');
       tdDate.innerHTML = realDate.getDate() + '-' + realDate.getMonth() + '-' + realDate.getFullYear();
       const tdDistance = document.createElement('td');
       tdDistance.innerHTML = distance;
       const tdDuration = document.createElement('td');
       tdDuration.innerHTML = duration;
       const tdStart = document.createElement('td');
       tdStart.innerHTML = start;
       const tdEnd = document.createElement('td');
       tdEnd.innerHTML = end;

       tr.appendChild(tdDate);
       tr.appendChild(tdDistance);
       tr.appendChild(tdDuration);
       tr.appendChild(tdStart);
       tr.appendChild(tdEnd);
       tableBody.appendChild(tr);
   }
}

events();