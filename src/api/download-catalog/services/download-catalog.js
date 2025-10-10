'use strict';

/**
 * download-catalog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-catalog.download-catalog');
