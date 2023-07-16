import UserNavBar from "../components/UserNavBar"
import '../assets/Styles/HomeUser.css'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import Print from '../assets/Images/Print.svg'

export const HomeUser = () =>{

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    //const [dataTable, setDataTable] = useState()
    const [ID, setID] = useState()
    const [sensor, setSensor] = useState('default');
    const [tiempo, setTiempo] = useState('default');

    const handleSensorChange = (event) => {
        setSensor(event.target.value);
      };
    
    const handleTiempoChange = (event) => {
        setTiempo(event.target.value);
      };

    const handleFiltroClick = () => {
        switch (sensor) {
          case 'PH':
            axios.get(`http://localhost:8080/api/report/daily/data/ph/${ID}`)
            .then((response) => {
                console.log(response)
                const data = response.data;
                console.log(data);
                /*axios.post('https://aquaqa-data-analysis.onrender.com/frecuency-distribution', data)
                .then((resp) => {
                    const {dataTable} = resp;
                    if (dataTable) {
                        setDataTable(dataTable);
                      }
                })
                .catch(({response}) => {
                    console.log(response.dataTable)
                })*/
            })
            .catch((error) => {
                console.error(error)
            })
            break;
          case 'TemperaturaInterna':
            axios.get(`http://localhost:8080/api/report/${tiempo}/data/itemp/${ID}`)
            break;
          case 'TemperaturaExterna':
            axios.get(`http://localhost:8080/api/report/${tiempo}/data/etemp/${ID}`)
            break;
          case 'Conductividad':
            axios.get(`http://localhost:8080/api/report/${tiempo}/data/tds/${ID}`)
            break;
          case 'Turbidez':
            axios.get(`http://localhost:8080/api/report/${tiempo}/data/ts/${ID}`)
            break;
          case 'Humedad': 
            axios.get(`http://localhost:8080/api/report/${tiempo}/data/ehum/${ID}`)
            break;
          case 'Tension':
            axios.get(`http://localhost:8080/api/report/${tiempo}/data/tension/${ID}`)
            break;   
          default:
            break;
        }
      }; 

//Obtencion de datos del usuario
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
                setID(data.data.id)
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
                <div className="encabezado">
                    <div className="titulo">
                        <h2 className="userBienvenida">Bienvenido<h2 className="name-lastname">{name} {lastName}</h2></h2>
                    </div>
                    <div className="icon-pdf">
                        <img src={Print}/>
                    </div>
                </div>
                <div className="selects"  >
                    <select className="select" value={sensor} onChange={handleSensorChange}>
                        <option value="default"disabled>Sensor</option>
                        <option value="PH">PH</option>
                        <option value="TemperaturaExterna">Temperatura Externa</option>
                        <option value="TemperaturaInterna">Temperatura Interna</option>
                        <option value="Conductividad">Conductividad</option>
                        <option value="Turbidez">Turbidez</option>
                        <option value="Humedad">Humedad</option>
                        <option value="Tension">Tension</option>
                    </select>
                    <select className="select" value={tiempo} onChange={handleTiempoChange}>
                        <option value="default" disabled>Tiempo</option>
                        <option value="daily">Día</option>
                        <option value="weekly">Semana</option>
                        <option value="monthly">Mes</option>
                        <option value="yearly">Año</option>
                     </select>
                    <button className="btn-filtro" onClick={handleFiltroClick}>Enviar</button>
                </div>
                <div className="analisis-general">
                    <div className="contenido-analisis">
                        <div className="tit">
                            <h2>Análisis general</h2>
                            <div className="divider"/>
                        </div>
                        <table className="table-frecuencia">
                            <thead>
                                <tr>
                                    <th className="frecuencia">No. Clase</th>
                                    <th className="frecuencia">Limite Inferior</th>
                                    <th className="frecuencia">Limite Superior</th>
                                    <th className="frecuencia">Frecuencia</th>
                                    <th className="frecuencia">Marca de Clase</th>
                                    <th className="frecuencia">Frecuencia Acumulada</th>
                                    <th className="frecuencia">Frecuencia Comp.</th>
                                    <th className="frecuencia">Limite Inferior exacto</th>
                                    <th className="frecuencia">Limite Superior exacto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*dataTable && dataTable.map((row, index) => (
                                    <tr key={index}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                        ))*/}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="analisis-avanzado">
                        <div className="contenedor-analisis">
                            <div className="head">
                                <div className="tit-analisis">
                                    <h2>Análisis avanzado</h2>
                                    <div className="divider"/>
                                </div>
                            </div>
                            <div className="datos-analisis">
                                <table className="tableAn">
                                    <thead>
                                        <tr>
                                            <th>Punto medio de los datos</th>
                                            <th>Promedio</th>
                                            <th>Puntos donde mas se repite</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>00000</td>
                                            <td>00000</td>
                                            <td>00000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="contenedor-analisis2">
                            <div className="head">
                                <div className="tit-analisis">
                                    <h2>Análisis avanzado</h2>
                                    <div className="divider"/>
                                </div>
                            </div>
                            <div className="datos-analisis">
                                <table className="tableAn">
                                    <thead>
                                        <tr>
                                            <th className="var">Varianza</th>
                                            <th className="var">Desviación <br /> Estandar</th>
                                            <th className="var">Promedio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="Var2"> 
                                        <tr>
                                            <td className="var">00000</td>
                                            <td className="var">00000</td>
                                            <td className="var">00000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="pronosticos">
                        <div className="tablaPronosticos">
                            <div className="head-pronos">
                                <div className="tit-pronos">
                                    <h2>Pronosticos</h2>
                                    <div className="divider"/>
                                </div>
                            </div>
                            <table className="table-pronostico">
                                <tbody>
                                    <tr>
                                        <td>Coeficiente relacional</td>
                                        <td className="resultado">00000</td>
                                    </tr>
                                    <tr>
                                        <td>Coeficiente lineal</td>
                                        <td className="resultado">00000</td>
                                    </tr>
                                    <tr>
                                        <td>Pronostico al valor sensor X</td>
                                        <td className="resultado"> <input type="number"/> </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="resultado" >00000</td>
                                    </tr>
                                    <tr>
                                        <td>Pronostico al valor sensor Y</td>
                                        <td className="resultado"> <input type="number"/> </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="resultado">00000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grafica">

                        </div>
                    </div>      
            </div>
        </div>
    )
}