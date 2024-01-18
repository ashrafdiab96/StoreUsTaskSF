import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Home.module.scss";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getBooksThunk } from "@/redux/thunks/booksThunk";
import BookCard from "@/components/BookCard/BookCard";
import Link from "next/link";

const Main = () => {
    const dispatch = useDispatch();

    const { books } = useSelector(state => state.books);

    useEffect(() => {
        dispatch(getBooksThunk());
    }, []);

    return (
        <DefaultLayout>
            <Head>
                <title>Books</title>
            </Head>
            <div className={styles.main}>
                <div className={styles.title}>All Books</div>
                {books?.length ?
                    <div className={styles.list}>
                        {books?.map((item, index) => {
                                return (
                                    <Link href={`/books/${item?.id}`} key={index}>
                                        <BookCard
                                            className={styles.item}
                                            book={item}
                                        />
                                    </Link>
                                );
                            })
                        }
                    </div> :
                    (
                        <div className={styles.noData}>No Results</div>
                    )
                }
            </div>
        </DefaultLayout>
    );
};

export default Main;
