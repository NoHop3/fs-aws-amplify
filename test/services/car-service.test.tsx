/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../src/graphql/queries";
import { Car } from "../../src/shared/models/car";
import { fetchCars } from "../../src/services/car-service";
import { setIsLoading, setCarData } from "../../src/shared/store/car-store";
import { setNotification } from "../../src/shared/store/notification-store";

jest.mock("aws-amplify", () => ({
  API: {
    graphql: jest.fn(),
  },
  graphqlOperation: jest.fn(),
}));

describe("Car service test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch setIsLoading action with value true before API call", async () => {
    const dispatch = jest.fn();
    await fetchCars()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setIsLoading(true));
  });

  it("should make an API call using listCars query", async () => {
    const dispatch = jest.fn();
    await fetchCars()(dispatch);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(API.graphql).toHaveBeenCalledWith(graphqlOperation(listCars));
  });

  it("should dispatch setCarData action with correct data after successful API call", async () => {
    const dispatch = jest.fn();
    const cars: Car[] = [
      {
        id: uuidv4(),
        name: "STCC",
        model: {
          id: uuidv4(),
          name: "S60",
          manufacturer: {
            id: uuidv4(),
            name: "Volvo",
            established: "1927",
            about:
              "Volvo Cars is a Swedish luxury vehicles company. It is headquartered on Torslanda in Gothenburg and is a subsidiary of the Chinese automotive company Geely. The company manufactures and markets sport utility vehicles, station wagons, sedans and compact executive sedans.",
            founder: "Assar Gabrielsson",
            headquarters: "Gothenburg, Sweden",
            netWorth: "US$ 11.5 billion",
            logo: "https://amplifyfsf73d60c5428e439e90effb7e77eac604151230-dev.s3.eu-central-1.amazonaws.com/manufacturers/Volvo.png",
            createdAt: "2021-07-01T12:00:00.000Z",
            updatedAt: "2021-07-01T12:00:00.000Z",
          },
          createdAt: "2021-07-01T12:00:00.000Z",
          updatedAt: "2021-07-01T12:00:00.000Z",
        },
        image:
          "https://amplifyfsf73d60c5428e439e90effb7e77eac604151230-dev.s3.eu-central-1.amazonaws.com/cars/MOT_XB1_Volvo_1_S60.webp",
        engine: "3.5L Naturally-Aspirated V6",
        gearbox: "6-speed Transmission",
        generation: 2014,
        power: 420,
        torque: 412,
        weight: 1200,
        createdAt: "2021-07-01T12:00:00.000Z",
        updatedAt: "2021-07-01T12:00:00.000Z",
      },
    ];
    jest.spyOn(API, "graphql").mockResolvedValueOnce({
      data: { listCars: { items: cars } },
    } as any);
    await fetchCars()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setCarData(cars));
  });

  it("should dispatch setNotification action with error message and type after failed API call", async () => {
    const dispatch = jest.fn();
    const error = new Error("Failed to fetch cars");
    jest.spyOn(API, "graphql").mockRejectedValueOnce(error);
    await fetchCars()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      setNotification({
        open: true,
        type: "error",
        message: "Failed to fetch cars!",
      }),
    );
  });

  it("should dispatch setIsLoading action with value false after API call is completed", async () => {
    const dispatch = jest.fn();
    await fetchCars()(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(setIsLoading(false));
  });
});
