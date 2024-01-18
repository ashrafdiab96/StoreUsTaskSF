import { createSlice } from "@reduxjs/toolkit";
import {
    getBooksThunk,
    getBookThunk,
    createBookThunk,
    updateBookThunk,
    deleteBookThunk,
    writersThunk,
} from "../thunks/booksThunk";

const booksSlice = createSlice({
    name: "books",
    initialState: {
        loading: false,
        books: [],
        book: [],
        writers: [],
    },

    extraReducers: (builder) => {
        /* books */
        builder.addCase(getBooksThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBooksThunk.fulfilled, (state, action) => {
            state.books = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(getBooksThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(getBookThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBookThunk.fulfilled, (state, action) => {
            state.book = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(getBookThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createBookThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createBookThunk.fulfilled, (state, action) => {
            state.book = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(createBookThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateBookThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateBookThunk.fulfilled, (state, action) => {
            state.book = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(updateBookThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteBookThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteBookThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(deleteBookThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(writersThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(writersThunk.fulfilled, (state, action) => {
            state.writers = action.payload.data;
            state.loading = false;
        });
        builder.addCase(writersThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default booksSlice;
