import { HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { SiAwesomelists } from 'react-icons/si'
import './Row2.css'
import { Link } from 'react-router-dom'

function Row2() {
  return (
    <div className='row2MainDiv'>
      <HStack gap='28px' mb='20px' ml='15px'>
        <Icon boxSize='20px' as={SiAwesomelists} />
        <Text fontSize='1.35rem' fontWeight='bold'> Awesome Tools</Text>
        </HStack>
      <Link to='/products'>
         <div className='four-div'>
          <div className='four-div-block'>
              <p className='topClassP' style={{textAlign:"center",marginBottom:"30px",fontSize:"17px",fontWeight:"500"}}>3D Printers & Laser Engravers</p>
              <div><img src="https://img.gkbcdn.com/s3/bn/2204/laser-6260f66a2b40c93724be1ee9.jpg" alt="" /></div>
              <p className="discription" >Your at-home 3D laser printer that makes magical things at the push of a button.</p>
          </div>
          <div className='four-div-block'>
              <p style={{textAlign:"center",fontSize:"17px",marginBottom:"30px",fontWeight:"500"}}>Gamesir Brand Sale</p>
              <div><img src="https://img.gkbcdn.com/s3/bn/2204/Gamesir-6260f6532b40c93724be1ee8.jpg" alt="" /></div>
              <p className="discription" >Exploring a comprehensive gaming experience as always through Gamesir</p>
            
          </div>
          <div className='four-div-block'>
              <p style={{textAlign:"center",fontSize:"17px",marginBottom:"30px",fontWeight:"500"}}>E-Bikes</p>
              <div><img src="https://img.gkbcdn.com/s3/bn/2203/481198-623d205c2b40c91d90971af4.jpg" alt="" /></div>
              <p className="discription" >Road, mountain, gravel, commuter, they've all got electric versions.</p>
             
          </div>
          <div className='four-div-block'>
              <p style={{textAlign:"center",fontSize:"17px",marginBottom:"30px",fontWeight:"500"}}>Xming 1080p Projector</p>
              <div><img src="https://img.gkbcdn.com/s3/bn/2204/497217-624fa3172b40c931484ec7f2.jpg" alt="" /></div>
              <p className="discription" >1080P resolution, 250  more outstanding details.</p>
          </div>
      </div>
      </Link>
    </div>
  )
}

export default Row2