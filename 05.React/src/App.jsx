import "./App.css";


function App() {


  return (
    <>
     <CardWrapper>
      <div>
        hii form 
      </div>
     </CardWrapper>
    </>
  );
}

function CardWrapper({children}){
  return(
    <div style={{border:"2px solid red",padding:20}}>
      {children}
    </div>
  )
}
export default App;
