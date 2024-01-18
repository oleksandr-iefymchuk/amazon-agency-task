import { useCallback, useState } from 'react';
import './Table.scss';

import { TableProps } from '../interfaces';
import { formatDate } from '../formatDate';

const Table = <T extends Record<string, unknown>>({
  data,
  columns,
  onRowClick,
}: TableProps<T>): JSX.Element => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterVal, setFilterVal] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
  const handleSort = (columnName: string): void => {
    setSortBy(columnName);
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFilterVal(event.target.value);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const filterData = (dataToFilter: T[], filterValue: string): T[] => {
    return dataToFilter.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(filterValue.toLowerCase()),
      ),
    );
  };

  const sortData = (dataToSort: T[]): T[] => {
    return dataToSort.sort((a, b) => {
      if (sortBy) {
        const aValue = String(a[sortBy]);
        const bValue = String(b[sortBy]);
        if (sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      }
      return 0;
    });
  };

  const filteredAndSortedData: T[] = sortData(filterData(data, filterVal));

  const paginatedData: T[] = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleRowClick = useCallback(
    (row: T) => {
      onRowClick && onRowClick(row);
    },
    [onRowClick],
  );

  return (
    <div className="table-wrapper">
      <div className="search-field">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={filterVal}
          onChange={handleFilterChange}
        />
      </div>
      <table className="table-body">
        <thead>
          <tr className="table-row">
            {columns.map((column) => (
              <th
                className="table-headers"
                key={column}
                onClick={() => handleSort(column)}
              >
                {column}
                <div className="sort-arrow">
                  {sortBy === column && (
                    <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr
              className="table-row"
              key={String(row[columns[0]])}
              onClick={() => handleRowClick(row)}
            >
              {columns.map((column) => (
                <td key={String(column)}>
                  {row[column] instanceof Date
                    ? formatDate(row[column] as Date)
                    : String(row[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= filteredAndSortedData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
