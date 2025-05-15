import React, { useCallback } from "react";
import { Container, Button } from "./_style";

const Pagination = ({ page, setPage, totalPages = 10 }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = useCallback(() => {
    setPage((prev) => prev - 1);
  }, [setPage]);

  const handleNext = useCallback(() => {
    setPage((prev) => prev - 1);
  }, [setPage]);

  return (
    <Container>
      <Button onClick={handlePrev} disabled={page === 1}>
        &laquo; Prev
      </Button>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          active={number === page}
          onClick={() => setPage(number)}
        >
          {number}
        </Button>
      ))}
      <Button onClick={handleNext} disabled={page === totalPages}>
        Next &raquo;
      </Button>
    </Container>
  );
};

export default Pagination;
