/* Api methods to call /functions */

export const create = (data) => {
    return fetch('/.netlify/functions/todos-create', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  
  export const readAll = async() => {
    const data =  await fetch('/.netlify/functions/todos-read-all')
    const response = await data.json();
    return response;
  }
  
  export const update = (todoId, data) => {
    const data = await fetch(`/.netlify/functions/todos-update/${todoId}`, {
      body: JSON.stringify(data),
      method: 'POST'
    })
    const response = await data.json();
    return response;
  }
  
  export const deleteTodo = (todoId) => {
    return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
      method: 'POST',
    }).then(response => {
      return response.json()
    })
  }
  
  export const batchDeleteTodo = (todoIds) => {
    return fetch(`/.netlify/functions/todos-delete-batch`, {
      body: JSON.stringify({
        ids: todoIds
      }),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  
