function setGreetingAndBackground() {
    const hours = new Date().getHours();
    let className;
    let greeting;
    if (hours < 12) {
        className = 'morning';
        greeting = 'Good Morning';
    } else if (hours < 18) {
        className = 'afternoon';
        greeting = 'Good Afternoon';
    } else {
        className = 'evening';
        greeting = 'Good Evening';
    }
    document.body.className = className;
    document.getElementById('greeting').textContent = greeting;
}
function updateTimezones() {
const timezones = [
    { name: 'Amsterdam', offset: 1 },
    { name: 'Toronto', offset: -5 },
    { name: 'Malaysia', offset: 8 }
];
const now = new Date();
    timezones.forEach(tz => {
    const localTime = new Date(now.getTime() + (tz.offset * 60 * 60 * 1000));
    document.getElementById(tz.name.toLowerCase()).textContent = `${tz.name}: ${localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
});
}
document.addEventListener('DOMContentLoaded', () => {
setGreetingAndBackground();
updateTimezones();
setInterval(updateTimezones, 60000);
});