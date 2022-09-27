import './donortable.scss'
import React from 'react'
import {useState} from 'react'
import {Table,Modal,Input} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";




const DonorTable = (props) => {

    const [isLoading,SetIsLoading] = useState(false);
    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);
    const [editData,setEditData] = useState([]);

    const addModalHandler = () => {
        setAdd(!add);
    }

    const editModalHandler = (record) => {
        setEdit(!edit);
        setEditData(record);
    }

    const resetEditHandler = () =>{
        setEdit(false);
        setEditData(null);
    }

    const EditHandler = (record) => {
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
            dataIndex:'location',
            align:'left'
        },
        {
            title:'Phone Number',
            dataIndex:'mobile',
            align:'left'
        },
        {
            title:'Donated',
            dataIndex:'total_donations',
            align:'right'
        },
        {
            title:'Actions',
            dataIndex:'actions',
            align:'center',
            render:(_,record)=>{
                return<>
                <AiFillEye style={{fontSize:'25px',marginRight:'6%'}}/>
                <AiFillEdit style={{fontSize:'25px',marginRight:'6%'}} onClick={()=>editModalHandler(record)}/>
                </>
            }
        }
    ];

    return (
        <div className='donor-table'>
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
            title="Edit Donor"
            visible={edit}
            onCancel= {()=>{
              resetEditHandler();
            }}
            onOK={()=>{EditHandler()}}
            okText="Save"
            style={{width:"100px"}}
            >
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="name"  className="label" style={{width:'25%'}}>Name:</label>
        <Input value={editData?.name} style={{width:'75%'}}onChange={(e) => {
          setEditData((pre) => {
            return {...pre,name: e.target.value};
          })
        }}/>
        </div>
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="location"  className="label" style={{width:'25%'}}>Locality:</label>
        <Input value={editData?.location} style={{width:'75%'}}onChange={(e) => {
          setEditData((pre) => {
            return {...pre,location: e.target.value};
          })
        }}/>
        </div>
         <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="mobile"  className="label" style={{width:'25%'}}>Phone no:</label>
        <Input value={editData?.mobile} style={{width:'75%'}} onChange={(e) => {
          setEditData((pre) => {
            return {...pre,mobile: e.target.value};
          })
        }}/>
        </div>
        
            </Modal>

        </div>

    )

}
export default DonorTable;