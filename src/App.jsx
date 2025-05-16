import { accordionData } from "./content";
import Accordions from "./Accordions";

function App() {
  return (
    <div>
      <div class="container">
        {accordionData.map(({ title, content }) => (
          <Accordions title={title} content={content}/>
        ))}
      </div>
    </div>
  );
}

export default App;
