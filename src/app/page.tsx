"use client";
import { useState, useEffect, useReducer } from "react";
import Image from "next/image";

import Header from "@/fragments/Header";
import Footer from "@/fragments/Footer";
import ButtonAddToCart from "@/components/buttons/AddToCartButton";
import SVGCartButton from "@/components/icons/SVGCartButton";
import { getMovies } from "@/services/getMovies";
import {
  cartReducer,
  initialState,
  CartItem,
  CartAction,
} from "@/services/cartUtil";

import { NavList, CardList, CardItem } from "./styles/styles";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {

  // if (!loading) {
  //   return (
  //     <>
  //     <Header />
  //     <div className="min-h-screen flex justify-center items-center">
  //       <div className="block rounded-full w-12 h-12 mx-auto border-4 border-t-4 border-r-4 border-transparent border-t-[#e6e6e6] border-r-[#e6e6e6] animate-spin z-10"></div>
  //     </div>
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
        <h1 className="mt-24">hello Word</h1>
      <Footer />
    </>
  );
}

