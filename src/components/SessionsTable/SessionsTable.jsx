import './SessionsTable.scss'
import React from 'react'
import {useState} from 'react'
import {Table,Modal, Space} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import {Link} from 'react-router-dom'




const SessionsTable = (props) => {

    const [isLoading,SetIsLoading] = useState(false);
    const [add,setAdd] = useState(false);

    const addModalHandler = () => {
        setAdd(!add);
    }
    
    const columns = [
        {
            title:'Id',
            dataIndex:'id',
            align:'left',
            render:(_,record) => {
                const url = '/'+record.id+'/sessionreview/';
                return<>
                <Space size='middle'>
                    <Link to={url}>{record.id}</Link>
                </Space>
                </>
            }
        },
        {
            title:'Location',
            dataIndex:'location',
            align:'left'
        },
        {
            title:'Class',
            dataIndex:'className',
            align:'left'
        },
        {
            title:'Attendance Count',
            dataIndex:'attendedCount',
            align:'right'
        },
        {
            title:'Total Students',
            dataIndex:'noOfStudents',
            align:'right'
        },
        {
            title:'Topic',
            dataIndex:'topic',
            align:'left'

        },
    ];

    return (
        <div className='sessions-table'>
            <div className='table'>
            <Table
         pagination={{pageSize:15}}
         columns={columns}
         dataSource={props.data}
         loading={isLoading}
         mobileBreakPoint={768}
         showHeader={true}
         style={{flex:1,minWidth:100}}
         />
            </div>

        </div>

    )

}
export default SessionsTable;