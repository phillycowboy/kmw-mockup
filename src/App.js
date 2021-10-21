
import './App.css';
// import { Button } from 'antd';
// import { Typography } from 'antd';
// import 'antd/dist/antd.css';
// const { Title } = Typography;
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { maxWidth } from '@mui/system';



function App() {
  return (
    <div className="App">
      <Box sx={{width: '100%', maxWidth: '500'}} mb={20}>
        <Typography variant="h1" component="div" gutterBottom mt={50}>Know My World</Typography>
        <Typography variant="h2" component="div" gutterBottom>Know My World</Typography>
        <Typography variant="h3" component="div" gutterBottom>Know My World</Typography>
        <Typography variant="h4" component="div" gutterBottom>Know My World</Typography>
        <Typography variant="h5" component="div" gutterBottom>Know My World</Typography>
        <Typography variant="h6" component="div" gutterBottom>Know My World</Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" component="div" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" component="div" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        </Typography>
        <Button variant="contained" display="block" gutterBottom>Hello World!</Button>
        <Button variant="button" display="block" gutterBottom>button</Button>
        <Button variant="caption" display="block" gutterBottom>button</Button>
        <Button variant="overline" display="block" gutterBottom>button</Button>

      </Box>
    </div>
  );
}
// keep playing around with this and see if you can get a landing page going for KMW

export default App;
