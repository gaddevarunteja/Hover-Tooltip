import TooltipCustom from './components/TooltipCustom';

function App() {
  return (
    <>
      <div style={{display: "flex", justifyContent: "space-around", paddingTop: "50px"}}>
        <TooltipCustom place="top" />
        <TooltipCustom place="right" />
        <TooltipCustom place="bottom" />
        <TooltipCustom place="left" />
      </div>
    </>
  );
}

export default App;
