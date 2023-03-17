import { Car } from "../../src/shared/models";
import carReducer, {
  CarStore,
  setCarData,
  setIsLoading,
} from "../../src/shared/store/car-store";

describe("Cars slice", () => {
  let initialState: CarStore;

  beforeEach(() => {
    initialState = {
      cars: [],
      isLoading: false,
    };
  });

  it("should handle setting car data", () => {
    const sampleCars: Car[] = [
      {
        id: "b645e035-0d73-40ad-aea1-e8936e50bscc",
        name: "STCC",
        image:
          "https://amplifyfsf73d60c5428e439e90effb7e77eac604151230-dev.s3.eu-central-1.amazonaws.com/cars/MOT_XB1_Volvo_1_S60.webp",
        engine: "3.5L Naturally-Aspirated V6",
        gearbox: "6-speed Transmission",
        generation: 2014,
        power: 420,
        torque: 412,
        weight: 1200,
        model: {
          id: "b645e035-0d73-40ad-aja1-e8936e50bdcc",
          manufacturer: {
            id: "0deb715d-7add-418e-aa77-b5bef40729d6",
            name: "Abarth",
            established: "1949, Bologna, Italy",
            headquarters: "Turin, Italy",
            founder: "Carlo Abarth",
            about:
              "Abarth & C. S.p.A. is an Italian racing and road car maker and performance division founded by Italo-Austrian Carlo Abarth in 1949. Abarth & C. S.p.A. is owned by Stellantis through its FCA Italy S.p.A. division. Its logo is a shield with a stylized scorpion on a yellow and red background.",
            netWorth: "Unknown",
            logo: "https://amplifyfsf73d60c5428e439e90effb7e77eac604151230-dev.s3.eu-central-1.amazonaws.com/logos/logo_Abarth.webp",
            createdAt: "2021-05-05T12:00:00.000Z",
            updatedAt: "2021-05-05T12:00:00.000Z",
          },
          name: "Chrysler Crossfire",
          createdAt: "2021-05-05T12:00:00.000Z",
          updatedAt: "2021-05-05T12:00:00.000Z",
        },
        createdAt: "2021-05-05T12:00:00.000Z",
        updatedAt: "2021-05-05T12:00:00.000Z",
      },
      {
        id: "b645e035-0d73-40ad-aca1-e8936e50bdcc",
        name: "Polestar",
        image:
          "https://amplifyfsf73d60c5428e439e90effb7e77eac604151230-dev.s3.eu-central-1.amazonaws.com/cars/MOT_XB1_Volvo_S60.webp",
        engine: "3.0L Turbocharged I6",
        gearbox: "6-speed Transmission",
        generation: 2015,
        power: 346,
        torque: 500,
        weight: 1671,
        model: {
          id: "b645e035-0d73-40ad-aaa1-e8936e50bdcc",
          manufacturer: {
            id: "0deb715d-7add-418e-aa77-b5bef40729d6",
            name: "Acura",
            established: "March 27, 1986",
            headquarters: "Minato City, Tokyo, Japan",
            founder: "Soichiro Honda",
            about:
              "Acura is the luxury and performance division of Japanese automaker Honda, based primarily in North America. The brand was launched in the United States and Canada on March 27, 1986, marketing luxury and performance automobiles.",
            netWorth: "$3.3 Million",
            logo: "https://amplifyfsf73d60c5428e439e90effb7e77eac604151230-dev.s3.eu-central-1.amazonaws.com/logos/logo_Acura.webp",
            createdAt: "2021-05-05T12:00:00.000Z",
            updatedAt: "2021-05-05T12:00:00.000Z",
          },
          name: "Chevrolet Corvette",
          createdAt: "2021-05-05T12:00:00.000Z",
          updatedAt: "2021-05-05T12:00:00.000Z",
        },
        createdAt: "2021-05-05T12:00:00.000Z",
        updatedAt: "2021-05-05T12:00:00.000Z",
      },
    ];

    const nextState = carReducer(initialState, setCarData(sampleCars));

    expect(nextState.cars).toEqual(sampleCars);
  });

  it("should handle toggling loading state", () => {
    const nextState = carReducer(initialState, setIsLoading(true));

    expect(nextState.isLoading).toBe(true);

    const finalState = carReducer(nextState, setIsLoading(false));

    expect(finalState.isLoading).toBe(false);
  });
});
