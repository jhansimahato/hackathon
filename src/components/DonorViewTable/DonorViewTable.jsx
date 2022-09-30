import React from 'react'
import {Table} from 'antd'
import './donorviewtable.scss'
import {useState} from 'react';



const DonorViewTable = (props) => {    
    const columns = [
        {
            title:'Id',
            dataIndex:'id',
            align:'left'
        },
        {
            title:'Date',
            dataIndex:'date',
            align:'left'
        },
        {
            title:"Amount",
            dataIndex:'amount',
            align:'right'
        },
        {
            title:'Remarks',
            dataIndex:'remarks',
            align:'left'
        },
       
    ];

    return (
        <div className='donor-view-table'>
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
export default DonorViewTable;