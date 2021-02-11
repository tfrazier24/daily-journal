// console.log("Welcome to the main module")
import {getEntries} from './JournalDataProvider.js'
import {EntryList} from './JournalEntryList.js'
import {JournalForm} from './JournalForm.js'

JournalForm()
EntryList();
getEntries()