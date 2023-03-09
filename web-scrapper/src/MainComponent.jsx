import NameBlock from './NameBlock';
import NewsText from './NewsText';
import { useState } from "react";

const MainComponent = () => {
  const [news, setNews] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [currNews, setCurrentNews] = useState('');

  const getFiles = async () => {
    let response = await fetch("http://localhost:8000/")
    .then(res => res.json());
    setNews(response);
    setLoaded(true);
  }

  getFiles();

  return (
    <div>
      {loaded && <NameBlock setCurrentNews={setCurrentNews} newsArray={news}/>}
      <NewsText current={currNews}/>
    </div>
  )
}

export default MainComponent;