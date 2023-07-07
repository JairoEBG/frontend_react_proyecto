import React from "react";
import { ColorCode } from '../components/ColorCode';
import { Button } from 'react-bootstrap';
import { putFetch } from "./FetchMethods";
import { useState } from "react";

const List = ({ orders }) => {

    const visibleOrders = orders.slice(0, 5);//Significa que mostrara maximo 5 ordenes
    const [messageUpdate, setMessageUpdate] = useState('');
    const [refresh, setRefresh] = useState(true)
    
    const handleDelivery = async (orderId) => {
        const updatedStatus = "delivered";
        try {
            putFetch(`api/orders/${orderId}`, { status: updatedStatus })
            .then(() => {
                setMessageUpdate('Marcado como entregado correctamente')
                setRefresh(refresh);
            })
        } catch (error) {
            console.log(error);
        }
    }

    if (!orders || orders.length === 0) {
        return <h3 style ={{margin: "10px 30px"}}>No hay pedidos activos pendientes</h3>
    }else {
              
            return (        
                <ul>
                    <h3>Pedidos Activos: </h3>            
                    {visibleOrders.map((order) => {
                    
                            return (                    
                                <div>
                                    <div key={order.id}>
                                        <span>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Estado: ' : ''}</b> 
                                            <ColorCode 
                                            param={order.status} 
                                            txt = {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.status : ''}  
                                            />                                            
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Fecha: ' : ''}</b>
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.order_date : ''} 
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Cliente: ' : ''}</b> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.client.client_name : ''} 
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? 'Plato ' : ''}</b> 
                                            {order.status !== 'delivered' && order.status !== 'cancelled'
                                            ? order.dish.name : ''}
                                        </span>
                                        <span style ={{margin: "10px"}}>
                                            <b>{order.status !== 'delivered' && order.status !== 'cancelled' && (
                                                <Button variant="primary" onClick={() => handleDelivery(order.id)}>
                                                    Marcar como entregado
                                                </Button>
                                            )}
                                            </b> 
                                        </span>
                                    </div>
                                </div>
                                
                            )
                    })};
                    <div>{messageUpdate ? <p>{messageUpdate}</p> : <br />}</div>
                    <Button variant="secondary">Deshacer ùltimo cambio</Button>
                </ul>
            );
        
    }    
};
export default List;