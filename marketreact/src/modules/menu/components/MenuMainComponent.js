import { AppBar, Toolbar ,List , ListItem, Button , makeStyles } from '@material-ui/core';
import { Link  } from "react-router-dom";
import ShowModeEnum from '../../../helpers/models/ShowModeEnum';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    list: {
      width: '100%',
      display: 'flex'
    },
    listItem: {
      width: 'auto'
    },
    linkText: {
      color:'#fff',
      textDecoration: 'none'
    },
  }));

export default function MenuMainComponent({ contracts }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <List className={classes.list}>

                        {
                        contracts.map((contract) => {

                            if (contract.showMode !== ShowModeEnum.neverShow) {

                                return (
                                    <ListItem className={classes.listItem} key={contract.menuLink}>
                                        <Link className={classes.linkText} to={contract.menuLink} >{contract.menuItemName}</Link>
                                    </ListItem>
                                )
                            }

                            return null;
                        })
                        }

                    </List>
                    <Button className={classes.menuButton} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}