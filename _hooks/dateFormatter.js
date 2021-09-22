export function dateFormatter(date) {
    let displayDate = '';
    if (new Date(date).getDate() == new Date().getDate()) {
        if ((new Date().getHours() - new Date(date).getHours()) == 0) {
            displayDate = new Date().getMinutes() - new Date(date).getMinutes() + " minutes ago"
        } else {
            displayDate = new Date().getHours() - new Date(date).getHours() + " hour ago"
        }
    } else {
        displayDate = new Date(date).toString().substring(0, 15).slice(3);
    }

    return displayDate;
}