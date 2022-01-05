const sequelize = require('../config/connection');
const { User, Article, Comment } = require('../models');

const userData = require('./userData.json');
const articleData = require('./articleData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const article of articleData) {
    await Article.create({
      ...article,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // const comments = await Article.bulkCreate(articleData, {
  //   individualHooks: false,
  // });
  console.log(articleData);
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      article_id:Math.floor(Math.random() * articleData.length + 1),
    });
  }

  process.exit(0);
};

seedDatabase();
