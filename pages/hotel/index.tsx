import React from 'react';
import Image from 'next/image';

const Hotel = () => {
    const image = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr ",
            gap:"20px",
            margin:"20px"
        }}>
            
            {
                Array.from(Array(10)).map((i,n)=><img  key={n} alt="nature" src="/sample.png" height={500} width={400}/>)
            }

        </div>
    )
}
export default Hotel;
