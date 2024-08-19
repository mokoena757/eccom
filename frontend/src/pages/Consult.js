import React from 'react'
import '../userpage.css'
import Rating from '../component/Rating'



//icons 
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceIcon from '@mui/icons-material/Place';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedIcon from '@mui/icons-material/Verified';
import Product from '../component/Product';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LinkIcon from '@mui/icons-material/Link';
import AddLinkIcon from '@mui/icons-material/AddLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Service from '../component/Service';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Consult() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='seller_page' >
      <div className='seller_page_desktop' >
        <div className='seller_page_desktop_con' >
          <div className='seller_page_desktop_con_left' >

          </div>
          <div className='seller_page_desktop_con_right' >
            <div className='seller_page_desktop_con_right_top' >
              <div className='seller_page_desktop_con_right_top_banner' >
                <img src='/sellerbanner.jpg' alt='' className='seller_page_desktop_con_right_top_banner_img' />
              </div>
              <div className='seller_page_desktop_con_right_top_bio' >


                <div className='seller_page_desktop_con_right_top_bio_left' >
                  <img src='/logo.png' alt='' className='seller_page_desktop_con_right_top_bio_left_logo' />
                </div>


                <div className='seller_page_desktop_con_right_top_bio_right' >
                  <div className='seller_page_desktop_con_right_top_bio_right_user_info' >
                    <span className='seller_page_desktop_con_right_top_bio_right_user_info_name' >Dr MK Consulting</span>
                    <span className='seller_page_desktop_con_right_top_bio_right_user_info_verification' ><VerifiedIcon /></span>
                  </div>
                  <div className='seller_page_desktop_con_right_top_bio_right_location' >
                    <span className='seller_page_desktop_con_right_top_bio_right_location_icon' ><PlaceIcon /></span>
                    <span className='seller_page_desktop_con_right_top_bio_right_location_province' >Limpopo</span>
                    <span className='seller_page_desktop_con_right_top_bio_right_location_city' >Polokwane</span>
                  </div>
                  <div className='seller_page_desktop_con_right_top_bio_right_rating' >
                    <Rating />
                  </div>

                </div>

              </div>

            </div>
            <div className='seller_page_desktop_con_right_bottom' >
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Products" {...a11yProps(0)} />
                    <Tab label="Expert Info" {...a11yProps(1)} />
                    <Tab label="Customer Review" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <div className='seller_page_desktop_con_right_bottom_select_details' >
                    <div className='seller_page_desktop_con_right_bottom_select_details_product_list' >
                      <Service />
                      <Service />
                    
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className='seller_page_desktop_con_right_bottom_select_details' >
                    <div className='seller_page_desktop_con_right_bottom_select_details_seller_info' >
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_con' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_name' >
                          <h3>Dr MK Consulting </h3>
                        </div>

                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_2' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_top' >
                            <h5>Location </h5>
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_bottom_2' >
                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left' >
                                <span>Business City</span>
                              </div>
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right' >
                                <span>Polokwane</span>
                              </div>
                            </div>
                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left' >
                                <span>Business Province</span>
                              </div>
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right' >
                                <span>Limpopo</span>
                              </div>
                            </div>
                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left' >
                                <span>Business Street</span>
                              </div>
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right' >
                                <span>Moletje</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_2' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_top' >
                            <h5>Working Hours</h5>
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_bottom_2' >

                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_time' >
                                <span>Mon-Friday</span>
                              </div>
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_time' >
                                  <span>08:00</span>-<span>18:00</span>
                                </div>
                            </div>

                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_time' >
                                <span>Saturday</span>
                              </div>
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_time' >
                                  <span>08:00</span>-<span>18:00</span>
                                </div>
                            </div>

                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_time' >
                                <span>Sunday</span>
                              </div>
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_time' >
                                  <span>08:00</span>-<span>18:00</span>
                                </div>
                            </div>

                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_time' >
                                <span>Public Holiday</span>
                              </div>
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_time' >
                                  <span>08:00</span>-<span>18:00</span>
                                </div>
                            </div>
                          </div>
                        </div>

                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_2' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_top' >
                            <h5>Contact Information</h5>
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_bottom_2' >

                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_contact' >
                                <span><EmailIcon /></span>
                              </div>
                              <Link to='' style={{ textDecoration: 'none', color: 'black' }} >
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_contact' >
                                  <span>lerato@gmail.com</span>
                                </div>
                              </Link>
                            </div>
                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_contact' >
                                <span><CallIcon /></span>
                              </div>
                              <Link to='' style={{ textDecoration: 'none', color: 'black' }} >
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_contact' >
                                  <span>+27547896215</span>
                                </div>
                              </Link>
                            </div>
                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_contact' >
                                <span><LinkedInIcon /></span>
                              </div>
                              <Link to='' style={{ textDecoration: 'none', color: 'black' }} >
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_contact' >
                                  <span>+27547896215</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_top' >
                          <h5>Services</h5>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <li>Nutrients Testing</li>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <li>Soil Testing</li>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_2' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_top' >
                            <h5>Fees</h5>
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_bottom_2' >

                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_time' >
                                <span>Nutrients Testing </span>
                              </div>
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_time' >
                                 <span>R200</span>
                                </div>
                            </div>
                            <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card' >
                              <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_left_time' >
                                <span>Soil Testing </span>
                              </div>
                                <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_card_right_time' >
                                 <span>R200</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_top' >
                          <h5>Qualification</h5>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <li> Student</li>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_top' >
                          <h5>University/College</h5>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <li>University Of Pretoria</li>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_top' >
                          <h5>Expert Backgroud</h5>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <p>My name is lerato mokoena i have been a farmer for 24 Years and i am based i johanesburg , i studied farming at UL agriculture</p>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_top' >
                          <h5>Philosophy</h5>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <p>Your food security is our Priority</p>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_top' >
                          <h5>Community Involvement</h5>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_seller_info_description_bottom' >
                          <p>We always participate in community outreach programs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <div className='seller_page_desktop_con_right_bottom_select_details' >
                    <div className='seller_page_desktop_con_right_bottom_select_details_review' >
                      <div className='seller_page_desktop_con_right_bottom_select_details_review_card' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top_left' >
                            <img src='logo.png' alt='' className='review_logo' />
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top_right' >
                            <span>Lerato</span>
                            <span><Rating /></span>
                            <span>20/05/2024</span>
                          </div>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_review_card_bottom' >
                          <p>This is the best shoppig experience i ever had</p>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_review_card' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top_left' >
                            <img src='logo.png' alt='' className='review_logo' />
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top_right' >
                            <span>Lerato</span>
                            <span><Rating /></span>
                            <span>20/05/2024</span>
                          </div>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_review_card_bottom' >
                          <p>This is the best shoppig experience i ever had</p>
                        </div>
                      </div>
                      <div className='seller_page_desktop_con_right_bottom_select_details_review_card' >
                        <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top' >
                          <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top_left' >
                            <img src='logo.png' alt='' className='review_logo' />
                          </div>
                          <div className='seller_page_desktop_con_right_bottom_select_details_review_card_top_right' >
                            <span>Lerato</span>
                            <span><Rating /></span>
                            <span>20/05/2024</span>
                          </div>
                        </div>
                        <div className='seller_page_desktop_con_right_bottom_select_details_review_card_bottom' >
                          <p>This is the best shoppig experience i ever had</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className='seller_page_mobile' >
        <div className='seller_page_desktop_con_right' >
          <div className='seller_page_desktop_con_right_top' >
            <div className='seller_page_desktop_con_right_top_banner' >
              <img src='/sellerbanner.jpg' alt='' className='seller_page_desktop_con_right_top_banner_img' />
            </div>
            <div className='seller_page_desktop_con_right_top_bio' >


              <div className='seller_page_desktop_con_right_top_bio_left' >
                <img src='/logo.png' alt='' className='seller_page_desktop_con_right_top_bio_left_logo' />
              </div>


              <div className='seller_page_desktop_con_right_top_bio_right' >
                <div className='seller_page_desktop_con_right_top_bio_right_user_info' >
                  <span className='seller_page_desktop_con_right_top_bio_right_user_info_name' >Leratos Fruits</span>
                  <span className='seller_page_desktop_con_right_top_bio_right_user_info_verification' ><VerifiedIcon /></span>
                </div>
                <div className='seller_page_desktop_con_right_top_bio_right_location' >
                  <span className='seller_page_desktop_con_right_top_bio_right_location_icon' ><PlaceIcon /></span>
                  <span className='seller_page_desktop_con_right_top_bio_right_location_province' >Limpopo</span>
                  <span className='seller_page_desktop_con_right_top_bio_right_location_city' >Polokwane</span>
                </div>
                <div className='seller_page_desktop_con_right_top_bio_right_rating' >
                  <Rating />
                </div>

              </div>

            </div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/' >
              <span className='seller_page_desktop_con_right_top_backarrow' >
                <ArrowBackIcon />
              </span>
            </Link>
          </div>
          <div className='seller_page_desktop_con_right_bottom' >
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Products" {...a11yProps(0)} />
                  <Tab label="Seller Info" {...a11yProps(1)} />
                  <Tab label="Customer Review" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className='seller_page_desktop_con_right_bottom_select_details' >
                  <div className='seller_page_desktop_con_right_bottom_select_details_product_list' >
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consult
