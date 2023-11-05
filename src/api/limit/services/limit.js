'use strict';

/**
 * limit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::limit.limit');
