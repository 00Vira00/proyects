const fs=require("fs");
const path=require("path");





const   _path=__dirname;
 const  getFilesInDir=function(){
  console.log("llegó 2 ")
  console.log(_path)
    const files=fs.readdirSync(_path);

  console.log("llegó  3")
    let n=0;
    console.log(`
    ##########################################
    Ubicación: ${getShortPath()}
    ##########################################
    `);

    files.forEach(file=>{
        if(file !==".DS_Store"){
            console.log((`     ${file}`));
            n++;
        }
    })

}
const getShortPath=function(){
    const paths=path.parse(_path);
    let delimiter="/";

    return `${paths.root}...${delimiter}${paths.name}`;
}
getFilesInDir();