document.addEventListener('DOMContentLoaded', function() {
    const date1 = document.querySelector('#date1');
    const date2 = document.querySelector('#date2');
    const date3 = document.querySelector('#date3');

    var targetDate = new Date();
    
    // 5, 8, and 11 days into the future
    targetDate.setDate(targetDate.getDate() + 5);
    date1.innerHTML = targetDate.toDateString() + " @ 10:45AM";

    targetDate.setDate(targetDate.getDate() + 3);
    date2.innerHTML = targetDate.toDateString() + " @ 4:00PM";

    targetDate.setDate(targetDate.getDate() + 3);
    date3.innerHTML = targetDate.toDateString() + " @ 11:30AM";
});