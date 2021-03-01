# Venta de Patio by Yatiac

This is a very simple react application created with `create-react-app` and using airtable as database

To start using it:

- clone the repo
- run `npm install` or `yarn install`
- create a `.env` file with this keys :
  - `REACT_APP_AIRTABLE_TOKEN={your token}`
  - `REACT_APP_AIRTABLE_TABLE_NAME={name of your table/base}`
- run `npm run start` or `yarn start`

You need to have an `Airtable` account and a table created there with the following columns:

- Name
- Price
- Image

There is a demo running [here](https://venta-de-patio.web.app).

Feel free to fork and submit any PR.
