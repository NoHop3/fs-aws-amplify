/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getManufacturer = /* GraphQL */ `
  query GetManufacturer($id: ID!) {
    getManufacturer(id: $id) {
      id
      name
      established
      founder
      headquarters
      about
      netWorth
      logo
      models {
        items {
          id
          name
          createdAt
          updatedAt
          manufacturerModelsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listManufacturers = /* GraphQL */ `
  query ListManufacturers(
    $filter: ModelManufacturerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManufacturers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        established
        founder
        headquarters
        about
        netWorth
        logo
        models {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModel = /* GraphQL */ `
  query GetModel($id: ID!) {
    getModel(id: $id) {
      id
      name
      manufacturer {
        id
        name
        established
        founder
        headquarters
        about
        netWorth
        logo
        models {
          nextToken
        }
        createdAt
        updatedAt
      }
      cars {
        items {
          id
          name
          image
          generation
          power
          torque
          weight
          gearbox
          engine
          createdAt
          updatedAt
          modelCarsId
        }
        nextToken
      }
      createdAt
      updatedAt
      manufacturerModelsId
    }
  }
`;
export const listModels = /* GraphQL */ `
  query ListModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        manufacturer {
          id
          name
          established
          founder
          headquarters
          about
          netWorth
          logo
          createdAt
          updatedAt
        }
        cars {
          nextToken
        }
        createdAt
        updatedAt
        manufacturerModelsId
      }
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      name
      model {
        id
        name
        manufacturer {
          id
          name
          established
          founder
          headquarters
          about
          netWorth
          logo
          createdAt
          updatedAt
        }
        cars {
          nextToken
        }
        createdAt
        updatedAt
        manufacturerModelsId
      }
      image
      generation
      power
      torque
      weight
      gearbox
      engine
      createdAt
      updatedAt
      modelCarsId
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        model {
          id
          name
          manufacturer {
          id
          logo
        }
          createdAt
          updatedAt
          manufacturerModelsId
        }
        image
        generation
        power
        torque
        weight
        gearbox
        engine
        createdAt
        updatedAt
        modelCarsId
      }
      nextToken
    }
  }
`;
