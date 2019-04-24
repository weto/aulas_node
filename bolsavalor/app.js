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
        service(price, (data) => {
            console.log(chalk.green.bold.inverse(data.symbol))
            console.log(chalk.red.bold(`Menor valor do dia: ${data.day_low}`))
            console.log(chalk.blue.bold(`Fechamento: ${data.price}`))
        })
    }
});

yargs.parse();
