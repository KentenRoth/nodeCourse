const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	return 'Your notes...';
};

// Add Note
const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find(note => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title,
			body
		});
		saveNotes(notes);
		console.log(chalk.green.inverse('Note Added'));
	} else {
		console.log(chalk.red.inverse('Note title taken'));
	}
};

// Remove Note
const removeNote = title => {
	const notes = loadNotes();
	const notesToKeep = notes.filter(note => note.title !== title);

	if (notes.length !== notesToKeep.length) {
		console.log(chalk.green.inverse('Note Removed!'));
		saveNotes(notesToKeep);
	} else {
		console.log(chalk.red.inverse('Note not found!'));
	}
};

// List Notes
const listNotes = () => {
	const notes = loadNotes();
	if (notes.length === 0) {
		console.log(chalk.cyan.bold('You have no notes.'));
	} else {
		console.log(chalk.cyan.bold.inverse(`You have ${notes.length} notes.`));
		notes.map(note => {
			console.log(chalk.cyan.bold(note.title));
		});
	}
};

// Read desired note
const readNote = title => {
	const notes = loadNotes();
	const findNote = notes.find(note => note.title === title);

	console.log(findNote);

	if (!findNote) {
		console.log(
			chalk.red.inverse.bold('Could not find note with that title')
		);
	} else {
		console.log(chalk.cyan.bold.inverse('Your Note'));
		console.log(chalk.cyan.bold(findNote.title));
		console.log(chalk.cyan(findNote.body));
	}
};

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
	listNotes,
	readNote
};
