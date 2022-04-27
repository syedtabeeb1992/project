import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
 
import searchSvg from "../assests/Search.svg";
import Back from "../components/Back";
const Adventure = () => {
  const [adventurenList, setAdventurenList] = useState([]);
 


  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://skunkworks.ignitesol.com:8000/books/?topic=adventure")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       
        const transformedData = data.results.map((bookData) => {
      
          let bookdata = bookData.title;
          let bookAuthor = bookData.authors[0].name;
          if (bookdata.length > 33) bookdata = bookdata.substring(0, 34);
          if (bookAuthor.length > 19) bookAuthor = bookAuthor.substring(0, 8);
          return {
            id: bookData.id,
            title: bookdata,
            link: bookData.formats["application/x-mobipocket-ebook"],
            auther: bookAuthor,
          };
        });
      
        setAdventurenList(transformedData);
      });
  };

  const debounce = (fn, delay) => {
    let timeoutID;
    return function (e) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        fn(e.target.value);
      }, delay);
    };
  };

  const onTyped = (text) => {
    if (text == "") {
      getData();
    }
    fetch("http://skunkworks.ignitesol.com:8000/books?search="+text+"")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((bookData) => {



          let bookdata = bookData.title;
          let bookAuthor = bookData.authors[0].name;
          if (bookdata.length > 33) bookdata = bookdata.substring(0, 34);
          if (bookAuthor.length > 19) bookAuthor = bookAuthor.substring(0, 8);
          return {
            id: bookData.id,
            title: bookdata,
            link: bookData.formats["application/x-mobipocket-ebook"],
            auther: bookAuthor,
          };
        });

        setAdventurenList(transformedData);
      });
  };

  return (
    <div className="">
      <div className="container  ">
        <Back title="Adventure" />
        <div className="inputboxwrapper">
          <img src={searchSvg}  alt="image"/>

          <input
            type="text"
            className="inputbox greyonebg"
            onChange={debounce((e) => {
              onTyped(e);
            }, 1000)}
          />
        </div>
      </div>

      <div className=" greyonebg">
        <div className="container booklistWrapper ">
          {adventurenList.map((listItem) => (
            <BookCard
              key={listItem.id}
              title={listItem.title}
              auther={listItem.auther}
              links={listItem.link}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adventure;
