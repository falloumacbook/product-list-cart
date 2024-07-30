export function getImageURL(path) {
    const cleanURL = path.substring(2);
    return new URL(`../${cleanURL}`, import.meta.url).href
}
