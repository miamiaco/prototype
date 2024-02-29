
const App = ({recipes}) => {

  const imageUrl = 'https://viimeistamuruamyoten.com/wp-content/uploads/2024/02/muhammara-munakoisot.jpg';

  return (
    <div>
      <h1>MiaMia</h1>
      <p>{recipes[0].name}<br/>
         {recipes[0].content}</p>
      <p>{recipes[1].name}<br/>
         {recipes[1].content}</p>
      <p>{recipes[2].name}<br/>
         {recipes[2].content}</p>
      <p>
      <a href="https://viimeistamuruamyoten.com/muhammaralla-ja-linsseilla-taytetyt-munakoisot/">Muhammaralla ja linsseillä täytetyt munakoisot</a>
      <img src={imageUrl} alt="First recipe" />
      </p>
      
    </div>
  )
}

export default App