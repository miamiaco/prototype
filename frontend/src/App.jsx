const App = ({notes}) => {
  const imageUrl = 'https://viimeistamuruamyoten.com/wp-content/uploads/2024/02/muhammara-munakoisot.jpg';

  return (
    <div>
      <h1>MiaMia</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <p>
      <a href="https://viimeistamuruamyoten.com/muhammaralla-ja-linsseilla-taytetyt-munakoisot/">Muhammaralla ja linsseillä täytetyt munakoisot</a>
      <img src={imageUrl} alt="First recipe" />
      </p>
      
    </div>
  )
}

export default App