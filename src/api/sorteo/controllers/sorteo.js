'use strict';
/**
 * sorteo controller
*/

const { createCoreController } = require('@strapi/strapi').factories;
const JsBarcode = require('jsbarcode');

module.exports = createCoreController('api::sorteo.sorteo', ({ strapi }) => ({
    
    async getBarCode(ctx) {
        try {
            const sanitizedQueryParams = await this.sanitizeQuery(ctx);
            // const canvas = new Canvas(100, 100, "image");
            // JsBarcode(canvas, 'test');
            // const result = canvas.toBuffer();
            // console.log(result);
            ctx.body = 'result';
        } catch (err) {
          ctx.body = err;
        }
      },
}));
