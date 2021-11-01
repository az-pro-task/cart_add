import { fireEvent, render } from "@testing-library/react";
import { FC } from "react";
import { IProduct } from "../../types/IProduct";
import { CartService } from "../cart/useCart";
import Product from "./Product";

const mockAddItem = jest.fn();
const mockAlert = jest.fn();
global.alert = mockAlert;

const Root: FC = (props) => <CartService.Provider value={{ addItem: mockAddItem, total: 0, items: [] }}>{props.children}</CartService.Provider>;

describe("Product", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should toggle picked state if click spec item", () => {
    const mockProduct: IProduct = {
      id: "1",
      name: "Classis Tee",
      img: "/pro.png",
      price: 7500,
      specs: ["S", "M", "L"],
      description:
        "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet,consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus"
    };

    const { getByTestId, getByText, getAllByTestId } = render(<Product dataSource={mockProduct} />, { wrapper: Root });

    getAllByTestId(/item_/).forEach((dom) => {
      expect(dom).not.toHaveClass("is-active");
    });

    fireEvent.click(getByTestId("item_S"));

    expect(getByTestId("item_S")).toHaveClass("is-active");
    expect(getByTestId("item_M")).not.toHaveClass("is-active");
    expect(getByTestId("item_L")).not.toHaveClass("is-active");

    fireEvent.click(getByTestId("item_M"));


    expect(getByTestId("item_S")).not.toHaveClass("is-active");
    expect(getByTestId("item_M")).toHaveClass("is-active");
    expect(getByTestId("item_L")).not.toHaveClass("is-active");

    fireEvent.click(getByTestId("item_M"));

    getAllByTestId(/item_/).forEach((dom) => {
      expect(dom).not.toHaveClass("is-active");
    });

    fireEvent.click(getByText("ADD TO CART"))

    expect(mockAlert).toBeCalled()

    fireEvent.click(getByTestId("item_M"));
    fireEvent.click(getByText("ADD TO CART"))

    expect(mockAddItem).toBeCalled()
  });
});
