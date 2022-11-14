const os = require('os');

console.log(`System has been active for ${os.uptime()/60} minutes`);
const user = os.userInfo();
console.log(`Following is the userInfo : \n`, "\n", user);

const currentOS = {
    name : os.type(),
    totalMemory : os.totalmem(),
    platform : os.platform(),
    release : os.release()
}

console.log(currentOS);