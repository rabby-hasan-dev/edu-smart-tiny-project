
export default async function HomePage() {

  const res = await fetch('https://edu-smart-demo.onrender.com/api/v1/public/university');
  const data = await res.json();

  console.log(data)



  return (
    <div>
      <h2 className="text-red-400">This is for HomePage </h2>


    </div>
  );
}
