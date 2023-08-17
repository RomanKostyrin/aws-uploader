import React from "react";
import styles from "./index.module.css";
import img1 from "assets/1.jpeg";
import ImageItem from "./components/ImageItem";
import { useRequest } from "ahooks";
import { getAuthLink } from "helpers/backend_helper";
import { Link, useParams } from "react-router-dom";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Images = () => {
  const params = useParams();
  console.log(params.id);
  const { loading } = useRequest(() => getAuthLink());
  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <h1>Images from {params.id} year</h1>
      <div className={styles.imageContainer}>
        {data.map((image) => (
          <Link key={image} to={`/images/${params.id}/${image}`}>
            <ImageItem path={img1} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Images;
