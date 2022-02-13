const Instances = require('./instances')

let mCase1 = new Instances(15);
let mCase2 = new Instances(8);
let mCase3 = new Instances(7);
let mCase4 = new Instances(42);
let mCase5 = new Instances(95);
let mCase6 = new Instances('self');
let mCase7 = new Instances('love');

mCase1.returnInst();
mCase2.returnInst();
mCase3.returnInst();
mCase4.returnInst();
mCase5.returnInst();
mCase6.returnInst();
mCase7.returnInst();

// You should instantiate multiple instances of your class in your other .js file to prove your different test cases.
