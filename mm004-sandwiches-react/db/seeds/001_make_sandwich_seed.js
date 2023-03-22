/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sandwich').del()
  await knex('sandwich').insert([
    {
      img_url: 'bagel.jpg', 
      name: 'Blissful Bagel Sandwich', 
      desc: 'A holy sandwich',
      calories: 800,
      likes: 64,
      prep_time: 20,
      default_serving: 2,
    },
    {
      img_url: 'hotdog.jpg', 
      name: 'Hopefule Hotdog Sandwich', 
      desc: `It really wants to be a sandwich, Please don't hurt its feeling.`,
      calories: 1400,
      likes: 10,
      prep_time: 10,
      default_serving: 2,
    },
    {
      img_url: 'open-sandwich.jpg', 
      name: 'Outspoken Open Sandwich', 
      desc: 'This sandwich is very honest. Do not try to eat it upside down.',
      calories: 160,
      likes: 27,
      prep_time: 5,
      default_serving: 0.5,
    },
    {
      img_url: 'burger.jpg', 
      name: 'Better Burger Sandwich', 
      desc: `It's not the best, but it's better`,
      calories: 1400,
      likes: 102,
      prep_time: 10,
      default_serving: 1,
    },
    {
      img_url: 'pita.jpg', 
      name: 'Potential Pita Sandwich', 
      desc: `This could potentially be a sandwich, if you choose to make it.`,
      calories: 550,
      likes: 0,
      prep_time: 5,
      default_serving: 1,
    },
    {
      img_url: 'wrap.jpg', 
      name: 'Relatable Wrap Sandwich', 
      desc: `This sandwich has imposter syndrome.`,
      calories: 400,
      likes: 41,
      prep_time: 5,
      default_serving: 1,
    }
  ]);
};
