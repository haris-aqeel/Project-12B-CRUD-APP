import faunadb from 'faunadb'

//Configuration with Client
const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
  })
  

  exports.handler = (event, context, callback) => {

    /* parse the string body into a useable JS object */
    const data = JSON.parse(event.body)
  
    console.log("`todo-create` invoked", data);

    const todoItem = {
        data: data
    }

    // Creation of Query
    // q.Create takes 2 argument
    // 1. Ref or Any Index
    // 2. Data (In THis case created above)

    return client.query(q.Create(q.Ref("classes/todos"), todoItem))

    .then((response) => {
        console.log("success", response)
        /* Success! return the response with statusCode 200 */
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(response)
        })
      })
      .catch((error) => {
        console.log("error", error)
        /* Error! return the error with statusCode 400 */
        return callback(null, {
          statusCode: 400,
          body: JSON.stringify(error)
        })
      })
    }
