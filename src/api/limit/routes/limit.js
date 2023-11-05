'use strict';

/**
 * limit router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::limit.limit');
