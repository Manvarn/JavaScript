let data = [];
let currentEditIndex = null;

function showTable() {
  const tableContainer = document.getElementById("table-container");
  const tableBody = document.querySelector("#data-table-body");
  tableBody.innerHTML = "";

  if (data.length > 0) {
    tableContainer.style.display = "block";
  }

  data.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>
                            <button class="btn btn-warning btn-sm me-2" onclick="showEditModal(${index})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Delete</button>
                        </td>
                    `;
    tableBody.appendChild(row);
  });
}

function addRecord() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name && age) {
    data.push({ name, age });
    nameInput.value = "";
    ageInput.value = "";
    showTable();
  } else {
    alert("Please fill in all fields.");
  }
}

function showEditModal(index) {
  currentEditIndex = index;
  const record = data[index];
  document.getElementById("editName").value = record.name;
  document.getElementById("editAge").value = record.age;
  const editModal = new bootstrap.Modal(document.getElementById("editModal"));
  editModal.show();
}

function saveEdit() {
  const editName = document.getElementById("editName").value.trim();
  const editAge = document.getElementById("editAge").value.trim();

  if (editName && editAge) {
    data[currentEditIndex] = { name: editName, age: editAge };
    showTable();
    const editModal = bootstrap.Modal.getInstance(
      document.getElementById("editModal")
    );
    editModal.hide();
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteRecord(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    data.splice(index, 1);
    showTable();
  }
}

// Initial render
showTable();
