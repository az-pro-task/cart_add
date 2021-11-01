import { IProduct } from "../types/IProduct";
import img from "../pro.jpg";

const dataSource: IProduct = {
  id: "1",
  name: "Classis Tee",
  img: img,
  price: 7500,
  specs: ["S", "M", "L"],
  description:
    "Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet,consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus"
};

export function getDataSource() {
  return Promise.resolve(dataSource);
}
