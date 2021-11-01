import { render, fireEvent } from "@testing-library/react";
import { FC } from "react";
import { PlatformService } from "../../tools/usePlatform";
import useMiniCart from "./useMiniCart";

const renderComp = (isMobile: boolean) => {
  const MockComp = () => {
    const { visible, handleClick, handleHover } = useMiniCart();
    return (
      <div data-testid='toggler' onClick={handleClick} onMouseLeave={handleHover} onMouseEnter={handleHover}>
        {visible ? "true" : "false"}
      </div>
    );
  };
  const Root: FC = (props) => <PlatformService.Provider value={{ isMobile }}>{props.children}</PlatformService.Provider>;

  return render(<MockComp />, { wrapper: Root });
};

describe("useMiniCart", () => {
  describe("isMobile", () => {
    it("should toggle visible state if click toggler", () => {
      const { getByTestId } = renderComp(true);

      expect(getByTestId("toggler")).toHaveTextContent("false");

      fireEvent.click(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("true");

      fireEvent.click(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("false");
    });

    it('visible state no change if mouse enter or leave toggler', () => {
      const { getByTestId } = renderComp(true);

      expect(getByTestId("toggler")).toHaveTextContent("false");

      fireEvent.mouseEnter(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("false");

      fireEvent.mouseLeave(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("false");
    });
  });
  describe("isDesktop", () => {
    it('should toggle visible state if hover on toggler', () => {
      const { getByTestId } = renderComp(false);

      expect(getByTestId("toggler")).toHaveTextContent("false");

      fireEvent.mouseEnter(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("true");

      fireEvent.mouseLeave(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("false");
    });

    it('visible state if hover on toggler', () => {
      const { getByTestId } = renderComp(false);

      expect(getByTestId("toggler")).toHaveTextContent("false");

      fireEvent.click(getByTestId("toggler"));

      expect(getByTestId("toggler")).toHaveTextContent("false");
    });
  })
});

