import { Button, TextField} from "@mui/material";
import "./Homepage.css";
import { MovieServise } from "../../services/MovieServise";
import { useRef, useState } from "react";
import { MovieGetResponse } from "../../models/MovieGetResponse";
import imov from '../../assets/movie-line.png'
import { Link } from "react-router-dom";

function HomePage() {
  const movieservice = new MovieServise();
  const inputName = useRef<HTMLInputElement>();
  const [data, setData] = useState<MovieGetResponse[]>([]);

  return (
    <>
    <div className="body">
      <div className="nav">
        <div className="c1">
          <TextField className="seach"
            inputRef={inputName}
            size="small"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputName.current) {
                  btnClick(inputName.current.value);
              }
          }}
          ></TextField>
          <Button
            variant="contained"
            onClick={async () => {
              if (inputName.current) {
                btnClick(inputName.current.value);
              }
            }}
          >
            Find Name
          </Button>
        </div>
      </div>



      <div className="c2">
          {data.length === 0 ? (
        <div style={{color: 'white'}}>
          dfgdfg
          <img src={imov} alt="" />
        </div>
        ) : (
          data.map((item, i) => (
            <div className="movieC">
              <Link to={`/detail/${item.imdbID}`}>
              <div className="grid-item">
              <img className="img" src={item.Poster} alt="" />
                  <p className="title">{i+1}. {item.Title}</p>
              </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div> 
    </>
  );

  async function btnClick(inputname: string) {
    const res = await movieservice.getMovieByname(inputname);
    console.log(res);
    setData(res);
    // console.log("Out");
  }
}

export default HomePage;
