import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

export const EntryList = () => {
    getEntries().then(() => {
        const entries = useJournalEntries();
        let entryListHTMLString = "";
    
        for (let i = 0; i < entries.length; i++) { 
            entryListHTMLString += JournalEntryComponent(entries[i]);
        }
    
        // console.log(entryListHTMLString);
    
        entryLog.innerHTML += `${entryListHTMLString}`
    }

    )

    
};