export interface Container {
  containerName: string
}

export interface TaskCode {
  code: string
  type: string
}

export interface BuildImage {
  dockerfileName: string
  imageName: string
}