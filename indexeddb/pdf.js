// Define the IndexedDB database name and version
const dbName = "pdfDatabase";
const dbVersion = 1;

// Define the IndexedDB object store name
const storeName = "pdfStore";

// Open the IndexedDB database
const openRequest = indexedDB.open(dbName, dbVersion);

// Handle database upgrade
openRequest.onupgradeneeded = function(event) {
  const db = event.target.result;
  const store = db.createObjectStore(storeName, { autoIncrement: true });
};

// Handle database open success
openRequest.onsuccess = function(event) {
  const db = event.target.result;

  // Get the file input element
  const fileInput = document.querySelector("#pdfInput");

  // Listen for file selection
  fileInput.addEventListener("change", function() {
    // Get the selected file
    const file = fileInput.files[0];

    // Add the file to the database
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const addRequest = store.add(file);
    addRequest.onsuccess = function(event) {
      console.log(`File ${file.name} added to database`);
    };
    tx.oncomplete = function() {
      console.log(`Transaction for adding file ${file.name} to database completed`);
    };
  });
};

// Function to read a selected PDF from the database
function readSelectedPdf() {
  // Get the PDF ID from the user input
  const pdfId = prompt("Enter the ID of the PDF you want to read:");

  // Get the PDF from the database by ID
  selectPdfFromDatabase(openRequest.result, pdfId, function(pdfFile) {
    // Create a new FileReader object
    const reader = new FileReader();

    // Handle the file load event
    reader.onload = function() {
      // Create a new PDFJS document object
      const pdfDoc = new pdfjsLib.getDocument({ data: reader.result });

      // Load the PDF document
      pdfDoc.promise.then(function(pdf) {
        console.log(`PDF loaded (${pdf.numPages} pages)`);

        // Render the first page of the PDF
        pdf.getPage(1).then(function(page) {
          // Create a canvas element to render the page
          const canvas = document.createElement("canvas");

          // Set the canvas size to the page size
          const viewport = page.getViewport({ scale: 1 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // Render the page onto the canvas
          const ctx = canvas.getContext("2d");
          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          page.render(renderContext).promise.then(function() {
            console.log(`Page rendered`);
            // Add the canvas to the DOM
            document.body.appendChild(canvas);
          });
        });
      });
    };

    // Read the PDF file as an ArrayBuffer
    reader.readAsArrayBuffer(pdfFile);
  });
}

// Function to get a PDF file from the database by ID
function selectPdfFromDatabase(db, id, callback) {
  const tx = db.transaction(storeName, "readonly");
  const store = tx.objectStore(storeName);
  const getRequest = store.get(id);
  getRequest.onsuccess = function(event) {
    const pdfFile = event.target.result;
    callback(pdfFile);
  };
  tx.oncomplete = function() {
    console.log(`Transaction for selecting`);
tx.onerror = function(event) {
    console.log(`Error selecting PDF with ID ${id}: ${event.target.error}`);
};
  }}