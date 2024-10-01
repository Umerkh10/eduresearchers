"use client"
import React, { useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTopic } from '../TopicContext';
import { toast } from 'sonner';
import { EmailAction } from '../(backend)/action/EmailAction';
import { useRouter } from 'next/navigation'



function ContactDetails() {
    const { 
        topic, 
        selectedValue, 
        wordCount, 
        level, 
        paper, 
        quality, 
        deadline, 
        subject, 
        language, 
        source, 
        format, 
        referencing, 
        pricePerPage, 
        totalPrice, 
        contactDetails, 
        setContactDetails 
      } = useTopic(); // Access the context API
    
      const [pending, setPending] = useState(false);
      const formRef = useRef<HTMLFormElement | null>(null);
      const router = useRouter();
    
      // Handle form input for contact details
      const handleContactDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactDetails({ ...contactDetails, [name]: value });
      };
      const handleContactDetailsChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setContactDetails({ ...contactDetails, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
    
        try {
          // Submit form data via EmailAction (Nodemailer)
          const res = await EmailAction({
            topic,
            selectedValue,
            wordCount,
            level,
            paper,
            quality,
            deadline,
            subject,
            language,
            source,
            format,
            referencing,
            pricePerPage,
            totalPrice,
            contactDetails
          });
    
          setPending(false);
    
          if (res?.success) {
            formRef.current?.reset(); // Reset form
            router.push("/Thank"); // Redirect to thank you page
          } else if (res?.error) {
            toast.error(res.error); // Display error message
          }
        } catch (error) {
          setPending(false);
          toast.error("An error occurred while submitting the form.");
        }
      };
    return (
        <form ref={formRef} onSubmit={handleSubmit}>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Contact Details</CardTitle>
                    <CardDescription>
                        Now fill out your Contact Details and then proceed to confirm your order.
                    </CardDescription>
                </CardHeader>
                <CardContent  className="space-y-2 ">

                    <div className="space-y-1">
                        <Label htmlFor="name">Your Name</Label>
                        <Input className='outline-orange-500' value={contactDetails.name} 
                        onChange={handleContactDetailsChange} id="name" name='name' required />
                    </div>


                    <div className="space-y-1">
                        <Label htmlFor="email">Your Email</Label>
                        <Input className='outline-orange-500' id="name" value={contactDetails.email} 
                        onChange={handleContactDetailsChange} type='email' name='email' required />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="number">Your Phone Number</Label>
                        <Input className='outline-orange-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                         id="number" value={contactDetails.phone} onChange={handleContactDetailsChange} type='number' name='phone' required />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="countries">Select Country</label>
                        <select className=' rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="countries" value={contactDetails.country} onChange={handleContactDetailsChangeCountry} defaultValue="United States" required aria-label='countries'>

                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                  

                    <div className="space-y-2 pt-2">
                        <Label className='text-base' htmlFor="format">Additional Notes (Instructions)</Label>
                        <Input
                            className='outline-orange-500 pb-36 pt-4 rounded-lg border-[2px] w-full  px-3  text-sm md:text-base'
                            name="notes" type='text' value={contactDetails.notes} onChange={handleContactDetailsChange} required aria-label='notes'>

                        </Input>
                    </div>

                    <div className='space-y-2 '>
                        <button type="submit" disabled={pending} className='mt-5 px-8 py-3 bg-orange-500 text-zinc-50 rounded-lg hover:scale-105 transition ease-in duration-200 delay-200 font-medium'> {pending ? "Submitting..." : "Order Now"}</button>
                    </div>
                </CardContent>
            </Card>
        </div>
        </form>
    )
}

export default ContactDetails


const countries = [
    "Afghanistan", "land Islands", "Albania", "Algeria", "American Samoa", 
    "AndorrA", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Aruba", "Australia", "Austria", 
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", 
    "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", 
    "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", 
    "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", 
    "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", 
    "Congo, The Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote D\"Ivoire", "Croatia", 
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
    "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", 
    "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", 
    "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", 
    "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", 
    "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", 
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands", 
    "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", 
    "India", "Indonesia", "Iran, Islamic Republic Of", "Iraq", "Ireland", 
    "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", 
    "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Korea, Democratic People\"S Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People\"S Democratic Republic", 
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", 
    "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia, The Former Yugoslav Republic of", 
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
    "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", 
    "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", 
    "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", 
    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", 
    "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", 
    "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", 
    "Oman", "Pakistan", "Palau", "Palestinian Territory, Occupied", "Panama", 
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", 
    "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", 
    "Romania", "Russian Federation", "RWANDA", "Saint Helena", "Saint Kitts and Nevis", 
    "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
    "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", 
    "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", 
    "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", 
    "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", 
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
    "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", 
    "Venezuela", "Viet Nam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", 
    "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
];