const NameBlock = ({newsArray, setCurrentNews}) => {
  return (
    <div>
      <ul>
        {newsArray.map(el => {return <li onClick={() => setCurrentNews(el[Object.keys(el)[0]])}>{Object.keys(el)[0]}</li>})}
      </ul>
    </div>
  )
}

export default NameBlock;