import React from 'react'
import {Table} from 'antd'
import './reviewtable.scss'
import {useState} from 'react';



const ReviewTable = (props) => {    
    const columns = [
        {
            title:'Id',
            dataIndex:'studentId',
            align:'left'
        },
        {
            title:'Name',
            dataIndex:'name',
            align:'left'
        },
        {
            title:"Class",
            dataIndex:'className',
            align:'left'
        },
        {
            title:'Attendance',
            dataIndex:'attendance',
            align:'left'
        },
        {
            title:'Review',
            dataIndex:'review',
            align:'left'
        },
       
    ];

    return (
        <div className='student-table'>
            <div className='table'>
            <Table
         pagination={{pageSize:15}}
         columns={columns}
         dataSource={props.data}
         loading={props.loading}
         mobileBreakPoint={768}
         showHeader={true}
         style={{flex:1,minWidth:100}}
         />
            </div>
        </div>

    )

}
export default ReviewTable;