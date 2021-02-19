
exports.seed = function(knex) {
      return knex("tasks").insert([
        {task_description: "destroy all humans", task_notes: "will need sharks with freakin lasers on them",task_completed: false, project_name: "", project_description:""},
      ]);
};
