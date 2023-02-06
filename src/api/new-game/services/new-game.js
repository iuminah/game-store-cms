'use strict';

/**
 * new-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-game.new-game');
