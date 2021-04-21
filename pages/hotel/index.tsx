import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Hotel = () => {
    const image = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (<>
        <Head>
            <title>Image Optimization In Next js</title>
            <meta name="description" content="Next Js Image optimization and performance" />
            <meta name="keywords" content="next/image,optimization,next js" />
        </Head>
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            margin: "20px"
        }}>

            {
                Array.from(Array(10)).map((i, n) => <Image quality={100} key={n} alt="nature" src="/sample.png" height={500} width={400} />)
            }

        </div>
    </>
    )
}
export default Hotel;
