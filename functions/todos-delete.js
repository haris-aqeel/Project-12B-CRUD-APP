const faunadb = require('faunadb');
q = faunadb.query


require("dotenv").config()
 

exports.handler = async function(event, context) {

    try{
        const client = new faunadb.Client({secret: process.env.FAUNADB_SECRET});
        let reqId = JSON.parse(event.body);
        

        const result = await client.query(
            q.Delete(
                q.Ref(q.Collection('CRUD'), reqId)
              )
        )
        
        return { 
            statusCode: 200, 
            body: JSON.stringify({message: `Successfully Deleted Todo from Database` })
            
        }
        

    } catch (error){

        return { statusCode: 400, body: error.toString()} }

    }



