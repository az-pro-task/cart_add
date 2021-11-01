import { fireEvent, render } from "@testing-library/react";
import useCart from "./useCart";

describe("useCart", () => {
  it("should correct add item", () => {
    let spec = "S";
    const getItem = () => ({ price: 7000, name: "test", img: "test.png", spec, amount: 1 });
    const MockComp = () => {
      const { total, items, addItem } = useCart();

      return (
        <div>
          <button data-testid='btn' onClick={() => addItem(getItem())}>
            Add
          </button>
          <div data-testid='total'>{total}</div>
          <div data-testid='items'>{items.length}</div>
        </div>
      );
    };

    const { getByTestId } = render(<MockComp />);

    expect(getByTestId("total")).toHaveTextContent("0");
    expect(getByTestId("items")).toHaveTextContent("0");

    fireEvent.click(getByTestId("btn"));

    expect(getByTestId("total")).toHaveTextContent("1");
    expect(getByTestId("items")).toHaveTextContent("1");

    fireEvent.click(getByTestId("btn"));

    expect(getByTestId("total")).toHaveTextContent("2");
    expect(getByTestId("items")).toHaveTextContent("1");

    spec = "M";
    fireEvent.click(getByTestId("btn"));

    expect(getByTestId("total")).toHaveTextContent("3");
    expect(getByTestId("items")).toHaveTextContent("2");
  });
});
