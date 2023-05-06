import { AreaTypes } from 'components/CustomTable/helpers/interfaces'

export const aboutUsColumns = [
  {
    accesor: 'name',
    label: 'Nombre',
  },
  {
    accesor: 'area',
    label: 'Area',
  },
  {
    accesor: 'email',
    label: 'Correo',
  },
  {
    accesor: 'country',
    label: 'Pais',
  },
]

export const Areas: { [key: string]: AreaTypes } = {
  front: 'Frontend',
  back: 'Backend',
}

export const devsData = [
  {
    name: 'Adrian Acurero',
    area: Areas.front,
    email: 'adrianacurero@gmail.com',
    country: 'Venezuela',
  },
  {
    name: 'David Cicconi',
    area: Areas.front,
    email: 'david.cicconi94@gmail.com',
    country: 'Argentina',
  },
  {
    name: 'Caterina Aracil',
    area: Areas.back,
    email: 'caterinaaracil@gmail.com',
    country: 'Argentina',
  },
  {
    name: 'Ivan Garcia',
    area: Areas.back,
    email: 'ivanx467@gmail.com',
    country: 'Argentina',
  },
  {
    name: 'Rafael Betancourt',
    area: Areas.front,
    email: 'rafael18282@gmail.com',
    country: 'Venezuela',
  },
  {
    name: 'Martin Angulo',
    area: Areas.back,
    email: 'martinangulo1194@gmail.com',
    country: 'Perú',
  },
  {
    name: 'Lautaro Franco',
    area: Areas.front,
    email: 'Hola12lf@gmail.com',
    country: 'Argentina',
  },
]
