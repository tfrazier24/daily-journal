const journal = [
    {
        id: 1,
        date: "01/15/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "happy"
    },
    {
        id: 2,
        date: "01/16/2021",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "01/17/2021",
        concept: "Javascript Functions",
        entry: "We worked on learning the basic things a function can do and how to use them",
        mood: "Sad"
    },
    {
        id: 4,
        date: "01/18/2021",
        concept: "Newforce Rant",
        entry: "Sometimes i think they just want to see us cry. Newforce is a blast but it can be very challenging. Must be worth it.",
        mood: "Sad"
    }
]


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}