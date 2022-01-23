import React, { Fragment, useState } from 'react';
import Header from './componentes/Header.js';
import Formulario from './componentes/Formulario.js';
import Mensaje from './componentes/Mensaje.js';
import Resultado from './componentes/Resultado.js';
import Spinner from './componentes/Spinner.js';

function App() {

  // Definir el state
  const [cantidad, guardarCantidad ] = useState(0);
  const [plazo, guardarPlazo ] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // Carga Condicional de Componentes
  let componente;

  if(cargando) {
    componente = <Spinner />
  } else if( total === 0 ) {
    componente = <Mensaje />
  } else {
    componente = <Resultado 
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                />
  }

  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Prestamos"
      />

      <div className="container">
        <Formulario 
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className='mensajes'>
          { componente }
        </div>

      </div>
    </Fragment>
  );
}

export default App;
