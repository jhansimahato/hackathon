import './donortable.scss'
import React, { useState, useEffect } from "react";
import {Skeleton,Divider,Table,Modal,Input,List} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { db } from '../../context/firebase';
import InfinteScroll from 'react-infinite-scroll-component';




const DonorTable = (props) => {

    const [isLoading,SetIsLoading] = useState(false);
    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);
    const [editData,setEditData] = useState([]);
    const [viewTransactions,setViewTransactions] = useState(false);
    const [transc, settransc] = useState([]);


    const viewTransactionsHandler = (record) => {
        db.collection('Donor').where("generatedUid","==",record.generatedUid).get().then((snap)=>{
        snap.docs.map((doc)=>{
          settransc(
            doc.data().donations.map((arr)=>({
                amount:arr.amount,
                location:arr.location
            }))
          )
        });
        })
        setViewTransactions(true);
    }

    const closeTransactionHandlerOk = () => {
      setViewTransactions(false)
    }

   
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
        console.log(editData)
        db.collection('Donor').doc(editData.generatedUid).update(editData);
        setEditData(null);
    }

    useEffect(() => {
      console.log(transc)
    }, [transc]);
    
    const data = [
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      },
      {
        id:'1',
        date:'22-08-1999',
        amount:'20,000'
      }

    ];
    const columns = [
        {
            title:'Id',
            dataIndex:'donorId',
            align:'left'
        },
        {
            title:'Name',
            dataIndex:'name',
            align:'left'
        },
        {
            title:'Email',
            dataIndex:'email',
            align:'left'
        },
        {
            title:'Phone Number',
            dataIndex:'mobile',
            align:'left'
        },
        {
            title:'Donated Amount',
            dataIndex:'amount',
            align:'right'
        },
        {
            title:'Actions',
            dataIndex:'actions',
            align:'center',
            render:(_,record)=>{
                return<>
                <AiFillEye style={{fontSize:'25px',marginRight:'6%'}} onClick={()=>viewTransactionsHandler(record)}/>
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
        <label htmlFor="mobile"  className="label" style={{width:'25%'}}>Phone no:</label>
        <Input value={editData?.mobile} style={{width:'75%'}} onChange={(e) => {
          setEditData((pre) => {
            return {...pre,mobile: e.target.value};
          })
        }}/>
        </div>
        
            </Modal>
            <Modal
            title="Transactions"
            visible={viewTransactions}
            onCancel={()=>{closeTransactionHandlerOk()}}
            okButtonProps={{ style: { display: 'none' } }}
            okText="OK"
            style={{width:"100px"}}
            >
                   
              {/* this will give the transactions details of particular donor to admin */}
        <InfinteScroll
       dataLength={transc.length} //this is the length of transaction data 
       next={transc}
        size='Small'
       
       loader={
        <Skeleton
        avatar
        paragraph={{
          rows:1,
        }}
        active
        />
       }
       endMessage={<Divider plain>End of transaction List</Divider>}>
        <List
        itemLayout="horizontal"
        dataSource={transc} //here the data to be pasted has to be provided
        renderItem={(item)=>(
          <List.Item>
            <List.Item.Meta
            title={"Amount: " + item.amount}
            description={"Location: "+ item.location}
            />
           
          </List.Item>
        )}
        />
          </InfinteScroll>
       
        
            </Modal>

        </div>

    )

}
export default DonorTable;