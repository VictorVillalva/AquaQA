import { Header } from "../components/Header"
import { Inicio } from "../components/Inicio"
import { CardLandingPage } from "../components/CardLandingPage"
import { Nosotros } from "../components/Nosotros"
import { Servicios } from "../components/Servicios"
import { Elegirnos } from "../components/Elegirnos"
import { Footer } from "../components/Footer"

import '../assets/Styles/LandingPage.css'


export const LandingPage = () => {

    return (
        <>
            <Header></Header>
            <Inicio></Inicio>
            <CardLandingPage></CardLandingPage>
            <Nosotros></Nosotros>
            <Servicios></Servicios>
            <Elegirnos></Elegirnos>
            <Footer></Footer>
        </>
    )
}