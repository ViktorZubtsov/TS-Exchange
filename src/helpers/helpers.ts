// public sortByKey(arr: [],key: string): void {
//     console.log('sortByKey', arr , key);
// }


// export function sortByKey(arr: [],key: string): object {
//     return {};
// }

export function getById(arr: Array<{id: number}>, id: number) {
    return arr.find(item => item.id === id);
}