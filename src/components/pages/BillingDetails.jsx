import React from 'react'
import '../css/BillingDetails.css'

function BillingDetails() {
  return (
    <>
    <form action="submit" class="formEle">
        <div class="discount">
            <input type="text" name="text" id="text" placeholder='Discount code or gift card'/>
            <button type="submit">Apply</button>
        </div>
        <div class="text">
            <h4>Billing Details</h4>
        </div>
        <div class="formDetails">
            <label htmlFor="firstName">First Name*
                <input type="text" name="firstName" id="firstName" />
            </label>
            <label htmlFor="lastName">Last Name*
                <input type="text" name="lastName" id="lastName" />
            </label>
        </div>
        <div class="otherDetails">
            <label htmlFor="country">Country/Region
                <select id="country">
                    <option value="" disabled selected>Select your country</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Egypt">Egypt</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Senegal">Senegal</option>
                    <option value="England">England</option>
                </select>
            </label>
            <label htmlFor="address">Address
                <input type="text" name="address" id="address" placeholder="Your Address"/>
            </label>
            <label htmlFor="state">State/County*
                <input type="text" name="state" id="state" />
            </label>
            <label htmlFor="phone">Phone*
                <input type="text" name="phone" id="phone" />
            </label>
            <label htmlFor="email">Email*
                <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="moreContent">Other notes
                <input type="text" name="moreContent" id="moreContent" />
            </label>
        </div>
    </form>
    </>
  )
}

export default BillingDetails