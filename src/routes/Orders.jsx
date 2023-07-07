import React, { useEffect, useState } from 'react';
import WithLoadingList from '../components/WithLoadingList';
import List from '../components/List';
import { getFetch } from '../components/FetchMethods';
import { Link } from 'react-router-dom';

export default function Orders() {
  const LoadingList = WithLoadingList(List);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFetch('api/orders')
      .then((data) => {
        setContents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="Header">Lista de pedidos activos pendientes</h1><br />
      <LoadingList isLoading={loading} orders={contents} />
      <Link to="/login" style={{ margin: "30px" }} className="btn btn-outline-info my-2 my-sm-0">Cerrar Sesion</Link>
    </div>
  );
}
