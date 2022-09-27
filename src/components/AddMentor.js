import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { auth, db } from "../context/firebase";

const AddMentor = () => {
    const form_init = {
		email: "",
		name: "",
		password: "",
		mobile: "",
		mentorId: "",
        generatedUid: "",
        createdTimeStamp: "",
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

    const handleSubmit = () => {
		auth
				.createUserWithEmailAndPassword(formdata.email, formdata.password)
				.then((result) => {
					db
						.collection("Mentor")
                        .doc(result.user.uid)
                        .set({
                           email : formdata.email,
                           name: formdata.name,
                           password: formdata.password,
                           mobile : formdata.mobile,
                           createdTimeStamp : new Date(),
                           city : document.getElementById('city').value,
                           mentorId : id,
                           generatedUid :result.user.uid,
                           sessions: [],
                           studentsOnboarded: 0,
                           volunteersOnboarded : 0,
						   students:[],
						   volunteers:[],
                        })
						
						
					setsub(false);
					setformdata(form_init);
				})
				.catch((e) => {
					if (e.code === "auth/email-already-in-use") {
						db
							.collection("Mentor")
							.add(formdata)
							.then((doc) => {
								db.collection("Mentor").doc(doc.id).update({
									generatedUid: doc.id,
								});
							});
						setsub(false);
						setformdata(form_init);
					} else alert(e);
				});
	};
    useEffect(() => {
		db.collection("Mentor").limit(1).orderBy("createdTimeStamp","desc")
			.get()
			.then((doc) => {
                doc.docs.map((d)=>{
                    console.log(d.data().mentorId);
                    let val = String(parseInt(d.data().mentorId.substring(1,d.data().mentorId.length))+1).padStart(3,0);
                    console.log("M"+val);
                    setid("M"+val);
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

							<Form.Group as={Row} className="mb-3 my-2" controlId="password">
								<Form.Label column sm={2} style={{ fontSize: "medium" }}>
									Set Password *
								</Form.Label>
								<Col sm={5}>
									<Form.Control
										type="text"
										style={{ fontSize: "medium" }}
										placeholder=""
										required={true}
										name="password"
										value={formdata.password}
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

export default AddMentor;
