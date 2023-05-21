import React, { useEffect, useState } from 'react';
import useFetchUser from '@hooks/useFetchImages';
import { Button } from 'antd';
import { Pagination, Table as AntTable } from 'antd';
import { listContainersApi } from '@services/api';

export function Containers() {
  const [containers, setContainers] = useState([])

  const columns = [
    { id: 'Id', title: 'id', dataIndex: 'Id', key: 'Id', width: 100 },
    { id: 'Image', title: 'Image', dataIndex: 'Image', key: 'Image', width: 100 },
    {
      id: 'container', title: 'container name', dataIndex: '', key: 'container', width: 100,
      render(item: any) {
        console.log('item', item.Names)
        return <div>
          {Array.isArray(item.Names) && item.Names.map((cell: any) => {
            return <>{cell}</>
          })}
        </div>
      }
    },
    { id: 'created', title: 'created', dataIndex: 'created', key: 'created', width: 100 },
    { id: 'State', title: 'State', dataIndex: 'State', key: 'State', width: 100 },
    { id: 'Status', title: 'Status', dataIndex: 'Status', key: 'Status', width: 100 },
  ]

  const listContainers = async (isRunning) => {
    const params = { isRunning }
    const res = await listContainersApi(params)
    const data = await res.json();
    console.log('data', data)
    if (data.code === 1) {
      setContainers(data.data)
    } else {
      alert(data.msg)
    }
  }

  useEffect(() => {
    const type = false
    listContainers(type)
  }, [])

  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <AntTable
        rowKey="Id"
        columns={columns} dataSource={containers} className='table-box'
        pagination={false}
      />
    </div>
  )
}
