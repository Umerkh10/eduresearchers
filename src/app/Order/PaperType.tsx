"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useTopic } from '../TopicContext';


function PaperType() {
    const totalPages = 200;
    const wordsPerPage = 250;

    // Create an array of deadline options (hours and days)
    const generateDeadlineOptions = () => {
        const options = [];
        // Add hourly options from 4 hours to 24 hours
        for (let i = 4; i <= 24; i++) {
            options.push(`${i} Hours`);
        }
        // Add daily options from 1 day to 31 days
        for (let i = 1; i <= 31; i++) {
            options.push(`${i} Days`);
        }
        return options;
    };

    const { setTopic, selectedValue, setSelectedValue,setLevel } = useTopic(); // Get the update function from context

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value); // Update the topic in context
    };
    const handleLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLevel(event.target.value); // Update the topic in context
    };
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(parseInt(event.target.value)); // Update the state with selected value
    };

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Paper Type</CardTitle>
                    <CardDescription>
                        Select your services and move to the next tab to continue filling out your form.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">

                    <div className="space-y-1">
                        <Label htmlFor="topic">Your Topic</Label>
                        <input
                            id="topic"
                            name='topic'
                            onChange={handleChange}
                            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="academic">Academic Level</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="academic" onChange={handleLevel} required aria-label='academic'>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="highschool">High School</option>
                            <option value="master">Master</option>
                            <option value="doctoral">Doctoral</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="typeofpaper">Type Of Paper</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="service" required aria-label='service'>
                            <option value="Dissertation">Dissertation</option>
                            <option value="Assignment">Assignment Writing </option>
                            <option value="Essay">Essay</option>
                            <option value="Research Paper writing">Research Paper writing</option>
                            <option value="Coursework">Coursework</option>
                            <option value="Editing">Editing </option>
                            <option value="Case Study">Case Study</option>
                            <option value="Resume / CV">Resume / CV</option>
                            <option value="Term Paper">Term Paper</option>
                            <option value="Online Exam Quizzes">Online Exam Quizzes</option>
                            <option value="Homework">Homework</option>
                            <option value="Formatting">Formatting</option>
                            <option value="Proofreading">Proofreading</option>
                            <option value="Annotated Bibliography">Annotated Bibliography</option>
                            <option value="Speech/Presentation">Speech/Presentation</option>
                            <option value="PowerPoint Presentation">PowerPoint Presentation</option>
                            <option value="Thesis">Thesis</option>
                            <option value="Thesis Proposal">Thesis Proposal</option>
                            <option value="Dissertation Chapter- Abstract">Dissertation Chapter- Abstract</option>
                            <option value="Dissertation Chapter-Introduction Chapter">Dissertation Chapter-Introduction Chapter</option>
                            <option value="Dissertation Chapter-Literature Review">Dissertation Chapter-Literature Review</option>
                            <option value="Dissertation Chapter-Methodology">Dissertation Chapter-Methodology</option>
                            <option value="Dissertation Chapter- Result">Dissertation Chapter- Result</option>
                            <option value="Dissertation Chapter-Discussion">Dissertation Chapter-Discussion</option>
                            <option value="Book Report">Book Report</option>
                            <option value="Book Review">Book Review</option>
                            <option value="Movie Review">Movie Review</option>
                            <option value="Research Proposal">Research Proposal</option>
                            <option value="Admission Sevices - Editing">Admission Sevices - Editing</option>
                            <option value="Article">Article</option>
                            <option value="Article Critique">Article Critique</option>
                            <option value="Admission Essays">Admission Essays</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Religious studies">Religious studies</option>
                            <option value="Shakespeare">Shakespeare</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Technology">Technology</option>
                            <option value="Web, High tech">Web, High tech</option>
                            <option value="Womens and gender studies">Womens and gender studies</option>
                            <option value="Zoology">Zoology</option>
                            <option value="Thesis Writing">Thesis Writing</option>
                            <option value="Custom essay writing">Custom essay writing</option>
                            <option value="College Essay writing">College Essay writing</option>
                            <option value="Write my Paper">Write my Paper</option>
                            <option value="Zoology">Zoology</option>
                            <option value="College Paper">College Paper</option>
                            <option value="Online Exam Quizzes">Online Exam Quizzes</option>
                            <option value="Resume writing">Resume writing</option>
                            <option value="Business letter writing">Business letter writing</option>
                            <option value="SEO Optimized Articles">SEO Optimized Articles</option>
                            <option value="Blog Writing">Blog Writing</option>
                            <option value="Web Content Writing">Web Content Writing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="pageCount">Number Of Pages</label>
                        <select value={selectedValue} onChange={handleSelectChange}
                            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                            name="pageCount"
                            required
                            aria-label="pageCount"
                        >
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageCount = index + 1;
                                const wordCount = pageCount * wordsPerPage;
                                return (
                                     
                                        <option key={pageCount} value={pageCount}>
                                            {`${pageCount} Page${pageCount > 1 ? 's' : ''} / ${wordCount} Words`}
                                        </option>


                                );
                            })}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="Paper Quality">Paper Quality</Label>
                        <select
                            className='rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base'
                            name="paperquality" required aria-label='PaperQuality'>
                            <option value="undergraduate">Standard Quality</option>
                            <option value="highschool">Premium Quality</option>

                        </select>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="Deadline">Deadline</label>
                        <select
                            className="rounded-lg border-[2px] w-full py-3 px-3 outline-none text-sm md:text-base"
                            name="deadline"
                            required
                            aria-label="Deadline"
                        >
                            {generateDeadlineOptions().map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default PaperType