import { BuildImage, Container, GetContainers, TaskCode } from "types"
import { getCookie } from 'cookies-next'

const baseUrl = '/code-platform'

interface Options {
  [key: string]: string | boolean | object;
}

interface ApiConfig {
  codeList: string;
  runCode: string;
  getContainerStatus: string;
  getRunningContainer: string;
  buildDockerImage: string;
  listImg: string;
  listContainers: string;
  startContainer: string;
  stopContainer: string;
  getUser: string;

  // Add more API endpoints here...
  [key: string]: string;
}

const apiConfig: ApiConfig = {
  codeList: '/code-engine/codeList',
  runCode: '/code-engine/runCode',
  getContainerStatus: '/code-engine/getContainerStatus',
  getRunningContainer: '/code-engine/getRunningContainer',
  buildDockerImage: '/code-engine/buildDockerImage',
  listImg: '/code-engine/listImg',
  listContainers: '/code-engine/listContainers',
  startContainer: '/code-engine/startContainer',
  stopContainer: '/code-engine/stopContainer',
  getUser: '/user/auth',
};

interface Api {
  codeList: (options?: Options) => Promise<any>;
  runCode: (options?: Options) => Promise<any>;
  getContainerStatus: (options?: Options) => Promise<any>;
  getRunningContainer: (options?: Options) => Promise<any>;
  buildDockerImage: (options?: Options) => Promise<any>;
  listImg: (options?: Options) => Promise<any>;
  listContainers: (options: Options) => Promise<any>;
  startContainer: (options?: Options) => Promise<any>;
  stopContainer: (options?: Options) => Promise<any>;
  getUser: (options?: Options) => Promise<any>;
}

// interface FetchOptions extends RequestInit {
interface FetchOptions extends Omit<RequestInit, 'body'> {
  headers?: {
    Authorization: string;
  };
  body?: unknown
}

const fetchWithAuth = async (url: string, options: FetchOptions = {}, method = 'POST'): Promise<any> => {

  const token = getCookie('token');

  const response = await fetch(url, {
    ...options,
    method,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options.body),
  });

  return response.json();
};

export const services: Api = {
  codeList: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.codeList}`;
    return fetchWithAuth(url, { body: options },'GET');
  },
  runCode: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.runCode}`;
    return fetchWithAuth(url, { body: options });
  },
  getContainerStatus: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.getContainerStatus}`;
    return fetchWithAuth(url, { body: options });
  },
  getRunningContainer: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.getRunningContainer}`;
    return fetchWithAuth(url, { body: options },'GET');
  },
  buildDockerImage: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.buildDockerImage}`;
    return fetchWithAuth(url, { body: options });
  },
  listImg: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.listImg}`;
    return fetchWithAuth(url, { body: options },'GET');
  },
  listContainers: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.listContainers}`;
    return fetchWithAuth(url, { body: options });
  },
  startContainer: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.startContainer}`;
    return fetchWithAuth(url, { body: options });
  },
  stopContainer: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.stopContainer}`;
    return fetchWithAuth(url, { body: options });
  },
  getUser: async (options: { [key: string]: any; } = {}): Promise<any> => {
    const url = `${baseUrl}${apiConfig.getUser}`;
    return fetchWithAuth(url, { body: options });
  }
};
