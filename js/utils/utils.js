export function generateId(arr) {
    let ids = new Set();

    let curr = 1;

    arr.forEach((item) => {
        ids.add(item.id);
    });

    while (ids.has(curr)) {
        curr++;
    }

    if (!ids.has(curr)) {
        ids.add(curr);
    }

    return curr;
}
