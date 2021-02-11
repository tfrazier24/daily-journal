
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

let entries =[] // empty array to hold the entries

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
         entries = parsedEntries   // What should happen when we finally have the array?
        })
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
}