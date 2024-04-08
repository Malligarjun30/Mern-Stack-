import qr from"qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt([{
    message:"Enter Ur code",
    name:"URL",
}
])
.then((answer)=>{
    const url=answer.URL;
    console.log(url);
    var image=qr.image(url,{type:"png"});
    image.pipe(fs.createWriteStream("website.png"));
})
