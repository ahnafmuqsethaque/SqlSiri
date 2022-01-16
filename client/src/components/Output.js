import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Output = () => {
    return (
        <div>
        <Stack direction="column">
        <strong>The highest grade achieved is by ALBERT</strong>
            <Button variant="contained">98.5</Button>
        </Stack>
        </div>
    )
}

export default Output;
