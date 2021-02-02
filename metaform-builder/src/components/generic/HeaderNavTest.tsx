import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import JsonPreview from '../JsonPreview';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';
//import green from "@material-ui/core/colors/red";
import ListOfComponents from '../ListOfComponents';
import Preview from '../Preview';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <>
      {value === index && (
        <>
          {children}
        </>
      )}
    </>
  );
}

interface LinkTabProps {
  label?: string;
  href?: string;
  icon? : any
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function HeaderNavTest() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab icon={<FormatAlignJustifyIcon/>}  label="Lomake" />
          <LinkTab icon={<VisibilityIcon />} label="Esikatselu"/>
          <LinkTab icon={<CodeIcon />} label="JSON"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ListOfComponents/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Preview/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JsonPreview/>
      </TabPanel>
    </div>
  );
}
