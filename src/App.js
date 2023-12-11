import TooltipCustom from './components/TooltipCustom';

function App() {
  return (
    <>
      <span style={{display: "flex", justifyContent: "space-around", paddingTop: "50px"}}>
        <TooltipCustom place="top" />
        <TooltipCustom place="right" />
        <TooltipCustom place="bottom" />
        <TooltipCustom place="left" />
      </span>
    </>
  );
}

export default App;
