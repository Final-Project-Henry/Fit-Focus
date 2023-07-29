// import React from 'react'
// import devs from 'shared/shareData/devs'
// import Dev from './Dev'
// import { v4 as uuidv4 } from 'uuid'

// interface dev {
//   name: string
//   link: string
//   git: string
//   mail: string
//   avatar: any
// }

// export default function Visitor7() {
//   return (
//     <div
//       id='Nosotros'
//       style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//     >
//       <h1 style={{ fontSize: '3.5rem', color: '#111828', marginTop: '5vh' }}>
//         Acerca de Nosotros
//       </h1>
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr 1fr 1fr',
//           width: '90vw',
//           gap: '50px',
//           margin: '5vh 0 5vh 0',
//         }}
//       >
//         {devs.map((e: dev) => (
//           <Dev key={uuidv4()} data={e} />
//         ))}
//       </div>
//     </div>
//   )
// }
