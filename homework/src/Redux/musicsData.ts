import { createSlice } from "@reduxjs/toolkit";
import { Tracks } from "../Interface/ISpotifyResponse";

const initialState: Tracks = {
	href: "",
	items: [],
	limit: 0,
	next: "",
	offset: 0,
	previous: null,
	total: 0,
};

export const musicsDataSlice = createSlice({
	name: "musicsData",
	initialState,
	reducers: {
		saveMusics: (state, action) => {
			state.items = action.payload;
		},
	},
});
export const { saveMusics } = musicsDataSlice.actions;
export default musicsDataSlice.reducer;