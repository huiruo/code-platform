/** 登录成功返回给客户端的数据 */
export type LoginSuccessPayload = {
  siteName?: string
  token: string
  user: string
  userId: number
  username?: string
};

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