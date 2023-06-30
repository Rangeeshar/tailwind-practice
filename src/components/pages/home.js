import "../../App.css";
import Layout from "../layout/layout";
import FormCard from "../templates/formcard_step1";
import FormTwo from "../templates/formcard_step2";
import JobCard from "../templates/job_card";

function Home() {
  return (
    <>
      <Layout
        outer_box_class="flex bg-white rounded-lg border-2 border-[##E6E6E6] w-[577px]"
        outer_border_class="h-[598px] bg-white rounded-lg px-[30px] py-[32px] md:w-[28rem] sm:w-auto"
      >
        <FormCard />
      </Layout>
      <Layout
        outer_box_class="flex bg-white rounded-lg border-2 border-[##E6E6E6] w-[577px]"
        outer_border_class="h-[598px] bg-white rounded-lg px-[30px] py-[32px] md:w-[28rem] sm:w-auto"
      >
        <FormTwo />
      </Layout>
      <Layout
        outer_box_class="flex bg-white rounded-lg border-2 border-[##E6E6E6] w-[830px]"
        outer_border_class="h-[320px] bg-white rounded-lg md:w-[28rem] sm:w-auto"
      >
        <JobCard />
      </Layout>
    </>
  );
}

export default Home;
