import useCart, { CartService } from "./components/cart/useCart";
import usePlatform, { PlatformService } from "./tools/usePlatform";
import Home from "./views/home/Home";

function App() {
  // inject services
  return (
    <PlatformService.Provider value={usePlatform()}>
      <CartService.Provider value={useCart()}>
        <Home />
      </CartService.Provider>
    </PlatformService.Provider>
  );
}

export default App;
