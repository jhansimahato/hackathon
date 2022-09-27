import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { auth, db } from "../context/firebase";

const AddDonor = () => {
    const form_init = {
		email: "",
		name: "",
		donations: [],
		mobile: "",
		donorId: "",
        generatedUid: "",
        createdTimeStamp: new Date(),
	};

    const [id, setid] = useState(null);
	const [formdata, setformdata] = useState(form_init);
    const [sub, setsub] = useState(false);
    const [city, setcity] = useState([]);

    const handleChange = (e) => {
		setformdata({
			...formdata,

			[e.target.name]: e.target.value,
		});
	};

    const handleSubmit = () => {
        setsub(true);
        setformdata({
			...formdata,
			donorId: id,
		});	
	};

    useEffect(() => {
      if(sub)
      {
        db.collection("Donor")
        .add(formdata)
        .then((doc) => {
            db.collection("Donor").doc(doc.id).update({
                generatedUid: doc.id,
            });
        });
    setsub(false);
    setformdata(form_init);
      }
    }, [formdata]);

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
		db.collection("Donor").limit(1).orderBy("createdTimeStamp","desc")
			.get()
			.then((doc) => {
                doc.docs.map((d)=>{
                    console.log(d.data().donorId);
                    let val = String(parseInt(d.data().donorId.substring(1,d.data().donorId.length))+1).padStart(3,0);
                    console.log("D"+val);
                    setid("D"+val);
                })
			});
	}, []);        

  return (
 <>
 <main>
					<div className="mx-5">
						<Form className="my-3">
							<Form.Group as={Row} className="mb-3" controlId="name">
								<Form.Label column sm={2} style={{ fontSize: "medium" }}>
									Name *
								</Form.Label>

								<Col sm={5}>
									<Form.Control
										type="text"
										placeholder=""
										style={{ fontSize: "medium" }}
										required={true}
										name="name"
										value={formdata.name}
										onChange={handleChange}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} className="mb-3 my-2" controlId="email">
								<Form.Label column sm={2} style={{ fontSize: "medium" }}>
									Email *
								</Form.Label>
								<Col sm={5}>
									<Form.Control
										type="text"
										style={{ fontSize: "medium" }}
										placeholder=""
										required={true}
										name="email"
										value={formdata.email}
										onChange={handleChange}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} className="mb-3 my-2" controlId="number">
								<Form.Label column sm={2} style={{ fontSize: "medium" }}>
									Mobile Number *
								</Form.Label>
								<Col sm={5}>
									<Form.Control
										type="text"
										style={{ fontSize: "medium" }}
										placeholder=""
										required={true}
										name="mobile"
										value={formdata.mobile}
										onChange={handleChange}
									/>
								</Col>
							</Form.Group>

							<Button
								variant="primary"
								style={{ fontSize: "medium", width: "100px", marginTop: "2%" }}
								type="submit"
								onClick={(e) => {
									e.preventDefault();
									handleSubmit();
								}}
							>
								Submit
							</Button>
						</Form>
					</div>
				</main>
    
 </>
  );
}

export default AddDonor;
