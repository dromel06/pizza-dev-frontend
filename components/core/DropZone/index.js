import { Box, display, width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import { DragCard } from '../DragCard';
import Canvas from '../CanvasPizza';

const PETS = [
    { id: 1, name: 'Tomate', url: 'https://sicarfarms.com/wp-content/uploads/2021/01/Tomate-Roma.png', url2: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-09/tomate-fruta-verdura-hortaliza%C2%A9iStock.jpg" },
    { id: 2, name: 'Jamón', url: 'https://pngimg.com/uploads/jamon/jamon_PNG14.png', url2: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-09/tomate-fruta-verdura-hortaliza%C2%A9iStock.jpg" },
]

export const DropZone = () => {
    const [basket, setBasket] = useState([])
    const [{ isOver }, dropRef] = useDrop({
        accept: 'pet',
        drop: (item) => setBasket((basket) => 
                            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    useEffect(()=> {
        console.log(basket)
    },[basket])

    return (
        <Box>
            <Box className='basket' ref={dropRef} sx={{
                backgroundColor: "gray",
                width: "300px",
                minHeight: "300px",
                display: "flex",
                margin: "30px auto"                
            }}>
                <Canvas />
                {basket.map(pet => <DragCard id={pet.id} name={pet.name} url={pet.url2}/>)}
                {<Box></Box>}
            </Box>
            <Box className='pets' 
                sx={{
                    width: "100px",
                    margin: "12px",}}>
                {PETS.map(pet => <DragCard draggable id={pet.id} name={pet.name} url={pet.url} />)}
            </Box>
            
            
        </Box>
    )
}