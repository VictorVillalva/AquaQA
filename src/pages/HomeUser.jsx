import UserNavBar from "../components/UserNavBar"
import '../assets/Styles/HomeUser.css'
import CardUser from "../cards/CardUser"
import CardPorcentajeMinerales from "../cards/CardPorcentajeMinerales"
import CardPorcentajeSuministro from "../cards/CardPorcentajeSuministro"
import CardAnalisisGeneral from "../cards/CardAnalisisGeneral"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

export const HomeUser = () =>{

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()

    useEffect(() => {
        const email = localStorage.getItem('email')
        const dataUser = {
            email: email
        }
        console.log(dataUser)
        axios.post("http://localhost:8080/api/user/email", dataUser,{
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token'),
              },

        })
            .then((resp) => {
                const { data } = resp;
                console.log(data.data.name)
                setName(data.data.name)
                setLastName(data.data.lastname)
            })
            .catch(({ response }) => {
                console.log(response.message);
            });      
    },[])


    return(
        <div className="container-home-user">
            <div className="container navbarUser">
                <UserNavBar></UserNavBar>
            </div>
            <div className="content-userhome">
                <h2 className="userBienvenida">Bienvenido<h2 className="name-lastname">{name} {lastName}</h2></h2>
                <div className="cards">
                    <div className="cardUser">
                        <CardUser/>
                    </div>
                    <div className="cards-analisis">
                        <div className="porcentaje-suministro">
                            <div className="porcentaje">
                                <CardPorcentajeMinerales/>
                            </div>
                            <div className="suministro">
                                <CardPorcentajeSuministro/>
                            </div>
                        </div>
                        <div className="analisis">
                                <CardAnalisisGeneral/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}