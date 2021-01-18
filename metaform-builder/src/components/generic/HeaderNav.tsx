import React from 'react';

//Material-UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//Material-UI icons
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

function HeaderNav() {

  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<FormatAlignJustifyIcon />} label="Lomake" />
          <Tab icon={<VisibilityIcon />} label="Esikatsele" />
          <Tab icon={<CodeIcon />} label="JSON" />
        </Tabs>
      </Paper>
    </>
  );
}

export default HeaderNav;