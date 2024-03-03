import axios from "axios";
import { MovieGetIdResponse, MovieGetResponse } from "../models/MovieGetResponse";

const HOST: string = "http://www.omdbapi.com";
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '26d25f43';

export class MovieServise{
  
  async getMovieByname(name: string) {
    const url = HOST + `/?apikey=${apiKey}&s=${name}`;
    const response = await axios.get(url);
    if (!response.data.Search) {
        return []; // ส่งค่าว่างกลับหากไม่มีผลลัพธ์
    }
    const movies: MovieGetResponse[] = response.data.Search;
    return movies;
  }

  async getMovieById(id: string) {
    const url = HOST + `/?apikey=${apiKey}&i=${id}`;
    const response = await axios.get(url);
    if (!response.data) {
        return null; // ส่งค่า null กลับหากไม่มีผลลัพธ์
    }
    const detailM: MovieGetIdResponse = response.data;
    return detailM;
}
}