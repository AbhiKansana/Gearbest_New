import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
  } from '@chakra-ui/react'
import { MdLocalFireDepartment } from 'react-icons/md'

export default function OurModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button fontSize='1.35rem' mt='25px' colorScheme='green' variant='solid' onClick={onOpen}>Place Order</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Placed</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Your order is placed. You will get a confirmation email on your registerd email id.</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  