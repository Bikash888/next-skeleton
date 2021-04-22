import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './Hotel.module.css';
import { Card, Typography,Spin } from 'antd'

const getPostList = (): Promise<any> => {
    return axios.get("http://private-anon-28db3fcbaa-bookstore.apiary-mock.com/data/books")

}
const { Paragraph } = Typography
const Hotel = () => {
    const { data: book,isLoading } = useQuery("books", getPostList)

    return (<>
        <Head>
            <title>Image Optimization In Next js</title>
            
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <meta name="description" content="Next Js Image optimization and performance" />
            <meta name="keywords" content="next/image,optimization,next js" />
        </Head>
        <h1 className={styles.bookTop}>Book House</h1>
        <div className={styles.cardGrid}>
            {
                isLoading ? <Spin/> :book?.data.map((item, index) =>
                    <Card key={index} hoverable className={styles.bookCard}
                        cover={<Image  quality={100} alt="books-roamantic" src={item?.image} height={400} width={500} />}
                    >  <div className={styles.bookInfo}>
                            <strong>{item.title}</strong>
                            <strong className={styles.author}>author:{item.author}</strong>
                        </div>
                        <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: "read more" }}>{item.summary}</Paragraph>

                    </Card>
                )
            }
        </div>
        <div className={styles.cardGrid}>
            {
                Array.from(Array(20)).map((i, n) => <Image quality={100} key={n} alt="nature" src={`/sample.png`} height={500} width={400} />)
            }
        </div>



    </>
    )
}
export default Hotel;
