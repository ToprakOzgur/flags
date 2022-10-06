import { shuffle } from "./shuffleArray";

export function getRandomCountries(allCountries, count) {
    shuffle(allCountries);
    return allCountries.slice(0, count);
}

