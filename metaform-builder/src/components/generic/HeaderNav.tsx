import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps, Route, Switch, BrowserRouter} from 'react-router-dom';
//Material-UI components
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//Material-UI icons
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';
import Preview from '../Preview';
import JsonPreview from '../JsonPreview';
import ListOfComponents from '../ListOfComponents';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} />
));

function HeaderNav() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <><BrowserRouter>
      <Paper className={classes.root}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          
          <Tab icon={<FormatAlignJustifyIcon />} label="Lomake"/>
          <Tab icon={<VisibilityIcon />} label="Esikatsele" />
          <Tab icon={<CodeIcon />} label="JSON" />
        </Tabs>
      </Paper>

      <Switch>
        <Route exact path="/preview/" component={Preview}></Route>  
        <Route exact path="/jsonpreview/" component={JsonPreview}></Route> 
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default HeaderNav;