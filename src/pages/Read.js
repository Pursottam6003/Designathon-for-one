import React from "react"
import { LoadingPage } from "../Components/Loading";
import MagazineCard from "../Components/MagazineCard/";
import { useFetchCollection } from "../hooks/hooks";
import { orderBy } from "firebase/firestore";

export const ReadFC = () => {
  const {
    docs: blogs,
    fetching: loading,
  } = useFetchCollection('PastPublications', [orderBy('index', 'desc')]);

  return (
    <div className="read-component">
      <div className="container">
        <header className="page-header">
          <h1 className="heading">All releases</h1>
        </header>
        <div className="issues">
          {loading ? <LoadingPage /> : (
            <div className="grid-gallery">
              {Object.keys(blogs).map((id) => {
                const { ImageUrl, Title, Vol, Issue, Month, Year, Link, PdfUrl } = blogs[id]
                return <MagazineCard key={id} imgsrc={ImageUrl} title={Title} vol={Vol} iss={Issue} month={Month} year={Year} link={Link} pdfLink={PdfUrl} />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
