import Head from 'next/head'
import {  useState, useEffect } from "react";
import * as Realm from "realm-web"; 
import Category from '../components/Category';
import Container from '../components/Container';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from '../components/Pagination';
import Products from "../components/Products";
import Footer from '../components/Footer'
export default function Home(){
  const [products, setProducts] = useState([])

  useEffect(async () => {
    /* The "products-ivcyh" value needs to be replaced by the protected varaiable that is currently inside of the .env.local file. I could not get it to read, so
    I carried on to the next step of the build. */
    const REALM_APP_ID = "products-ivcyh";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProducts = await user.functions.getAllProducts();
      setProducts((allProducts));
    } catch (error)  {
      console.error(error);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>J-Nutt's Next.js MongoDB Realm E-Commerce Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black w-full min-h-screen">
      <Header />
      <Container>
      // the rest of our App build out //
      <Hero />
      <Category
        category="Tech Gear"
        categoryCount={`${products.length} Products`} />
        <Products products={products} /> 
        <Pagination />
        
      </Container>
      <Footer />
      </div>
    </div>
  )
}
