import './App.css';
import Header from './components/Header';
import Popular from './components/Popular';
import NewProducts from './components/NewProducts';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  const productos = [
    {nombre: 'New Balance 327 Cordura', precio: 100, imagen:'assets/images/collection/arrivals1.png',cantidad:1},
    {nombre:'Nike Max Impact', precio: 90, imagen:'assets/images/collection/arrivals2.png',cantidad:1},
    {nombre:'Nike Blazer Mid ´77', precio: 100, imagen:'assets/images/collection/arrivals3.png',cantidad:1},
    {nombre:'Converse Chuck Taylor All Star 70´s High', precio: 95, imagen:'assets/images/collection/arrivals4.png',cantidad:1},
    {nombre:'Vans Old Skool', precio: 75, imagen:'assets/images/collection/arrivals5.png',cantidad:1},
    {nombre:'Vans Sk8-Hi Repeat', precio: 90, imagen:'assets/images/collection/arrivals6.png',cantidad:1},
    {nombre:'adidas Originals AS 520', precio: 100, imagen:'assets/images/collection/arrivals7.png',cantidad:1},
    {nombre:'Nike Air VaporMax 2021', precio: 220, imagen:'assets/images/collection/arrivals8.png',cantidad:1},
  ]

  if(localStorage.getItem('carrito')){
    var carrito = JSON.parse(localStorage.getItem('carrito'))
  }else{
    var carrito = [];
  }

  const [datos, setDatos] = useState({productos:productos,carrito:carrito});

  const anadir = (producto)=>{
    datos.carrito.push(producto)
    console.log(producto)
    setDatos({
      productos:productos,
      carrito:[...datos.carrito],
    })
  }

  const borrar = (indice)=>{
    datos.carrito.splice(indice,1)
    setDatos({
      productos:productos,
      carrito:[...datos.carrito],
    })
  }

  const sumar = (indice)=>{
    datos.carrito[indice].cantidad++
    setDatos({
      productos:productos,
      carrito:[...datos.carrito]
    })
  }

  const restar = (indice)=>{
    datos.carrito[indice].cantidad--
    setDatos({
      productos:productos,
      carrito:[...datos.carrito]
    })
  }

  return (
    <BrowserRouter>
      <Header carrito = {datos.carrito} borrar={borrar}></Header>
      <Popular></Popular>
      <Routes>
        <Route path ='/new-products' element = {<NewProducts productos = {datos.productos} carrito = {datos.carrito} anadir={anadir} aumentar={sumar}></NewProducts>}/>
        <Route path ='/newsletter' element = {<Newsletter></Newsletter>}/>
        <Route path ='/carrito' element = {<Carrito carrito = {datos.carrito} borrar={borrar} aumentar={sumar} disminuir={restar}></Carrito>}/>
      </Routes>
      <Brands></Brands>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
