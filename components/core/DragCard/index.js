import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { useDrag } from 'react-dnd'

export const DragCard = ({ id, name, url }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'pet',
        item: { id, name, url },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <Box className='pet-card' ref={dragRef}
            sx={{
                width: "100px",
                margin: "12px",}}>
            <img src={url}
            alt={name}
            width={80}
            height={80}/>
            {isDragging && '😱'}
        </Box>
    )
}