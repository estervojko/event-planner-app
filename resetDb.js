const { sequelize } = require('./models');

const reset = async() => {
  try{
    await sequelize.sync({force: true});
  }
  catch(e){
    console.log(e);
  }
  process.exit();
}

reset();
