import React, { useState, useEffect } from "react";
import "./home.scss"
import Widget from '../components/Widget/Widget';
import Featured from '../components/Featured/Featured';
import Chart from '../components/Charts/Charts';
import Progress from '../components/LinearProg/LinearProg';
import List from '../components/ListComponent/ListComponents';
import { auth, db } from "../context/firebase";
import Navbar from "../components/Navbar/Navbar";



const Volunteers = [
    {
      name: 'Ant Design Title 1',
      location: 'location1',
    },
    {
      name: 'Ant Design Title 2',
      location: 'location2',
    },
    {
      name: 'Ant Design Title 3',
      location: 'location3',
    },
    {
      name: 'Ant Design Title 4',
      location: 'location4'
    },
  ];

const Location = [
    {
        location: 'Kolkata',
        held: '50',  // held = % of session held
    },
    {
        location: 'location1',
        held: '80',
    },
    {
        location: 'location1',
        held: '30',
    },
    {
        location: 'location1',
        held: '60',
    },
    {
        location: 'location1',
        held: '10',
    },
]

const Users = [
    {
        totalStudents: '576',
        totalVolunteers: '76',
        totalMentors: '68',
        totalSessions: '115'
    }
]


const Home = () => {
    
    const [stcount, setstcount] = useState(0);
    const [volcount, setvolcount] = useState(0);
    const [mentcount, setmentcount] = useState(0);
    const [loccount, setloccount] = useState(0);
    const [doncount, setdoncount] = useState(0);
    const [sesscount, setsesscount] = useState(0);

    const [studdet, setstuddet] = useState([]);
    const [voldet, setvoldet] = useState([]);

    const [location, setlocation] = useState([]);
    const [sessions, setsessions] = useState([]);
    const [locsess, setlocsess] = useState([]);
    const [tot_sess, settot_sess] = useState(1);
    const [sortvol, setsortvol] = useState([]);
    const [today_sess, settoday_ct] = useState(0);
    const [week_sess, setweek_sess] = useState(0);
    const [month_sess, setmonth_sess] = useState(0);
    const [tot_att_ct, settot_att_ct] = useState(0);
    const [tot_sess_ct, settot_sess_ct] = useState(0);
    const [tot_comp_sess, settot_comp_sess] = useState(0);


   
    useEffect(() => {
        let n = new Date();
        console.log(n.toDateString());
        db.collection('Student')
        .get()
            .then((doc)=>{
              setstcount(doc.size);
              setstuddet(
                doc.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            });

            db.collection('Volunteer')
        .get()
            .then((doc)=>{
              setvolcount(doc.size);

              setvoldet(
                doc.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
              )  
            });

            db.collection('Mentor')
            .get()
                .then((doc)=>{
                  setmentcount(doc.size);
            });

            db.collection('Location')
            .get()
                .then((doc)=>{
                  setloccount(doc.size);
                  setlocation(
                    doc.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            });

        
        db.collection('Session')
        .get()
            .then((doc)=>{
              setsesscount(doc.size);
              setsessions(
                doc.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            });

            db.collection('Donor')
            .get()
                .then((doc)=>{
                  setdoncount(doc.size);
            });
        }, []);


        useEffect(() => {
            setsortvol(
				[...voldet].sort((a, b) => {
					let x = b.data.sessions ? b.data.sessions.length : 0;
					let y = a.data.sessions ? a.data.sessions.length : 0;
					return x - y;
				})
			);
        }, [voldet]);

        useEffect(() => {
            let cnt =0;
            let sess_ct=0;
            let comp_sess = 0;
         sessions.map((e)=>{
            
            if(new Date(e.data.date.seconds*1000).getTime() <= new Date().getTime())
            {
            cnt += e.data.attendedCount;
            sess_ct += e.data.noOfStudents;
            comp_sess++;
            }
         })
         console.log(cnt);
        settot_att_ct(cnt);
        settot_sess_ct(sess_ct);
        settot_comp_sess(comp_sess);
        }, [sessions]);
        
    return (
        <div>
         <Navbar/>
        <div className="home">
            
            <div className="homeContainer">
                <div className="widgets">
                    <Widget title="Students Enrolled" link="view" count={stcount} icon=""/>
                    <Widget title="Volunteers joined" link="view" count={volcount} icon=""/>
                    <Widget title="Mentors" link="view" count={mentcount} icon=""/>
                    <Widget title="Locations" link="view" count={loccount} icon=""/>
                    <Widget title="Donors" link="" count={doncount} icon=""/>
                </div>

                <div className="charts">
                    <Featured sessionCount={tot_comp_sess} desc="Successfully conducted" studentAttendence={(((tot_att_ct)/(tot_sess_ct))*100).toFixed(2)} TodayAttendence="1" WeeklyAttendence="3" MonthlyAttendence="5" />
                    <Chart title="Students Enrolled Monthly" aspect={2 / 1}/>
                </div>
                <div className="content3">
                    <div className="progression">
                        <div className='title'>Sessions Held</div>
                        { location.map((e) => (
                            <Progress location={e.data.name} done={`${e.data.sessions}`?((e.data.sessions.length/tot_comp_sess)*100).toFixed(2):0}/> //done = % of session held at particular location
                        ))};
                    </div>
                    <div className="listSection">
                    <div className='title'>Top Performing Volunteers</div>

                        { sortvol.map((e,index) => index < 5 && (
                            <List name={e.data.name} location={e.data.location} />
                          
                        ))}

                    </div>
                </div>

            </div>
      </div>
      </div>
    );
  };

export default Home