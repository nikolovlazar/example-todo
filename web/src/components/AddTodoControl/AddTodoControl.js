import {
  FieldError,
  Form,
  TextField,
  Submit,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import {
  Button,
  Input,
  HStack,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react'

import Check from 'src/components/Check'
import { useRef, useState } from 'react'

const AddTodoControl = ({ submitTodo }) => {
  const inputRef = useRef(null)
  const formMethods = useForm()
  const [error, setError] = useState()

  const handleSubmit = (data) => {
    if (!error) {
      setError({
        graphQLErrors: ['Fake error message!'],
      })
    } else {
      submitTodo(data.todo)
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      config={{ mode: 'onBlur' }}
      formMethods={formMethods}
      error={error}
    >
      <HStack alignItems="center">
        <Check type="plus" />
        <HStack
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="gray.200"
          w="full"
        >
          <FormControl isInvalid={!!error}>
            <Input
              as={TextField}
              ref={inputRef}
              name="todo"
              type="text"
              placeholder="Memorize the dictionary"
              variant="unstyled"
              validation={{
                required: true,
                pattern: {
                  value: /[^@]+@[^\.]+\..+/,
                },
              }}
            />
            <FormErrorMessage>
              <FormError error={error} />
            </FormErrorMessage>
          </FormControl>
          <Button as={Submit} type="submit" colorScheme="purple">
            Add Item
          </Button>
        </HStack>
      </HStack>
    </Form>
  )
}

export default AddTodoControl
