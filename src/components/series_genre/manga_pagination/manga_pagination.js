import React from "react";
import "./manga_pagination.css";
const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log();

  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          <li onClick={previousPage} className="page-number">
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className="page-number"
            >
              {" "}
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:bg-gray-100 focus:text-gray-700"
              >
                {number}
              </a>
            </li>
          ))}
          <li onClick={nextPage} className="page-number">
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
