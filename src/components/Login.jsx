import { Link } from 'react-router-dom';


const LoginAdmin = () => {
    return(
      <>
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to right, #000814, #E0F4FF)' }}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Inicio sesión - Administrador</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Nombre de usuario</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre de usuario"/>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Contraseña </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Contraseña"/>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex">
                <Link to="/" className="mr-12">
                <button className="bg-blueDark hover:bg-blueLight hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cerrar</button>
                </Link>
                
                <Link to="/dashboard">
                <button className="bg-blueDark hover:bg-blueLight hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" type="button">Iniciar sesión</button>

                </Link>
              </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default LoginAdmin