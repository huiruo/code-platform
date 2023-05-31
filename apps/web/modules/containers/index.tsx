import React, {useEffect, useState} from 'react';
import useFetchUser from '@hooks/useFetchImages';
import {Button,message} from 'antd';
import {Pagination, Table as AntTable} from 'antd';
import {listContainersApi, startContainerApi,stopContainerApi} from '@services/api';

export function Containers() {
    const [containers, setContainers] = useState([])

    const onRunContainer = async (item) =>{
        const params = {...item}
        const res = await startContainerApi(params)
        const data = await res.json();
        console.log('onRunImg-res', data)
        if (data.code === 1) {
            console.log('onRunImg-sus')
        } else {
            console.log('onRunContainer:',data.msg)
        }
    }

    const onStopImg = async(item) =>{
        console.log('onStopImg')
        const params = {...item}
        const res = await stopContainerApi(params)
        const data = await res.json();
        console.log('onRunImg-res', data)
        if (data.code === 1) {
            console.log('onRunImg-sus')
        } else {
            console.log('onStopImg:',data.msg)
        }
    }

    const columns = [
        {id: 'Id', title: 'id', dataIndex: 'Id', key: 'Id', width: 100},
        {id: 'Image', title: 'Image', dataIndex: 'Image', key: 'Image', width: 100},
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
        {id: 'created', title: 'created', dataIndex: 'created', key: 'created', width: 100},
        {id: 'State', title: 'State', dataIndex: 'State', key: 'State', width: 100},
        {id: 'Status', title: 'Status', dataIndex: 'Status', key: 'Status', width: 100},
        {
            id: 'action', title: 'Action', dataIndex: '', key: 'action', width: 200,
            render(item) {
                return <>
                    <Button type="primary" className='img-start-btn' onClick={()=>onRunContainer(item)}>运行</Button>
                    <Button type="primary" danger onClick={()=>onStopImg(item)}>停止</Button>
                </>
            },
        },
    ]

    const listContainers = async (isRunning) => {
        const params = {isRunning}
        const res = await listContainersApi(params)
        const data = await res.json();
        console.log('data', data)
        if (data.code === 1) {
            setContainers(data.data)
        } else {
            const isObject = Object.prototype.toString.call(data.msg) ==='[object Object]'
            message.warning(isObject?JSON.stringify(data.msg):data.msg)
        }
    }

    useEffect(() => {
        const type = false
        listContainers(type)
    }, [])

    return (
        <div className="App">
            <AntTable
                rowKey="Id"
                columns={columns}
                dataSource={containers}
                pagination={false}
            />
        </div>
    )
}
