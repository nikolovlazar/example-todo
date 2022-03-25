import { Form, TextField } from '@redwoodjs/forms'
import { Button, Input, HStack } from '@chakra-ui/react'

import Check from 'src/components/Check'
import { useRef } from 'react'

const AddTodoControl = ({ submitTodo }) => {
  const inputRef = useRef(null)

  const handleSubmit = (data) => {
    submitTodo(data.todo)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <HStack as={Form} alignItems="center" onSubmit={handleSubmit}>
      <Check type="plus" />
      <HStack
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="gray.200"
        w="full"
      >
        <Input
          as={TextField}
          ref={inputRef}
          name="todo"
          type="text"
          placeholder="Memorize the dictionary"
          variant="unstyled"
          required
        />
        <Button type="submit" colorScheme="purple">
          Add Item
        </Button>
      </HStack>
    </HStack>
  )
}

export default AddTodoControl
