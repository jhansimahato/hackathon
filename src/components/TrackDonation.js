import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { auth, db, storage } from "../context/firebase";
import { DropzoneDialogBase } from 'material-ui-dropzone';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import Navbar from "./Navbar/Navbar";


//import CancelIcon from '@mui/icons-material/Cancel';

const TrackDonation = () => {

    const [msg, setMsg] = useState('');
    const [usere, setUser] = useState({
    to: "",
	subject: "Donation Receipt",   
	discdescription:"Thank you for your generous donation.",   
	description: "PFA the receipt for the same",
	titlemail:" Donation Receipt",
	maillink:"",
    descriptiontitlemail: "PFA the receipt for the same",
	hrefmail:"http://localhost:3000/",
	
	//descriptiontitlemail:"has been uploaded by student. Please review it by logging it into admin panel.",
    attachments:"",
});

const onInputChange = e => {
    setUser({ ...usere, [e.target.name]: e.target.value });
  };
  const onSubmit =()  => {
      // e.preventDefault();
  
      // axios.post(`https://pearl10.herokuapp.com/users`, usere)
      
      axios.post(`http://localhost:5000/users`, usere)
  
      .then(response => setMsg(response.data.respMesg));
  };
    const [open_upload, setOpen_upload] = useState(false);
    const [fileObjects, setFileObjects] = useState([]);
    const [files_up, setfiles_up] = useState([]);
    const [files_url, setfiles_url] = useState([]);
    const form_init = {
		amount: "",
	};

    let new_array_up = [];
    let new_array_url = [];

    const dialogTitle = () => (
        <>
            <span>Upload file</span>
            <IconButton
                style={{ right: '12px', top: '8px', position: 'absolute' }}
                onClick={() => setOpen_upload(false)}>
                <CloseIcon />
            </IconButton>
        </>
    );

	const [formdata, setformdata] = useState(form_init);
    const [sub, setsub] = useState(false);
    const [city, setcity] = useState([]);
    const [donor, setdonor] = useState([]);

    useEffect(() => {
        db
        .collection("Location")
        .get()
        .then((snap) => {
            setcity(
                snap.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        });
    }, []);

    useEffect(() => {
        db
        .collection("Donor")
        .get()
        .then((snap) => {
            setdonor(
                snap.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        });
    }, []);

    const handleChange = (e) => {
		setformdata({
			...formdata,

			[e.target.name]: e.target.value,
		});
	};

    const handleSubmit = ()=>{
        console.log("Hello");
        
    }

    const handleUploadFile = async (donorid) => {
     

        if (fileObjects.length !== 0) {
            fileObjects.map((file_obj) => {

                const storageRef = storage.ref();
                console.log(donorid);
                const file_ref = storageRef.child(`${donorid}/${file_obj.file.name}`);
                
                file_ref.put(file_obj.file).then((snapshot) => {
                    file_ref.getDownloadURL().then((url ) => {
                        console.log("Uploaded" + file_obj.file.name + url)
                        new_array_up.push(file_obj.file.name);
                        new_array_url.push(url);
                        console.log(files_up);


                        if (new_array_url.length === fileObjects.length) {
                            db.collection('Donor').doc(donorid).get().then((doc)=>{
                                if(doc.exists)
                                {
                                    let don = doc.data().donations;
                                    usere.to = doc.data().email;
                                    don.push({
                                        amount : formdata.amount,
                                        location : document.getElementById('city').value,
                                        receiptName : new_array_up[0],
                                        receiptUrl : new_array_url[0],
                                        date: new Date(),
                                    })
                                    db.collection('Donor').doc(donorid).update({
                                        donations:don,
                                     })
                                     usere.attachments = new_array_url[0]
                                     usere.filename = new_array_up[0]
                                    // onSubmit();
                                     
                                }  
                            })
                        }

                    })
                })
            })

        }
        else {
         
            // EmailSend();
            // {EmailSend()}
        }
    }

  return (
    <>
    <main>
        <Navbar/>
        <div className="conatiner">
        <h2 style={{marginTop:'4%'}}>Track Donation</h2>
        <div className="my-6" style={{marginLeft:'20%',marginTop:'2%'}}>
						<Form className="my-3">
						<Form.Group as={Row} className="mb-3 my-2">
                                <Form.Label column sm={2} style={{ fontSize: 'medium' }}>Donor Name *</Form.Label>
                                <Col sm={5}>
                                    <Form.Select aria-label="Donor" id="donor" style={{ fontSize: 'medium' }}>
                                        {donor.length &&
                                            donor.map((sub) => (
                                                <option key={sub.data.donorId} value={sub.data.generatedUid}>{sub.data.name}</option>
                                            ))}

                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 my-2">
                                <Form.Label column sm={2} style={{ fontSize: 'medium' }}>Location *</Form.Label>
                                <Col sm={5}>
                                    <Form.Select aria-label="Location" id="city" style={{ fontSize: 'medium' }}>
                                        {city.length &&
                                            city.map((sub) => (
                                                <option key={sub.data.name} value={sub.data.name}>{sub.data.name}</option>
                                            ))}

                                    </Form.Select>
                                </Col>
                            </Form.Group>


							<Form.Group as={Row} className="mb-3 my-2" controlId="amount">
								<Form.Label column sm={2} style={{ fontSize: "medium" }}>
									Amount *
								</Form.Label>
								<Col sm={5}>
									<Form.Control
										type="text"
										style={{ fontSize: "medium" }}
										placeholder=""
										required={true}
										name="amount"
										value={formdata.amount}
										onChange={handleChange}
									/>
								</Col>
							</Form.Group>

                            <Form.Group as={Row} className="mb-3 my-2">
                                <Form.Label column sm={3} style={{ fontSize: 'medium' }}>Upload Donation Receipt *</Form.Label>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 my-2" controlId="uploadFiles">

                                <Col sm={2}>
                                    <Button variant="primary" color="primary" style={{ height: '40px' }} onClick={() => setOpen_upload(true)}>
                                        Choose files
                                    </Button>

                                </Col>
                                <Col sm={8}>
                                    {(fileObjects) && (fileObjects.map((ob) => {
                                        return (
                                            <>
                                            <span className="mx-1" key={ob.file.name}>
                                                <span>{ob.file.name}</span>
                                            </span>
                                            <br/>
                                            </>
                                        )

                                    }))}
                                </Col>

                            </Form.Group>
                           
							<Button
								variant="primary"
								style={{ fontSize: "medium", width: "100px", marginTop: "4%",marginRight:'25%' }}
								type="submit"
								onClick={(e) => {
									e.preventDefault();
									handleUploadFile(document.getElementById('donor').value);
								}}
							>
								Submit
							</Button>
						</Form>
                        <DropzoneDialogBase
                            dialogTitle={dialogTitle()}
                            fileObjects={fileObjects}
                            cancelButtonText={"cancel"}
                            submitButtonText={"Upload"}
                            maxFileSize={25000000}
                            filesLimit={10}
                            open={open_upload}
                            onAdd={newFileObjs => {

                                setFileObjects([].concat(fileObjects, newFileObjs));
                            }}
                            onDelete={deleteFileObj => {

                                const newfile = fileObjects.filter((obj) => { return (obj.file.path !== deleteFileObj.file.path) })
                                setFileObjects(newfile);
                            }}
                            onClose={() => setOpen_upload(false)}
                            onSave={() => {
                                console.log(fileObjects);
                                setOpen_upload(false);
                            }}
                            showPreviews={true}
                            showFileNamesInPreview={true}
                        />
					</div>
                    </div>
				</main>
    </>
  );
}

export default TrackDonation;
