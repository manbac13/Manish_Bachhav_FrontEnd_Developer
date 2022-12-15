import axios from "axios";
import { useEffect, useState } from "react";
import dragon1 from "../images/dragon1.jpg"
import dragon2 from "../images/dragon2.jpg"
import dragon3 from "../images/dragon3.jpg"
import dragon4 from "../images/dragon4.jpg"
import dragon5 from "../images/dragon5.jpg"
import dragon6 from "../images/dragon6.jpg"
import dragon7 from "../images/dragon7.jpg"

import Card from 'react-bootstrap/Card';

const DataGrid = () => {

    const images = [dragon1, dragon2, dragon3, dragon4, dragon5, dragon6, dragon7]

    const [capsuleData, setCapsuleData] = useState([])
    const [popUpData, setPopUpdata] = useState([])
    const [display, setDisplay] = useState("none")

    useEffect(() => {
        axios.get("https://api.spacexdata.com/v3/capsules").then((res) => {
            setCapsuleData(res.data)
        })
    }, [])
    console.log(capsuleData)

    return (
        <>
            <section className="display-prop-section">
                <section className="main-data-grid-section">
                    <div className="data-grid-intro">
                        <p className="data-grid-into-header">
                            Dragon
                        </p>
                        <p className="data-grid-into-subhead">
                            Sending humans and Cargo into space
                        </p>
                    </div>
                    <section className="data-grid-section">
                        {
                            capsuleData.map((capsule, index) => {

                                const clickForPopUp = () => {
                                    let data = capsuleData[index]
                                    setPopUpdata(data)
                                    let popUp = document.getElementsByClassName("pop-up-div")[0];
                                    popUp.innerHTML = `
                                        <div>capsule_id : ${popUpData.capsule_id}</div>
                                        <div>capsule_series : ${popUpData.capsule_series}</div>
                                        <div>Landings : ${popUpData.landings}</div>
                                        <div>Missions : ${popUpData.missions}</div>
                                        <div>Reuse Count : ${popUpData.reuse_count}</div>
                                        <div>Status : ${popUpData.status}</div>
                                        <div>Type : ${popUpData.type}</div>
                                    `
                                    setDisplay("block")
                                }
                                

                                let randomNumber = Math.floor(Math.random() * 7);
                                return (
                                    <>
                                        <Card className="data-cards" onClick={clickForPopUp} style={{ width: '20rem', backgroundColor: "#3a3a3a" }}>
                                            <Card.Img variant="top" src={images[randomNumber]} />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "24px" }}>{capsule.capsule_id}</Card.Title>
                                                <Card.Text>
                                                    <p style={{ fontSize: "17px" }}>{capsule.original_launch}</p>
                                                    <p style={{ fontSize: "16px", color: "#ccc" }}>{capsule.status}</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </section>
                </section>
                <div className="pop-up-div" style={{display:display}}>
                    
                </div>
            </section>



        </>
    )
}
export default DataGrid;