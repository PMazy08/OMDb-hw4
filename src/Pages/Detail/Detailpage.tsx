import { Link, useParams } from "react-router-dom";
import { MovieServise } from "../../services/MovieServise";
import { MovieGetIdResponse } from "../../models/MovieGetResponse";
import { useEffect, useState } from 'react';
import "./Detailpage.css"

function DetailPage() {
  const params = useParams();
  const movieservice = new MovieServise();
  const [data, setData] = useState<MovieGetIdResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // เพิ่ม state เพื่อระบุว่ากำลังโหลดหรือไม่

  useEffect(() => {
    toDetail();
  });

  async function toDetail() {
    const res = await movieservice.getMovieById(`${params.id}`);
    setData(res);
    setLoading(false); // เมื่อโหลดเสร็จแล้วให้กำหนด loading เป็น false
  }

  return (
    <>
      {loading ? ( // ถ้ากำลังโหลด ให้แสดง Loading UI
        <div>Loading...</div>
      ) : (
        data && (
          <div className="con">
            <div className="co-in">
            <div className="btnb">
              <Link to="/">&#60; Back</Link>
            </div>
            <div className="detail">
              <div className="con-img">
                <img className="img-d" src={data.Poster} alt="" />
              </div>

              <div className="con-txt">
                <h1>{data.Title}</h1>
                <p>{data.imdbRating}</p>
                <br />
                
                <p>Actors: {data.Actors}</p>
                <p>Director: {data.Director}</p>
                <p>Writer: {data.Writer}</p>
                <br />

                <p>Genre: {data.Genre}</p>
                <p>Released: {data.Released}</p>
                <p>Runtime: {data.Runtime}</p>
                <br />

                <p>&nbsp; {data.Plot}</p>

                {/* {data.Ratings.map((rating, index) => (
                  <div key={index}>
                    <p>Source: {rating.Source}</p>
                    <p>Value: {rating.Value}</p>
                  </div>
                ))} */}

              </div>
            </div>

            </div>
          </div>
        )
      )}
    </>
  );
}

export default DetailPage;

