import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  return (
    <tbody key={ticket._id}>
      <tr>
        <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
        <td> {ticket.product}</td>
        <td>
          <button
            className={`status-${ticket.status} btn btn-xs btn-disabled w-full text-white bg-green-500 border-0`}
          >
            {ticket.status}
          </button>
        </td>

        <td>
          <Link to={`/ticket/${ticket._id}`}>
            <button className="btn btn-xs bg-gray-700 hover:text-white md:btn-sm border-0 text-black">
              view
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}

export default TicketItem;

// <div className="table-div overflow-x-auto" key={char.id}>
// <table className="table w-full">
//   <thead onClick={handleSort}>
//     <tr>
//       <th>Charcaters</th>
//       <th>Gender</th>
//       <th>Height</th>
//     </tr>
//   </thead>

//   {filtered &&
//     filtered.map((char) => (
//       <tbody key={char.name} className="bg-white">
//         <tr>
//           <td>{char.name}</td>
//           <td>{char.gender}</td>
//           <td>{!char.height ? "none" : char.height}</td>
//         </tr>
//       </tbody>
//     ))}

//   <thead>
//     <tr>
//       <th>Total </th>
//       <th>number {filtered.length}</th>
//       <th>
//         height : <br /> {height ? height : 0}cm ({feet}ft/{inch}in)
//       </th>
//     </tr>
//   </thead>
// </table>
// </div>
