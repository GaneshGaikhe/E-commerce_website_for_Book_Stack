import { useState } from "react";

const AddCategoryForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const saveCategory = () => {
    if (!title.trim() || !description.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    let data = { title, description };
    fetch("http://localhost:8080/api/category/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        if (result.ok) {
          setSuccessMessage("Category added successfully!");
          // Clear form fields on success
          setTitle("");
          setDescription("");
          setErrorMessage(null);
          return result.json();
        } else {
          throw new Error("Category not added.");
        }
      })
      .then((res) => {
        console.log("response", res);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  return (
    <div className="container mt-5">
      {successMessage && (
        <div className="alert alert-success mt-3 alert-dismissible fade show" role="alert">
          {successMessage}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessMessage(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger mt-3 alert-dismissible fade show" role="alert">
          {errorMessage}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrorMessage(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card form-card">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="card-title">Add Category</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    <b>Category Title</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter title..."
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    <b>Category Description</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    placeholder="Enter description..."
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                </div>

                <button
                  type="button"
                  onClick={saveCategory}
                  className="btn button"
                >
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryForm;
