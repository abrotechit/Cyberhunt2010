import React from 'react'
import { Divider, Input } from 'antd'

function ApiReferencePage() {
    return (
    <div className='w-100'>
        <div className='row'>
            <div className='col-md-2 bg-light pt-3 ps-5 d-none d-md-block'>
                <div>
                    <p className='fs-5 fw-sm'><img src='/wayapaychatLogo.png' alt='logo' width='80px' /> <span>API</span></p>
                </div>
            </div>
            <div className='col-md-9 pt-3'>
                <div className='d-flex'>
                    <Input size='large' className='bg-light' placeholder='search documentation here' style={{width:'30vw'}} />
                    <a className='fs-6 mx-3 pt-2 text-secondary' href='/developer/api-reference'>Api Reference</a>
                    <a className='fs-6 mx-3 pt-2 text-secondary' href='/developer/integration'>Integrations</a>
                </div>
            </div>
            <Divider type='horizontal' className='m-0' />
        </div>

        <div className='row'>
            {/* side bar  */}
            <div className='col-md-2 bg-light pt-3 ps-5 d-none d-md-block'>
                <div className='py-3'>
                    <p><a href="#introduction" className='fs-6 fw-sm text-orange'>API Reference Guide</a></p>
                </div>
                <div className='py-3'>
                    <p className='lh-1'><a href="#introduction" className='fs-6 btn-text-orange'>#API Gateway URL</a></p>
                    <p className='lh-1'><a href="#web-integration" className='fs-6 btn-text-orange'>#API Authentication</a></p>
                    <p className='lh-1'><a href="#android-integration" className='fs-6 btn-text-orange'>#Generate API Key</a></p>
                    <p className='lh-1'><a href="#ios-integration" className='fs-6 btn-text-orange'>#Errors</a></p>
                    <p className='lh-1'><a href="#ecommerce-plugin" className='fs-6 btn-text-orange'>#Error Response</a></p>
                    <p className='lh-1'><a href="#server-integration" className='fs-6 btn-text-orange'>#Entity</a></p>
                    <p className='lh-1'><a href="#server-integration" className='fs-6 btn-text-orange'>#Collection Entity</a></p>
                    <p className='lh-1'><a href="#server-integration" className='fs-6 btn-text-orange'>#Notes</a></p>
                    <p className='lh-1'><a href="#server-integration" className='fs-6 btn-text-orange'>#Query Parameters</a></p>
                    <p className='lh-1'><a href="#server-integration" className='fs-6 btn-text-orange'>#Rate Limits</a></p>
                </div>
            </div>

            {/* main contents  */}
            <div className='col-md-6 py-5 px-lg-5'>
                <div className='' id='api'>
                    <div className='text-secondary'>
                        <h5 className='text-secondary'>API Reference Guide</h5>
                        <span className='py-5 lh-sm text-secondary'>Razorpay APIs are completely RESTful and all our responses are returned in JSON.</span><br/>
                        <span className='py-5 lh-sm text-secondary'>You can use Wayapaychat APIs in two modes, Test and Live. The API key is different for each mode. Know about generating API Keys.</span>
                    </div>
                    <div className='bg-light py-2 my-3 border-start border-primary border-5'>
                        <ul className="" id='android-integration'>
                            <p className="">Integrations</p>
                            <li className='my-2'>Looking to integrate your website, ecommerce store or mobile app with Wayapaychat Payment Gateway? Find the right integration method.</li>
                            <li className='my-2'>Accept payments without a website or app using other Wayapaychat products, such as Payment Links, Payment Pages, Subscription Links, Invoices and Smart Collect.</li>
                            <li className='my-2'>For S2S integration, contact Support team with your requirements.</li>
                        </ul>
                    </div>
                </div>
                <Divider type='horizontal'/>
                <div className='text-secondary' id='apierror'>
                    <div className='text-secondary'>
                        <h5 className='text-secondary'>API Gateway URL</h5>
                        <span className='py-5 lh-sm text-secondary'>The Wayapaychat API Gateway URL is <a href='#' className='text-silver'>https://api.wayapaychat.com/v1</a>. You need to include this before each API endpoint to make API calls.</span>
                    </div>
                    <div className='bg-orange-faint py-2 my-3 border-start border-5 border-warning'>
                        <ul className="" id='android-integration'>
                            <p className="">Recommendation</p>
                            <span>While sending API requests to Wayapaychat servers, it is recommended to honor the TTL of the entries and not cache the DNS aggressively at your end. This is applicable when you are not using Wayapaychat SDKs. However, if you are using Wayapaychat SDKs, be informed that our SDKs can handle DNS caching and honor the TTLs that are set in the records.</span>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='col-md-4 bg-dark d-none d-md-block'>
                <div>
                    <img alt='error code' src='/errCode.png' width='100%' />
                </div>
            </div>


        </div>
    </div>
    )
}

export default ApiReferencePage
