import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				{
					id: 'id1',
					content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet optio molestias a doloremque sapiente corrupti, adipisci, fugiat vitae perferendis odit aliquam quos veniam praesentium culpa deleniti iste obcaecati dolores!'
				},
				{
					id: 'id2',
					content: 'This is a shorter note'
				}
			]
		}
	},
	actions: {
		addNote(newNoteContent) {
			let currentDate = new Date().getTime()
			let id = currentDate.toString()
			let note = {
				id,
				content: newNoteContent
			}
			this.notes.unshift(note)
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter((note) => { return note.id !== idToDelete
			})
		}
	}
})