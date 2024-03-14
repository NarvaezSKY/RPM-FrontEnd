import { useState, useEffect } from "react";
import { getRutas } from "../../api/rutas";

const Rutas = () => {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    fetchRutas();
  }, []);

  const fetchRutas = async () => {
    const response = await getRutas();
    console.log(response.data.ruta);
    setRutas(response.data.ruta);
  };

  return (
    /*
    <>
      <h1>Rutas</h1>
      {rutas.map((ruta) => (
        <div key={ruta._id}>
          <img src={ruta.FotoRuta} alt="" />
          <p>Nombre de la Ruta; {ruta.NombreRuta}</p>
          <p>Calificacion; {ruta.CalificacionRuta}</p>
          <p>Descripcion; {ruta.DescripcionRuta }</p>         
          <p>Km totales; {ruta.KmTotalesRuta}</p>
          <p>Presupuesto;{ruta.PresupuestoGas}</p>          
          <p>Fecha del tal; {ruta.createdAt}</p>
          <p>Moto tal; {ruta.motoviajero}</p>
        </div>
      ))}
    </>*/
    <>
    <div className="px-8 py-4">
      <h1 className="text-3xl py-8 text-white font-bold mb-4">Ultimas Rutas hechas por los usuarios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rutas.map((ruta) => (
            <div key={ruta._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={ruta.FotoRuta} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Nombre de la Ruta: {ruta.NombreRuta}</h2>
              <p className="text-gray-600 mb-1">Calificación: {ruta.CalificacionRuta}</p>
              <p className="text-gray-600 mb-1">Descripción: {ruta.DescripcionRuta}</p>
              <p className="text-gray-600 mb-1">Km totales: {ruta.KmTotalesRuta}</p>
              <p className="text-gray-600 mb-1">Presupuesto: {ruta.PresupuestoGas}</p>
              <p className="text-gray-600 mb-1">Fecha: {new Date(ruta.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-1">Moto viajero: {ruta.motoviajero}</p>
            </div>
          </div>
          ))}
        </div>
    </div>
    </>
  );
};

export default Rutas;
