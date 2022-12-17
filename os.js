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

//CPU architecture
const arch = os.arch();
console.log(arch);

//CPU core info
const cores = os.cpus();
console.log(cores);

//Free memory
const freeMemory = os.freemem();
console.log(freeMemory);

//Home Directory
const homeDir = os.homedir();   
console.log(homeDir);
