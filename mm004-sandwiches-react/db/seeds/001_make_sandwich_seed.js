/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sandwich').del()
  await knex('sandwich').insert([
    {
      img_url: 'https://cdn.pixabay.com/photo/2015/04/20/21/05/breakfast-732231_960_720.jpg', 
      name: 'Blissful Bagel Sandwich', 
      desc: 'A holy sandwich',
      calories: 800,
      likes: 64,
      prep_time: 20,
      default_serving: 2,
    },
    {
      img_url: 'https://cdn.pixabay.com/photo/2021/02/15/11/43/hot-dog-6017568_960_720.jpg', 
      name: 'Hopefull Hotdog Sandwich', 
      desc: `It really wants to be a sandwich, Please don't hurt its feeling.`,
      calories: 1400,
      likes: 10,
      prep_time: 10,
      default_serving: 2,
    },
    {
      img_url: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.6435-9/71199946_385637508794470_3541176088598151168_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=SJEEbZtSF5cAX8QA2oT&_nc_ht=scontent-nrt1-1.xx&oh=00_AfBu4_FSExSGeH0MHEKY3nCxzRG0YZAAnSv9IMBns7fUFw&oe=6441C248', 
      name: 'Outspoken Open Sandwich', 
      desc: 'This sandwich is very honest. Do not try to eat it upside down.',
      calories: 160,
      likes: 27,
      prep_time: 5,
      default_serving: 0.5,
    },
    {
      img_url: 'https://b.zmtcdn.com/data/pictures/9/19092519/098214c8f9ea6bca1616b5d6407af99b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*', 
      name: 'Better Burger Sandwich', 
      desc: `It's not the best, but it's better`,
      calories: 1400,
      likes: 102,
      prep_time: 10,
      default_serving: 1,
    },
    {
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxXP4_nDbZldqyeFCFDZNXXRU4IJwlp3mg9IXnGG2NkNkLlwN', 
      name: 'Potential Pita Sandwich', 
      desc: `This could potentially be a sandwich, if you choose to make it.`,
      calories: 550,
      likes: 0,
      prep_time: 5,
      default_serving: 1,
    },
    {
      img_url: 'https://www.kapowprimary.com/wp-content/uploads/2020/11/wraps-6738161_1920.jpg', 
      name: 'Relatable Wrap Sandwich', 
      desc: `This sandwich has imposter syndrome.`,
      calories: 400,
      likes: 41,
      prep_time: 5,
      default_serving: 1,
    }
  ]);
};
