import { BASE_URL } from "./config";

export async function getAllCounties() {
    const response = await fetch(`${BASE_URL}/all`);
    const data = await response.json();
    return data;
}