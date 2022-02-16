/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pernheroku').del()
  await knex('pernheroku').insert([
    { id: 1, name: 'window flicker', severity: 1 },
    { id: 2, name: 'static sound', severity: 2 },
    { id: 3, name: 'sudden crash', severity: 3 },
    { id: 4, name: 'snek in computer', severity: 1000 },
  ]);
};
