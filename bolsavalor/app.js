const yargs = require('yargs')
const chalk = require('chalk')
const { service } = require('./Price')

yargs.command({
    command: 'get',
    describe: 'Get price company',
    builder: {
        company: {
            describe: 'get name company price',
            type:'string',
            demandOption:false,
        },
    },
    handler:(args) => {
        const price = {
            company: args.company
        }
        console.log(chalk.green('Result:'));
        console.log(service(price));
    }
});

yargs.parse();
