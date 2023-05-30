import { BuildImage, Container, GetContainers, TaskCode } from "types"

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

export async function runCodeApi(params: TaskCode): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/runCode`, {
      method: 'POST',
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

export async function getContainerStatusApi(params: Container): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/getContainerStatus`, {
      method: 'POST',
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

export async function stopContainerApi(params: Container): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/stopContainer`, {
      method: 'POST',
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

export async function startContainerApi(params: Container): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/startContainer`, {
      method: 'POST',
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

export async function buildImageApi(params: BuildImage): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/buildDockerImage`, {
      method: 'POST',
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

export async function listImagesApi(): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/listImg`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}

export async function listContainersApi(params: GetContainers): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/listContainers`, {
      method: 'POST',
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
export async function runDockerUseImgApi(params: GetContainers): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/buildDockerImage`, {
      method: 'POST',
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
