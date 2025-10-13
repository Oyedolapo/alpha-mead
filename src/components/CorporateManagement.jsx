import React from "react";
import vison from '../assets/vision.jpg';

const CorporateManagement = () => {
    return (
        <div>
            <h2 className="text-5xl font-light text-gray-800 mb-6">Corporate Structures</h2>
            <div className="mt-8">
                <img
                src={vison}
                alt="Our Vision and Corporate Objectives"
                className="w-full max-w-6xl mx-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="space-y-6 text-gray-700 text-lg">
                <h3 className="text-3xl font-medium text-gray-800 mt-12">Corporate Management System</h3>
                <p>Our corporate business is managed by a team of seasoned professionals with core competencies in key areas of our business processes, such as:</p>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Organization Resources:</h3>
                    <p>This deals with the provision of adequate and quality Man, Machine and Money for our businesses to run. This process also involves sourcing for the required information, management expertise, tools and equipment that will help make the best use of our resources.</p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Lead Generation:</h3>
                    <p>We engage the market at various levels – public, private, NGOs, etc – across various industries and sectors to provide solutions and generate opportunities across our service offerings.</p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Prospect Evaluation:</h3>
                    <p>In the quest to continually succeed on all our projects, we have developed capacity along defined criteria to meet our service offerings with quality prospects.</p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Opportunity Conversion:</h3>
                    <p>Our team approaches every opportunity with strong a commitment to quality and mutually beneficial outcomes. We also expect to be treated fairly in a transparent bidding process that assures all stakeholders of a healthy, competitive environment.</p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Work Execution:</h3>
                    <p>We mobilize to every project with the best human and material resources available to help deliver effective and quality service, health and safety standards, and ultimately extend the life span of our customers' assets at the lowest life cycle cost.</p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Payment:</h3>
                    <p>To ensure that the quality and effectiveness of our services remain at the highest level, we expect that our customers will timely honour their financial commitments within agreed contract terms, so we can in turn fulfil our financial obligations to other stakeholders within our supply chain.</p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-2">Stakeholder Management:</h3>
                    <p>We understand that this is the bedrock of sustainability. Hence, we intend to continually align our business values by interacting with all our stakeholders and act accordingly on their feedback to engender mutual understanding between us and other interests in our business.</p>
                </div>
            </div>
        </div>
    )
};

export default CorporateManagement;
