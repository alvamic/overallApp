import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './Table.js';






class SimpleTable extends Component {
    state = {
        tasks: [],
      };

render(){
  return (
    <div>
    
    <Paper> 
    <Typography variant="h5">
        Shit We have To Do
    </Typography>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell variant="headline" numeric>Task</TableCell>
            <TableCell variant="headline" numeric>Description</TableCell>
            <TableCell variant="headline" numeric>Assigned To</TableCell>
            <TableCell variant="headline" numeric>Date Assigned</TableCell>
            <TableCell variant="headline" numeric>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.tasks.map(row => {
            return (
              <TableRow key={this.tasks.Id}>
                <TableCell component="th" scope="row">
                  {this.tasks.task}
                </TableCell>
                <TableCell numeric>{this.tasks.description}</TableCell>
                <TableCell numeric>{this.tasks.assignment}</TableCell>
                <TableCell numeric>{this.tasks.dateAssignment}</TableCell>
                <TableCell numeric>{this.tasks.completed}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}
 }
SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
