const baseUrl = '/code-platform'

export async function fetchCode(params?: any): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/codeList`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}

export async function runCodeApi(params?: any): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/codeList`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}


export async function getContainerStatusApi(params?: any): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/getContainerStatus`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}

export async function getRunningContainerApi(params?: any): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/getRunningContainer`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}
