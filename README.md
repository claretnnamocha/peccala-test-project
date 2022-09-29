# peccala-test-project

## Steps to run project

1. Create the `.env` file
   Using the `.env.example` file as a guide, create a `.env` file.

   Example:

   ```env
   peccalaValue=2.123456789012345678
   ```

2. Install dependencies

   ```sh
   yarn install

   ```

3. To run project

   ```sh
   yarn start

   ```

## 3rd party libraries used

- [bignumber.js](https://www.npmjs.com/package/bignumber.js) - Used to handle the big numbers and maintain required decimal points
- [dotenv](https://www.npmjs.com/package/dotenv) - Used to get data from the `.env` file
