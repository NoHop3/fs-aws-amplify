/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { renderWithProviders } from "../utils/test-utils";
import { CarCard } from "../../src/components";

describe("Test carCard component", () => {
  const car = {
    id: "1",
    name: "Car 1",
    image: "https://www.carlogos.org/logo/Peugeot-logo-2003-1920x1080.png",
    model: {
      id: "1",
      name: "Model 1",
      manufacturer: {
        id: "1",
        name: "Manufacturer 1",
        logo: "https://www.carlogos.org/logo/Peugeot-logo-2003-1920x1080.png",
        established: "2021-01-01T00:00:00.000Z",
        headquarters: "100",
        founder: "100",
        netWorth: "100",
        about: "100",
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      },
      createdAt: "2021-01-01T00:00:00.000Z",
      updatedAt: "2021-01-01T00:00:00.000Z",
    },
    power: 100,
    torque: 100,
    engine: "100",
    weight: 100,
    generation: 1,
    gearbox: "100",
    createdAt: "2021-01-01T00:00:00.000Z",
    updatedAt: "2021-01-01T00:00:00.000Z",
  };

  it("should render without crashing", () => {
    renderWithProviders(<CarCard {...car} />);
  });

  it("should render car image if image exists", () => {
    const renderedComponent = renderWithProviders(<CarCard {...car} />);
    const carElement = renderedComponent.getByAltText(car.name);
    expect(carElement).toBeInTheDocument();
    expect((carElement as HTMLImageElement).src).toBe(car.image);
  });

  it("should not render car image if image doesn't exist", () => {
    const carWithoutImage = { ...car, image: "" };
    const renderedComponent = renderWithProviders(
      <CarCard {...carWithoutImage} />,
    );
    const imageElement = renderedComponent.queryByAltText(carWithoutImage.name);
    expect(imageElement).not.toBeInTheDocument();
  });

  it("should render the car name, model name and model manufacturer logo", () => {
    const renderedComponent = renderWithProviders(<CarCard {...car} />);
    const carModelNameElement = renderedComponent.getByText(car.model.name);
    expect(carModelNameElement).toBeInTheDocument();

    const carManufacturerLogoElement = renderedComponent.getByAltText(
      car.model.manufacturer.name,
    );
    expect(carManufacturerLogoElement).toBeInTheDocument();

    if (car.name) {
      const carNameElement = renderedComponent.getByText(car.name);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(carNameElement).toBeInTheDocument();
    }
  });

  it("should render all car details", () => {
    const renderedComponent = renderWithProviders(<CarCard {...car} />);
    const powerElement = renderedComponent.getByText(`Power: ${car.power}hp`);
    expect(powerElement).toBeInTheDocument();

    const torqueElement = renderedComponent.getByText(
      `Torque: ${car.torque}nm`,
    );
    expect(torqueElement).toBeInTheDocument();

    const engineElement = renderedComponent.getByText(`Engine: ${car.engine}`);
    expect(engineElement).toBeInTheDocument();

    const weightElement = renderedComponent.getByText(
      `Weight: ${car.weight}kg`,
    );
    expect(weightElement).toBeInTheDocument();

    const generationElement = renderedComponent.getByText(
      `Generation: ${car.generation}`,
    );
    expect(generationElement).toBeInTheDocument();

    const gearboxElement = renderedComponent.getByText(
      `Gearbox: ${car.gearbox}`,
    );
    expect(gearboxElement).toBeInTheDocument();
  });

  it("should render a car info only if it exists", () => {
    const carWithoutSomeDetails = {
      ...car,
      power: 0,
      weight: 0,
    };
    const renderedComponent = renderWithProviders(
      <CarCard {...carWithoutSomeDetails} />,
    );

    const powerElement = renderedComponent.queryByText(`Power: ${car.power}hp`);
    expect(powerElement).not.toBeInTheDocument();

    const weightElement = renderedComponent.queryByText(
      `Weight: ${car.weight}kg`,
    );
    expect(weightElement).not.toBeInTheDocument();

    const torqueElement = renderedComponent.getByText(
      `Torque: ${car.torque}nm`,
    );
    expect(torqueElement).toBeInTheDocument();
  });
});
