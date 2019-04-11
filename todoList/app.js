const yargs = require('yargs')
const chalk = require('chalk')
const { get, add, getByName } = require('./Task')

yargs.command({
    command: 'get',
    describe: 'Get all as tasks',
    builder: {
        name: {
            describe: 'get name task',
            type:'string',
            demandOption:false,
        },
        description: {
            describe: 'get description task',
            type:'string',
            demandOption:false,
        }
    },
    handler:(args) => {
        const task = {
            name: args.name,
            description: args.description
        }
        console.log(chalk.green('Result:'));
        console.log(get(task));
    }
});

yargs.command({
    command: 'getByName',
    describe: 'Find by name a task',
    builder: {
        name: {
            describe: 'Find a task by name',
            type:'string',
            demandOption:true,
        },
    },
    handler:(args) => {
        const task = {
            name: args.name,
        }
        const taskFindByName = getByName(task)
        console.log(chalk.green('Result:'));
        if(!taskFindByName) {
            console.log(chalk.red(`Task by name ${task.name} not found!`));
        } else {
            console.log(taskFindByName);
        }
    }
});

yargs.command({
    command: 'add',
    describe: 'add new task',
    builder: {
        name: {
            describe: 'add a new name task',
            demandOption:true,
            type:'string'
        },
        description: {
            describe: 'add a new description task',
            type:'string',
            demandOption:true,
        }
    },
    handler:(args) => {
        const task = {
            name: args.name,
            description: args.description
        }
        add(task);
        console.log(chalk.green('Task add success'));
    }
});

yargs.parse();
