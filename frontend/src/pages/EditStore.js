import React from 'react'
import '../EditStore.css'

import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import { Helmet } from 'react-helmet-async';
import MobileHeader from '../component/MobileHeader';
import DesktopHeader from '../component/DesktopHeader';

function EditStore() {
  return (
    <div className='edit_profile' >
      <Helmet>
        <title>Edit Business Profile</title>
      </Helmet>
      <div className='edit_profile_desktop' >
        <DesktopHeader />
        <div className='edit_profile_desktop_con' >
            <div className='edit_profile_desktop_con_left' >

            </div>
            <div className='edit_profile_desktop_con_right' >
            <form className='edit_profile_desktop_form' >
            <div className='edit_profile_desktop_form_top' >
              <span className='edit_profile_desktop_form_top_left' >
                <EditIcon />
              </span>
              <span className='edit_profile_desktop_form_top_right' >Edit Business Profile</span>
            </div>
            <div className='edit_profile_desktop_form_center' >
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business Name</span>
                <input type='text' placeholder='Update your name' className='edit_profile_desktop_form_center_input' />
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business E-mail</span>
                <input type='text' placeholder='Update your Email' className='edit_profile_desktop_form_center_input' />
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business Type</span>
                <select className='edit_profile_desktop_form_center_input' >
                  <option value="">Select Business Category</option>
                  <option value="supllier">supllier</option>
                  <option value="soiltester">soil tester</option>
                </select>
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business City</span>
                <input type='text' placeholder='Update your City' className='edit_profile_desktop_form_center_input' />
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business Province</span>
                <select className='edit_profile_desktop_form_center_input' >
                  <option value="">Select Province</option>
                  <option value="limpopo">limpopo</option>
                  <option value="gauteng">gauteng</option>
                </select>
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business Whatsapp</span>
                <input type='text' placeholder='Update your Whatsapp' className='edit_profile_desktop_form_center_input' />
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' >Business Phone</span>
                <input type='text' placeholder='Update your PnoneNumber' className='edit_profile_desktop_form_center_input' />
              </div>
              <div className='edit_profile_desktop_form_center_input_con' >
                <span className='edit_profile_desktop_form_center_input_label' > About Business</span>
                <textarea maxlength="100" type='text' placeholder='Tell us something about your business' className='edit_profile_desktop_form_center_input' />
              </div>
              <div className='edit_profile_desktop_form_center_btn_con' >
                <button type='submit' className='edit_profile_desktop_form_center_btn' >Update Profile</button>
              </div>
            </div>
          </form>
            </div>
        </div>
      </div>
      <div className='edit_profile_mobile' >
        <MobileHeader />
        <div className='edit_profile_mobile_form_con' >
          <form className='edit_profile_mobile_form' >
            <div className='edit_profile_mobile_form_top' >

              <span className='edit_profile_mobile_form_top_left' >
                <EditIcon />
              </span>
              <span className='edit_profile_mobile_form_top_right' >Edit Business Profile</span>
            </div>
            <div className='edit_profile_mobile_form_center' >
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business Name</span>
                <input type='text' placeholder='Update your name' className='edit_profile_mobile_form_center_input' />
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business E-mail</span>
                <input type='text' placeholder='Update your Email' className='edit_profile_mobile_form_center_input' />
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business Type</span>
                <select className='edit_profile_mobile_form_center_input' >
                  <option >Business Category</option>
                  <option value="supllier">supllier</option>
                  <option value="soiltester">soil tester</option>
                </select>
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business City</span>
                <input type='text' placeholder='Update your City' className='edit_profile_mobile_form_center_input' />
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business Province</span>
                <select className='edit_profile_mobile_form_center_input' >
                  <option value="">Select Province</option>
                  <option value="limpopo">limpopo</option>
                  <option value="gauteng">gauteng</option>
                </select>
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business Whatsapp</span>
                <input type='text' placeholder='Update your Whatsapp' className='edit_profile_mobile_form_center_input' />
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >Business Phone</span>
                <input type='text' placeholder='Update your PnoneNumber' className='edit_profile_mobile_form_center_input' />
              </div>
              <div className='edit_profile_mobile_form_center_input_con' >
                <span className='edit_profile_mobile_form_center_input_label' >About Business</span>
                <textarea maxlength="100" type='text' placeholder='Tell us something about your business' className='edit_profile_mobile_form_center_input' />
              </div>
              <div className='edit_profile_mobile_form_center_btn_con' >
                <button type='submit' className='edit_profile_mobile_form_center_btn' >Update Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditStore
