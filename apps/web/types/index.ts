export interface Container {
  containerName: string
}

export interface GetContainers {
  isRunning: boolean
}

export interface TaskCode {
  code: string
  type: string
}

export interface BuildImage {
  dockerfileName: string
  imageName: string
}