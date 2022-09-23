export const constSettings = {
    //ApiBase:'http://192.168.0.14:3001',
    //SocketBase:'http://192.168.0.14:3001',
    ApiBase:'http://ecopoolapi.redapplegame.com',
    SocketBase:'http://ecopoolapi.redapplegame.com/',
    Token: null
} 

export async function client(endpoint, { body, ...customConfig } = {}) {
    const headers = { 'Content-Type': 'application/json' }

  
    console.log("Token",constSettings.Token)
    if(constSettings.Token)
      headers['Authorization'] = `Bearer ${constSettings.Token}`
  
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
  
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    let data
    try {
      console.log(`Calling ${endpoint}`);
      const response = await window.fetch(endpoint, config);
      console.log(response);

      data = await response.json()
      //console.log(data);
      if (response.ok) {
        // Return a result object similar to Axios
        return {
          status: response.status,
          data,
          headers: response.headers,
          url: response.url,
        }
      }
      throw new Error(response.statusText)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
  }
  
  client.get = function (endpoint, customConfig = {}) {
    return client(endpoint, { ...customConfig, method: 'GET' })
  }
  
  client.post = function (endpoint, body, customConfig = {}) {
    return client(endpoint, { ...customConfig, body })
  }

  client.setToken = function(token) {
    constSettings.Token = token;
  }