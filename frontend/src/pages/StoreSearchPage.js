import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Product from '../component/Product';
import MobileProduct from '../component/MobileProduct';

import '../StoreSearchPage.css'
import DesktopHeader from '../component/DesktopHeader';
import MobileHeader from '../component/MobileHeader';






export default function StoreSearchPage() {

  return (
    <div className='store_search_page' >
      <div className='store_search_page_desktop' >
        <DesktopHeader />
        <div className='store_search_page_desktop_con' >

          <div className='store_search_page_desktop_left' >
            <div className='store_search_page_desktop_left_header' >
              <span>Filter by</span>
            </div>
            <div className='store_search_page_desktop_left_filter_con' >
              <div className='store_search_page_desktop_left_filter_top' >
                <span>Category</span>
              </div>
              <div className='store_search_page_desktop_left_filter_bottom' >
                <span>Fruits</span>
                <span>Vegitables</span>
              </div>
            </div>
            <div className='store_search_page_desktop_left_filter_con' >
              <div className='store_search_page_desktop_left_filter_top' >
                <span>Price Range</span>
              </div>
              <div className='store_search_page_desktop_left_filter_bottom' >
                <span>R20 to R50</span>
                <span>R20 to R50</span>
                <span>R20 to R50</span>
                <span>R20 to R50</span>
              </div>
            </div>
            <div className='store_search_page_desktop_left_filter_con' >
              <div className='store_search_page_desktop_left_filter_top' >
                <span>Size</span>
              </div>
              <div className='store_search_page_desktop_left_filter_bottom' >
                <span>5kg</span>
                <span>6kg</span>
                <span>7kg</span>
                <span>10kg</span>
              </div>
            </div>
            <div className='store_search_page_desktop_left_filter_con' >
              <div className='store_search_page_desktop_left_filter_top' >
                <span>Type</span>
              </div>
              <div className='store_search_page_desktop_left_filter_bottom' >
                <span>Organic</span>
                <span>inOrganic</span>
              </div>
            </div>

            <div className='store_search_page_desktop_left_filter_con' >
              <div className='store_search_page_desktop_left_filter_top' >
                <span>Rating</span>
              </div>
              <div className='store_search_page_desktop_left_filter_bottom' >

              </div>
            </div>
          </div>
          <div className='store_search_page_desktop_right' >

            <div className='store_search_page_desktop_right_top' >
              <div className='store_search_page_desktop_right_top_left' >

              </div>
              <div className='store_search_page_desktop_right_top_right' >

              </div>
            </div>
            <div className='store_search_page_desktop_right_center' >
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
            <div className='store_search_page_desktop_right_bottom' >


            </div>
          </div>
        </div>

      </div>
      <div className='store_search_page_mobile' >
        <MobileHeader />
        <div className='store_search_page_mobile_top' >

        </div>
          <div className='store_search_page_mobile_centre' >
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
          <div className='store_search_page_mobile_bottom' >
         
          </div>
        
      </div>
    </div>
  );
}
