

function getOrdinalSuffix(number) {
    if (number >= 11 && number <= 13) {
        return 'th';
    }
    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export const formatDate = (date) => {
    let givenDate = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options)?.format(givenDate);

    // Extract day, add ordinal suffix, and replace comma with 'th'
    const day = givenDate?.getDate();
    const ordinalSuffix = getOrdinalSuffix(day);
    return formattedDate.replace(/(\d+)(th|st|nd|rd)?, (\d+)/, `$1${ordinalSuffix}, $3`);
}


export const getDateDifference = (date) => {
    // Given date in ISO format
    let givenDate = new Date(date);

    // Current date
    let currentDate = new Date();

    // Calculate time difference in milliseconds
    let timeDifference = currentDate - givenDate;

    // Convert time difference to days
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
       return "Today";
    } else if (daysDifference === 1) {
        return "Yesterday";
    } else if (daysDifference <= 7) {
        return "This week";
    } else if (daysDifference <= 30) {
        return "This month";
    } else if (daysDifference <= 365) {
        return "This year";
    } else {
        return "More than a year ago";
    }
}

export const getHumanDate = (date) => {
    let givenDate = new Date(date);

    // Month names array
    const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Get components of the date
    let day = givenDate.getDate();
    let month = monthNames[givenDate.getMonth()];
    let year = givenDate.getFullYear();
    let hours = givenDate.getHours();
    let minutes = givenDate.getMinutes();
    let period = hours >= 12 ? "pm" : "am";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // "0" should be "12" in 12-hour format
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Format the date
    return `${day} ${month}, ${year}. ${hours}:${minutes} ${period}`;
}

export function formatDay(date) {
    const day = String(date?.getDate())?.padStart(2, '0');
    const month = String(date?.getMonth() + 1)?.padStart(2, '0'); // Months are zero-based
    const year = date?.getFullYear();

    return `${day}/${month}/${year}`;
}

export function formatMoney(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

export function getDayDifference(startDate, endDate) {
    // Convert the input strings to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Calculate the difference in time
    const timeDifference = end.getTime() - start.getTime();
    
    // Convert time difference from milliseconds to days
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    
    return dayDifference;
}
