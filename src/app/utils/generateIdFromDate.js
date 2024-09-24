export function generateIdFromDate() {
    const now = new Date();
    const timestamp = now.getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
}
