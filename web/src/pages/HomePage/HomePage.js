import { MetaTags } from '@redwoodjs/web'
import AddTodo from 'src/components/AddTodo'
import TodoListCell from 'src/components/TodoListCell'
import {
  Container,
  Box,
  Heading,
  HStack,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box h="100vh" pt={20}>
      <MetaTags title="Todos" description="Your list of todo items" />

      <Container
        maxW="container.sm"
        w="full"
        p={10}
        bg="gray.50"
        rounded="md"
        _dark={{ bg: 'gray.700' }}
      >
        <HStack justifyContent="space-between" alignItems="center" mb={6}>
          <Heading>Todo List</Heading>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            rounded="full"
          />
        </HStack>
        <TodoListCell />
        <AddTodo />
      </Container>
    </Box>
  )
}

export default HomePage
