/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateManufacturer = /* GraphQL */ `
  subscription OnCreateManufacturer {
    onCreateManufacturer {
      id
      name
      established
      fouder
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
  subscription OnUpdateManufacturer {
    onUpdateManufacturer {
      id
      name
      established
      fouder
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
  subscription OnDeleteManufacturer {
    onDeleteManufacturer {
      id
      name
      established
      fouder
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
  subscription OnCreateModel {
    onCreateModel {
      id
      name
      manufacturer {
        id
        name
        established
        fouder
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
  subscription OnUpdateModel {
    onUpdateModel {
      id
      name
      manufacturer {
        id
        name
        established
        fouder
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
  subscription OnDeleteModel {
    onDeleteModel {
      id
      name
      manufacturer {
        id
        name
        established
        fouder
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
  subscription OnCreateCar {
    onCreateCar {
      id
      model {
        id
        name
        manufacturer {
          id
          name
          established
          fouder
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
  subscription OnUpdateCar {
    onUpdateCar {
      id
      model {
        id
        name
        manufacturer {
          id
          name
          established
          fouder
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
  subscription OnDeleteCar {
    onDeleteCar {
      id
      model {
        id
        name
        manufacturer {
          id
          name
          established
          fouder
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