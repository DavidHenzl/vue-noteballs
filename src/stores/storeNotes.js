import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				// {
				// 	id: 'id1',
				// 	content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet optio molestias a doloremque sapiente corrupti, adipisci, fugiat vitae perferendis odit aliquam quos veniam praesentium culpa deleniti iste obcaecati dolores!'
				// },
				// {
				// 	id: 'id2',
				// 	content: 'This is a shorter note'
				// }
			]
		}
	},
	actions: {
		async getNotes() {
			const querySnapshot = await getDocs(collection(db, 'notes'))
			querySnapshot.forEach((doc) => {
				let note = {
					id: doc.id,
					content: doc.data().content
				}
				console.log(note)
				this.notes.push(note)
			});
		},
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
			this.notes = this.notes.filter(note => note.id !== idToDelete)
		},
		updateNote(id, content) {
			let index = this.notes.findIndex(note => note.id === id)
			this.notes[index].content = content
		}
	},
	getters: {
		getNoteContent: (state) => {
			return (id) => {
				return state.notes.filter(note => note.id === id)[0].content
			}
		},
		totalNotesCount: (state) => {
			return state.notes.length
		},
		totalCharactersCount: (state) => {
			let count = 0
			state.notes.forEach(note => count += note.content.length)
			return count
		}
	}
})