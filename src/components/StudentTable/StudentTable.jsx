import React from 'react'
import {useState} from 'react'
import {Table,Modal,Input} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import './studentable.scss'



const StudentTable = (props) => {

    const [isLoading,SetIsLoading] = useState(false);
    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);
    const [editData,setEditData] = useState([]);

    const addModalHandler = () => {
        setAdd(!add);
    }

    const editModalHandler = (record) => {
        setEdit(true);
        setEditData(record);
    }

    const resetEditHandler = () =>{
        setEdit(false);
        setEditData(null);
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
            title:"Class",
            dataIndex:'class',
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
                <AiFillEdit style={{fontSize:'25px',marginRight:'6%'}} onClick={editModalHandler(record)}/>
                <AiFillDelete  style={{fontSize:'25px'}}/>
                </>
            }
        }
    ];

    return (
        <div className='student-table'>
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
            <Modal
            title="Edit Student"
            visible={edit}
            onCancel= {()=>{
              resetEditHandler();
            }}
            onOK={()=>{setEdit(false)}}
            okText="Save"
            style={{width:"100px"}}
            >
        <div className='textInput' style={{display:'flex'}}>
        <label htmlFor="name"  className="label">Name:</label>
        <Input value={editData?.name} style={{marginLeft:'2%'}}onChange={(e) => {
          setEditData((pre) => {
            return {...pre,name: e.target.value};
          })
        }}/>

        </div>
        
            </Modal>

        </div>

    )

}
export default StudentTable;