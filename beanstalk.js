const { printContractEvents } = require("./events");
const beanstalkAbi = require('./abi/Beanstalk.json');
const BEANSTALK_ADDRESS = '0xC1E088fC1323b20BCBee9bd1B9fC9546db5624C5'; // Beanstalk's address

(async () => {
    await printContractEvents(BEANSTALK_ADDRESS, beanstalkAbi)
})();