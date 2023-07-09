import React, {useEffect, useState} from 'react';
import { Button,message} from 'antd';
import { Pagination, Table as AntTable } from 'antd';
import Layout from "@components/layout";
import { services } from '@services/api';
import useListContainers from '@hooks/useListContainers';
import { LoginSuccessPayload } from 'types';
import { useAppSelector } from '@stores/hooks';
import { countState } from '@stores/appSlice';
import { appStoreActions } from "@stores/appSlice";
import { useDispatch } from 'react-redux';
 
interface Props {
  payload: LoginSuccessPayload
}

export function Containers({ payload } : Props) {
    const count = useAppSelector(countState)
    const dispatch = useDispatch()
    const { loading, data = [], refetch } = useListContainers({ token: payload.token });

    console.log('Containers-component-render',{ loading, data })

    const onRunContainer = async (item) =>{
        console.log('docker',item)
        const params = {...item,containerName:item.Names?.[0]}
        const data = await services.startContainer(params)
        console.log('onRunContainer-res', data)
        if (data.code === 1) {
            message.success(data.msg)
            console.log('重新刷新数据2')
            refetch()
        } else {
            const isObject = Object.prototype.toString.call(data.msg) ==='[object Object]'
            message.warning(isObject?JSON.stringify(data.msg):data.msg)
        }
    }

    const onStopContainer = async(item) =>{
        const params = {...item,containerName:item.Names?.[0]}
        const data = await services.stopContainer(params)
        console.log('onStopContainer-res', data)
        if (data.code === 1) {
            message.success(data.msg)
            console.log('重新刷新数据1')
            refetch()
        } else {
            const isObject = Object.prototype.toString.call(data.msg) ==='[object Object]'
            message.warning(isObject?JSON.stringify(data.msg):data.msg)
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
                    {Array.isArray(item.Names) && item.Names.map((cell: any,index) => {
                        return (
                            <div key={index}>{cell}</div>
                        )
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
                    {item.State !=='exited'&&(<Button type="primary" danger onClick={()=>onStopContainer(item)}>停止</Button>)}
                    {item.State ==='exited'&&(<Button type="primary" className='img-start-btn' onClick={()=>onRunContainer(item)}>运行</Button>)}
                </>
            },
        },
    ]

    const onAdd = () =>{
        let temp = count
        dispatch(appStoreActions.setCount(temp +1))
    }

    useEffect(() => {
        console.log('containers-component-useEffect')
    }, [])

    if (loading) return null

    return (
        <Layout>
            <div className="App">
                <AntTable
                    rowKey="Id"
                    columns={columns}
                    // 消除 TypeScript 中的警告
                    dataSource={data?.length ? data : undefined}
                    pagination={false}
                />
                <div>
                    test: { count }
                </div>
                <div>
                    <Button onClick={onAdd}>test add</Button>
                </div>
            </div>
        </Layout>
    )
}
