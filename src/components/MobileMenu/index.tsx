import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'

import HeaderLinks from 'components/HeaderLinks'

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {!isOpen && (
        <IconButton
          aria-label="open menu"
          variant="ghost"
          color="white"
          onClick={onOpen}
        >
          <FaBars aria-hidden="false" />
        </IconButton>
      )}

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="backgroundColor" paddingBottom="4">
          <DrawerBody>
            <IconButton
              aria-label="close menu"
              variant="ghost"
              color="white"
              position="absolute"
              right="10px"
              onClick={onClose}
            >
              <FaTimes aria-hidden="false" />
            </IconButton>

            <HeaderLinks mode="mobile" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileMenu
