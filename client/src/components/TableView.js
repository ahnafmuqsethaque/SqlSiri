// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(studentID, firstName, lastName, age, program, grade) {
//   return { id,fname,lname, age,program, grade };
// }

// const rows = [

// createData('10',Karen, Williams, 18, Arts, 67.9),
// createData('11',Aaron, Taylor, 19, Commerce, 79.1),
// createData('6',Chase, Thomas, 15, Engineering, 49.1),
// createData('7',Alice, Williams, 12, Science, 64.5),
// createData('8',Julia, Evans, 19, Engineering, 97.4),
// createData('1',John, Smith, 19, Science, 98.2),
// createData('2',Alex, Brown, 18, Arts, 68.6),


// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
// const TableView = () => {
// // export default function BasicTable() {
//   return (
//       <div>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>StudentID</TableCell>
//             <TableCell align="right">First Name</TableCell>
//             <TableCell align="right">Last Name</TableCell>
//             <TableCell align="right">Age</TableCell>
//             <TableCell align="right">Program</TableCell>
//             <TableCell align="right">Grade</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.id}
//               </TableCell>
//               <TableCell align="right">{row.fname}</TableCell>
//               <TableCell align="right">{row.lname}</TableCell>
//               <TableCell align="right">{row.age}</TableCell>
//               <TableCell align="right">{row.program}</TableCell>
//               <TableCell align="right">{row.grade}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }

// export default TableView;