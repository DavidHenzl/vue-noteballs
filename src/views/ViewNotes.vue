<template>
	<div class="notes">

		<AddEditNote
			v-model="newNote"
			placeholder="Add a new note"
			ref="addEditNoteRef"
		>
			<template #buttons>
				<button
					@click="addNote"
					:disabled="!newNote"
					class="button is-link has-background-success"
				>
						Add New Note
				</button>
			</template>
		</AddEditNote>

		<progress
		v-if="!storeNotes.notesLoaded"
			class="progress is-large is-success"
			max="100"
		/>

		<template v-else>
			<SingleNote
				v-for="note in storeNotes.notes"
				:key="note.id"
				:note="note"
			/>
			<div
				v-if="!storeNotes.notes.length"
				class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
			>
				Currently no notes...
			</div>
		</template>

	</div>
</template>

<script setup>
/*
	imports
*/
	import { ref } from 'vue'
	import SingleNote from '@/components/Notes/SingleNote.vue'
	import AddEditNote from '@/components/Notes/AddEditNote.vue'
	import { useStoreNotes } from '@/stores/storeNotes'
	import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
	store
*/
	const storeNotes = useStoreNotes()

/*
	notes
*/
	const newNote = ref('')
	const addEditNoteRef = ref(null)

	const addNote = () => {
		storeNotes.addNote(newNote.value)
		newNote.value = ''
		addEditNoteRef.value.focusTextarea()
	}

/*
	watch characters
*/
	useWatchCharacters(newNote)

</script>