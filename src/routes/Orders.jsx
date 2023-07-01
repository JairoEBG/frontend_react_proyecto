import React from 'react'
import WithLoadingList from '../components/WithLoadingList';
import List from '../components/List';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Orders() {
    const LoadingList = WithLoadingList(List);
    const [appState, setAppState] = useState({loading: false, orders: null})



    useEffect (() => {
      setAppState({loading: true});
      fetch(process.env.REACT_APP_API_URL)
      .then((res) => res.json())
      .then((orders) => {setAppState({loading: false, orders: orders}) })
    }, [setAppState])


    
  return (
    <div>
        <h1 className="Header">Lista de pedidos activos pendientes</h1><br/>
        <LoadingList isLoading={appState.loading} orders={appState.orders}/>
        <Link to = { '/login'} style ={{margin: "30px"}} className="btn btn-outline-info my-2 my-sm-0"> Volver
        </Link>
    </div>
  )

}
