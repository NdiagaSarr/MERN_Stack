const  express  =  require ( 'express' ) ;
const  cors  =  require ( 'cors' ) ;
const mongoose = require(‘mongoose’);

require ( 'dotenv' ) . config ( ) ;

const  app  =  express ( ) ;
 port  const =  processus . env . PORT  ||  3000 ;

app . utiliser ( cors ( ) ) ;
app . use ( express . json ( ) ) ;
const uri = process.env.ATLAS_URI;
mongoose.connect (uri, {useNewUrlParser: true, useCreateIndex: true}
); 
connexion const = mangouste.connection;
connection.once ('open', () => { 
  console.log ("Connexion à la base de données MongoDB établie avec succès"); 
})

app . écouter ( port ,  ( )  =>  {
    console . log ( `Le serveur fonctionne sur le port: $ { port } ` ) ;
} ) ;