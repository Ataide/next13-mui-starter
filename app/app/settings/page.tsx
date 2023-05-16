export default async function Page() {
  console.log("Estou no server");

  return (
    <>
      <div className="flex flex-row text-center gap-4">
        <div className="basis-1/4  border-cyan-500 border-2">01</div>
        <div className="basis-1/4 border-cyan-500 border-2">02</div>
        <div className="basis-1/2 border-cyan-500 border-2">03</div>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        P
        <tbody>
          <tr>
            <td className="text-center text-orange-700">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
