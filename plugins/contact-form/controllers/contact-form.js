'use strict';

/**
 * contact-form.js controller
 *
 * @description: A set of functions called "actions" of the `contact-form` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

  postMessage: async (ctx) =>{
  console.log('PostMessage desde servidor', ctx.response.body)
  
  const  data = ctx.request.body
  console.log(data)
  if(!data.name || !data.email || !data.body){
    return (ctx.badRequest('all parameters must be suplied'))
  }
  const  result = await strapi.entityService.create({data},{model:"plugins::contact-form.message"})
  return result
    
  }
};
