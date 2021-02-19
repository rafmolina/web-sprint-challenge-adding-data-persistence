
exports.seed = function(knex) {
      return knex("projects").insert([
        {project_name: "bar", project_description: "no copy and paste",project_completed: true},
      ]);
};