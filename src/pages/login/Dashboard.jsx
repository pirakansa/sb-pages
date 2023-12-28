import styles from './Dashboard.module.scss';
import Header from '../../components/block/Header.jsx';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import jpegLogo from '../../assets/logo.jpeg';

function GetImageSizeProp() {
  const imgSizeProp = (window.innerHeight > window.innerWidth)?{width:"80%"}:{height:"80%"};
  return imgSizeProp;
}

function DashboardContent() {

  const MARGIN_WIDTH_PROPERTY = {
    maxWidth: 'xl',
    disableGutters: false,
    sx:{
      my: 2, // mergin-y
    }
  };

  const imageSize = GetImageSizeProp();

  return (
    <>
      <Header ></Header>

      <Container {...MARGIN_WIDTH_PROPERTY} >
        <Grid container >
          <Grid item xs={12} md={12} className={styles.center} >

            <img
              alt="logo"
              src={jpegLogo}
              {...imageSize}
            />

          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}