import React from 'react';
import Bubbles from '../../components/bubbles/bubbles.component';
import Partners from '../../components/partners/partners.component';
import './aboutus.styles.scss';

const AboutUs = () => (
    <div className="container about">
        <Bubbles></Bubbles>
        <h1 className="title">Hondutronics</h1>
        <p>
            Somos una empresa dedicada al diseño de soluciones tecnológicas 
            para la automatización de casas y oficinas, a través productos 
            inteligentes. Además de eso, facilitamos una plataforma para la 
            generación de planes de ahorro energético basada en inteligencia 
            artificial. Somos proveedores de servicios de instalación, 
            mantenimiento, configuración y supervisión de redes inteligentes 
            en casas, apartamentos, negocios o cualquer espacio personal o 
            empresarial.
        </p>
        <div className="embed-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xxU1OK3YqwA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>
        Hondutronics es una empresa que ofrece soluciones personalizadas para la automatización 
        de espacios sociales, de vivienda y de trabajo, así como una plataforma digital utilizando 
        inteligencia artificial para generar planes de ahorro energético. 
        Hondutronics decidió combinar una gama de productos de precios de diferentes rangos con 
        diversos servicios pre y post venta, para hacer más accesible la automatización en el mercado, 
        atacando una necesidad absoluta como lo es la eficiencia energética comprobable y sostenible. 
        En la región Centroamericana, que está constituida por países en vía de desarrollo, 
        existe el paradigma de que mucha tecnología, como lo son los productos inteligentes, no deben, 
        ni pueden ser prioridad para los consumidores. Para hacer este cambio en el mercado, 
        se pretenden abordar siguientes problemas:
        <ol>
            <li>
                Los altos costos de la energía: actualmente nuestro mercado 
                cuenta con uno de los costos más elevados de energía, por 
                lo cual creamos una herramienta que permite al cliente 
                acceder a planes personalizados de ahorro, alimentados por 
                tecnología inteligente.
            </li>
            <li>
                Los altos niveles de inseguridad: los productos inteligentes 
                pueden representar una herramienta para reforzar la seguridad de 
                los clientes en sus espacios a través de herramientas de alarma y 
                monitoreo.
            </li>
            <li>
                La falta comodidad: El mundo en el que vivimos exige cada vez más 
                que la interacción con nuestro entorno sea fácil y que atienda de 
                manera inmediata nuestras necesidades.
            </li>
        </ol>
            Como parte de nuestra estrategia de posicionamiento, venta y mercadeo, 
            diseñamos una plataforma web en la cual los clientes pueden personalizar su paquete de productos 
            y servicios de la forma más apropiada para ellos, así como exponer su 
            necesidad de automatización para acceder a nuestra asesoría personalizada, ajustándose a sus 
            necesidades exactas y abaratando costos de implementación. De esta manera, nuestra empresa conjuga los 
            modelos tradicionales de negocio con los del mundo digital, lo cual es esencial para posicionar los 
            productos inteligentes. Es nuestro objetivo abordar tres tipos de clientes: los individuales, 
            los institucionales y la industria constructora en general. De manera integral, nuestra meta no solo es automatizar espacios, 
            sino romper los paradigmas de nuestros mercados y facilitar vidas. Contamos con clientes como Grupo Celaque y Grupo W por parte 
            de la industria constructora, y con socios institucionales de peso como Tigo.
        </p>
        <div className="embed-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/izEHi0apJmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="partnersabout">
        <Partners/>
        </div>
    </div>
);


export default AboutUs;