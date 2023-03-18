const request = indexedDB.open("MyTestDatabase", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;

    const objectStore = db.createObjectStore("MyObjectStore2", { keyPath: "id", autoIncrement: true });

    objectStore.createIndex("value", "value", { unique: false });
    objectStore.createIndex("lastupdate", "lastupdate", { unique: false });
};

request.onsuccess = function (event) {
    console.log("Database opened successfully");
    db = event.target.result;
    setInterval(function () {
        updateDate(function (value) {
            document.getElementById("result").innerHTML = value.lastupdate;
        });
    }, 5000);
};

request.onerror = function (event) {
    console.log("Error opening database", event.target.error.name);
};

function create(value) {
    const lastupdate = new Date().toISOString().substr(0, 19).replace('T', ' ');
    const transaction = db.transaction(["MyObjectStore2"], "readwrite");
    const objectStore = transaction.objectStore("MyObjectStore2");

    const request = objectStore.add({ value: value, lastupdate: lastupdate });

    request.onsuccess = function (event) {
        console.log("Data saved successfully", event.target.result);
    };

    request.onerror = function (event) {
        console.log("Error saving data", event.target.error.name);
    };
}

function read(id) {
    const transaction = db.transaction(["MyObjectStore2"], "readonly");
    const objectStore = transaction.objectStore("MyObjectStore2");

    const request = objectStore.get(id);

    request.onsuccess = function (event) {
        console.log("Data retrieved successfully: ", event.target.result);
    };

    request.onerror = function (event) {
        console.log("Error retrieving data", event.target.error.name);
    };
}

function update(id, value) {
    const lastupdate = new Date().toISOString().substr(0, 19).replace('T', ' ');
    const transaction = db.transaction(["MyObjectStore2"], "readwrite");
    const objectStore = transaction.objectStore("MyObjectStore2");

    const request = objectStore.get(id);

    request.onsuccess = function (event) {
        const data = event.target.result;
        data.value = value;
        data.lastupdate = lastupdate;

        const updateRequest = objectStore.put(data);

        updateRequest.onsuccess = function () {
            console.log("Data updated successfully", event.target.result);
        };

        updateRequest.onerror = function (event) {
            console.log("Error updating data", event.target.error.name);
        };
    };

    request.onerror = function (event) {
        console.log("Error retrieving data", event.target.error.name);
    };
}

function deleteData(id) {
    const transaction = db.transaction(["MyObjectStore2"], "readwrite");
    const objectStore = transaction.objectStore("MyObjectStore2");

    const request = objectStore.delete(id);

    request.onsuccess = function (event) {
        console.log("Data deleted successfully");
    };

    request.onerror = function (event) {
        console.log("Error deleting data", event.target.error.name);
    };
}

function getAll() {
    let request = indexedDB.open("MyTestDatabase", 1);
    request.onsuccess = function (event) {
        let db = event.target.result;
        let objectStore = db.transaction("MyObjectStore2").objectStore("MyObjectStore2");
        let request = objectStore.getAll();
        request.onsuccess = function (event) {
            console.log(event.target.result);
        };
    };
}


function getLastUpdate(callback) {
    let request = indexedDB.open("MyTestDatabase", 1);

    request.onsuccess = function (event) {
        let db = event.target.result;
        let objectStore = db.transaction("MyObjectStore2").objectStore("MyObjectStore2");
        const request = objectStore.get(1);
        request.onsuccess = function (event) {
            let value = event.target.result;
            console.log(event.target.result);
            callback(value);
        };

    }
}

function displayResult() {
    getLastUpdate(function (result) {
        document.getElementById("result").innerHTML = result.lastupdate;
    });
}

function updateDate(callback) {
    const lastupdate = new Date().toISOString().substr(0, 19).replace('T', ' ');
    const transaction = db.transaction(["MyObjectStore2"], "readwrite");
    const objectStore = transaction.objectStore("MyObjectStore2");

    const request = objectStore.get(1);

    request.onsuccess = function (event) {
        const data = event.target.result;
        data.lastupdate = lastupdate;

        const updateRequest = objectStore.put(data);

        updateRequest.onsuccess = function () {
            let value = event.target.result;
            console.log("Data updated successfully", event.target.result);
            callback(value);
        };

        updateRequest.onerror = function (event) {
            console.log("Error updating data", event.target.error.name);
        };
    };

    request.onerror = function (event) {
        console.log("Error retrieving data", event.target.error.name);
    };
}


function displayResultNewDate() {
    updateDate(function (result) {
        document.getElementById("resultNewUpdate").innerHTML = result.lastupdate;
    });
}