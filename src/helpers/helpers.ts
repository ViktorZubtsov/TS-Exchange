
export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}


export function getById(arr, id: number) {
    return arr.find(item => item.id === id);
}
// TODO: разобратся с генериками
export function removeById(arr, id: number) {
    return arr.filter(item => item.id !== id);
}
