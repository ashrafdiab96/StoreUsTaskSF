import booksService from "@/services/booksService";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* books */
export const getBooksThunk = createAsyncThunk(
    "books/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await booksService.getBooks(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const getBookThunk = createAsyncThunk(
    "product/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await booksService.getBook(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createBookThunk = createAsyncThunk(
    "books/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await booksService.createBook(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateBookThunk = createAsyncThunk(
    "books/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await booksService.updateBook(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteBookThunk = createAsyncThunk(
    "books/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await booksService.deleteBook(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const writersThunk = createAsyncThunk(
    "writers/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await booksService.writers(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
