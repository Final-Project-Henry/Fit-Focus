import { useEffect } from 'react'
import CustomTable from 'components/CustomTable/CustomTable'
import { AboutUsBody, Container } from './styles/aboutUsScreenStyles'
import { aboutUsColumns, devsData } from './helpers/devsData'
import { useScreenMessage } from 'contexts/ScreenMessageContext'

const AboutUsScreen = () => {
  const { setData } = useScreenMessage()

  useEffect(() => {
    setData({
      message: 'Gracias por querer saber mas de nosotros.',
      type: 'success',
    })
  }, [])
  return (
    <Container>
      <AboutUsBody>
        <h1>Nuestro Equipo</h1>
        <p>
          Somos un grupo de programadores, que gracias a los conocimientos adquiridos en Henry y el gran esfuerzo del
          trabajo en equipo, diseñamos y desarrollamos la aplicación FIT FOCUS, la cual es una herramienta para mejorar
          la salud de todos, esto gracias a que hace posible que cualquier persona pueda ejercitarse, cuando quiera y
          donde quiera.
          <br />
          Esperamos puedan explotar la gran cantidad de posibilidades que esta herramienta proporciona.
          <br />
          Pueden contactarnos y conocernos un poco mas con la informacion que aparece mas abajo.
        </p>
        <CustomTable columns={aboutUsColumns} data={devsData} />
      </AboutUsBody>
    </Container>
  )
}

export default AboutUsScreen
