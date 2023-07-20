//Componentes
import UserNavBar from "../components/UserNavBar";
import GraficaUser from "../components/GraficaUsuario.jsx";

//CSS
import '../assets/Styles/HomeUser.css'
//Dependencias o Librerias
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
//Imagenes
import Print from '../assets/Images/Print.svg'

export const HomeUser = () => {

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [dataTableDistribution, setDataTableDistribution] = useState([])
    const [dataTableTendency, setDataTableTendency] = useState([])
    const [dataTableDispersion, setDataTableDispersion] = useState([])
    const [ID, setID] = useState()
    const [sensor, setSensor] = useState('default');
    const [tiempo, setTiempo] = useState('default');
    const [dta, setDta] = useState([])
    const [etemp, setEtemp] = useState([])
    const [ph, setPh] = useState([])
    const [coeR, setCoeR] = useState([])
    const [coeL, setCoeL] = useState([])
    const [valueEtemp, setValueEtemp] = useState([])
    const [valuePh, setValuePh] = useState([])
    const [etempProns, setEtempProns] = useState([])
    const [phProns, setPhProns] = useState([])
    const [cordPoints, setCordPoints] = useState([])
    const [tableHeight, setTableHeight] = useState('21%');

    //Obtencion de datos del usuario


    const handleSendEtemp=(e)=>{
        setValueEtemp(e.target.value)
    }

    const handleSendPh=(e)=>{
        setValuePh(e.target.value)
    }

    useEffect(() => {
        const email = localStorage.getItem('email')
        const dataUser = {
            email: email
        }
        console.log(dataUser)
        axios.post("https://aqua-qa.sytes.net/api/user/email", dataUser, {
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
    }, [])

    const handleSensorChange = (event) => {
        setSensor(event.target.value);
    };

    const handleTiempoChange = (event) => {
        setTiempo(event.target.value);
    };

    const handleFiltroClick = () => {
        axios.get(`https://aqua-qa.sytes.net/api/report/${tiempo}/data/${sensor}/${ID}`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            }
        })
            .then((response) => {
                const data = response.data;
                setDta(data)
                console.log(data)
                postApiPython();
            })
            .catch((error) => {
                console.error(error)
            })
    };

    const postApiPython = () => {
        const datapost = {
            data: dta,
        }
        axios.post('https://aquaqa-data-analysis.onrender.com/frecuency-distribution', datapost)
            .then((resp) => {
                const { data } = resp;
                setDataTableDistribution(data)
                axios.post('https://aquaqa-data-analysis.onrender.com/central-tendency', datapost)
                    .then((resp) => {
                        const { data } = resp
                        setDataTableTendency(data)
                        axios.post('https://aquaqa-data-analysis.onrender.com/dispersion-data', datapost)
                            .then((resp) => {
                                const { data } = resp
                                setDataTableDispersion(data)
                            })
                    })
            })
            .catch(({ resp }) => {
                console.log(resp)
            })
    }

    const CoeficienteRelacional  = () => {
        axios.get(`https://aqua-qa.sytes.net/api/report/${tiempo}/data/ph/${ID}`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            }
        })
        .then((response) => {
            const {data} = response
            setPh(data)
            axios.get(`https://aqua-qa.sytes.net/api/report/${tiempo}/data/etemp/${ID}`,{
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': localStorage.getItem('token'),
                }
            })
            .then((response) => {
                const {data} = response;
                setEtemp(data)
                const dataCoe = {
                    data01: ph,
                    data02: etemp
                  };
                console.log(dataCoe) 
                axios.post('https://aquaqa-data-analysis.onrender.com/relational-coeficient', dataCoe)
                .then((response) => {
                    const {data} = response
                    setCoeR(data)
                    const dataLineal = {
                        data01: ph,
                        data02: etemp
                    }
                    axios.post('https://aquaqa-data-analysis.onrender.com/determination-coeficient', dataLineal)
                    .then((response) => {
                    const {data} = response
                    setCoeL(data)
                    })
                })
                axios.post('https://aquaqa-data-analysis.onrender.com/cardinal-point',dataCoe)
                .then((response) => {
                    setCordPoints(response.data)
                    console.log("cp: ", cordPoints)
                })
            })
        })
    }

    const temperaturaPronostico = () => {
        const dataTempPronos = {
            data01: ph,
            data02: etemp,
            number: valueEtemp
        }
        axios.post('https://aquaqa-data-analysis.onrender.com/regretion-coeficient-x', dataTempPronos)
        .then((response) => {
            const {data} = response
            setEtempProns(data)
        })
    }

    const PhPronostico = () => {
        const dataPhPronos = {
            data01: ph,
            data02: etemp,
            number: valuePh
        }
        axios.post('https://aquaqa-data-analysis.onrender.com/regretion-coeficient-y', dataPhPronos)
        .then((response) => {
            const {data} = response
            setPhProns(data)
        })
    }

    // Generador de pdf
    const exportarAPDF = async () => {
        const inputElements = document.getElementsByClassName('pdf-content');
        const pdf = new jsPDF('p', 'mm', 'a4');
        let yOffset = 10; // Ajusta la posición vertical de los componentes en la página

            pdf.setFontSize(18);
            pdf.text(`Reporte General ${name} ${lastName}`, 10, 10);

        for (let i = 0; i < inputElements.length; i++) {
          const input = inputElements[i];


          const canvas = await html2canvas(input);
          const imgData = canvas.toDataURL('image/png');

          const imgWidth = pdf.internal.pageSize.getWidth() - 20; // Ajusta el ancho de la imagen al ancho de la página
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
           
          pdf.addImage(imgData, 'PNG', 10, yOffset, imgWidth, imgHeight);
          yOffset += imgHeight + 10; // Ajusta la posición vertical para el siguiente componente
        }  



      
        pdf.save('ReporteGeneral.pdf');
      };

    useEffect(() => {
        const newTableHeight = `${dataTableDistribution.length * 4.2}%`; 
        setTableHeight(newTableHeight);
      }, [dataTableDistribution]);
    const pointData = cordPoints.map(([x, y])=>({x, y}));

            
    return (
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
                        <button className="button-print" onClick={exportarAPDF}><img src={Print} /></button>
                    </div>
                </div>
                <div className="selects" >
                    <select className="select" value={sensor} onChange={handleSensorChange}>
                        <option value="default" disabled>Sensor</option>
                        <option value="ph">PH</option>
                        <option value="etemp">Temperatura Externa</option>
                        <option value="itemp">Temperatura Interna</option>
                        <option value="tds">Conductividad</option>
                        <option value="ts">Turbidez</option>
                        <option value="ehum">Humedad</option>
                        <option value="tension">Tension</option>
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
                <div className="analisis-general pdf-content" style={{ height: tableHeight }} id="captura-datos">
                    <div className="contenido-analisis">
                        <div className="tit">
                            <h2>Análisis general</h2>
                            <div className="divider" />
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
                                {dataTableDistribution && dataTableDistribution.map((row, index) => (
                                    <tr key={index}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="analisis-avanzado pdf-content" id="captura-datos2">
                    <div className="contenedor-analisis">
                        <div className="head">
                            <div className="tit-analisis">
                                <h2>Análisis avanzado</h2>
                                <div className="divider" />
                            </div>
                        </div>
                        <div className="datos-analisis">
                            <table className="tableAn">
                                <thead>
                                    <tr>
                                        <th>Promedio</th>
                                        <th>Punto medio de los datos</th>
                                        <th>Puntos donde mas se repite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{dataTableTendency.media}</td>
                                        <td>{dataTableTendency.mediana}</td>
                                        <td>{dataTableTendency.moda}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="contenedor-analisis2">
                        <div className="head">
                            <div className="tit-analisis">
                                <h2>Análisis avanzado</h2>
                                <div className="divider" />
                            </div>
                        </div>
                        <div className="datos-analisis">
                            <table className="tableAn">
                                <thead>
                                    <tr>
                                        <th className="var">Promedio</th>
                                        <th className="var">Varianza</th>
                                        <th className="var">Desviación <br /> Estandar</th>
                                    </tr>
                                </thead>
                                <tbody className="Var2">
                                    <tr>
                                        <td className="var">{dataTableDispersion.media}</td>
                                        <td className="var">{dataTableDispersion.varianza}</td>
                                        <td className="var">{dataTableDispersion.desviacionEstandar}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <h2 className="Tit-TPH pdf-content">Análisis lineal del PH y Temperatura</h2>
                <div className="pronosticos pdf-content" id="captura-datos3">
                    <div className="tablaPronosticos">
                        <div className="head-pronos">
                            <div className="tit-pronos">
                                <h2>Pronósticos</h2>
                                <div className="divider" />
                            </div>
                            <div className="btn-generar">
                                <button onClick={CoeficienteRelacional}>Generar</button>
                            </div>
                        </div>  
                        <table className="table-pronostico">
                            <tbody>
                                <tr>
                                    <td>Coeficiente relacional</td>
                                    <td className="resultado">{coeR}</td>
                                </tr>
                                <tr>
                                    <td>Coeficiente lineal</td>
                                    <td className="resultado">{coeL}</td>
                                </tr>
                                <tr>
                                    <td>Pronostico al valor del<br />sensor de temperatura</td>
                                    <td className="resultado" id="inputres"> 
                                        <input type="number" placeholder="Temp" value={valueEtemp} onChange={handleSendEtemp}/>
                                        <button className="btn-EnvPronos" onClick={temperaturaPronostico}>Enviar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="resultado">{etempProns}</td>
                                </tr>
                                <tr>
                                    <td>Pronostico al valor del<br />sensor de PH</td>
                                    <td className="resultado " id="inputres"> 
                                        <input type="number" placeholder="PH" value={valuePh} onChange={handleSendPh}/> 
                                        <button className="btn-EnvPronos" onClick={PhPronostico}>Enviar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="resultado">{phProns}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="graficaUserData">
                        <div className="graficaStyles">
                            <GraficaUser datos={pointData} diagonalValue={coeL}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}