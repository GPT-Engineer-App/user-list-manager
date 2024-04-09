import React, { useState } from "react";
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
            <Th>Actions</Th>
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
              <Td textAlign="right">
                <Menu>
                  <MenuButton as={IconButton} aria-label="Options" icon={<FaEllipsisV />} variant="outline" size="sm" />
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
    </Container>
  );
};

export default Index;
