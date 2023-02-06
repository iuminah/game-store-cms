'use strict';

/**
 * new-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new-game.new-game');
