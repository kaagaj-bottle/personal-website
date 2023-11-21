const router = require('express').Router()

const { Article } = require('../models')
const logger = require('../utilities/logger')

router.get('/', async (request, response) => {
  try {
    const articles = await Article.findAll();

    response.json(articles)
  } catch (error) {
    logger.error(error)
    return response.status(400).end()
  }
});

router.get('/:id', async (request, response) => {
  const id = request.params.id
  try {
    const article = await Article.findByPk(id)
    response.json(article)
  } catch (error) {
    logger.error(error)
    return response.status(400).end()
  }
})

module.exports = router
