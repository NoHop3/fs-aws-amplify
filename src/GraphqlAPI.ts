/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateManufacturerInput = {
  id?: string | null,
  name: string,
  established?: string | null,
  fouder?: string | null,
  headquarters?: string | null,
  about?: string | null,
  netWorth?: number | null,
  logo?: string | null,
};

export type ModelManufacturerConditionInput = {
  name?: ModelStringInput | null,
  established?: ModelStringInput | null,
  fouder?: ModelStringInput | null,
  headquarters?: ModelStringInput | null,
  about?: ModelStringInput | null,
  netWorth?: ModelIntInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelManufacturerConditionInput | null > | null,
  or?: Array< ModelManufacturerConditionInput | null > | null,
  not?: ModelManufacturerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Manufacturer = {
  __typename: "Manufacturer",
  id: string,
  name: string,
  established?: string | null,
  fouder?: string | null,
  headquarters?: string | null,
  about?: string | null,
  netWorth?: number | null,
  logo?: string | null,
  models?: ModelModelConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelModelConnection = {
  __typename: "ModelModelConnection",
  items:  Array<Model | null >,
  nextToken?: string | null,
};

export type Model = {
  __typename: "Model",
  id: string,
  name: string,
  manufacturer?: Manufacturer | null,
  cars?: ModelCarConnection | null,
  createdAt: string,
  updatedAt: string,
  manufacturerModelsId?: string | null,
};

export type ModelCarConnection = {
  __typename: "ModelCarConnection",
  items:  Array<Car | null >,
  nextToken?: string | null,
};

export type Car = {
  __typename: "Car",
  id: string,
  model?: Model | null,
  image?: string | null,
  generation?: number | null,
  power?: number | null,
  torque?: number | null,
  weight?: number | null,
  gearbox?: string | null,
  engine?: string | null,
  createdAt: string,
  updatedAt: string,
  modelCarsId?: string | null,
};

export type UpdateManufacturerInput = {
  id: string,
  name?: string | null,
  established?: string | null,
  fouder?: string | null,
  headquarters?: string | null,
  about?: string | null,
  netWorth?: number | null,
  logo?: string | null,
};

export type DeleteManufacturerInput = {
  id: string,
};

export type CreateModelInput = {
  id?: string | null,
  name: string,
  manufacturerModelsId?: string | null,
};

export type ModelModelConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelModelConditionInput | null > | null,
  or?: Array< ModelModelConditionInput | null > | null,
  not?: ModelModelConditionInput | null,
  manufacturerModelsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateModelInput = {
  id: string,
  name?: string | null,
  manufacturerModelsId?: string | null,
};

export type DeleteModelInput = {
  id: string,
};

export type CreateCarInput = {
  id?: string | null,
  image?: string | null,
  generation?: number | null,
  power?: number | null,
  torque?: number | null,
  weight?: number | null,
  gearbox?: string | null,
  engine?: string | null,
  modelCarsId?: string | null,
};

export type ModelCarConditionInput = {
  image?: ModelStringInput | null,
  generation?: ModelIntInput | null,
  power?: ModelIntInput | null,
  torque?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  gearbox?: ModelStringInput | null,
  engine?: ModelStringInput | null,
  and?: Array< ModelCarConditionInput | null > | null,
  or?: Array< ModelCarConditionInput | null > | null,
  not?: ModelCarConditionInput | null,
  modelCarsId?: ModelIDInput | null,
};

export type UpdateCarInput = {
  id: string,
  image?: string | null,
  generation?: number | null,
  power?: number | null,
  torque?: number | null,
  weight?: number | null,
  gearbox?: string | null,
  engine?: string | null,
  modelCarsId?: string | null,
};

export type DeleteCarInput = {
  id: string,
};

export type ModelManufacturerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  established?: ModelStringInput | null,
  fouder?: ModelStringInput | null,
  headquarters?: ModelStringInput | null,
  about?: ModelStringInput | null,
  netWorth?: ModelIntInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelManufacturerFilterInput | null > | null,
  or?: Array< ModelManufacturerFilterInput | null > | null,
  not?: ModelManufacturerFilterInput | null,
};

export type ModelManufacturerConnection = {
  __typename: "ModelManufacturerConnection",
  items:  Array<Manufacturer | null >,
  nextToken?: string | null,
};

export type ModelModelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelModelFilterInput | null > | null,
  or?: Array< ModelModelFilterInput | null > | null,
  not?: ModelModelFilterInput | null,
  manufacturerModelsId?: ModelIDInput | null,
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  generation?: ModelIntInput | null,
  power?: ModelIntInput | null,
  torque?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  gearbox?: ModelStringInput | null,
  engine?: ModelStringInput | null,
  and?: Array< ModelCarFilterInput | null > | null,
  or?: Array< ModelCarFilterInput | null > | null,
  not?: ModelCarFilterInput | null,
  modelCarsId?: ModelIDInput | null,
};

export type CreateManufacturerMutationVariables = {
  input: CreateManufacturerInput,
  condition?: ModelManufacturerConditionInput | null,
};

export type CreateManufacturerMutation = {
  createManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateManufacturerMutationVariables = {
  input: UpdateManufacturerInput,
  condition?: ModelManufacturerConditionInput | null,
};

export type UpdateManufacturerMutation = {
  updateManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteManufacturerMutationVariables = {
  input: DeleteManufacturerInput,
  condition?: ModelManufacturerConditionInput | null,
};

export type DeleteManufacturerMutation = {
  deleteManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateModelMutationVariables = {
  input: CreateModelInput,
  condition?: ModelModelConditionInput | null,
};

export type CreateModelMutation = {
  createModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type UpdateModelMutationVariables = {
  input: UpdateModelInput,
  condition?: ModelModelConditionInput | null,
};

export type UpdateModelMutation = {
  updateModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type DeleteModelMutationVariables = {
  input: DeleteModelInput,
  condition?: ModelModelConditionInput | null,
};

export type DeleteModelMutation = {
  deleteModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type CreateCarMutationVariables = {
  input: CreateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type CreateCarMutation = {
  createCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};

export type UpdateCarMutationVariables = {
  input: UpdateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type UpdateCarMutation = {
  updateCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};

export type DeleteCarMutationVariables = {
  input: DeleteCarInput,
  condition?: ModelCarConditionInput | null,
};

export type DeleteCarMutation = {
  deleteCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};

export type GetManufacturerQueryVariables = {
  id: string,
};

export type GetManufacturerQuery = {
  getManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListManufacturersQueryVariables = {
  filter?: ModelManufacturerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListManufacturersQuery = {
  listManufacturers?:  {
    __typename: "ModelManufacturerConnection",
    items:  Array< {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetModelQueryVariables = {
  id: string,
};

export type GetModelQuery = {
  getModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type ListModelsQueryVariables = {
  filter?: ModelModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModelsQuery = {
  listModels?:  {
    __typename: "ModelModelConnection",
    items:  Array< {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCarQueryVariables = {
  id: string,
};

export type GetCarQuery = {
  getCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};

export type ListCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      model?:  {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null,
      image?: string | null,
      generation?: number | null,
      power?: number | null,
      torque?: number | null,
      weight?: number | null,
      gearbox?: string | null,
      engine?: string | null,
      createdAt: string,
      updatedAt: string,
      modelCarsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateManufacturerSubscription = {
  onCreateManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateManufacturerSubscription = {
  onUpdateManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteManufacturerSubscription = {
  onDeleteManufacturer?:  {
    __typename: "Manufacturer",
    id: string,
    name: string,
    established?: string | null,
    fouder?: string | null,
    headquarters?: string | null,
    about?: string | null,
    netWorth?: number | null,
    logo?: string | null,
    models?:  {
      __typename: "ModelModelConnection",
      items:  Array< {
        __typename: "Model",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        manufacturerModelsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateModelSubscription = {
  onCreateModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type OnUpdateModelSubscription = {
  onUpdateModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type OnDeleteModelSubscription = {
  onDeleteModel?:  {
    __typename: "Model",
    id: string,
    name: string,
    manufacturer?:  {
      __typename: "Manufacturer",
      id: string,
      name: string,
      established?: string | null,
      fouder?: string | null,
      headquarters?: string | null,
      about?: string | null,
      netWorth?: number | null,
      logo?: string | null,
      models?:  {
        __typename: "ModelModelConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cars?:  {
      __typename: "ModelCarConnection",
      items:  Array< {
        __typename: "Car",
        id: string,
        image?: string | null,
        generation?: number | null,
        power?: number | null,
        torque?: number | null,
        weight?: number | null,
        gearbox?: string | null,
        engine?: string | null,
        createdAt: string,
        updatedAt: string,
        modelCarsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    manufacturerModelsId?: string | null,
  } | null,
};

export type OnCreateCarSubscription = {
  onCreateCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};

export type OnUpdateCarSubscription = {
  onUpdateCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};

export type OnDeleteCarSubscription = {
  onDeleteCar?:  {
    __typename: "Car",
    id: string,
    model?:  {
      __typename: "Model",
      id: string,
      name: string,
      manufacturer?:  {
        __typename: "Manufacturer",
        id: string,
        name: string,
        established?: string | null,
        fouder?: string | null,
        headquarters?: string | null,
        about?: string | null,
        netWorth?: number | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cars?:  {
        __typename: "ModelCarConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      manufacturerModelsId?: string | null,
    } | null,
    image?: string | null,
    generation?: number | null,
    power?: number | null,
    torque?: number | null,
    weight?: number | null,
    gearbox?: string | null,
    engine?: string | null,
    createdAt: string,
    updatedAt: string,
    modelCarsId?: string | null,
  } | null,
};
