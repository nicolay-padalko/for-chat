import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';


class ChatListComponent extends React.Component {

  render() {

    const { classes } =this.props;

    if(this.props.chats.length > 0) {

      return(
        <div className={classes.root}>
          <Button variant='contained'
            fullWidth
            color='primary'
            className={classes.newChatBtn}
            onClick={this.newChat}>
              Nova Mensagem
          </Button>
          <List> 
            {
              this.props.chats.map((_chat, _index) => {
                return(
                  <div key={_index}>
                    <ListItem onClick={() => this.selectChat(_index)}
                      className={classes.ListItem}
                      selected={this.props.selectChatIndex === _index}
                      alignItems='flex-start'>
                        <ListItemAvatar>
                          <Avatar alt='Remy Sharp'>{_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]}</Avatar>
                        </ListItemAvatar>
                      <ListItemText 
                      primary={_chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                      secondary={
                        <React.Fragment>
                          <Typography component='span'
                            color='textPrimary'>
                              {_chat.messagees[_chat.messagees.length - 1].message.substring(0, 30) + ' ...'}
                          </Typography>
                        </React.Fragment>
                        }>
                      </ListItemText>
                    </ListItem>
                    <Divider></Divider>
                  </div>
                )
              })
            }
          </List>
        </div>
      
      );
    } else {
      return(
        <main className={classes.root}>
          <Button variant='contained'
          fullWidth
          color='primary'
          onClick={this.newChat}
          className={classes.newChatBtn}>
            Nova Mensagem
          </Button>
        <List></List>
      </main>
      )
    }
  }
  

  newChat = () => {
    console.log('Novo click chat');
  }
  selectChat = (index) => {
    this.props.selectChatFn(index);
  }
}

export default withStyles(styles)(ChatListComponent);