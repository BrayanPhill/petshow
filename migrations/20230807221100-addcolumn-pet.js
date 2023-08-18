'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
          return queryInterface.addColumn('Pets', 'especie', {

            type: Sequelize.STRING
                
            })},
              
    down: (queryInterface, Sequelize) => {
          return queryInterface.removeColumn('Pet', 'especie')
      }
   } 
