
export function shuffle(array) {

    for (let i = 0; i < array.length - 1; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const swap = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = swap;
    }
}