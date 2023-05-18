import React from 'react';
import useFetchUser from '@hooks/useFetchImages';
import { Button } from 'antd';
import { Pagination, Table as AntTable } from 'antd';

export function Containers() {
  const [images, isLoading, error] = useFetchUser()
  if (isLoading) {
    console.log(images)
  }

  const columns = [
    { id: 'id', title: 'id', dataIndex: 'id', key: 'id', width: 100 },
    { id: 'name', title: 'name', dataIndex: 'name', key: 'name', width: 100 },
    { id: 'created', title: 'created', dataIndex: 'created', key: 'created', width: 100 },
    { id: 'size', title: 'size', dataIndex: 'size', key: 'size', width: 100 },
    { id: 'containers', title: 'containers', dataIndex: 'containers', key: 'containers', width: 100 },
  ]

  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <AntTable
        rowKey="id"
        columns={columns} dataSource={images} className='table-box'
        pagination={false}
      />
    </div>
  )
}
