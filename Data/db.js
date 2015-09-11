var pg = require('pg').native; // native pool, not a per-instance request
var connectionString = "postgresql://machetedb_app_user:replace_me@localhost:5432/machetedb";

// data should include userId
function create(table, data) {
}

function get(table, id) {
}

function update(table, data) {
}

// deletion not supported via API (we keep everything)
