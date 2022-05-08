/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createManufacturer = /* GraphQL */ `
  mutation CreateManufacturer(
    $input: CreateManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    createManufacturer(input: $input, condition: $condition) {
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
export const updateManufacturer = /* GraphQL */ `
  mutation UpdateManufacturer(
    $input: UpdateManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    updateManufacturer(input: $input, condition: $condition) {
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
export const deleteManufacturer = /* GraphQL */ `
  mutation DeleteManufacturer(
    $input: DeleteManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    deleteManufacturer(input: $input, condition: $condition) {
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
export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
      id
      name
      # manufacturer {
      #   id
      #   name
      #   established
      #   founder
      #   headquarters
      #   about
      #   netWorth
      #   logo
      #   models {
      #     nextToken
      #   }
      #   createdAt
      #   updatedAt
      # }
      # cars {
      #   items {
      #     id
      #     image
      #     generation
      #     power
      #     torque
      #     weight
      #     gearbox
      #     engine
      #     createdAt
      #     updatedAt
      #     modelCarsId
      #   }
      #   nextToken
      # }
      createdAt
      updatedAt
      manufacturerModelsId
    }
  }
`;
export const updateModel = /* GraphQL */ `
  mutation UpdateModel(
    $input: UpdateModelInput!
    $condition: ModelModelConditionInput
  ) {
    updateModel(input: $input, condition: $condition) {
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
export const deleteModel = /* GraphQL */ `
  mutation DeleteModel(
    $input: DeleteModelInput!
    $condition: ModelModelConditionInput
  ) {
    deleteModel(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
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
