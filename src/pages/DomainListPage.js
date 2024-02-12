import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import domainList from "./../json/domains.json";

const DomainListPage = () => {
  const [sortedList, setSortedList] = useState(domainList);
  const [sortDirection, setSortDirection] = useState("asc");

  const sortByPrice = () => {
    console.log("sortByPrice()");
    const sorted = [...sortedList].sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    console.log("sortDirection", sortDirection);
    console.log("sorted", sorted);
    setSortedList(sorted);
  };

  const toggleSortDirection = () => {
    console.log("toggleSortDirection()");
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc"
    );
    sortByPrice(); // Call sortByPrice after updating sort direction
  };

  useEffect(() => {
    console.log("INIT load");
    sortByPrice(); // Call sortByPrice when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Domain List</h1>

      <TableContainer>
        <Table variant="simple" size="xl">
          <Thead>
            <Tr>
              <Th>TLD</Th>
              <Th
                onClick={() => {
                  toggleSortDirection();
                }}
              >
                Price {sortDirection === "asc" ? "(asc)" : "(desc)"}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedList.map((domain, index) => (
              <Tr key={index}>
                <Td>{domain.tld}</Td>
                <Td>${domain.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DomainListPage;
