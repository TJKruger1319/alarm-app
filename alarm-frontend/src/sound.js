import Sound from "./LostWoods.mp3";

const alarm = new Audio(Sound);

const pauseAlarm = () => {
    // Turns off alarm sound
    alarm.pause();
}

export { alarm, pauseAlarm };