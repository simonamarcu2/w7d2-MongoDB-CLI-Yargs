const yargs = require("yargs");
const { client, connection} = require ("./db/connection");
const { addMovie} = require("./utils");

const app = async (yargsObj) => {
    try {
        const collection = await connection();
        if(yargsObj.add){
            //add movie to mongodb database, needs collection and message
            await addMovie(collection,{title:yargsObj.title, actor: yargsObj.actor});
         } else if (yargsObj.addMany) {
         await addMany(collection, yargsObj);
         } else if (yargsObj.find) {
         await find(collection, yargsObj);
         } else if (yargsObj.update) {
         await update(collection, yargsObj);
         } else if (yargsObj.remove) {
         await remove(collection, yargsObj);    
         } else {
            console.log("Incorrect command")
    } catch (error) {
     console.log(error);
    }
  client.close();
}

app(yargs.argv)
