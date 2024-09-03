import { Link } from "react-router-dom";
import addProduct from "../assets/addProduct.png";
import listProduct from "../assets/productlist.png";
export const Sidebar = () => {
  return (
    <div
      className="py-7 flex justify-center gap-x-2 gap-y-5 w-full bg-white 
    sn:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6"
    >
      <Link to={"/addproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40 medium-16 xs:w-44 sm:medium">
          <img src={addProduct} alt="" height={44} width={44} />
          <span>Ajouter produit</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-40  xs:w-44  medium-16 sm:medium  ">
          <img src={listProduct} alt="" height={44} width={44} />
          <span>list produit</span>
        </button>
      </Link>
    </div>
  );
};
