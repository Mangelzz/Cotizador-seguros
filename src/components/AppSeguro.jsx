import useCotizador from "../hooks/useCotizador";
import FormApp from "./FormApp";
import Spinner from "./Spinner";
import Resultado from "./Resultado";

const AppSeguro = () => {
  const { cargando } = useCotizador()
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-4xl text-center font-black">
          Cotizador de seguros de Autos
        </h1>

        <main className="bg-white md:w-2/3 lg:w-2/4 shadow-lg p-10 mx-auto rounded-lg mt-10">
          <FormApp />
          {cargando ? <Spinner />: <Resultado /> }
        </main>
      </header>
    </>
  );
};
export default AppSeguro;
