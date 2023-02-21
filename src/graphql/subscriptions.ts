/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateManufacturer = /* GraphQL */ `
  subscription OnCreateManufacturer(
    $filter: ModelSubscriptionManufacturerFilterInput
  ) {
    onCreateManufacturer(filter: $filter) {
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
export const onUpdateManufacturer = /* GraphQL */ `
  subscription OnUpdateManufacturer(
    $filter: ModelSubscriptionManufacturerFilterInput
  ) {
    onUpdateManufacturer(filter: $filter) {
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
export const onDeleteManufacturer = /* GraphQL */ `
  subscription OnDeleteManufacturer(
    $filter: ModelSubscriptionManufacturerFilterInput
  ) {
    onDeleteManufacturer(filter: $filter) {
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
export const onCreateModel = /* GraphQL */ `
  subscription OnCreateModel($filter: ModelSubscriptionModelFilterInput) {
    onCreateModel(filter: $filter) {
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
export const onUpdateModel = /* GraphQL */ `
  subscription OnUpdateModel($filter: ModelSubscriptionModelFilterInput) {
    onUpdateModel(filter: $filter) {
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
export const onDeleteModel = /* GraphQL */ `
  subscription OnDeleteModel($filter: ModelSubscriptionModelFilterInput) {
    onDeleteModel(filter: $filter) {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
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
