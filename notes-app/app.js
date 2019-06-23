const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0');

// Add Command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Body of note',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		console.log('Title: ' + argv.title);
		console.log('Body: ' + argv.body);
	}
});

// Remove Command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {},
	handler: function() {
		console.log('Removing Note');
	}
});

// List Command
yargs.command({
	command: 'list',
	describe: 'List your notes',
	handler: function() {
		console.log('Your notes list');
	}
});

// Read Command
yargs.command({
	command: 'read',
	describe: 'Read your notes',
	handler: function() {
		console.log('Incoming Note');
	}
});

yargs.parse();
