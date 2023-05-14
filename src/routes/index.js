import express from 'express';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';

import categories from './categoriesRoutes.js';
import products from './productsRoutes.js';

const file = fs.readFileSync('src/swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

const routes = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'Sistema Ecomm' });
  });

  app.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;
