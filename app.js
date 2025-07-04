// import { promises } from 'dns';
//?1.enter the file name 
//?2.enter the content 

import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
const fileCreation=()=>{
    rl.question("Enter the file name:" , (filename)=>{
            rl.question("enter the content ", (content)=>{

                fs.writeFile(`${filename}.txt`,content,(err)=>{
                  if(err){
                    console.error(`Error writing the file:${err.message}`);

                  }else{
                    console.log(`file "${filename}.txt" created sucessfully`);
                  }
                  rl.close();
                })

            })
    })
}

fileCreation()
