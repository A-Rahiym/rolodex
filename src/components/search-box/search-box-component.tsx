import "./search-box.css";
import { ChangeEvent } from "react";


 type SearchBoxProps={
  className: string,
  placeholder?:string,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  };




function identity<Type>(arg: Type): Type {
  return arg;
}

const iden : <T> (a: T ) => void = (a) => {
  console.log(a)
} 


const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) =>

 (<input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);


export default SearchBox;
