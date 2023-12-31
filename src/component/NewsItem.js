import React from "react";

const NewsItem =(props)=>{


  let  {title, description, imageurl, newsUrl, author, date} = props;
    return (
      
        <div className="my-3"> 
          <div className="card">
            <img src={!imageurl?"https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1686937591714.jpg-org" :imageurl}   
            className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
    );
  }

export default NewsItem;