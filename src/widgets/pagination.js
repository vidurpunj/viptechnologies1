import React from "react";
import { Pagination, Button, PaginationItem } from "reactstrap";

function CustomPagination({ activePage, totalPages, onPageChange }) {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };
    const getPageNumbers = () => {
        const visiblePages = 5; // Number of visible page numbers
        const halfVisible = Math.floor(visiblePages / 2);
        let startPage = Math.max(0, activePage - halfVisible);
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        return [...Array(endPage - startPage + 1)].map(
            (_, index) => startPage + index
        );
    };

    return (
        <Pagination
            className="mt-4 mx-4"
            activePage={activePage}
            totalPages={totalPages}
            onChange={handlePageChange}
        >
            <Button
                className="page-item me-2 page-link "
                disabled={activePage === 1}
                onClick={() => handlePageChange(activePage - 1)}
            >
                Previous
            </Button>
            {getPageNumbers().map((pageNumber) => (
                <PaginationItem
                    key={pageNumber + 1}
                    className="page-item page-link border-0 rounded"
                    active={pageNumber + 1 === activePage}
                    onClick={() => handlePageChange(pageNumber + 1)}
                >
                    {pageNumber + 1}
                </PaginationItem>
            ))}
            <Button
                className="page-item ms-2 page-link"
                disabled={activePage === totalPages}
                onClick={() => handlePageChange(activePage + 1)}
            >
                Next
            </Button>
        </Pagination>
    );
}

export default CustomPagination;
