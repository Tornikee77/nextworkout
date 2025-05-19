import Quiz from "@/features/quiz/components/Quiz";
import ReactQueryProvider from "@/lib/react-query-provider";

const Home = () => {
  return (
    <ReactQueryProvider>
      <main className="p-8">
        <Quiz />
      </main>
    </ReactQueryProvider>
  );
};

export default Home;
