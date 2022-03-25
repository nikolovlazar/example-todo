import { HStack, IconButton, Text } from '@chakra-ui/react'

import Check from 'src/components/Check'

const TodoItem = ({ id, body, status, onClickCheck }) => {
  const handleCheck = () => {
    const newStatus = status === 'off' ? 'on' : 'off'
    onClickCheck(id, newStatus)
  }

  return (
    <HStack alignItems="center" borderTop="1px solid" borderColor="gray.200">
      <IconButton
        onClick={handleCheck}
        icon={<Check type={status} />}
        variant="ghost"
        rounded="full"
      />
      <Text textDecoration={status === 'on' ? 'line-through' : 'none'}>
        {body}
      </Text>
    </HStack>
  )
}

export default TodoItem
