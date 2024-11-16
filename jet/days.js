dayjs.extend(dayjs_plugin_duration);

function countdown(element, dateStr) {
    const myDate = dayjs(dateStr);
   
    element.querySelector(".theDate").textContent = `Until ${myDate.format("D MMMM YYYY")}`;
    element.querySelector(".home").textContent = "I am going home!"

    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(myDate.diff(now));

        element.querySelector(".untilN_seconds").textContent = duration.seconds().toString();
        element.querySelector(".untilN_minutes").textContent = duration.minutes().toString();
        element.querySelector(".untilN_hours").textContent = duration.hours().toString();
        element.querySelector(".untilN_days").textContent = duration.days().toString();
    },250);
}
countdown(document.getElementById("countDown"), "2024-02-25");