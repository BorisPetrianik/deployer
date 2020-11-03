export const mockData = {
  templateVersion: '15',
  createdBy: 'asukhoa',
  name: 'order-service',
  'port-mappings': ['8080:8080', '8081:48081'],
  volumes: ['opt/kafka'],
  description: 'service for ...',
  env: [
    {
      name: 'POSTGRES_HOST',
      value: 'postgres',
    },
    {
      name: 'POSTGRES_PORT',
      value: '5432',
    },
  ],
  instances: [
    {
      appId: 'order-service',
      templateId: '15',
      version: '1.0.1',
      containerId: '12235123512',
      dateCreated: '23412351245',
      userCreated: 'asukhoa',
      status: 'STARTING',
      url: '127.0.0.1:48080/order-service/swagger-ui.html',
    },
    {
      appId: 'order-service',
      templateId: '15',
      version: '1.0.2',
      containerId: '12235123512',
      dateCreated: '23412351245',
      userCreated: 'asukhoa',
      status: 'STARTING',
      url: '127.0.0.1:48080/order-service/swagger-ui.html',
    },
    {
      appId: 'order-service',
      alias: 'new_postgres',
      templateId: '15',
      version: '1.0.3',
      containerId: '12235123512',
      dateCreated: '23412351245',
      userCreated: 'asukhoa',
      status: 'STARTING',
      url: '127.0.0.1:48080/order-service/swagger-ui.html',
    },
    {
      appId: 'order-service',
      templateId: '15',
      version: '1.0.4',
      containerId: '12235123512',
      dateCreated: '23412351245',
      userCreated: 'asukhoa',
      status: 'STARTING',
      url: '127.0.0.1:48080/order-service/swagger-ui.html',
    },
    {
      appId: 'order-service',
      templateId: '15',
      version: '1.0.5',
      containerId: '12235123512',
      dateCreated: '23412351245',
      userCreated: 'asukhoa',
      status: 'STARTING',
      url: '127.0.0.1:48080/order-service/swagger-ui.html',
    },
  ],
  versions: ['2.0.0', '2.0.1', '2.0.2', '2.0.3', '2.0.4'],
  history: [
    {
      date: '02/10/2020',
      log: 'created new env var',
    },
  ],
}
