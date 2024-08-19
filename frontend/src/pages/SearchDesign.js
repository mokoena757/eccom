import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import Product from '../component/Product';
import MobileProduct from '../component/MobileProduct';

import '../SearchPage.css'
import DesktopHeader from '../component/DesktopHeader';
import MobileHeader from '../component/MobileHeader';




import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

//icons
import SortIcon from '@mui/icons-material/Sort';
import TuneIcon from '@mui/icons-material/Tune';
import FilterListIcon from '@mui/icons-material/FilterList';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import StoreIcon from '@mui/icons-material/Store';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function SearchPage(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className='search_page' >
      <div className='search_page_desktop' >
        <DesktopHeader />
        <div className='search_page_desktop_con' >

          <div className='search_page_desktop_left' >
            <div className='search_page_desktop_left_header' >
              <span>Filter by</span>
            </div>
            <div className='search_page_desktop_left_filter_con' >
              <div className='search_page_desktop_left_filter_top' >
                <span>Category</span>
              </div>
              <div className='search_page_desktop_left_filter_bottom' >
                <span>Fruits</span>
                <span>Vegitables</span>
              </div>
            </div>
            <div className='search_page_desktop_left_filter_con' >
              <div className='search_page_desktop_left_filter_top' >
                <span>Price Range</span>
              </div>
              <div className='search_page_desktop_left_filter_bottom' >
                <span>R20 to R50</span>
                <span>R20 to R50</span>
                <span>R20 to R50</span>
                <span>R20 to R50</span>
              </div>
            </div>
            <div className='search_page_desktop_left_filter_con' >
              <div className='search_page_desktop_left_filter_top' >
                <span>Size</span>
              </div>
              <div className='search_page_desktop_left_filter_bottom' >
                <span>5kg</span>
                <span>6kg</span>
                <span>7kg</span>
                <span>10kg</span>
              </div>
            </div>
            <div className='search_page_desktop_left_filter_con' >
              <div className='search_page_desktop_left_filter_top' >
                <span>Type</span>
              </div>
              <div className='search_page_desktop_left_filter_bottom' >
                <span>Organic</span>
                <span>inOrganic</span>
              </div>
            </div>

            <div className='search_page_desktop_left_filter_con' >
              <div className='search_page_desktop_left_filter_top' >
                <span>Rating</span>
              </div>
              <div className='search_page_desktop_left_filter_bottom' >

              </div>
            </div>
          </div>
          <div className='search_page_desktop_right' >

            <div className='search_page_desktop_right_top' >
              <div className='search_page_desktop_right_top_left' >

              </div>
              <div className='search_page_desktop_right_top_right' >

              </div>
            </div>
            <div className='search_page_desktop_right_center' >
              <Product />
              <Product />

              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <div className='search_page_desktop_right_bottom' >


            </div>
          </div>
        </div>

      </div>
      <div className='search_page_mobile' >
        <MobileHeader />
        <div className='search_page_mobile_top' >
        <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
        </div>
          <div className='search_page_mobile_centre' >
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              <MobileProduct />
              
          </div>
          <div className='search_page_mobile_bottom' >
         
          </div>
          <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
     
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
