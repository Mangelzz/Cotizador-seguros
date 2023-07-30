import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

const FormApp = () => {
  const { datos, handleChange, cotizarSeguro } = useCotizador();

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes('')) {
      Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    cotizarSeguro()
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full bg-white border border-gray-200 outline-none p-2"
            onChange={(e) => handleChange(e)}
            value={datos.marca}
          >
            <option value="">-- Selecciona marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full bg-white border border-gray-200 outline-none p-2"
            onChange={(e) => handleChange(e)}
            value={datos.year}
          >
            <option value="">-- Seleccione año--</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChange(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-800 transition-all cursor-pointer p-2 text-white rounded-lg shadow-lg ease-in-out duration-300 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};
export default FormApp;
