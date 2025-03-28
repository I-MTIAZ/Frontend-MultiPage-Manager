import { useState } from "react";

//import Customize check button
import Buttons from "./CustomButton";

export default function Home() {
  const pages = [1, 2, 3, 4]; // Page numbers
  const [selectedPages, setSelectedPages] = useState([]); // State to track selected pages

  // Function to handle selection
  const handlePageSelect = (page) => {
    if (page === "all") {
      // If "All Pages" is clicked, toggle all selections
      setSelectedPages(selectedPages.length === pages.length ? [] : [...pages]);
    } else {
      // Toggle individual page selection
      setSelectedPages(
        (prevSelected) =>
          prevSelected.includes(page)
            ? prevSelected.filter((p) => p !== page) // Remove if already selected
            : [...prevSelected, page] // Add if not selected
      );
    }
  };

  const handleSubmit = (a) => {
    console.log(a);
  };

  return (
    <div className="laptop:p-8 flex justify-center items-center min-h-screen">
      <div className="main-section">
        {/* "All Pages" button */}
        <div className="page-and-button">
          <p>All pages</p>
          <Buttons
            isChecked={selectedPages.length === pages.length} // Check if all pages are selected
            onClick={() => handlePageSelect("all")} // Pass function to CustomButton
          />
        </div>

        {/* printing break line */}
        <div className="break"></div>

        {/* Individual page buttons */}
        {pages.map((page) => (
          <div key={page} className="page-and-button">
            <p>Page {page}</p>
            <Buttons
              isChecked={selectedPages.includes(page)} // Check if this page is selected
              onClick={() => handlePageSelect(page)} // Pass function to CustomButton
            />
          </div>
        ))}

        {/* printing break line */}
        <div className="break"></div>

        {/* Submit Button */}
        <label
          htmlFor="my_modal_7"
          className="btn"
          onClick={() => handleSubmit(selectedPages)}
        >
          Done
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <p className="py-4">
              {selectedPages.length === pages.length
                ? "All pages selected"
                : `${selectedPages.length} ${
                    selectedPages.length === 1 || selectedPages.length === 0
                      ? "page"
                      : "pages"
                  } selected`}
            </p>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </div>
  );
}
