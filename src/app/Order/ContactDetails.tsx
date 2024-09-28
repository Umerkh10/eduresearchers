import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", 
    "Australia", "India", "China", "Japan", "South Korea", 
    "Brazil", "Mexico", "Russia", "South Africa", "Italy", 
    "Spain", "Netherlands", "Sweden", "Norway", "Denmark",
  ];

function ContactDetails() {
    return (
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
                        <Label htmlFor="topic">Your Name</Label>
                        <Input className='outline-orange-500' id="name" name='name' required />
                    </div>


                    <div className="space-y-1">
                        <Label htmlFor="email">Your Email</Label>
                        <Input className='outline-orange-500' id="name" type='email' name='email' required />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="number">Your Phone Number</Label>
                        <Input className='outline-orange-500' id="number" type='tel' name='tel' required />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="countries">Select Country</label>
                        <select
                            className=' rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="countries" defaultValue="United States" required aria-label='countries'
                        >
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
                            name="notes" type='text' required aria-label='notes'>

                        </Input>
                    </div>

                    <div className='space-y-2 '>
                        <button className='mt-5 px-8 py-3 bg-orange-500 text-zinc-50 rounded-lg hover:scale-105 transition ease-in duration-200 delay-200 font-medium'>Order Now</button>
                    </div>

                </CardContent>

            </Card>
        </div>
    )
}

export default ContactDetails