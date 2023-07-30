import { createContext, useState } from "react"
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers"

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000
        const diferencia = obtenerDiferenciaYear(datos.year)
        
        // por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100

        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        resultado *= calcularMarca(datos.marca)

        // Basico aumenta 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)
        
        // Formatear dinero
        resultado = formatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 2000)
    }


    return (
        <CotizadorContext.Provider value={{
            datos,
            handleChange,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }
export default CotizadorContext