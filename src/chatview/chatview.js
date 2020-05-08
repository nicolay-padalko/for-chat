import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class ChatViewComponent extends React.Component {

  render() {

    const { classes } = this.props;

    return(<div className={classes.content}>Ola Chat view</div>)

  }
}

export default withStyles(styles)(ChatViewComponent);