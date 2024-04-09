import React, { useState } from "react";
import { Box, Heading, Input, Table, Thead, Tbody, Tr, Th, Td, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaEllipsisV, FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", country: "USA", sessionIndex: 1 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", country: "Canada", sessionIndex: 2 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", country: "USA", sessionIndex: 1 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", country: "Australia", sessionIndex: 3 },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box p={4}>
      <Flex align="center" mb={4}>
        <Heading as="h1" size="xl">
          User Dashboard
        </Heading>
        <Spacer />
        <Input placeholder="Search by name or email" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} w="300px" />
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Country</Th>
            <Th>Session Index</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredUsers.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.country}</Td>
              <Td>{user.sessionIndex}</Td>
              <Td>
                <Menu>
                  <MenuButton as={IconButton} aria-label="Options" icon={<FaEllipsisV />} variant="outline" />
                  <MenuList>
                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                    <MenuItem icon={<FaTrash />}>Delete</MenuItem>
                    <MenuItem icon={<FaEnvelope />}>Send Email</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
