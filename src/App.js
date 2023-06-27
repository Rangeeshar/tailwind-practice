import './App.css';
import Layout from './components/form';
import FormCard from "./components/formcard";
import FormTwo from "./components/formcard_step2";

function App() {
  return (
    <>
  <Layout>
      <FormCard/>
  </Layout>
  <Layout>
  <FormTwo/>
  </Layout>
</>
  );
}

export default App;
