import { Divider, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

function DeveloperDocs() {
    return (
        <div className='w-100'>
            <div className='row'>
                <div className='col-md-2 bg-light pt-3 ps-5 d-none d-md-block'>
                    <div>
                        <p className='fs-5 fw-sm'><img src='/wayapaychatLogo.png' alt='logo' width='80px' /> <span>docs</span></p>
                    </div>
                </div>
                <div className='col-md-9 pt-3'>
                    <div className='d-flex'>
                        <Input size='large' className='bg-light' placeholder='search documentation here' style={{width:'30vw'}} />
                        <a className='fs-6 mx-3 pt-2 text-secondary' href='/developer/api-reference'>Api Reference</a>
                        <a className='fs-6 mx-3 pt-2 text-secondary' href='/developer/integration'>Integrations</a>
                    </div>
                </div>
                <Divider type='horizontal' className='mt-0' />
            </div>

            <div className='row'>
                {/* side bar  */}
                <div className='col-md-2 bg-light pt-3 ps-5 d-none d-md-block'>
                    <div className='py-3'>
                        <h6 className='text-silver'>GET STARTED</h6>
                        <p><a href="#introduction" className='fs-6 btn-text-orange'>Introduction</a></p>
                    </div>
                    <div className='py-3'>
                        <h6 className='text-silver'>WAYAPAY OVERVIEW</h6>
                        <p className='lh-1'><a href="#introduction" className='fs-6 btn-text-orange'>Introduction</a></p>
                        <p className='lh-1'><a href="#web-integration" className='fs-6 btn-text-orange'>Web Integrations</a></p>
                        <p className='lh-1'><a href="#android-integration" className='fs-6 btn-text-orange'>Android Integrations</a></p>
                        <p className='lh-1'><a href="#ios-integration" className='fs-6 btn-text-orange'>IOS Integrations</a></p>
                        <p className='lh-1'><a href="#ecommerce-plugin" className='fs-6 btn-text-orange'>Ecommerce Plugins</a></p>
                        <p className='lh-1'><a href="#server-integration" className='fs-6 btn-text-orange'>Server Integration</a></p>
                    </div>
                    <div className='py-3'>
                        <h6 className='text-silver'>FEATURES</h6>
                        <p className='lh-1'><a href="#payment-link" className='fs-6 btn-text-orange'>Payment Link</a></p>
                        <p className='lh-1'><a href="#subscription" className='fs-6 btn-text-orange'>Subscriptions</a></p>
                    </div>
                </div>

                {/* main contents  */}
                <div className='col-md-8 py-4 px-lg-5'>
                    <div className='' id='introduction'>
                        <div className='text-secondary'>
                            <h5 className='text-secondary'>Payment Gateway</h5>
                            <p className='text-secondary'>Welcome to WayaPay! This guide you to:</p>
                            <ul>
                                <li>Sign up for a Wayapay Account</li>
                                <li>Choose the right product to start accepting payments from your customers</li>
                            </ul>
                        </div>
                        <Divider type='horizontal'/>
                        <div className='text-secondary' id="signup">
                            <h5 className='text-secondary'>Sign up</h5>
                            <p className='text-secondary'>To get started:</p>
                            <ol>
                                <li>Sign up for a Wayapay account. Perform the following steps: Pre-sign Up Form, Verify Email Address, Account Activation and KYC Verification.</li>
                                <li>Log into the Wayapay Dashboard and generate API keys in test mode. You can use these test API keys to integrate the Payment Gateway and simulate transactions in a sandbox environment. Activate your account and generate API keys in live mode once you are ready to accept live payments from customers.</li>
                                <li>Start accepting payments by integrating your website or app with our SDKs and plugins. Select an integration method. Or use our payment link feature to collect payment without any integration.</li>
                                <li>Enable payment methods from the Wayapay Dashboard. Know more about payment methods.</li>
                                <li>View details regarding refunds and settlements on the Wayapay Dashboard.</li>
                            </ol>
                        </div>
                        <Divider type='horizontal'/>
                        <div className='text-secondary' id='paymentmethod1'>
                            <h5 className='text-secondary'>Accept Payments Using Payment Gateway (Website or Ecommerce Store Required!)</h5>
                            <p className='text-secondary'>Integrate your website or ecommerce store with the Wayapay Payment Gateway using our range of Checkout solutions.</p>
                            <ul className="list-group my-3" id='web-integration'>
                                <li className="list-group-item list-group-item-info">Web Integration</li>
                                <li className='list-group-item px-5 text-primary'><li><a href='#'> Standard Checkout Integration</a></li></li>
                            </ul>
                            <ul className="list-group my-3 border" id='android-integration'>
                                <li className="list-group-item list-group-item-info">Mobile Integration</li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                            </ul>
                            <ul className="list-group my-3 border" id='ecommerce-plugin'>
                                <li className="list-group-item list-group-item-info">Ecommerce Pugins</li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                                <li className='list-group-item px-5 text-primary border-0'><li><a href='#'> Standard Checkout Integration</a></li></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-md-2 d-none d-md-block'>
                    <div>
                        <h6 className='text-secondary'>CONTENTS</h6>
                        <a href='#signup' className='text-silver'>#Sign Up</a><br/>
                        <a href='#paymentmethod1' className='text-silver'>#Accept Payments Using</a><br/>
                        <ul>
                            <li className='list-group border-0'><a href='#' className='text-silver'>Payment Gateway (Website or Ecommerce Store Required!)</a></li>
                        </ul>
                        <a href='#signup' className='text-silver'>#Accept Payments Using Other</a><br/>
                        <a href='#signup' className='text-silver'>#Make Payouts</a><br/>
                        <ul>
                            <li className='list-group border-0'><a href='#' className='text-silver'>Applications</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DeveloperDocs
