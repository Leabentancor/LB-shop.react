import { Link } from "react-router-dom"

export const Inicio = () => {
    return (
    <div className="contenedor-productos"> 
        <img className="imagen-izquierda" src="../img/cabopolonio.jpg" alt="" /> 
        <div className="productos-inicio"> 
            <h1 className="titulo">CABO POLONIO</h1>
            <p className="parrafo">Cabo Polonio, ubicado en el departamento de Rocha, Uruguay, es un pintoresco y remoto enclave costero conocido por su belleza natural y su atmósfera rústica. Accesible solo por camiones 4x4 que atraviesan dunas y bosques, el pueblo carece de conexión a la red eléctrica nacional, lo que le otorga un encanto particular con viviendas que usan energía solar o generadores. <br></br>
            El principal atractivo es su faro de 1881, desde donde se pueden observar colonias de lobos marinos y disfrutar de vistas panorámicas del océano y las dunas. Las actividades incluyen nadar, surfear, caminar por senderos y observar estrellas en cielos libres de contaminación lumínica.</p>
            <Link className="boton" to= "/item/pPPOaGv3XqLxnSFYEiC9">SELECCIONAR</Link>
        </div>

        <img className="imagen-derecha" src="../img/icaperu.jpg" alt="" /> 
        <div className="productos-inicio derecha"> 
            <h1 className="titulo">ICA PERÚ</h1>
            <p className="parrafo">Ica, ubicada en el sur de Perú, es una región fascinante conocida por sus paisajes desérticos, rica historia y vibrante cultura. Destaca por Huacachina, un oasis rodeado de dunas ideal para el sandboarding y paseos en buggy. Famosa por sus bodegas de vino y pisco, ofrece tours que permiten degustar estas bebidas.<br></br>
            La región alberga el Museo Regional de Ica, con artefactos precolombinos, y cerca de ella están las enigmáticas Líneas de Nazca. La Reserva Nacional de Paracas es ideal para observar vida marina y aves. Además, su gastronomía, con platos como la carapulcra y dulces típicos, es un deleite para los visitantes.</p>
            <Link className="boton" to= "/item/dJctHBu2a1l4q8fssEZB">SELECCIONAR</Link>

            
            
        </div>
    </div>
    )
}
