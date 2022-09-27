import React from 'react'
import {useState} from 'react'
import {Table,Modal,Input} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import './studentable.scss'
import { db } from '../../context/firebase';



const StudentTable = (props) => {

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
      setEdit(false);
      console.log(record);
      console.log("Hello");
      db.collection('Student').doc(editData.generatedUid).update(editData);
      setEditData(null);
    }

    const handleDelete =(id) => {
        Modal.confirm({
          title:'Are you sure, you want to delete this record',
          okType:"danger",
          onOk: ()=>{
            db.collection('Student').doc(id.generatedUid).delete();
          },
          cancelText:"No",
          okText:'Yes'
        });
         
      };
    
    
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
            title:"Class",
            dataIndex:'className',
            align:'left'
        },
        {
            title:'Attendance (%)',
            dataIndex:'attendance',
            align:'right'
        },
        {
            title:'Actions',
            dataIndex:'actions',
            align:'center',
            render:(_,record)=>{
                return<>
                
                <AiFillEdit style={{fontSize:'25px',marginRight:'6%'}} onClick={()=>editModalHandler(record)}/>
                <AiFillDelete  style={{fontSize:'25px'}} onClick={()=>handleDelete(record)}/>
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
            onOk={()=>{EditHandler()}}
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

        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="className"  className="label" style={{width:'25%'}}>Class:</label>
        <Input value={editData?.className} style={{width:'75%'}} onChange={(e) => {
          setEditData((pre) => {
            return {...pre,className: e.target.value};
          })
        }}/>
        </div>
        
            </Modal>

        </div>

    )

}
export default StudentTable;