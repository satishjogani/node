const fs = require('fs');

// fs.writeFileSync("112.txt","Hello!! 112 File");
// const fs = require('fs').writeFileSync;
// fs('see.txt','Welcome Welcome');

const input = process.argv;
// fs.writeFileSync(input[2],input[3]);
// if(input[2]=="Create")
// {
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=="Delete")
// {
//     fs.unlinkSync(input[3]);
//     console.log("===> "+input[3] +" File Removed!!")
// }
// else
// {
//     console.log("Invalid Input!!");
// }

const path = require('path');
const dirPath = path.join(__dirname,"crud");
// console.log(dirPath);
// for(i=1;i<=3;i++)
// {
//     fs.writeFileSync(`${dirPath}/ram${i}.txt`,"This is for loop for file create!!");
// }

const filename = `${dirPath}/ram.txt`;
// Create File
// fs.writeFileSync(filename,"This is a ` file path.");

// Read File
fs.readFile(filename,'utf8',(err,item)=>{
    console.log(item);
});

//Update File
// fs.appendFileSync(filename," File Updated!!");
// fs.appendFile(filename," This ia ram fime updation.",(err)=>{
//     if(!err) console.log("File Updated");
// });

//Rename File
// fs.rename(filename,`${dirPath}/fs_system.txt`,(err)=>{
//     if(!err) console.log("File name updated!!");
// });

const newfilename = `${dirPath}/fs_system.txt`;
// fs.unlinkSync(newfilename);
