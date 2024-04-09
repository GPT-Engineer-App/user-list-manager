import React, { useState, useEffect } from "react";
import { Box, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, Menu, MenuButton, MenuList, MenuItem, IconButton, Stack, Container } from "@chakra-ui/react";
import { FaEllipsisV, FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", country: "USA", sessionIndex: 1 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", country: "Canada", sessionIndex: 2 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", country: "USA", sessionIndex: 1 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", country: "Australia", sessionIndex: 3 },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setSelectedUser(null);
  }, [searchTerm]);

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container maxW="container.xl" p={4}>
      <Stack direction={["column", "row"]} align="center" mb={4}>
        <Heading as="h1" size="xl">
          User Dashboard
        </Heading>
        <Input placeholder="Search by name or email" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} w={["100%", "300px"]} />
      </Stack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th whiteSpace="nowrap">Name</Th>
            <Th whiteSpace="nowrap">Email</Th>
            <Th display={["none", "table-cell"]} whiteSpace="nowrap">
              Country
            </Th>
            <Th display={["none", "table-cell"]} whiteSpace="nowrap">
              Session Index
            </Th>
            <Th display={["none", "table-cell"]}>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUsers.map((user) => (
            <Tr key={user.id}>
              <Td whiteSpace="nowrap">{user.name}</Td>
              <Td whiteSpace="nowrap">{user.email}</Td>
              <Td display={["none", "table-cell"]} whiteSpace="nowrap">
                {user.country}
              </Td>
              <Td display={["none", "table-cell"]} whiteSpace="nowrap">
                {user.sessionIndex}
              </Td>
              <Td textAlign="right" display={["none", "table-cell"]} px={4}>
                <IconButton aria-label="Options" icon={<FaEllipsisV />} variant="outline" size="sm" onClick={() => setSelectedUser(user)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedUser && (
        <Box display={["block", "none"]} position="fixed" bottom={4} left={0} right={0} textAlign="center">
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<FaEllipsisV />} variant="outline" />
            <MenuList>
              <MenuItem icon={<FaEdit />} onClick={() => console.log(`Edit ${selectedUser.name}`)}>
                Edit
              </MenuItem>
              <MenuItem icon={<FaTrash />} onClick={() => console.log(`Delete ${selectedUser.name}`)}>
                Delete
              </MenuItem>
              <MenuItem icon={<FaEnvelope />} onClick={() => console.log(`Email ${selectedUser.email}`)}>
                Send Email
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Container>
  );
};

export default Index;
