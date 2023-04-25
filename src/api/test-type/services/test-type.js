'use strict';

/**
 * test-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-type.test-type');
