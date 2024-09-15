import React, { StrictMode, useState, useEffect } from 'react';
import ReactDom from 'react-dom/client';
import pizzaData from "./data"
import "./input.css"


const App = () => {
    return (
        <div className='bg-neutral-300 border-b-8 border-orange-400 pb-4'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return <div className='flex justify-center items-center h-20'>
        <h1 className='text-orange-500 font-bold text-3xl' style={{ textTransform: 'uppercase' }}>Fast Reactive Pizzas Restaurant</h1>
    </div>
}

function Menu() {
    return <div className='flex flex-col justify-center items-center gap-[20px]'>
        <h4 className='text-xl text-gray-600 font-medium border-t-4 border-b-4 border-gray-600 ' style={{ textTransform: 'uppercase' }}>Our Menu</h4>
        <div>
            {pizzaData.map(pizza => (
                <Pizza pizza={pizza} />
            ))}

        </div>

    </div>
}

function Footer() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        const openHour = 12;
        const closeHour = 22;
        if (hour >= openHour && hour <= closeHour) {
            setMessage(`We're currently open!`);
        } else {
            setMessage(`We're closed! We're open from 12 PM to 10 PM.`);
        }
    }, [])
    return <footer className='flex flex-col justify-center items-center h-10'>
        <div>{message}</div>
        <p>  @ {new Date().getUTCFullYear()} Fast Reactive Pizzas Restaurant. All rights reserved.</p>
    </footer>
}

function Pizza({ pizza }) {
    return <div key={pizza.id} className='flex justify-start  gap-[20px] grid-cols-3 mb-[20px]'>
        <div>
            <img className='rounded-tl-3xl rounded-br-3xl shadow-lg shadow-gray-500' width={150} height={75} src={pizza.imageUrl} alt={pizza.name} />
        </div>

        <div>
            <h2 className="font-semibold border-b-2 border-orange-500 ">{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p >Price: <span className='text-3xl'>${pizza.price} </span></p>
        </div>
    </div>



}
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<StrictMode>
    <App />
</StrictMode>);