
function extractDateParts(pattern, str) {

    const regex = new RegExp(pattern);

    const match = regex.exec(str);

    if (match) {
        
        const [fullMatch, day, month, year] = match;

        return {
            day: day ? day : 'N/A', 
            month: month ? month : 'N/A',
            year: year ? year : 'N/A'
        };
    } else {

        return null;
    }
}


const dateString = "Today's date is 08-05-2024.";
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;

const extractedDate = extractDateParts(datePattern, dateString);

if (extractedDate) {
    console.log("Day:", extractedDate.day);
    console.log("Month:", extractedDate.month); 
    console.log("Year:", extractedDate.year); 
} else {
    console.log("No date found in the given string.");
}
