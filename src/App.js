import './App.css';
import Layout from './components/form';
import FormCard from "./components/formcard";
import FormTwo from "./components/formcard_step2";
import JobCard from './components/job_card';


function App() {
  return (
    <>
  <Layout>
      <FormCard/>
  </Layout>
  <Layout>
  <FormTwo/>
  </Layout>
  <Layout>
    <JobCard/>
  </Layout>
</>
  );
}

export default App;
