import {
  Box,
  Center,
  chakra,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import NextImage from 'next/image';

import { Trans } from 'react-i18next';
import WalletConnect from '../wallet-button';
const CustomImage = chakra(NextImage, {
  baseStyle: {
    borderRadius: 'lg',
    boxShadow:
      '#69D3FA 0px 0px 0px 2px, #69D3FA 0px 2px 3px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
  },
  shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});
function StartingPage(props) {
  return (
    <>
      <Stack
        spacing={10}
        marginInline={'auto'}
        py={12}
        align='center'
        minW={'100%'}
        marginTop='16'
        direction={{ base: 'column', md: 'row' }}
        borderBottom={mode('3px solid #000000', '3px solid #fff')}
      >
        <VStack spacing={1} align='start' w={{ base: '100%', md: '50%' }}>
          <Heading as='h1' fontSize={'6xl'} textAlign='left'>
            Store Medical Records
          </Heading>
        
          <Heading as='h2' width='100%' textAlign='left'>
            
            <HStack spacing={'5'}>
              <Text color={'blue'} fontFamily={'cursive'} fontStyle={'italic'}></Text> 
              <Text fontSize={'5xl'}>With{' '}</Text>
              </HStack>
            <Text color={"#43B3AE"} fontSize={'6xl'} width='100%' textAlign='left'>
              Your Ownership
            </Text>
            
          </Heading>
       

          {/* <Divider backgroundColor={'brand.500'} /> */}

          <Text color={'GrayText'}  fontFamily={'inherit'} align='justify' paddingTop={'10'}>
          
            Med-Chain is a blockchain-based platform for managing medical records. 
            The use of blockchain technology ensures that the records are secure and tamper-proof.
             Patients have complete ownership and control over their data, which can be accessed from anywhere.
             The platform is user-friendly, making it easier for patients to manage their medical records.
           
          </Text>
         
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          <CustomImage
            src='/assets/images/giphy.gif'
            width={400}
            height={500}
            alt='Cover Image'
          />
        </Center>
      </Stack>
      {/*  */}
    </>
  );
}

export default StartingPage;