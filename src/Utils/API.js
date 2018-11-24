import axios from "axios";

export default {
  // Gets all saved books
  getSavedTasks: function() {
    return axios.get("/api/tasks");
  },
  // Deletes the saved book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves an book to the database
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  }
};