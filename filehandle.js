const fs = require('fs');

fs.writeFileSync('./text.txt','hey world'); //for create the file Sync means synchronous call

//async for call back function 
//fs.writeFile('./text.txt','hey world async',(err)=>{});

const result = fs.readFileSync('./contact.txt',"utf-8");//sync return the result but async dont return
//console.log(result);

//for async we need to handle the call back async return nothing if we store this so it will 
//return undefined async always return a call back
 fs.readFile('./contact.txt',"utf-8",(err,results)=>{
    if(err)
    {
        console.log("Error",err);
    }
    else{
        console.log(results);
    }
});

//file append
fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString()); //append data file ke aage 

fs.appendFileSync("./text.txt", `${Date.now()} Hey Ther\n`);

fs.cpSync("./text.txt","./copy.txt"); //for copy the file
 
fs.unlinkSync("./copy.txt"); // for delete the file

//console.log(fs.statSync('./text.txt')); // for check the file details

fs.mkdirSync("my-docs"); //for create the folder

const os = require("os");
console.log(os.cpus().length);
