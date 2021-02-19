
exports.seed = function(knex) {
      return knex("resources").insert([
        {resource_name: "rafael" , resource_description: "a magician never tells"},
      ]);
};
