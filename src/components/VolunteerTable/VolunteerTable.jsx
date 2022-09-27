import './volunteertable.scss'
import React from 'react'
import {useState} from 'react'
import {Table,Modal} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";




const VolunteerTable = (props) => {

    const [isLoading,SetIsLoading] = useState(false);
    const [add,setAdd] = useState(false);

    const addModalHandler = () => {
        setAdd(!add);
    }
    
    const columns = [
        {
            title:'Id',
            dataIndex:'id',
            align:'left'
        },
        {
            title:'Name',
            dataIndex:'name',
            align:'left'
        },
        {
            title:'Locality',
            dataIndex:'locality',
            align:'left'
        },
        {
            title:'Phone Number',
            dataIndex:'phone_no',
            align:'left'
        },
        {
            title:'Attendance',
            dataIndex:'attendance',
            align:'right'
        },
        {
            title:'Actions',
            dataIndex:'actions',
            align:'center',
            render:(_,record)=>{
                return<>
                <AiFillEye style={{fontSize:'25px',marginRight:'6%'}}/>
                <AiFillEdit style={{fontSize:'25px',marginRight:'6%'}}/>
                <AiFillDelete  style={{fontSize:'25px'}}/>
                </>
            }
        }
    ];

    return (
        <div className='volunteer-table'>
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
export default VolunteerTable;