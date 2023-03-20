import React, { useState } from "react";
import styles from "./Pagination.module.css";
import cn from "classnames";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  
  const renderPagination = () => {
    const pages = [];
    // push pages before current
    for (let i = 4; i !== 0; i--) {
      if (currentPage - i > 0) {
        pages.push(
          <div key={currentPage - i}
            className={cn(styles.item, {
              [styles.active]: currentPage === currentPage - i,
            })}
            onClick={() => onPageChange(currentPage - i)}
          >
            {currentPage - i}
          </div>
        );
      }
    }

    // push current page
    pages.push(
      <div
        key={currentPage}
        className={cn(styles.item, {
          [styles.active]: true,
        })}
        onClick={() => onPageChange(currentPage)}
      >
        {currentPage}
      </div>
    );

    // push pages after current
    for (let i = 1; pages.length !== 8; i++) {
        pages.push(
          <div
            key={currentPage + i}
            className={cn(styles.item, {
              [styles.disabled]: currentPage + i > totalPages
            })}
            onClick={() => onPageChange(currentPage + i)}
          >
            {currentPage + i}
          </div>
        );
    }

    return pages;
  };

  return (
    <div className={styles.wrapper}>
      <div 
        className={cn(styles.item, {[styles.disabled]: currentPage <= 1})} 
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)}>Previous</div>
        {renderPagination()}
      <div 
        className={cn(styles.item, {[styles.disabled]: currentPage >= totalPages})} 
        onClick={() => onPageChange(currentPage <= totalPages ? currentPage + 1 : currentPage)}>Next</div>
    </div>
  );
};

export default Pagination;
