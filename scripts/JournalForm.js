import { saveEntry } from "./JournalDataProvider.js"
import {EntryList} from './JournalEntryList.js'

const contentTarget = document.querySelector(".journalForm")
export const JournalForm = () => {
    
    contentTarget.innerHTML =
    `
    <form action="">
    <fieldset>
        <legend>Today's Entry</legend>
        <label for="journal-date">Date of entry</label>
        <input type="date" id="journal-date">
    </fieldset>
    <fieldset>
        <label for="concepts-covered">Concepts covered</label>
        <textarea name="concepts-covered" id="concepts-covered" cols="30" rows="2"></textarea>
    </fieldset>
    <fieldset>
        <label for="journal-entry">Journal Entry</label>
        <textarea name="journal-entry" id="journal-entry" cols="30" rows="10"></textarea>
    </fieldset>
    <fieldset>
    <label for="mood">Mood for the day</label>
    <select name="mood" id="mood">
        <option value="--">------</option>
        <option value="happy">Happy</option>
        <option value="frustrated">Frustrated</option>
        <option value="i-die-now">I die now</option>
        <option value="yet">Haven't figured it out YET</option>
        <option value="motivated">Motivated</option>
    </select>
    </fieldset>
    <button id="saveEntry">Record Journal Entry</button>
</form>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveEntry"){
        // console.log("you clicked the save entry button")
        let entryConcept = document.getElementById("concepts-covered")
        let entryDate = document.getElementById("journal-date")
        let entryContent = document.getElementById("journal-entry")
        let entryMood = document.getElementById("mood")
        const entryToSave = {
            date: entryDate.value,
            concept: entryConcept.value,
            entry: entryContent.value,
            mood: entryMood.value
        }
        saveEntry(entryToSave)
        .then(EntryList)

    }
})