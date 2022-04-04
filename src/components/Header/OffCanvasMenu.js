import React from "react"
import "./OffCanvasStyles.css";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Wrap,
  WrapItem,
  Avatar
} from '@chakra-ui/react';
import {HamburgerIcon} from "@chakra-ui/icons"
import {BsSuitHeartFill} from "react-icons/bs";

export default function Humburger() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div className="navWrapper">
      <Button ref={btnRef} colorScheme='' onClick={onOpen}>
        <HamburgerIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white !important"/>
          <DrawerHeader>DexaGames</DrawerHeader>

          <DrawerBody background="#161930">
            <ul className="sideList">
                {/* <li className="sideItem"><a href="/">DexaGames</a></li> */}
                <li className="sideItem"><a href="/">How to play</a></li>
                <li className="sideItem"><a href="/">About</a></li>
                <li className="sideItem"><a href="/">Documentation</a></li>
                <li className="sideItem"><a href="/">Contribute</a></li>
                <li className="sideItem"><a href="/">Settings</a></li>
                <li className="sideItem"><a href="/">FAQ</a></li>
                <li className="sideItem"><Button rightIcon={<BsSuitHeartFill fill="#AB2121"       />} colorScheme='#FFFFFF' variant='outline'>Sponsor</Button></li>
            </ul>
            <h3>Collaborators</h3>
            <Wrap>
              <WrapItem>
                <Avatar name='Lilian Okeke' src='https://www.dropbox.com/s/b0g4dp5wlnjld6a/Lilian-Okeke.jpg?dl=0' />
              </WrapItem>
              <WrapItem>
                <Avatar name='Godfrey Odenigbo' src='https://bit.ly/tioluwani-kolawole' />
              </WrapItem>
            </Wrap>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}