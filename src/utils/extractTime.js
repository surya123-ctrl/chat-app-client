export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    if (hours < 12) return `${hours}:${minutes} A.M.`
    else if (hours === 12) return `${hours}:${minutes} P.M.`
    return `${hours - 12}:${minutes} P.M. ${new Date(dateString).toLocaleDateString()}`;
}
function padZero(number) {
    return number.toString().padStart(2, "0");
}